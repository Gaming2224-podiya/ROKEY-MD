const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require("@whiskeysockets/baileys")

const Pino = require("pino")
const path = require("path")

// ✅ command handler path (IMPORTANT)
const commandHandler = require("./src/config/commandHandler")

async function startBot() {
  const sessionPath = path.join(__dirname, "session")

  const { state, saveCreds } = await useMultiFileAuthState(sessionPath)

  const sock = makeWASocket({
    logger: Pino({ level: "silent" }),
    printQRInTerminal: true,
    auth: state,
    browser: ["MOVIE ROCKY", "Chrome", "1.0"]
  })

  // save session
  sock.ev.on("creds.update", saveCreds)

  // connection update
  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update

    if (connection === "close") {
      const reason =
        lastDisconnect?.error?.output?.statusCode

      if (reason !== DisconnectReason.loggedOut) {
        startBot()
      } else {
        console.log("❌ Logged out. Delete session folder & rescan QR")
      }
    }

    if (connection === "open") {
      console.log("✅ MOVIE ROCKY BOT CONNECTED")
    }
  })

  // messages handler
  sock.ev.on("messages.upsert", async ({ messages }) => {
    try {
      const msg = messages[0]
      if (!msg.message) return

      await commandHandler(sock, msg)
    } catch (err) {
      console.log("Message Error:", err)
    }
  })
}

startBot()
