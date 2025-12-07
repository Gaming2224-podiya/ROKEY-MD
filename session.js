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
SESSION_ID: process.env.SESSION_ID || "ROKEY_MD@eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUtoQVVJSW9lU1lsMlhTZC91VWFNRUpPbktOZ3lkaGY2S0dsR3gvcmVYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGUzQjhCd2xnRmZyL2c3SmE0aVBFcWVmUWp5TUpXZ3ZCYWdjTjRUdXlsVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSXYyM0JJU0Z4Q2Nsa1Fscy9yTlAzN0xtaE9yVTJkcy9aZ3daYjFhcGtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQzMrOUdEWm1OS2V1N0VyZjI5OEcvUnVLcW5XZUhORXFFM3hHRHZ3WDJFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktEaktwdGdERnZUN3kwdnQ1Vm5MS2RVcUp2ZlhJNnFydkxZWFFXVTZERUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdwcFh3MEVwcEVFQU9HdlpQblVLVnRhcUo1dFoyU0pWSHhqbHBpNjFUaTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU5qUmdRdzE1NTRzcnYyUXBxMDRGZ29Rd3FTKzBoUW5vN0FKRVp0MXBVWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRS9JakFQV01JVXpCN01uZ1Yyc1dJWFFhbWVFWVNLUkxvWjlJRVFHQzN4QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1EM1k0elpraGR5Q0dWSkNaaTd3TllPMnNMZVJmeGF3V1ZaMzFuU2cxMTU4c3FlZFJjeFNyNFZRTjlSNjFIQ2dOM0cxdkU1Wlp0RTQzdkJMRW0ydEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTgsImFkdlNlY3JldEtleSI6IlJ4N2pRRDd4NlV3RjNQYUgyTkJHUHRwMlF1WmczL2VZb0NKbEFqejdnYkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllBU0lZQU1EIiwibWUiOnsiaWQiOiI5NDc3NDU5MTYzMTo0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTAzMDYyNjg5NTc1MDkxOjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMVGF0N1VHRU5IbTFNa0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0VGNzL080ckVNb2RKVUg3cXRoWDZZNjNNc0dsYjVLcmVLcGlQNGhqR0I0PSIsImFjY291bnRTaWduYXR1cmUiOiI2ODlaK2R3ZzJZcXdyLzNyaGhEc3pqVEpZMkVBNm9aTS9SLytVMjRSNjVIaW8yZUo4dUNIZmVRRHpESHRJY3NKTFBuVVB1Z1pOUXRWTVpRVEZyUCtDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYldUYzh1ZXRyd2hCdUZLcWhINFJ2Syt2UHUxbGI2QjE4eVRRb2cyclR2Zzh0UW9HTEg1b0NPZkpSay9lc093NkdNVmRXNXVudjNtM2pmM05DSEgxRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NDU5MTYzMTo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVFM0xQenVLeERLSFNWQis2cllWK21PdHpMQnBXK1NxM2lxWWorSVl4Z2UifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NTA5NDIzMywibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFaVAifQ==",
PORT: process.env.PORT || "8000"
};
