// ===============================
// ROKEY-MD | Session Manager
// ===============================

const fs = require("fs")
const path = require("path")

const SESSION_DIR = path.join(__dirname, "session")

// ===============================
// Create session folder if not exists
// ===============================
function initSession() {
  if (!fs.existsSync(SESSION_DIR)) {
    fs.mkdirSync(SESSION_DIR, { recursive: true })
    console.log("📁 session folder created")
  }
}

// ===============================
// Check session status
// ===============================
function hasSession() {
  if (!fs.existsSync(SESSION_DIR)) return false

  const files = fs.readdirSync(SESSION_DIR)
  return files.length > 0
}

// ===============================
// Clear session
// ===============================
function clearSession() {
  if (fs.existsSync(SESSION_DIR)) {
    fs.rmSync(SESSION_DIR, { recursive: true, force: true })
    console.log("🗑️ Session cleared successfully")
  }
}

// ===============================
module.exports = {
  SESSION_DIR,
  initSession,
  hasSession,
  clearSession
}
