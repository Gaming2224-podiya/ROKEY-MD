//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   ROKEY_MD 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：8.0                                                       //                                       
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : ROKEY_MD
//  * @version      : 8.0
//  * @author       : Peksha rasanjana
//  * @youtube      : https://www.youtube.com/@PODIYA_XR
//  * @description  : © ROKEY_MD, A Multi-functional WhatsApp bot created by Peksha rasanjana.
//*
//*
//Base by Peksha rasanjana
//GitHub: @MrPodiii
//WhatsApp: +94740571366
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@PODIYA_XR
//   * Created By GitHub: MrPodiii
//   * Credit To Peksha rasanjana
//   * © 2026 ROKEY_MD-V5.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ROKEY_MD@eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUloM0lPcVgveC9CdHgrR2JjTkxqZFJtazZVdWxidjM2MWZwMDNyV1owbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVhWL2ZSY3A1OWRiK3Z5TEYrVVJxcUF2d3VFZU1NU0hGVjVROFJrRFFEST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxR0xIR0lFQ2NnZldQWENidEtINk4xa0Ryb2NQNmRpdmUwWkhhcTRpMEhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5N1JIWGxoL0djZ0tDZm5DVEJDci82YUYzTzI4aUlWQWljU09uQVVJalNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFORGROVDZCVHBKRnM5VDhZRzJtNXdaQ3FRVjBLV0hpZzU0YTNlYTdqVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPWmprOWlNNTBhNkg4VUIybm83VlRLWWxyY3V5OUV5YStjQThpSW1Vbms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RIS0t3U1ZTOGZsZ3lBY0NXZVA2SGN1cUVpR3ZRYXZKTFZYZ1J2VzczQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHpQem1SL1FGRXQxUU9HWmlFL3B3UU93YS9vQ2lHSlhrL0twZUg0TUkxbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFYU25CR1BZQ01uSnBqcnBKelkyYUF6WVZMS0dpQ0ZIbEl2c05JSmpOeCtYSWYzRWR1Z1hsK2lyL0V4M09pbTM2T1BmMmRHVVUxRW5WaHVHOFp3eGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzcsImFkdlNlY3JldEtleSI6Ikk2SDh4YWxMVjlTRmlsdnZBSjhSWDJyNDRmbWgwSytwMTcwMEN1UDZrUnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllBU0lZQU1EIiwibWUiOnsiaWQiOiI5NDcyNTE5MDE2Njo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTEwMTgzNzYyMTUzNjQ1OjVAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKMkZqVHdRaE5MSnlRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzb3FFY1FzUHJSZnNxZmhPQi90d2xPLzVoMk00ZDhZVlNyQ1puY0dyYUJVPSIsImFjY291bnRTaWduYXR1cmUiOiJseC9VaVVZTncyeE41ekNYcE1BVy8vejZqYTZNL1NkczR6ODcrd1EzZWFCUW5LRkdXdGJoeGdNaHkzZ1RMN05DQTNCS2RaWllmbFVNVVI0MldiNEJDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUGlZODlsRXh6ZGljVm91MDhMaHp2dm5EMmovVEhyd09DU0tQV1I4Qlh5dWVmeUFLSG5hcTFnQUUyMkxXM0g4NVh4MWhaSVJHSUh4SW85OURtc3NyaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyNTE5MDE2Njo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmQ2S2hIRUxENjBYN0tuNFRnZjdjSlR2K1lkak9IZkdGVXF3bVozQnEyZ1YifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlBZ2dJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NDkxMTM3MiwibGFzdFByb3BIYXNoIjoiMUs0aEg0In0=",
PORT: process.env.PORT || "8000"
};
