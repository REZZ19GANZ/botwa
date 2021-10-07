global.DeveloperMode = 'true' //true Or false
global.linkGC = ['']
global.channelYT = [''] 
global.owner = ['6287755080455','994404329076','6281313726400']// Put your number here
global.mods = [''] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  zenzapi: 'https://zenzapi.xyz',

}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'mozarella1987',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'cats',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ', 
  'https://api.lolhuman.xyz': 'melXcaliph',
  'https://zenzapi.xyz': 'd5c51d68a484',
}
function getBuffer(buffer) {
return require('node-fetch')(buffer).then(a => a.buffer())
}
const choice = (array) => {
return array[Math.floor(Math.random() * array.length)]
}
global.getBuffer = getBuffer
// Sticker WM
global.packname = 'Mel-bot'
global.author = 'Bot-weah'
global.multiplier = 1000 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})