const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=nBNGiTbT#xEfWlvOtGeHpaDWMvK1VcCzvW1eBE5LknDhewE_EaJA' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94773049310' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌120363242176556269@g.us': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
FOOTER: process.env.FOOTER=== undefined ? '‌𝙱𝚈 𝙶𝙰𝚈𝙰𝙽𝚃𝙷𝙰 𝙿𝚁𝙰𝙱𝙾𝙳': process.env.FOOTER,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 2000,
PAIR: 'https://stuck-godiva-vajiratech2003-a4248d0c.koyeb.app/code?number=',       
ALIVE:  process.env.ALIVE  || '> VAJIRA MD'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
