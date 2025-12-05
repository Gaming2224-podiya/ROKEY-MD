const fs = require("fs");
const path = require("path");
if (!fs) return;

/**
 * Dynamically loads all command files from the specified directory.
 * @param {string} commandsDir - The path to the commands directory.
 * @returns {Map} - A Map of command names to their command objects.
 */
const loadCommands = (commandsDir = "../commands") => {
  const commands = new Map();
  const resolvedDir = path.resolve(__dirname, commandsDir);

  // Check if the commands directory exists
  if (!fs.existsSync(resolvedDir)) {
    console.error("[ERROR] Commands directory not found:", resolvedDir);
    return commands;
  }

  // Read all files in the commands directory
  try {
    const commandFiles = fs.readdirSync(resolvedDir).filter((file) => {
      return path.extname(file).toLowerCase() === ".js"; // Only .js files
    });

    // Load each command file
    for (const file of commandFiles) {
      try {
        const commandPath = path.join(resolvedDir, file);
        const commandsFromFile = require(commandPath); // This could be an array

        if (Array.isArray(commandsFromFile)) {
          // Add each command to the Map
          commandsFromFile.forEach((command) => {
            if (command.name && typeof command.execute === "function") {
              commands.set(command.name, command);
            } else {
              console.warn(
                `[WARN] Command in "${file}" is missing a "name" or "execute" property. Skipping.`
              );
            }
          });
        } else if (
          commandsFromFile.name &&
          typeof commandsFromFile.execute === "function"
        ) {
          // Handle single command files if needed
          commands.set(commandsFromFile.name, commandsFromFile);
        } else {
          console.warn(
            `[WARN] Command file "${file}" is missing a valid command structure. Skipping.`
          );
        }
      } catch (err) {
        console.error(`[ERROR] Failed to load command "${file}":`, err.message);
      }
    }
  } catch (err) {
    console.error("[ERROR] Failed to read commands directory:", err.message);
  }

  return commands;
};

/**
 * Handle command execution.
 * @param {Object} conn - WhatsApp connection object.
 * @param {Object} mek - Raw message object from Baileys.
 * @param {Object} m - Parsed message object (custom structure).
 * @param {Object} context - Context object containing additional information.
 */
function handleCommand(conn, mek, m, context) {
  const {
    from,
    prefix,
    quoted,
    body,
    command,
    args,
    q,
    apikey,
    baseurl,
    isGroup,
    sender,
    senderNumber,
    botNumber2,
    botNumber,
    pushname,
    isMe,
    isOwner,
    groupMetadata,
    groupName,
    participants,
    groupAdmins,
    isBotAdmins,
    isAdmins,
    handleFile,
    randomMimeType,
    mnu,
    reply,
  } = context;

  // Load the commands dynamically
  const commands = loadCommands("../commands");

  // Find the command
  const cmd = commands.get(command);

  if (!cmd) {
    reply(`❌ Command "${command}" not found.`);
    return;
  }

  // Check for owner-only commands
  if (cmd.ownerOnly && !isOwner) {
    reply("❌ This command can only be used by the owner.");
    return;
  }

  // Check for group-only commands
  if (cmd.groupOnly && !isGroup) {
    reply("❌ This command can only be used in groups.");
    return;
  }

  // Check for admin-only commands
  if (cmd.adminOnly && !isAdmins) {
    reply("❌ This command requires admin privileges.");
    return;
  }

  // Check for bot admin requirement
  if (cmd.botAdmin && !isBotAdmins) {
    reply("❌ This command requires the bot to be an admin.");
    return;
  }

  if (cmd.react) {
    conn.sendMessage(from, {
      react: {
        text: cmd.react,
        key: mek.key,
      },
    });
  }

  // Execute the command
  try {
    cmd.execute(conn, mek, args, {
      from,
      prefix,
      quoted,
      body,
      command,
      q,
      apikey,
      baseurl,
      isGroup,
      sender,
      senderNumber,
      botNumber2,
      botNumber,
      pushname,
      isMe,
      isOwner,
      groupMetadata,
      groupName,
      participants,
      groupAdmins,
      isBotAdmins,
      isAdmins,
      handleFile,
      randomMimeType,
      mnu,
      reply,
    });
  } catch (err) {
    console.error(
      `[ERROR] Failed to execute command "${command}":`,
      err.message
    );
    reply("❌ An error occurred while executing the command.");
  }
}

module.exports = { loadCommands, handleCommand };
