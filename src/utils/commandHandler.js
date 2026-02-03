module.exports = async (sock, msg) => {
  try {
    const text =
      msg.message?.conversation ||
      msg.message?.extendedTextMessage?.text ||
      ""

    if (!text.startsWith(".")) return

    const args = text.slice(1).trim().split(/ +/)
    const command = args.shift().toLowerCase()

    switch (command) {
      case "ping":
        await sock.sendMessage(msg.key.remoteJid, {
          text: "🏓 Pong!"
        }, { quoted: msg })
        break

      case "alive":
        await sock.sendMessage(msg.key.remoteJid, {
          text: "🎬 MOVIE ROCKY is alive!"
        }, { quoted: msg })
        break
    }
  } catch (e) {
    console.log("CommandHandler Error:", e)
  }
}
