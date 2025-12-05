const {
  default: makeWAconn,
  useMultiFileAuthState,
  DisconnectReason,
  getContentType,
  downloadContentFromMessage,
  fetchLatestBaileysVersion,
  Browsers,
  jidNormalizedUser,
} = require("@whiskeysockets/baileys");
const os = require("os");
const path = require("path");
const fs = require("fs");
const P = require("pino");
const FileType = require("file-type");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
ffmpeg.setFfmpegPath(ffmpegInstaller.path);
const express = require("express");
const app = express();
const por = require("./session");
const port = por.PORT;
const ownerNumber = ["94717775628"];
if (!app) return;
// Session directory
const SESSION_DIR = "./sessions";
if (!fs.existsSync(SESSION_DIR)) fs.mkdirSync(SESSION_DIR);
const sess = require("./session");
async function sessdl() {
  try {
    // Extract the Base64 encoded session data
    const base64Data = sess.SESSION_ID.split("ANJU-XPRO~")[1];
    if (!base64Data) {
      throw new Error("Invalid SESSION_ID format - missing Base64 data");
    }

    // Delete the SESSION_DIR if it exists
    if (await fs.promises.stat(SESSION_DIR).catch(() => false)) {
      await fs.promises.rm(SESSION_DIR, { recursive: true, force: true });
      console.log("✅ Existing session directory deleted.");
    }

    // Recreate the directory
    try {
      await fs.promises.mkdir(SESSION_DIR, { recursive: true });
      console.log("📁 New session directory created.");
    } catch (err) {
      console.error("❌ Error creating session directory:", err);
      return;
    }

    const credsPath = path.join(SESSION_DIR, "creds.json");

    // Decode and save the session data
    try {
      // Decode from Base64
      const decodedData = Buffer.from(base64Data, 'base64').toString('utf-8');
      
      // Parse the JSON data
      const sessionData = JSON.parse(decodedData);
      
      // Write to creds.json
      await fs.promises.writeFile(credsPath, JSON.stringify(sessionData, null, 2));
      console.log("✅ Session data decoded and saved to creds.json");
    } catch (err) {
      console.error("❌ Error processing session data:", err.message);
      
      // More specific error messages
      if (err instanceof SyntaxError) {
        console.error("Invalid JSON format in session data");
      } else if (err.message.includes("Invalid base64")) {
        console.error("Invalid Base64 encoding in session data");
      }
      throw err;
    }
  } catch (err) {
    console.error("❌ Unexpected error in sessdl:", err);
    throw err;
  }
}
//=====================================================
async function connectToWA() {
  try {
    await sessdl();
  } catch (error) {
    console.error("Error during session download:", error);
    return;
  }
  const { loadCommands, handleCommand } = require("./src/utils/commandHandler");
  const config = require("./src/config/settings.cjs");
  const getPrefix = () => config.PREFIX;
  const getWelcome = () => config.WELCOME;
  //===========================
  console.log("🔥 QUEEN ANJU XPRO is starting...");
  const { state, saveCreds } = await useMultiFileAuthState(
    __dirname + "/sessions/"
  );
  var { version } = await fetchLatestBaileysVersion();

  const conn = makeWAconn({
    logger: P({ level: "silent" }),
    printQRInTerminal: false,
    browser: Browsers.macOS("Firefox"),
    syncFullHistory: true,
    auth: state,
    version,
  });

  conn.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      if (
        lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut
      ) {
        connectToWA();
      }
    } else if (connection === "open") {
      console.log("🔥 Installing... ");
      console.log("connected to whatsapp ✅");
      // Assuming `config` contains all the settings
      let up = `
          🚀 **© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚 Connected Successfully!** ✅ 
          
          --- **🎉 Welcome to © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚!** 🎉 
          ✦» 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${require("./package.json").version}
          ✦» 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
          ✦» 𝙷𝚘𝚜𝚝 : ${os.hostname()}
          ✦» 𝙾𝚆𝙽𝙴𝚁: ${config.BOT_NUMBER}
          
          --- **Current Settings:**
          ✦» **PREFIX:** ${config.PREFIX}
          ✦» **MODE:** ${config.MODE}
          ✦» **AUTO READ STATUS:** ${
            config.AUTOREADSTATUS ? "Enabled" : "Disabled"
          }
          ✦» **READ CMD:** ${config.READCMD ? "Enabled" : "Disabled"}
          ✦» **AUTO VOICE:** ${config.AUTOVOICE ? "Enabled" : "Disabled"}
          ✦» **AUTO STICKER:** ${config.AUTOSTICKER ? "Enabled" : "Disabled"}
          ✦» **AUTO REPLY:** ${config.AUTOREPLY ? "Enabled" : "Disabled"}
          ✦» **AUTO REACT:** ${config.AUTOREACT ? "Enabled" : "Disabled"}
          ✦» **WELCOME:** ${config.WELCOME ? "Enabled" : "Disabled"}
          ✦» **ANTI BAD:** ${config.ANTIBAD ? "Enabled" : "Disabled"}
          ✦» **ANTI BOT:** ${config.ANTIBOT ? "Enabled" : "Disabled"}
          ✦» **ANTI LINK:** ${config.ANTILINK ? "Enabled" : "Disabled"}
          ✦» **ALWAYS ONLINE:** ${config.ALLWAYSONLINE ? "Enabled" : "Disabled"}
          ✦» **MOROCCO BLOCK:** ${config.MOROCCOBLOCK ? "Enabled" : "Disabled"}
          ✦» **AUTO NEWS:** ${config.AUTONEWS ? "Enabled" : "Disabled"}
          ✦» **AUTO TYPING:** ${config.AUTOTYPING ? "Enabled" : "Disabled"}
          ✦» **AUTO RECORDING:** ${
            config.AUTORECORDING ? "Enabled" : "Disabled"
          }
      
          --- Thank you for using **© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚**. 
          We're here to make your experience enjoyable and seamless. 
          If you need any help or have questions, don't hesitate to ask. 
          
          **Enjoy your time with us!** 😊`;

      conn.sendMessage(conn.user.id, {
        text: up,
        contextInfo: {
          mentionedJid: ["94717775628@s.whatsapp.net"], // specify mentioned JID(s) if any
          groupMentions: [],
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363299978149557@newsletter",
            newsletterName: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
            serverMessageId: 999,
          },
          externalAdReply: {
            title: "© 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ 💚",
            body: " ©𝐌𝐑 𝐑𝐀𝐒𝐇𝐌𝐈𝐊𝐀 𝐎𝐅𝐂 💚",
            mediaType: 1,
            sourceUrl: "https://github.com/Mrrashmika",
            thumbnailUrl:
              "https://raw.githubusercontent.com/RASH-DATA/ANJU-DATA/refs/heads/main/LOGOS/6152181515400889311.jpg", // This should match the image URL provided above
            renderLargerThumbnail: false,
            showAdAttribution: true,
          },
        },
      });
    }
  });

  //============================================================================
  const {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson,
  } = require("./src/utils/functions");
  const { sms, downloadMediaMessage } = require("./src/utils/msg");
  //==========================================================================
  conn.ev.on("messages.upsert", async (mek) => {
    if (
      config.ALLWAYSONLINE === false &&
      mek.key &&
      mek.key.remoteJid !== "status@broadcast"
    ) {
      await conn.readMessages([mek.key]); // Mark the message as read but don't send delivery receipts
    }
    mek = mek.messages[0];
    if (!mek.message) return;
    mek.message =
      getContentType(mek.message) === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    if (
      mek.key &&
      mek.key.remoteJid === "status@broadcast" &&
      config.AUTOREADSTATUS === true
    ) {
      const participant = mek.key.participant || mek.key.remoteJid;
      if (!participant) {
        console.error(
          "Participant or remoteJid is undefined. Skipping reaction."
        );
        return;
      }

      // Get the bot's user ID
      const botId =
        conn.user && conn.user.id
          ? conn.user.id.split(":")[0] + "@s.whatsapp.net"
          : null;
      if (!botId) {
        console.error("Bot's user ID not available. Skipping reaction.");
        return;
      }

      // React to the status
      await conn.sendMessage(
        mek.key.remoteJid,
        {
          react: {
            key: mek.key,
            text: `${config.EMOJI}`, // Reaction emoji
          },
        },
        {
          statusJidList: [participant, botId],
        }
      );
      await conn.readMessages([mek.key]);
    }
    const prefix = getPrefix();
    const m = sms(conn, mek);
    const type = getContentType(mek.message);
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const quoted =
      type == "extendedTextMessage" &&
      mek.message.extendedTextMessage.contextInfo != null
        ? mek.message.extendedTextMessage.contextInfo.quotedMessage || []
        : [];
    const body =
      type === "conversation"
        ? mek.message.conversation
        : type === "extendedTextMessage"
        ? mek.message.extendedTextMessage.text
        : type == "interactiveResponseMessage"
        ? mek.message.interactiveResponseMessage &&
          mek.message.interactiveResponseMessage.nativeFlowResponseMessage &&
          JSON.parse(
            mek.message.interactiveResponseMessage.nativeFlowResponseMessage
              .paramsJson
          ) &&
          JSON.parse(
            mek.message.interactiveResponseMessage.nativeFlowResponseMessage
              .paramsJson
          ).id
        : type == "templateButtonReplyMessage"
        ? mek.message.templateButtonReplyMessage &&
          mek.message.templateButtonReplyMessage.selectedId
        : type === "extendedTextMessage"
        ? mek.message.extendedTextMessage.text
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : "";
    const isCmd = body.startsWith(prefix);
    const command = isCmd
      ? body.slice(prefix.length).trim().split(" ").shift().toLowerCase()
      : "";
    const args = body.trim().split(/ +/).slice(1);
    const q = args.join(" ");
    const isGroup = from.endsWith("@g.us");
    const sender = mek.key.fromMe
      ? conn.user.id.split(":")[0] + "@s.whatsapp.net" || conn.user.id
      : mek.key.participant || mek.key.remoteJid;
    const senderNumber = sender.split("@")[0];
    const botNumber = conn.user.id.split(":")[0];
    const pushname = mek.pushName || "Sin Nombre";
    const isMe = botNumber.includes(senderNumber);
    const isOwner =
      ownerNumber.includes(senderNumber) ||
      isMe ||
      config.SUDO.includes(senderNumber);
    const botNumber2 = await jidNormalizedUser(conn.user.id);
    const groupMetadata = isGroup
      ? await conn.groupMetadata(from).catch((e) => {})
      : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const participants = isGroup ? await groupMetadata.participants : "";
    const groupAdmins = isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false;
    const isAdmins = isGroup ? groupAdmins.includes(sender) : false;
    const reply = (teks) => {
      conn.sendMessage(from, { text: teks }, { quoted: mek });
    };
    conn.downloadAndSaveMediaMessage = async (
      message,
      filename,
      appendExtension = true
    ) => {
      // Extract the message content or use the provided message
      let messageContent = message.msg ? message.msg : message;

      // Extract the MIME type of the message, default to an empty string if not available
      let mimeType = (message.msg || message).mimetype || "";

      // Determine the media type (e.g., "image", "video") by checking the MIME type or message type
      let mediaType = message.mtype
        ? message.mtype.replace(/Message/gi, "")
        : mimeType.split("/")[0];

      // Download the content of the message as a stream
      const mediaStream = await downloadContentFromMessage(
        messageContent,
        mediaType
      );

      // Initialize an empty buffer to store the downloaded data
      let mediaBuffer = Buffer.from([]);

      // Concatenate the data chunks into the buffer
      for await (const chunk of mediaStream) {
        mediaBuffer = Buffer.concat([mediaBuffer, chunk]);
      }

      // Detect the file type and extension from the buffer
      let detectedFileType = await FileType.fromBuffer(mediaBuffer);

      // Construct the file name, optionally appending the detected file extension
      let finalFileName = appendExtension
        ? `${filename}.${detectedFileType.ext}`
        : filename;

      // Save the buffer to the file
      await fs.writeFileSync(finalFileName, mediaBuffer);

      // Return the file name
      return finalFileName;
    };
   

    //======================================================================
    if (isCmd) {
      const args = body.slice(config.PREFIX.length).trim().split(/ +/);
      const commandName = isCmd
        ? body.slice(1).trim().split(" ")[0].toLowerCase()
        : false;

      // Handle the command
      handleCommand(conn, mek, m, {
        from,
        prefix,
        quoted,
        body,
        command: commandName,
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
        reply,
      });
    }

  });
}
if (!app) return;
app.get("/", (req, res) => {
  res.send("hey I am alive, Queen_Anju Is started✅");
});
app.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`)
);
setTimeout(() => {
  connectToWA();
}, 4000);
