const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")
const commandHandler = require("./src/utils/commandHandler")

async function startBot () {
  const { state, saveCreds } = await useMultiFileAuthState("./session")

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
    browser: ["MOVIE-ROCKY", "Chrome", "1.0"]
  })

  sock.ev.on("creds.update", saveCreds)

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const msg = messages[0]
    if (!msg.message) return
    await commandHandler(sock, msg)
  })

  console.log("🤖 BOT STARTED – Scan QR if shown")
}

startBot()
