// ===============================
// ROKEY-MD | Queen Entry File
// ===============================

const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion
} = require("@whiskeysockets/baileys")

const pino = require("pino")
const fs = require("fs")
const path = require("path")

// Load env if exists
try {
  require("dotenv").config()
} catch {}

// ===============================

async function startBot() {
  const sessionPath = path.join(__dirname, "session")
  const { state, saveCreds } = await useMultiFileAuthState(sessionPath)

  const { version } = await fetchLatestBaileysVersion()

  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    auth: state,
    version,
    browser: ["ROKEY-MD", "Chrome", "1.0.0"]
  })

  sock.ev.on("creds.update", saveCreds)

  // ===============================
  // Connection Update
  // ===============================
  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update

    if (connection === "close") {
      const reason =
        lastDisconnect?.error?.output?.statusCode

      if (reason !== DisconnectReason.loggedOut) {
        console.log("🔄 Reconnecting...")
        startBot()
      } else {
        console.log("❌ Logged out. Delete session folder and scan again.")
      }
    }

    if (connection === "open") {
      console.log("✅ ROKEY-MD Connected Successfully!")
    }
  })

  // ===============================
  // Messages
  // ===============================
  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message || msg.key.fromMe) return

    const from = msg.key.remoteJid
    const text =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      ""

    // Basic prefix
    const prefix = "."
    if (!text.startsWith(prefix)) return

    const command = text.slice(1).trim().toLowerCase()

    // ===============================
    // Commands
    // ===============================
    if (command === "ping") {
      await sock.sendMessage(from, { text: "🏓 Pong!" })
    }

    if (command === "alive") {
      await sock.sendMessage(from, {
        text: "🔥 ROKEY-MD is Alive & Running!"
      })
    }
  })
}

// ===============================
startBot()
