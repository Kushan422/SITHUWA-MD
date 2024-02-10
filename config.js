const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94770875468'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Kushanashvika@gmail.com'
global.github = 'https://github.com/Kushan422'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94770875468"
global.devs = '94770875468';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE9qQzFpYWxEd2F2NzhkUE5hR3RodVEwWm5HWStLUE00ajdKRTlhMXUzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiblVEMVQ0WXlsYmdhY2lGZC9RVmx0cmtiMTdpU2llam16dHNZdDBhcUZscz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QytsZmEySEVrUENadVdyOUs0S0NIbjAzdFF0c3loSVlEam03L3JTRkY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQmplOHhzMEh1S3dsa2VxUTUyT1hIUFc1L3RHQzBXTGg4UUdRTEx4alVvPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Pb3ZLNmJaZ05KMGpNeTdRK3A0UEpnYkpycnI5VTloTTMvT3dQY1hjMXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFanRtUm4zMFdtejJLd3d0Y09nc1dRS1lxSkM1SXQ1WkJ0TGxsemI3enc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtalFmQjRaYXpQYktVY0VTbUlVSi9ZMVVVcHRmTkNPejJYalh4aFJZeThPN2pvTFEva1NsbFVTRC9xcTNVeVdLVkVPY2V3MURNQUpmcDlabXFXUGlBUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIzMywiYWR2U2VjcmV0S2V5IjoiQU1nazRDWXM1NVNVRXQxb3VtOEZYUUx4bnU2TjNEK2xUWnVleEI1THZuZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoib0xhbUJyQUhSTU8zRkpEbk5tel9oZyIsInBob25lSWQiOiI5MDZhOTVjOS1mMDAzLTQxNTUtODIzYi04MmExYzY4OTA2ZmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVW1FUytoeXVCT1hmRFNlL0JQVVpWN1BueERjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsNnB1K2pvcjZST2NOUHJEWUZZdlQyTmZxMk09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLTHowdjRDRUlma21hNEdHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkF6MU5yKzFsWEJqczNpOEVrSG1vQys0R1BGOWl0dGRBdzRIQ2YvZUlOMGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlF0NDA1SXpNTlpzWFRkMm42QkFXSHdRSEs2dE8zZXZaT01nZ1kxbnh6ZndPWGdzb3dZa0c1aVlZM0RHUnNNeUk3L1JoNVl4NHR1UHVBaDdhcUNiMEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtNnRvRkIzODFLeXhhMlNMVEZud0dvTmN2NmlYMnBjOG1uVkcvU3Zqb1pGSWtuMHdOTExiZ21xbEo0TlJhcjAzL0dhZFVkNjhHSitqYUgxYWtHL1ZCUT09In0sIm1lIjp7ImlkIjoiOTQ3NzA4NzU0Njg6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCN8J2QovCdkKTwnZCuX/CdkIHwnZCo8J2QsvCfkbvinaTvuI8ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NzA4NzU0Njg6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRTTlUYS90WlZ3WTdONHZCSkI1cUF2dUJqeGZZcmJYUU1PQnduLzNpRGRIIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA3NTA0MTM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU94WSJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'NIKU MD BOT',
  packname:  process.env.PACK_NAME || 'MADE BY KUSHAN ASHWIKA',
  
  botname:   process.env.BOT_NAME === undefined ? "NIKU-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'KUSHAN ASHWIKA' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true: process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
