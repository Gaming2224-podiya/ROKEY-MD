//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 4.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpNM1RVd2RPTFZoNVZ0TGlJV3BmcmF5SmtCR3lGVmZDTUo2bHI4T1VHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEZQR25FUGd3VHBvaStBajNYMkgxak9VUXVXeVZWTnpsTnpjQ3FiZStGTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQi9QbDNaNVA4WGFhVVpJTUlBSDVtNXY3bmxhR1ptd0lYcEMxaXlLYkdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSMEhwSERuL2VRTzBxelBtM1FPMVlUbU1XbEdpd2lHc1E2ZVRWRTQvcUM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlGRXdPN0RKRWZyd1VUeG9Hb3RwSFhiVHJBazZoMDhZSzFDNk00YzBVMTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJuaThFSCt2UTZ2YXVLczBzUUdHSWpUMHkyY0hkM0RrMCthV01Tekl0aFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdMcUJncjNmSFVmYTV5T1VCNWhQeXdHbGc1TlRmMjRZWnNZOGNLbmxHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2p6bG41Ujg3bnNCWFdZMjVLaml0czdLUEFuZFNRSjVVcW84a0FOMmtDbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9MWURLa0c4WmZqdjdHb081bHh1YWM4VUhaMTRxT0xKQWJGMmpDcVpXZkVlZ0tWT3Mzc3R3WGRwWUVCNWNmQ01iRzliWkxzUWlsTGtWRWE3aTN3QWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJJYVROUlZHMHRDQVUzZE5jK01YN3RveEVPd0c3a1cyMkNBaDF5REpzTXdRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzE3Nzc1NjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjIxNTBGRjdCOUJCNDM0NkUzNTlDNkQ2RTZFMDgwNTA5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTUxNzY4Mzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InVoaWRRT3prVHZXMHZsYTV1OHBnTEEiLCJwaG9uZUlkIjoiYjQ4ZGU3NDQtYjdlOS00YmVhLTg4OWEtNmQ5NmJmMzA2YWM5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZqOTY1STcrYUlSOTg0YW9zMUY5K0U3bG5Qaz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkMrRzVUOXF6bDRLZDlXcDF4dWpYc1lrcStNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVRoaG9NRkVQKys5OFFHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMjhyQitDUnlQMHA0QjVjSVpDYzBYUXNEZ042bThjM1ZhSjV2OU5nT2FtTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSVlLZlZjdGRUSWtXYUdUbnhnWlY4enlFZ1pNYUZ6REZ0K2lUeC9iWHBaV3QxUS9UeUlBMG5xRmcvK1FKZmIvcVROU1VzWEN5Z3VlL0lyei9Vam1JRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik1acTR2WHA5dlZGc29taWkwN3hBdWV5UU9saG4vRGV2dHpzRjJPdUxMMC9CV2FURG4yNlRkQjhtcmptUFBiK1ErMmRjTlJoeU1XVTlpTlQyQ0o0TWdBPT0ifSwibWUiOnsiaWQiOiI5NDcxNzc3NTYyODoxOEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIxNDgzOTE0NjMzNjI5NzoxOEBsaWQiLCJuYW1lIjoi4bS84bS44bSwIPCdmbrwnZm48J2ZvfCdmbYg8J2agfCdmbDwnZqC8J2Zt/CdmbzwnZm48J2ZuvCdmbAifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTc3NzU2Mjg6MThAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZHZLd2Zna2NqOUtlQWVYQ0dRbk5GMExBNERlcHZITjFXaWViL1RZRG1waiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MTc2ODMzLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJsUCJ9",
PORT: process.env.PORT || "8000"
};
