const { makeInMemoryStore, processTime, Presence, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, proto } = require("@adiwajshing/baileys")
const fs = require("fs")
const { exec } = require("child_process")

vn = false // Jgn Di ubah

wm = "By PitoDev ArmStrong"
urlnye = "237672828772"
fotonye = fs.readFileSync('./pict.jpg')

function _0x22de(){const _0x3120cb=['data','floor','sbug\x20pc\x0a','info','1099805yVufLn','includes','sbug\x20hr\x20troli\x20jumlah\x0a','sbug\x20gc\x20katalog\x20jumlah\x0a','schedule','troli','sbug\x20gc\x20audio\x20jumlah\x0a','153tpjdEE','nonaktif\x20pito\x20sana','sbug','replace','keys','sbug\x20hr\x20dokumen\x20jumlah\x0a','sbug\x20gc\x20vn\x20jumlah\x0a','on/off\x20pito\x20sama?','sbug\x20pc\x2062xxx/@tag\x20audio\x20jumlah\x0a','mimetype','sendVideoAsSticker','unlinkSync','message','sudah\x20aktif\x20pito\x20sama','91360xlsjXZ','chat','sbug\x20gc\x20[di\x20group\x20ini]\x0a','sbug\x20hr\x20all\x0a\x0aPilihlah\x20Salah\x20Satu!','sbug\x20gc\x20lokasi\x20jumlah\x0a','test','afkTime','length','off','sendMessage','sendPresenceUpdate','sbug\x20gc\x20dokumen\x20jumlah\x0a','sbug\x20gc\x20gift\x20jumlah\x0a','dokumen','sbug\x20hr\x20vn\x20jumlah\x0a','limit','sbug\x20gc\x20invite\x20jumlah\x0a','invite','CATALOG','ffmpeg\x20-i\x20','Sudah\x20nonaktif','~\x20Bug\x20Active\x20~','true','downloadAndSaveMediaMessage','key','695693SSCkGH','error','trim','sbug\x20hr\x20[di\x20chat\x20ini]\x0a','sendImageAsSticker','PHOTO','sbug\x20reaksi','match','fromMe','sudah\x20nonaktif\x20pito\x20sama','readFileSync','mentionedJid','Mau\x20send\x20apaan?\x0a\x0a','seconds','sbug\x20pc\x2062xxx/@tag\x20image\x20jumlah\x0a','sbug\x20hr\x20lokasi\x20jumlah\x0a','996kHZvJj','random','node-cron','toLowerCase','sbug\x20hr\x20gift\x20jumlah\x0a','4964yNAeJp','Suksess\x20mematikan\x20auto\x20vn','sbug\x20gc\x20video\x20jumlah\x0a','0@s.whatsapp.net','sbug\x20pc\x2062xxx/@tag\x20gift\x20jumlah\x0a','sbug\x20pc\x2062xxx/@tag\x20vn\x20jumlah\x0a','sbug\x20pc\x2062xxx/@tag\x20dokumen\x20jumlah\x0a','sender','reaksi','Sudah\x20aktif','msg','audio','katalog','sbug\x20pc\x2062xxx/@tag\x20invite\x20jumlah\x0a','log','sbug\x20pc\x2062xxx/@tag\x20kontak\x20jumlah\x0a','sbug\x20hr\x20image\x20jumlah\x0a','sbug\x20hr\x20video\x20jumlah\x0a','315298jLJzZu','text','@s.whatsapp.net','Maksimal\x2010\x20detik!','Asia/Jakarta','shift','kontak','sbug\x20gc\x20all\x0a\x0aPilihlah\x20Salah\x20Satu!','sbug\x20pc\x2062xxx/@tag\x20video\x20jumlah\x0a','sbug\x20hr\x20katalog\x20jumlah\x0a','sbug\x20hr\x20invite\x20jumlah\x0a','6285235637978','conversation','video','all','Source\x20code\x20:\x20https://github.com/PitoDevID/bot-bug-md','split','download','exports','image','catch','map','Reseted\x20Limit','autovn','mtype','Berapa\x20jumlah\x20nya?','toimg','sbug\x20pc\x2062xxx/@tag\x20all\x0a\x0aPilihlah\x20Salah\x20Satu!','recording','Lu\x20siapa\x20Kontol?','Balas\x20sticker\x20dengan\x20caption\x20*','number','sbug\x20gc\x20image\x20jumlah\x0a','Success','sbug\x20gc\x20kontak\x20jumlah\x0a','Pilih\x20on/off?','Done\x20pito\x20sama','4302618CQzhRV','Balas\x20Video/Image\x20Dengan\x20Caption\x20','slice','users','sbug\x20pc\x2062xxx/@tag\x20lokasi\x20jumlah\x0a','sbug\x20gc\x20troli\x20jumlah\x0a','Reply\x20Image','00\x2012\x20*\x20*\x20*','1355431wufFTa','sbug\x20pc\x2062xxx/@tag\x20troli\x20jumlah\x0a','object','lokasi','TOLOL\x20LU\x20GOBLOK\x0aBUG\x20NYA\x20GW\x20BATASIN\x201\x20HARI\x20MAX\x2010\x20BUG\x0a\x0a*MAKANYA\x20GOBLOK\x20JANGAN\x20SPAM\x20BUG\x20MULU\x20TOLOL*\x0a\x0aBELI\x20PREMIUM\x20KE\x0a\x0a\x20wa.me/6285235637978\x0a\x0aKALO\x20GA\x20MAU\x20BELI\x20TUNGGU\x20AJA\x20AMPE\x20JAM\x2012\x20MALAM\x20NTAR\x20KE\x20RESET','sbug\x20hr\x20audio\x20jumlah\x0a','.png','quoted','prempit','Suksess\x20mengaktifkan\x20auto\x20vn','chats','gift','sbug\x20hr\x20kontak\x20jumlah\x0a','remoteJid','extendedTextMessage','sbug\x20pc\x2062xxx/@tag\x20katalog\x20jumlah\x0a'];_0x22de=function(){return _0x3120cb;};return _0x22de();}function _0x3f45ee(_0x1e5efe,_0x3d46c8){return _0x4946(_0x3d46c8-0xf1,_0x1e5efe);}function _0x4946(_0x1df43f,_0x1ee518){const _0x22de0c=_0x22de();return _0x4946=function(_0x4946c3,_0x14f897){_0x4946c3=_0x4946c3-0x1ec;let _0x1e1a36=_0x22de0c[_0x4946c3];return _0x1e1a36;},_0x4946(_0x1df43f,_0x1ee518);}(function(_0x22c4c6,_0x2bb9e8){const _0x40428d=_0x22c4c6();function _0x231395(_0x207905,_0x526cf2){return _0x4946(_0x207905-0x37d,_0x526cf2);}while(!![]){try{const _0x2397f5=-parseInt(_0x231395(0x5c0,0x601))/0x1+parseInt(_0x231395(0x5e7,0x62a))/0x2+-parseInt(_0x231395(0x5d0,0x596))/0x3*(parseInt(_0x231395(0x5d5,0x5e2))/0x4)+parseInt(_0x231395(0x592,0x5d6))/0x5+parseInt(_0x231395(0x576,0x530))/0x6+parseInt(_0x231395(0x57e,0x5b4))/0x7+parseInt(_0x231395(0x5a7,0x56c))/0x8*(parseInt(_0x231395(0x599,0x5ad))/0x9);if(_0x2397f5===_0x2bb9e8)break;else _0x40428d['push'](_0x40428d['shift']());}catch(_0x47cc3b){_0x40428d['push'](_0x40428d['shift']());}}}(_0x22de,0x5b7fd),module[_0x3f45ee(0x3a1,0x36d)]=async(_0x426bd6,_0x9f028f,_0x456b15)=>{function _0x4ad9d6(_0x1d6b8d,_0x38dd1d){return _0x3f45ee(_0x1d6b8d,_0x38dd1d- -0x27);}try{var _0x270937=_0x9f028f[_0x4ad9d6(0x2c6,0x2b6)]===_0x4ad9d6(0x38a,0x340)?_0x9f028f[_0x4ad9d6(0x334,0x2f2)][_0x4ad9d6(0x31d,0x340)]:_0x9f028f[_0x4ad9d6(0x2f7,0x2b6)]==_0x4ad9d6(0x299,0x2d9)?_0x9f028f[_0x4ad9d6(0x30b,0x2f2)][_0x4ad9d6(0x2cf,0x2d9)][_0x4ad9d6(0x32f,0x335)]:'';const _0x2d4dfa=_0x270937[_0x4ad9d6(0x312,0x30f)]()[_0x4ad9d6(0x355,0x344)](/ +/)[_0x4ad9d6(0x2d1,0x2c5)](0x1);var _0x4152e8=/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi[_0x4ad9d6(0x317,0x2f9)](_0x270937)?_0x270937[_0x4ad9d6(0x34b,0x314)](/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi):'',_0x1cfe77=_0x270937[_0x4ad9d6(0x2cf,0x2e9)](_0x4152e8,'')[_0x4ad9d6(0x2d9,0x30f)]()[_0x4ad9d6(0x37f,0x344)](/ +/)[_0x4ad9d6(0x36a,0x339)]()[_0x4ad9d6(0x2d7,0x320)]();const _0x5577c9=mek[_0x4ad9d6(0x2e9,0x30c)][_0x4ad9d6(0x2ea,0x2d8)],_0x126a31=_0x9f028f[_0x4ad9d6(0x2e6,0x2d2)]?_0x9f028f[_0x4ad9d6(0x2aa,0x2d2)]:_0x9f028f,_0x215aa8=(_0x126a31[_0x4ad9d6(0x35b,0x32c)]||_0x126a31)[_0x4ad9d6(0x2b4,0x2ef)]||'',_0x1c8c22=_0x971737=>{function _0x68d737(_0x579c1e,_0x14227d){return _0x4ad9d6(_0x14227d,_0x579c1e- -0x128);}return''+Math[_0x68d737(0x1b4,0x1ab)](Math[_0x68d737(0x1f6,0x224)]()*0x2710)+_0x971737;},_0x1f45f0=[_0x4ad9d6(0x336,0x33f)][_0x4ad9d6(0x304,0x349)](_0x5ed0dc=>_0x5ed0dc[_0x4ad9d6(0x2ca,0x2e9)](/[^0-9]/g,'')+_0x4ad9d6(0x32c,0x336))[_0x4ad9d6(0x2fd,0x2e0)](_0x9f028f[_0x4ad9d6(0x323,0x329)]);limitnya='10';if(vn){const _0x2e1e62=await _0x456b15[_0x4ad9d6(0x2ad,0x2d5)][_0x4ad9d6(0x37c,0x342)]()[_0x4ad9d6(0x316,0x349)](_0x1c6d08=>_0x1c6d08['id']);if(_0x9f028f[_0x4ad9d6(0x2c6,0x2f2)]&&_0x9f028f){if(vn===![])return;for(let _0x582c89 of _0x2e1e62){_0x426bd6[_0x4ad9d6(0x2be,0x2fe)](_0x4ad9d6(0x274,0x2ba),_0x582c89),setTimeout(()=>{function _0x2a0be6(_0x7d7265,_0x120569){return _0x4ad9d6(_0x7d7265,_0x120569-0x2c9);}_0x426bd6[_0x2a0be6(0x5b6,0x5c7)](_0x2a0be6(0x563,0x583),_0x582c89);},0x61a8),setTimeout(()=>{function _0x3620ba(_0x3cb570,_0x4051e3){return _0x4ad9d6(_0x4051e3,_0x3cb570- -0x1cb);}_0x426bd6[_0x3620ba(0x133,0x110)](_0x3620ba(0xef,0xbf),_0x582c89);},0xc350),setTimeout(()=>{function _0x29ac4(_0x41e6c3,_0x4e6525){return _0x4ad9d6(_0x41e6c3,_0x4e6525- -0x447);}_0x426bd6[_0x29ac4(-0x10a,-0x149)](_0x29ac4(-0x186,-0x18d),_0x582c89);},0x124f8);}}}try{let _0x31d377=_0x46b6ab=>typeof _0x46b6ab===_0x4ad9d6(0x2b7,0x2bd)&&!isNaN(_0x46b6ab),_0x16e596=global['db'][_0x4ad9d6(0x292,0x2db)][_0x4ad9d6(0x304,0x2c6)][_0x9f028f[_0x4ad9d6(0x340,0x329)]];limitUser=limitnya;if(typeof _0x16e596!==_0x4ad9d6(0x2cd,0x2cd))global['db'][_0x4ad9d6(0x2a3,0x2db)][_0x4ad9d6(0x2ae,0x2c6)][_0x9f028f[_0x4ad9d6(0x301,0x329)]]={};if(_0x16e596){if(!_0x31d377(_0x16e596[_0x4ad9d6(0x2cf,0x2fa)]))_0x16e596[_0x4ad9d6(0x31f,0x2fa)]=-0x1;if(!_0x31d377(_0x16e596[_0x4ad9d6(0x2fd,0x303)]))_0x16e596[_0x4ad9d6(0x31e,0x303)]=limitUser;}else global['db'][_0x4ad9d6(0x321,0x2db)][_0x4ad9d6(0x2f6,0x2c6)][_0x9f028f[_0x4ad9d6(0x310,0x329)]]={'afkTime':-0x1,'limit':limitUser};}catch(_0x3d57ea){console[_0x4ad9d6(0x2d2,0x30e)](_0x3d57ea);}let _0x2eaca4=require(_0x4ad9d6(0x322,0x31f));_0x2eaca4[_0x4ad9d6(0x2b8,0x2e3)](_0x4ad9d6(0x28b,0x2ca),()=>{let _0x4d6a5f=Object[_0x5ba232(0x4fe,0x51e)](global['db'][_0x5ba232(0x4ef,0x4c3)][_0x5ba232(0x4da,0x4fc)]);limitUser=limitnya;function _0x5ba232(_0x46fa50,_0x6b775d){return _0x4ad9d6(_0x6b775d,_0x46fa50-0x214);}for(let _0x5e5898 of _0x4d6a5f)global['db'][_0x5ba232(0x4ef,0x4f3)][_0x5ba232(0x4da,0x496)][_0x5e5898][_0x5ba232(0x517,0x523)]=limitUser;console[_0x5ba232(0x544,0x542)](_0x5ba232(0x55e,0x57d));},{'scheduled':!![],'timezone':_0x4ad9d6(0x2f4,0x338)});const _0x1ad443=fotonye,_0x5d6518={'key':{'fromMe':![],'participant':_0x4ad9d6(0x2f4,0x325),'remoteJid':_0x4ad9d6(0x34f,0x325)},'message':{'orderMessage':{'itemCount':0x0,'surface':_0x4ad9d6(0x30c,0x306)}}},_0x374cb8=(_0x4a546c,_0x5904fd,_0x121724=_0x5d6518)=>_0x426bd6[_0x4ad9d6(0x330,0x2fd)](_0x4a546c,{'text':_0x5904fd,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'externalAdReply':{'title':wm,'previewType':_0x4ad9d6(0x32d,0x312),'thumbnail':_0x1ad443,'sourceUrl':urlnye}}},{'quoted':_0x121724});if(db[_0x4ad9d6(0x2a7,0x2db)][_0x4ad9d6(0x286,0x2c6)][_0x9f028f[_0x4ad9d6(0x35e,0x329)]][_0x4ad9d6(0x303,0x2fa)]>-0x1){let _0x409549=global['db'][_0x4ad9d6(0x2e0,0x2db)][_0x4ad9d6(0x2fb,0x2c6)][_0x9f028f[_0x4ad9d6(0x2e6,0x329)]];_0x374cb8(_0x9f028f[_0x4ad9d6(0x30d,0x2f5)],wm,_0x9f028f),_0x409549[_0x4ad9d6(0x2ba,0x2fa)]=-0x1;}switch(_0x1cfe77){case _0x4ad9d6(0x314,0x2e8):{if(!_0x9f028f[_0x4ad9d6(0x330,0x30c)][_0x4ad9d6(0x2d9,0x315)])return;if(isPrem===![]&&global['db'][_0x4ad9d6(0x2ac,0x2db)][_0x4ad9d6(0x2c1,0x2c6)][_0x9f028f[_0x4ad9d6(0x348,0x329)]][_0x4ad9d6(0x2cd,0x303)]<0x1)return _0x426bd6[_0x4ad9d6(0x320,0x2fd)](_0x9f028f[_0x4ad9d6(0x323,0x2f5)],{'text':_0x4ad9d6(0x2dd,0x2cf)});if(_0x2d4dfa[0x0]===_0x4ad9d6(0x302,0x32a)){let _0x47274b=global['db'][_0x4ad9d6(0x2c4,0x2db)][_0x4ad9d6(0x2d6,0x2c6)][_0x9f028f[_0x4ad9d6(0x34b,0x329)]];_0x47274b[_0x4ad9d6(0x2b5,0x2fa)]=+new Date(),console[_0x4ad9d6(0x2fa,0x330)](_0x4ad9d6(0x2fc,0x309)),db[_0x4ad9d6(0x2df,0x2db)][_0x4ad9d6(0x2cc,0x2c6)][_0x9f028f[_0x4ad9d6(0x357,0x329)]][_0x4ad9d6(0x2db,0x303)]-=0x1;}const _0x184d4a=(_0x26fbe2,_0x158fe8,_0x780e10=_0x5d6518)=>_0x426bd6[_0x4ad9d6(0x2b2,0x2fd)](_0x26fbe2,{'text':_0x158fe8,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'externalAdReply':{'title':wm,'previewType':_0x4ad9d6(0x339,0x312),'thumbnail':_0x1ad443,'sourceUrl':urlnye}}},{'quoted':_0x780e10});if(_0x2d4dfa[_0x4ad9d6(0x2e0,0x2fb)]<0x1)return _0x184d4a(_0x9f028f[_0x4ad9d6(0x2e1,0x2f5)],_0x4ad9d6(0x324,0x319)+_0x4152e8+_0x4ad9d6(0x2d5,0x310)+_0x4152e8+_0x4ad9d6(0x2f6,0x2f6)+_0x4152e8+_0x4ad9d6(0x2b1,0x2dd)+_0x4152e8+_0x4ad9d6(0x33a,0x313));let _0x3a6acd=_0x9f028f[_0x4ad9d6(0x2e2,0x318)][0x0]?_0x9f028f[_0x4ad9d6(0x33b,0x318)][0x0]:_0x9f028f[_0x4ad9d6(0x294,0x2d2)]?_0x9f028f[_0x4ad9d6(0x2df,0x2d2)][_0x4ad9d6(0x300,0x329)]:_0x2d4dfa[0x1][_0x4ad9d6(0x2d3,0x2e9)](/ /g,'')+_0x4ad9d6(0x32c,0x336);var _0x349e2c={'key':{'fromMe':![],'participant':_0x4ad9d6(0x337,0x325),...{'remoteJid':''}},'message':{'imageMessage':{'caption':wm}}},_0x184cd6={'key':{'fromMe':![],'participant':_0x4ad9d6(0x30e,0x325),...{'remoteJid':''}},'message':{'orderMessage':{'itemCount':0x3b9ac9ff,'surface':_0x4ad9d6(0x2fd,0x306)}}},_0xfa9b20={'key':{'fromMe':![],'participant':_0x4ad9d6(0x36e,0x325),...{'remoteJid':''}},'message':{'productMessage':{}}},_0x58ab8f={'key':{'fromMe':![],'participant':_0x4ad9d6(0x35e,0x325),...{'remoteJid':''}},'message':{'locationMessage':{}}},_0x5a4fc7={'key':{'fromMe':![],'participant':_0x4ad9d6(0x36d,0x325),...{'remoteJid':''}},'message':{'documentMessage':{'title':wm}}},_0x553b29={'key':{'fromMe':![],'participant':_0x4ad9d6(0x34f,0x325),...{'remoteJid':''}},'message':{'audioMessage':{'seconds':0x3b9ac9ff,'ptt':_0x4ad9d6(0x2d2,0x30a)}}},_0x345cf3={'key':{'fromMe':![],'participant':_0x4ad9d6(0x366,0x325),...{'remoteJid':''}},'message':{'audioMessage':{'seconds':0x3b9ac9ff}}},_0x2891d5={'key':{'fromMe':![],'participant':_0x4ad9d6(0x2de,0x325),...{'remoteJid':''}},'message':{'videoMessage':{'caption':wm,'gifPlayback':!![],'seconds':0x3b9ac9ff}}},_0x29e76d={'key':{'fromMe':![],'participant':_0x4ad9d6(0x2e5,0x325),...{'remoteJid':''}},'message':{'videoMessage':{'caption':wm,'seconds':0x3b9ac9ff}}},_0x555508={'key':{'fromMe':![],'participant':_0x4ad9d6(0x36b,0x325),...{'remoteJid':''}},'message':{'groupInviteMessage':{'caption':wm}}},_0x2d0eb0={'key':{'fromMe':![],'participant':_0x4ad9d6(0x340,0x325),...{'remoteJid':''}},'message':{'contactMessage':{'displayName':wm}}};if(_0x2d4dfa[0x0]==='hr'){if(_0x2d4dfa[_0x4ad9d6(0x311,0x2fb)]<0x2)return _0x184d4a(_0x9f028f[_0x4ad9d6(0x2e6,0x2f5)],_0x4152e8+_0x4ad9d6(0x35a,0x332)+_0x4152e8+_0x4ad9d6(0x34f,0x321)+_0x4152e8+_0x4ad9d6(0x336,0x333)+_0x4152e8+_0x4ad9d6(0x32f,0x302)+_0x4152e8+_0x4ad9d6(0x2a5,0x2d0)+_0x4152e8+_0x4ad9d6(0x33c,0x33e)+_0x4152e8+_0x4ad9d6(0x2ba,0x2d7)+_0x4152e8+_0x4ad9d6(0x2f9,0x2e1)+_0x4152e8+_0x4ad9d6(0x363,0x33d)+_0x4152e8+_0x4ad9d6(0x2e6,0x31c)+_0x4152e8+_0x4ad9d6(0x2c6,0x2eb)+_0x4152e8+_0x4ad9d6(0x2b2,0x2f7));if(_0x2d4dfa[_0x4ad9d6(0x334,0x2fb)]<0x3)return _0x184d4a(_0x9f028f[_0x4ad9d6(0x2fe,0x2f5)],_0x4ad9d6(0x297,0x2b7));if(_0x2d4dfa[0x1]===_0x4ad9d6(0x376,0x347)){for(let _0x39435=0x0;_0x39435<_0x2d4dfa[0x2];_0x39435++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x30f,0x2f5)],wm,_0x349e2c);}db[_0x4ad9d6(0x2ec,0x2db)][_0x4ad9d6(0x307,0x2c6)][_0x9f028f[_0x4ad9d6(0x330,0x329)]][_0x4ad9d6(0x2fb,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x328,0x2fd)](_0x9f028f[_0x4ad9d6(0x2eb,0x2f5)],{'text':_0x4ad9d6(0x309,0x2bf)})[_0x4ad9d6(0x30e,0x348)](_0x103db6=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2b7,0x2f5)],jsonformat(_0x103db6)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x326,0x2e4)){for(let _0x508d6b=0x0;_0x508d6b<_0x2d4dfa[0x2];_0x508d6b++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2f7,0x2f5)],wm,_0x184cd6);}db[_0x4ad9d6(0x300,0x2db)][_0x4ad9d6(0x310,0x2c6)][_0x9f028f[_0x4ad9d6(0x2e8,0x329)]][_0x4ad9d6(0x2f6,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x301,0x2fd)](_0x9f028f[_0x4ad9d6(0x2bd,0x2f5)],{'text':_0x4ad9d6(0x2ee,0x2bf)})[_0x4ad9d6(0x388,0x348)](_0x443379=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x30b,0x2f5)],jsonformat(_0x443379)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x343,0x32e)){for(let _0x4da677=0x0;_0x4da677<_0x2d4dfa[0x2];_0x4da677++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2d5,0x2f5)],wm,_0xfa9b20);}db[_0x4ad9d6(0x2ca,0x2db)][_0x4ad9d6(0x30f,0x2c6)][_0x9f028f[_0x4ad9d6(0x2e8,0x329)]][_0x4ad9d6(0x2c6,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2b3,0x2fd)](_0x9f028f[_0x4ad9d6(0x2b7,0x2f5)],{'text':_0x4ad9d6(0x301,0x2bf)})[_0x4ad9d6(0x387,0x348)](_0x303dc6=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x30c,0x2f5)],jsonformat(_0x303dc6)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x2e7,0x2ce)){for(let _0x311f6f=0x0;_0x311f6f<_0x2d4dfa[0x2];_0x311f6f++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x32f,0x2f5)],wm,_0x58ab8f);}db[_0x4ad9d6(0x30d,0x2db)][_0x4ad9d6(0x2f7,0x2c6)][_0x9f028f[_0x4ad9d6(0x2fd,0x329)]][_0x4ad9d6(0x2bc,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x30a,0x2fd)](_0x9f028f[_0x4ad9d6(0x2d6,0x2f5)],{'text':_0x4ad9d6(0x2a5,0x2bf)})[_0x4ad9d6(0x366,0x348)](_0x92cbf9=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2ca,0x2f5)],jsonformat(_0x92cbf9)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x301,0x301)){for(let _0x340647=0x0;_0x340647<_0x2d4dfa[0x2];_0x340647++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x30d,0x2f5)],wm,_0x5a4fc7);}db[_0x4ad9d6(0x309,0x2db)][_0x4ad9d6(0x280,0x2c6)][_0x9f028f[_0x4ad9d6(0x30d,0x329)]][_0x4ad9d6(0x328,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2c3,0x2fd)](_0x9f028f[_0x4ad9d6(0x2f8,0x2f5)],{'text':_0x4ad9d6(0x2c4,0x2bf)})[_0x4ad9d6(0x334,0x348)](_0x4418d0=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2bb,0x2f5)],jsonformat(_0x4418d0)));}else{if(_0x2d4dfa[0x1]==='vn'){for(let _0x1bf46c=0x0;_0x1bf46c<_0x2d4dfa[0x2];_0x1bf46c++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2d0,0x2f5)],wm,_0x553b29);}db[_0x4ad9d6(0x294,0x2db)][_0x4ad9d6(0x2f1,0x2c6)][_0x9f028f[_0x4ad9d6(0x31f,0x329)]][_0x4ad9d6(0x34a,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x333,0x2fd)](_0x9f028f[_0x4ad9d6(0x2ec,0x2f5)],{'text':_0x4ad9d6(0x2ee,0x2bf)})[_0x4ad9d6(0x309,0x348)](_0x5d9a51=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2da,0x2f5)],jsonformat(_0x5d9a51)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x34a,0x32d)){for(let _0x590fdf=0x0;_0x590fdf<_0x2d4dfa[0x2];_0x590fdf++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2f5,0x2f5)],wm,_0x345cf3);}db[_0x4ad9d6(0x2dd,0x2db)][_0x4ad9d6(0x308,0x2c6)][_0x9f028f[_0x4ad9d6(0x2f8,0x329)]][_0x4ad9d6(0x2bf,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2b3,0x2fd)](_0x9f028f[_0x4ad9d6(0x2af,0x2f5)],{'text':_0x4ad9d6(0x2d9,0x2bf)})[_0x4ad9d6(0x359,0x348)](_0x20d51c=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x338,0x2f5)],jsonformat(_0x20d51c)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x331,0x341)){for(let _0x149a9a=0x0;_0x149a9a<_0x2d4dfa[0x2];_0x149a9a++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x335,0x2f5)],wm,_0x2891d5);}db[_0x4ad9d6(0x2fa,0x2db)][_0x4ad9d6(0x2d7,0x2c6)][_0x9f028f[_0x4ad9d6(0x311,0x329)]][_0x4ad9d6(0x2d9,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x331,0x2fd)](_0x9f028f[_0x4ad9d6(0x33c,0x2f5)],{'text':_0x4ad9d6(0x290,0x2bf)})[_0x4ad9d6(0x37e,0x348)](_0x105fab=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x310,0x2f5)],jsonformat(_0x105fab)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x2f6,0x2d6)){for(let _0xe59433=0x0;_0xe59433<_0x2d4dfa[0x2];_0xe59433++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x32a,0x2f5)],wm,_0x29e76d);}db[_0x4ad9d6(0x2ae,0x2db)][_0x4ad9d6(0x282,0x2c6)][_0x9f028f[_0x4ad9d6(0x33c,0x329)]][_0x4ad9d6(0x2e2,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2f6,0x2fd)](_0x9f028f[_0x4ad9d6(0x2b9,0x2f5)],{'text':_0x4ad9d6(0x2c8,0x2bf)})[_0x4ad9d6(0x315,0x348)](_0x467143=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x32f,0x2f5)],jsonformat(_0x467143)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x32c,0x305)){for(let _0x357a3b=0x0;_0x357a3b<_0x2d4dfa[0x2];_0x357a3b++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2b0,0x2f5)],wm,_0x555508);}db[_0x4ad9d6(0x321,0x2db)][_0x4ad9d6(0x2bf,0x2c6)][_0x9f028f[_0x4ad9d6(0x2f5,0x329)]][_0x4ad9d6(0x348,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2f0,0x2fd)](_0x9f028f[_0x4ad9d6(0x2ad,0x2f5)],{'text':_0x4ad9d6(0x29e,0x2bf)})[_0x4ad9d6(0x331,0x348)](_0x4b4cc3=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2f3,0x2f5)],jsonformat(_0x4b4cc3)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x35b,0x33a)){for(let _0x3a16d4=0x0;_0x3a16d4<_0x2d4dfa[0x2];_0x3a16d4++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x321,0x2f5)],wm,_0x2d0eb0);}db[_0x4ad9d6(0x298,0x2db)][_0x4ad9d6(0x2bb,0x2c6)][_0x9f028f[_0x4ad9d6(0x2e2,0x329)]][_0x4ad9d6(0x2ca,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x307,0x2fd)](_0x9f028f[_0x4ad9d6(0x2d0,0x2f5)],{'text':_0x4ad9d6(0x2c9,0x2bf)})[_0x4ad9d6(0x371,0x348)](_0x50edb2=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2fa,0x2f5)],jsonformat(_0x50edb2)));}else _0x2d4dfa[0x1]===_0x4ad9d6(0x31c,0x342)&&(_0x184d4a(_0x9f028f[_0x4ad9d6(0x32b,0x2f5)],wm,_0x349e2c),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2b9,0x2f5)],wm,_0x184cd6),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2bc,0x2f5)],wm,_0xfa9b20),_0x184d4a(_0x9f028f[_0x4ad9d6(0x30c,0x2f5)],wm,_0x58ab8f),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2ea,0x2f5)],wm,_0x5a4fc7),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2c8,0x2f5)],wm,_0x553b29),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2b0,0x2f5)],wm,_0x345cf3),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2dd,0x2f5)],wm,_0x2891d5),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2e7,0x2f5)],wm,_0x29e76d),_0x184d4a(_0x9f028f[_0x4ad9d6(0x320,0x2f5)],wm,_0x555508),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2ff,0x2f5)],wm,_0x2d0eb0),db[_0x4ad9d6(0x2cf,0x2db)][_0x4ad9d6(0x2f4,0x2c6)][_0x9f028f[_0x4ad9d6(0x335,0x329)]][_0x4ad9d6(0x2b9,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x347,0x2fd)](_0x9f028f[_0x4ad9d6(0x2cd,0x2f5)],{'text':_0x4ad9d6(0x293,0x2bf)})[_0x4ad9d6(0x313,0x348)](_0x5f0143=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2fd,0x2f5)],jsonformat(_0x5f0143))));}}}}}}}}}}}if(_0x2d4dfa[0x0]==='gc'){if(_0x2d4dfa[_0x4ad9d6(0x2d0,0x2fb)]<0x2)return _0x184d4a(_0x9f028f[_0x4ad9d6(0x2f0,0x2f5)],_0x4152e8+_0x4ad9d6(0x294,0x2be)+_0x4152e8+_0x4ad9d6(0x2de,0x300)+_0x4152e8+_0x4ad9d6(0x36b,0x324)+_0x4152e8+_0x4ad9d6(0x2c9,0x2ec)+_0x4152e8+_0x4ad9d6(0x30f,0x2e5)+_0x4152e8+_0x4ad9d6(0x2cd,0x304)+_0x4152e8+_0x4ad9d6(0x2b6,0x2c0)+_0x4152e8+_0x4ad9d6(0x2ac,0x2c8)+_0x4152e8+_0x4ad9d6(0x313,0x2e2)+_0x4152e8+_0x4ad9d6(0x311,0x2f8)+_0x4152e8+_0x4ad9d6(0x2c7,0x2ff)+_0x4152e8+_0x4ad9d6(0x340,0x33b));if(_0x2d4dfa[_0x4ad9d6(0x2e4,0x2fb)]<0x3)return _0x184d4a(_0x9f028f[_0x4ad9d6(0x2f5,0x2f5)],_0x4ad9d6(0x29f,0x2b7));if(_0x2d4dfa[0x1]===_0x4ad9d6(0x304,0x347)){for(let _0x1f70b2=0x0;_0x1f70b2<_0x2d4dfa[0x2];_0x1f70b2++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x333,0x2f5)],wm,_0x349e2c);}db[_0x4ad9d6(0x2cf,0x2db)][_0x4ad9d6(0x2a5,0x2c6)][_0x9f028f[_0x4ad9d6(0x31a,0x329)]][_0x4ad9d6(0x2ff,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2e5,0x2fd)](_0x9f028f[_0x4ad9d6(0x2bd,0x2f5)],{'text':_0x4ad9d6(0x2de,0x2bf)})[_0x4ad9d6(0x372,0x348)](_0x361cd0=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x30f,0x2f5)],jsonformat(_0x361cd0)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x2ad,0x2e4)){for(let _0x5e92b0=0x0;_0x5e92b0<_0x2d4dfa[0x2];_0x5e92b0++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2f8,0x2f5)],wm,_0x184cd6);}db[_0x4ad9d6(0x2a4,0x2db)][_0x4ad9d6(0x2e6,0x2c6)][_0x9f028f[_0x4ad9d6(0x303,0x329)]][_0x4ad9d6(0x30c,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2c2,0x2fd)](_0x9f028f[_0x4ad9d6(0x2d1,0x2f5)],{'text':_0x4ad9d6(0x2de,0x2bf)})[_0x4ad9d6(0x331,0x348)](_0x4b467b=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2c5,0x2f5)],jsonformat(_0x4b467b)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x332,0x32e)){for(let _0x333bae=0x0;_0x333bae<_0x2d4dfa[0x2];_0x333bae++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2d5,0x2f5)],wm,_0xfa9b20);}db[_0x4ad9d6(0x2cc,0x2db)][_0x4ad9d6(0x290,0x2c6)][_0x9f028f[_0x4ad9d6(0x35f,0x329)]][_0x4ad9d6(0x34e,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2d1,0x2fd)](_0x9f028f[_0x4ad9d6(0x32b,0x2f5)],{'text':_0x4ad9d6(0x286,0x2bf)})[_0x4ad9d6(0x385,0x348)](_0x22e8b5=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2c7,0x2f5)],jsonformat(_0x22e8b5)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x2dd,0x2ce)){for(let _0x739531=0x0;_0x739531<_0x2d4dfa[0x2];_0x739531++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2cb,0x2f5)],wm,_0x58ab8f);}db[_0x4ad9d6(0x29a,0x2db)][_0x4ad9d6(0x2db,0x2c6)][_0x9f028f[_0x4ad9d6(0x35d,0x329)]][_0x4ad9d6(0x32a,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x337,0x2fd)](_0x9f028f[_0x4ad9d6(0x327,0x2f5)],{'text':_0x4ad9d6(0x2ed,0x2bf)})[_0x4ad9d6(0x389,0x348)](_0x45919f=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x30b,0x2f5)],jsonformat(_0x45919f)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x2f8,0x301)){for(let _0x388f35=0x0;_0x388f35<_0x2d4dfa[0x2];_0x388f35++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2c2,0x2f5)],wm,_0x5a4fc7);}db[_0x4ad9d6(0x313,0x2db)][_0x4ad9d6(0x2e7,0x2c6)][_0x9f028f[_0x4ad9d6(0x330,0x329)]][_0x4ad9d6(0x2bb,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2b9,0x2fd)](_0x9f028f[_0x4ad9d6(0x2f5,0x2f5)],{'text':_0x4ad9d6(0x280,0x2bf)})[_0x4ad9d6(0x2fe,0x348)](_0x2779d5=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x32f,0x2f5)],jsonformat(_0x2779d5)));}else{if(_0x2d4dfa[0x1]==='vn'){for(let _0x11f711=0x0;_0x11f711<_0x2d4dfa[0x2];_0x11f711++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2fa,0x2f5)],wm,_0x553b29);}db[_0x4ad9d6(0x2bb,0x2db)][_0x4ad9d6(0x2d6,0x2c6)][_0x9f028f[_0x4ad9d6(0x32b,0x329)]][_0x4ad9d6(0x329,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2ec,0x2fd)](_0x9f028f[_0x4ad9d6(0x332,0x2f5)],{'text':_0x4ad9d6(0x297,0x2bf)})[_0x4ad9d6(0x314,0x348)](_0x530d75=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2d7,0x2f5)],jsonformat(_0x530d75)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x357,0x32d)){for(let _0x366671=0x0;_0x366671<_0x2d4dfa[0x2];_0x366671++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2ce,0x2f5)],wm,_0x345cf3);}db[_0x4ad9d6(0x2d5,0x2db)][_0x4ad9d6(0x2a7,0x2c6)][_0x9f028f[_0x4ad9d6(0x310,0x329)]][_0x4ad9d6(0x341,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x333,0x2fd)](_0x9f028f[_0x4ad9d6(0x325,0x2f5)],{'text':_0x4ad9d6(0x2c1,0x2bf)})[_0x4ad9d6(0x34e,0x348)](_0x4a69c5=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2c3,0x2f5)],jsonformat(_0x4a69c5)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x323,0x341)){for(let _0x5d8314=0x0;_0x5d8314<_0x2d4dfa[0x2];_0x5d8314++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x305,0x2f5)],wm,_0x2891d5);}db[_0x4ad9d6(0x2df,0x2db)][_0x4ad9d6(0x2e1,0x2c6)][_0x9f028f[_0x4ad9d6(0x337,0x329)]][_0x4ad9d6(0x309,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x32c,0x2fd)](_0x9f028f[_0x4ad9d6(0x2dc,0x2f5)],{'text':_0x4ad9d6(0x2b5,0x2bf)})[_0x4ad9d6(0x343,0x348)](_0xdb8ac1=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x325,0x2f5)],jsonformat(_0xdb8ac1)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x2cc,0x2d6)){for(let _0x2c6c06=0x0;_0x2c6c06<_0x2d4dfa[0x2];_0x2c6c06++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x32e,0x2f5)],wm,_0x29e76d);}db[_0x4ad9d6(0x2d2,0x2db)][_0x4ad9d6(0x2c3,0x2c6)][_0x9f028f[_0x4ad9d6(0x31e,0x329)]][_0x4ad9d6(0x2bc,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2fd,0x2fd)](_0x9f028f[_0x4ad9d6(0x32a,0x2f5)],{'text':_0x4ad9d6(0x2ea,0x2bf)})[_0x4ad9d6(0x350,0x348)](_0x3f4428=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2c7,0x2f5)],jsonformat(_0x3f4428)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x31c,0x305)){for(let _0x1e0ac5=0x0;_0x1e0ac5<_0x2d4dfa[0x2];_0x1e0ac5++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x2c0,0x2f5)],wm,_0x555508);}db[_0x4ad9d6(0x305,0x2db)][_0x4ad9d6(0x2b2,0x2c6)][_0x9f028f[_0x4ad9d6(0x34c,0x329)]][_0x4ad9d6(0x2c1,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2f4,0x2fd)](_0x9f028f[_0x4ad9d6(0x2d1,0x2f5)],{'text':_0x4ad9d6(0x295,0x2bf)})[_0x4ad9d6(0x32b,0x348)](_0x1eb1c3=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x331,0x2f5)],jsonformat(_0x1eb1c3)));}else{if(_0x2d4dfa[0x1]===_0x4ad9d6(0x33b,0x33a)){for(let _0x114037=0x0;_0x114037<_0x2d4dfa[0x2];_0x114037++){_0x184d4a(_0x9f028f[_0x4ad9d6(0x32e,0x2f5)],wm,_0x2d0eb0);}db[_0x4ad9d6(0x2a5,0x2db)][_0x4ad9d6(0x2f8,0x2c6)][_0x9f028f[_0x4ad9d6(0x2e3,0x329)]][_0x4ad9d6(0x2fa,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2de,0x2fd)](_0x9f028f[_0x4ad9d6(0x2fd,0x2f5)],{'text':_0x4ad9d6(0x287,0x2bf)})[_0x4ad9d6(0x353,0x348)](_0x14ec74=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x311,0x2f5)],jsonformat(_0x14ec74)));}else _0x2d4dfa[0x1]===_0x4ad9d6(0x30b,0x342)&&(_0x184d4a(_0x9f028f[_0x4ad9d6(0x33f,0x2f5)],wm,_0x349e2c),_0x184d4a(_0x9f028f[_0x4ad9d6(0x337,0x2f5)],wm,_0x184cd6),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2c4,0x2f5)],wm,_0xfa9b20),_0x184d4a(_0x9f028f[_0x4ad9d6(0x333,0x2f5)],wm,_0x58ab8f),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2bc,0x2f5)],wm,_0x5a4fc7),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2f3,0x2f5)],wm,_0x553b29),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2b9,0x2f5)],wm,_0x345cf3),_0x184d4a(_0x9f028f[_0x4ad9d6(0x329,0x2f5)],wm,_0x2891d5),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2ff,0x2f5)],wm,_0x29e76d),_0x184d4a(_0x9f028f[_0x4ad9d6(0x337,0x2f5)],wm,_0x555508),_0x184d4a(_0x9f028f[_0x4ad9d6(0x2aa,0x2f5)],wm,_0x2d0eb0),db[_0x4ad9d6(0x321,0x2db)][_0x4ad9d6(0x29b,0x2c6)][_0x9f028f[_0x4ad9d6(0x35f,0x329)]][_0x4ad9d6(0x335,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x347,0x2fd)](_0x9f028f[_0x4ad9d6(0x304,0x2f5)],{'text':_0x4ad9d6(0x29c,0x2bf)})[_0x4ad9d6(0x37d,0x348)](_0x311236=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x336,0x2f5)],jsonformat(_0x311236))));}}}}}}}}}}}if(_0x2d4dfa[0x0]==='pc'){if(_0x2d4dfa[_0x4ad9d6(0x2b9,0x2fb)]<0x3)return _0x184d4a(_0x9f028f[_0x4ad9d6(0x2c0,0x2f5)],_0x4152e8+_0x4ad9d6(0x2fa,0x31b)+_0x4152e8+_0x4ad9d6(0x36e,0x326)+_0x4152e8+_0x4ad9d6(0x313,0x33c)+_0x4152e8+_0x4ad9d6(0x35b,0x327)+_0x4152e8+_0x4ad9d6(0x2d3,0x2ee)+_0x4152e8+_0x4ad9d6(0x2fe,0x32f)+_0x4152e8+_0x4ad9d6(0x31d,0x331)+_0x4152e8+_0x4ad9d6(0x286,0x2cc)+_0x4152e8+_0x4ad9d6(0x2bc,0x2da)+_0x4152e8+_0x4ad9d6(0x2ee,0x2c7)+_0x4152e8+_0x4ad9d6(0x36a,0x328)+_0x4152e8+_0x4ad9d6(0x2db,0x2b9));if(_0x2d4dfa[_0x4ad9d6(0x335,0x2fb)]<0x4)return _0x184d4a(_0x9f028f[_0x4ad9d6(0x2b6,0x2f5)],_0x4ad9d6(0x2a0,0x2b7));if(_0x2d4dfa[0x2]===_0x4ad9d6(0x330,0x347)){for(let _0x1935b0=0x0;_0x1935b0<_0x2d4dfa[0x3];_0x1935b0++){_0x184d4a(_0x3a6acd,wm,_0x349e2c);}db[_0x4ad9d6(0x2e2,0x2db)][_0x4ad9d6(0x2c2,0x2c6)][_0x9f028f[_0x4ad9d6(0x302,0x329)]][_0x4ad9d6(0x2c1,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2e2,0x2fd)](_0x9f028f[_0x4ad9d6(0x332,0x2f5)],{'text':_0x4ad9d6(0x28e,0x2bf)})[_0x4ad9d6(0x372,0x348)](_0x5ad600=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2e5,0x2f5)],jsonformat(_0x5ad600)));}else{if(_0x2d4dfa[0x2]===_0x4ad9d6(0x2b9,0x2e4)){for(let _0x22f27d=0x0;_0x22f27d<_0x2d4dfa[0x3];_0x22f27d++){_0x184d4a(_0x3a6acd,wm,_0x184cd6);}db[_0x4ad9d6(0x2de,0x2db)][_0x4ad9d6(0x28e,0x2c6)][_0x9f028f[_0x4ad9d6(0x354,0x329)]][_0x4ad9d6(0x307,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2cb,0x2fd)](_0x9f028f[_0x4ad9d6(0x302,0x2f5)],{'text':_0x4ad9d6(0x2cc,0x2bf)})[_0x4ad9d6(0x38c,0x348)](_0x41932a=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2f0,0x2f5)],jsonformat(_0x41932a)));}else{if(_0x2d4dfa[0x2]===_0x4ad9d6(0x376,0x32e)){for(let _0x552142=0x0;_0x552142<_0x2d4dfa[0x3];_0x552142++){_0x184d4a(_0x3a6acd,wm,_0xfa9b20);}db[_0x4ad9d6(0x2cf,0x2db)][_0x4ad9d6(0x2b6,0x2c6)][_0x9f028f[_0x4ad9d6(0x2fd,0x329)]][_0x4ad9d6(0x344,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2d4,0x2fd)](_0x9f028f[_0x4ad9d6(0x2ce,0x2f5)],{'text':_0x4ad9d6(0x292,0x2bf)})[_0x4ad9d6(0x380,0x348)](_0x259867=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x32a,0x2f5)],jsonformat(_0x259867)));}else{if(_0x2d4dfa[0x2]===_0x4ad9d6(0x2d8,0x2ce)){for(let _0x4e76ac=0x0;_0x4e76ac<_0x2d4dfa[0x3];_0x4e76ac++){_0x184d4a(_0x3a6acd,wm,_0x58ab8f);}db[_0x4ad9d6(0x2d1,0x2db)][_0x4ad9d6(0x2df,0x2c6)][_0x9f028f[_0x4ad9d6(0x30c,0x329)]][_0x4ad9d6(0x30b,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2cb,0x2fd)](_0x9f028f[_0x4ad9d6(0x33e,0x2f5)],{'text':_0x4ad9d6(0x2a1,0x2bf)})[_0x4ad9d6(0x314,0x348)](_0x31e177=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2e4,0x2f5)],jsonformat(_0x31e177)));}else{if(_0x2d4dfa[0x2]===_0x4ad9d6(0x339,0x301)){for(let _0x3f4090=0x0;_0x3f4090<_0x2d4dfa[0x3];_0x3f4090++){_0x184d4a(_0x3a6acd,wm,_0x5a4fc7);}db[_0x4ad9d6(0x2bb,0x2db)][_0x4ad9d6(0x2c6,0x2c6)][_0x9f028f[_0x4ad9d6(0x2ed,0x329)]][_0x4ad9d6(0x2df,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2c0,0x2fd)](_0x9f028f[_0x4ad9d6(0x2af,0x2f5)],{'text':_0x4ad9d6(0x2c5,0x2bf)})[_0x4ad9d6(0x343,0x348)](_0x1f84b7=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2dc,0x2f5)],jsonformat(_0x1f84b7)));}else{if(_0x2d4dfa[0x2]==='vn'){for(let _0x3254a3=0x0;_0x3254a3<_0x2d4dfa[0x3];_0x3254a3++){_0x184d4a(_0x3a6acd,wm,_0x553b29);}db[_0x4ad9d6(0x2c9,0x2db)][_0x4ad9d6(0x280,0x2c6)][_0x9f028f[_0x4ad9d6(0x2ea,0x329)]][_0x4ad9d6(0x2f6,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2c4,0x2fd)](_0x9f028f[_0x4ad9d6(0x315,0x2f5)],{'text':_0x4ad9d6(0x27a,0x2bf)})[_0x4ad9d6(0x353,0x348)](_0x322709=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x33a,0x2f5)],jsonformat(_0x322709)));}else{if(_0x2d4dfa[0x2]===_0x4ad9d6(0x344,0x32d)){for(let _0x267027=0x0;_0x267027<_0x2d4dfa[0x3];_0x267027++){_0x184d4a(_0x3a6acd,wm,_0x345cf3);}db[_0x4ad9d6(0x29d,0x2db)][_0x4ad9d6(0x29e,0x2c6)][_0x9f028f[_0x4ad9d6(0x351,0x329)]][_0x4ad9d6(0x321,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x2e2,0x2fd)](_0x9f028f[_0x4ad9d6(0x2d7,0x2f5)],{'text':_0x4ad9d6(0x2ca,0x2bf)})[_0x4ad9d6(0x356,0x348)](_0x385cde=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x32d,0x2f5)],jsonformat(_0x385cde)));}else{if(_0x2d4dfa[0x2]===_0x4ad9d6(0x311,0x341)){for(let _0x415c3f=0x0;_0x415c3f<_0x2d4dfa[0x3];_0x415c3f++){_0x184d4a(_0x3a6acd,wm,_0x2891d5);}db[_0x4ad9d6(0x2e7,0x2db)][_0x4ad9d6(0x28e,0x2c6)][_0x9f028f[_0x4ad9d6(0x2f6,0x329)]][_0x4ad9d6(0x2ef,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x32c,0x2fd)](_0x9f028f[_0x4ad9d6(0x31d,0x2f5)],{'text':_0x4ad9d6(0x2f6,0x2bf)})[_0x4ad9d6(0x331,0x348)](_0x42d8ab=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x30e,0x2f5)],jsonformat(_0x42d8ab)));}else{if(_0x2d4dfa[0x2]===_0x4ad9d6(0x29c,0x2d6)){for(let _0x5dd3c2=0x0;_0x5dd3c2<_0x2d4dfa[0x3];_0x5dd3c2++){_0x184d4a(_0x3a6acd,wm,_0x29e76d);}db[_0x4ad9d6(0x31f,0x2db)][_0x4ad9d6(0x30c,0x2c6)][_0x9f028f[_0x4ad9d6(0x2ed,0x329)]][_0x4ad9d6(0x2df,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x328,0x2fd)](_0x9f028f[_0x4ad9d6(0x2b7,0x2f5)],{'text':_0x4ad9d6(0x2c1,0x2bf)})[_0x4ad9d6(0x347,0x348)](_0x8d521e=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x32a,0x2f5)],jsonformat(_0x8d521e)));}else{if(_0x2d4dfa[0x2]===_0x4ad9d6(0x31c,0x305)){for(let _0x388fb7=0x0;_0x388fb7<_0x2d4dfa[0x3];_0x388fb7++){_0x184d4a(_0x3a6acd,wm,_0x555508);}db[_0x4ad9d6(0x2c1,0x2db)][_0x4ad9d6(0x2ac,0x2c6)][_0x9f028f[_0x4ad9d6(0x300,0x329)]][_0x4ad9d6(0x2bb,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x30d,0x2fd)](_0x9f028f[_0x4ad9d6(0x332,0x2f5)],{'text':_0x4ad9d6(0x2de,0x2bf)})[_0x4ad9d6(0x326,0x348)](_0x2504c4=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x314,0x2f5)],jsonformat(_0x2504c4)));}else{if(_0x2d4dfa[0x2]===_0x4ad9d6(0x311,0x33a)){for(let _0x6d4912=0x0;_0x6d4912<_0x2d4dfa[0x3];_0x6d4912++){_0x184d4a(_0x3a6acd,wm,_0x2d0eb0);}db[_0x4ad9d6(0x306,0x2db)][_0x4ad9d6(0x294,0x2c6)][_0x9f028f[_0x4ad9d6(0x2fc,0x329)]][_0x4ad9d6(0x34e,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x32d,0x2fd)](_0x9f028f[_0x4ad9d6(0x2aa,0x2f5)],{'text':_0x4ad9d6(0x2e1,0x2bf)})[_0x4ad9d6(0x34f,0x348)](_0x55979b=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2b8,0x2f5)],jsonformat(_0x55979b)));}else _0x2d4dfa[0x2]===_0x4ad9d6(0x371,0x342)&&(_0x184d4a(_0x3a6acd,wm,_0x349e2c),_0x184d4a(_0x3a6acd,wm,_0x184cd6),_0x184d4a(_0x3a6acd,wm,_0xfa9b20),_0x184d4a(_0x3a6acd,wm,_0x58ab8f),_0x184d4a(_0x3a6acd,wm,_0x5a4fc7),_0x184d4a(_0x3a6acd,wm,_0x553b29),_0x184d4a(_0x3a6acd,wm,_0x345cf3),_0x184d4a(_0x3a6acd,wm,_0x2891d5),_0x184d4a(_0x3a6acd,wm,_0x29e76d),_0x184d4a(_0x3a6acd,wm,_0x555508),_0x184d4a(_0x3a6acd,wm,_0x2d0eb0),db[_0x4ad9d6(0x2b3,0x2db)][_0x4ad9d6(0x2c2,0x2c6)][_0x9f028f[_0x4ad9d6(0x2fc,0x329)]][_0x4ad9d6(0x2f7,0x303)]-=0x1,await _0x426bd6[_0x4ad9d6(0x339,0x2fd)](_0x9f028f[_0x4ad9d6(0x2c4,0x2f5)],{'text':_0x4ad9d6(0x307,0x2bf)})[_0x4ad9d6(0x35c,0x348)](_0x38d092=>_0x184d4a(_0x9f028f[_0x4ad9d6(0x2ff,0x2f5)],jsonformat(_0x38d092))));}}}}}}}}}}}}break;case _0x4ad9d6(0x38f,0x34b):{if(!mek[_0x4ad9d6(0x2de,0x30c)][_0x4ad9d6(0x34d,0x315)])return;if(_0x2d4dfa[_0x4ad9d6(0x346,0x2fb)]<0x1)return _0x374cb8(_0x9f028f[_0x4ad9d6(0x2b0,0x2f5)],_0x4ad9d6(0x2ce,0x2c1));if(_0x2d4dfa[0x0]==='on'){if(vn)return _0x374cb8(_0x9f028f[_0x4ad9d6(0x335,0x2f5)],_0x4ad9d6(0x356,0x32b));vn=!![],_0x374cb8(_0x9f028f[_0x4ad9d6(0x2b0,0x2f5)],_0x4ad9d6(0x2b8,0x2d4));}else{if(_0x2d4dfa[0x0]===_0x4ad9d6(0x333,0x2fc)){if(!vn)return _0x374cb8(_0x9f028f[_0x4ad9d6(0x2f0,0x2f5)],_0x4ad9d6(0x2c3,0x308));vn=![],_0x374cb8(_0x9f028f[_0x4ad9d6(0x326,0x2f5)],_0x4ad9d6(0x365,0x323));}}}break;case's':{if(!_0x9f028f[_0x4ad9d6(0x2e0,0x30c)][_0x4ad9d6(0x319,0x315)])return;if(!_0x126a31)throw _0x4ad9d6(0x2e3,0x2c4)+(_0x4152e8+_0x1cfe77);if(/image/[_0x4ad9d6(0x320,0x2f9)](_0x215aa8)){let _0x3cd30a=await _0x126a31[_0x4ad9d6(0x31d,0x345)](),_0x1b5181=await _0x426bd6[_0x4ad9d6(0x307,0x311)](_0x9f028f[_0x4ad9d6(0x326,0x2f5)],_0x3cd30a,_0x9f028f,{'packname':'','author':wm});await fs[_0x4ad9d6(0x336,0x2f1)](_0x1b5181);}else{if(/video/[_0x4ad9d6(0x331,0x2f9)](_0x215aa8)){if((_0x126a31[_0x4ad9d6(0x34b,0x32c)]||_0x126a31)[_0x4ad9d6(0x341,0x31a)]>0xb)return _0x374cb8(_0x9f028f[_0x4ad9d6(0x33b,0x2f5)],_0x4ad9d6(0x326,0x337));let _0x4f726b=await _0x126a31[_0x4ad9d6(0x30e,0x345)](),_0x4ef3f5=await _0x426bd6[_0x4ad9d6(0x2d7,0x2f0)](_0x9f028f[_0x4ad9d6(0x335,0x2f5)],_0x4f726b,_0x9f028f,{'packname':'','author':wm});await fs[_0x4ad9d6(0x32a,0x2f1)](_0x4ef3f5);}}}break;case _0x4ad9d6(0x2db,0x2d3):{if(!_0x1f45f0)return _0x426bd6[_0x4ad9d6(0x339,0x2fd)](_0x9f028f[_0x4ad9d6(0x306,0x2f5)],{'text':_0x4ad9d6(0x2de,0x2bb)},{'quoted':_0x9f028f});if(_0x2d4dfa[_0x4ad9d6(0x2c8,0x2fb)]<0x1)return _0x374cb8(_0x9f028f[_0x4ad9d6(0x2e7,0x2f5)],_0x4ad9d6(0x334,0x2ed));if(_0x2d4dfa[0x0]==='on'){if(isPrem)return _0x426bd6[_0x4ad9d6(0x322,0x2fd)](_0x9f028f[_0x4ad9d6(0x2b5,0x2f5)],{'text':_0x4ad9d6(0x2cb,0x2f3)},{'quoted':_0x9f028f});isPrem=!![],_0x426bd6[_0x4ad9d6(0x2e3,0x2fd)](_0x9f028f[_0x4ad9d6(0x2fb,0x2f5)],{'text':_0x4ad9d6(0x2b2,0x2c2)},{'quoted':_0x9f028f});}else{if(_0x2d4dfa[0x0]===_0x4ad9d6(0x306,0x2fc)){if(!isPrem)return _0x426bd6[_0x4ad9d6(0x2f8,0x2fd)](_0x9f028f[_0x4ad9d6(0x2af,0x2f5)],{'text':_0x4ad9d6(0x2e7,0x316)},{'quoted':_0x9f028f});isPrem=![],_0x426bd6[_0x4ad9d6(0x2c2,0x2fd)](_0x9f028f[_0x4ad9d6(0x2b4,0x2f5)],{'text':_0x4ad9d6(0x32d,0x2e7)},{'quoted':_0x9f028f});}}}break;case'sc':{_0x426bd6[_0x4ad9d6(0x31e,0x2fd)](_0x9f028f[_0x4ad9d6(0x2f3,0x2f5)],{'text':_0x4ad9d6(0x313,0x343),'detectLinks':!![]},{'quoted':_0x9f028f});}break;case _0x4ad9d6(0x2d5,0x2b8):{if(!_0x9f028f[_0x4ad9d6(0x2d0,0x30c)][_0x4ad9d6(0x326,0x315)])return;if(!_0x126a31)throw _0x4ad9d6(0x2d3,0x2c9);if(!/webp/[_0x4ad9d6(0x303,0x2f9)](_0x215aa8))throw _0x4ad9d6(0x2d8,0x2bc)+(_0x4152e8+_0x1cfe77)+'*';let _0x561a4f=await _0x426bd6[_0x4ad9d6(0x316,0x30b)](_0x126a31),_0x2d8048=await _0x1c8c22(_0x4ad9d6(0x28c,0x2d1));exec(_0x4ad9d6(0x2e4,0x307)+_0x561a4f+'\x20'+_0x2d8048,_0x52cf2b=>{fs[_0x1c80ce(0x586,0x59b)](_0x561a4f);if(_0x52cf2b)throw _0x52cf2b;function _0x1c80ce(_0x5b7d82,_0x54e983){return _0x4ad9d6(_0x5b7d82,_0x54e983-0x2aa);}let _0xb9f91d=fs[_0x1c80ce(0x577,0x5c1)](_0x2d8048);_0x426bd6[_0x1c80ce(0x5d3,0x5a7)](_0x9f028f[_0x1c80ce(0x5d1,0x59f)],{'image':_0xb9f91d},{'quoted':_0x9f028f}),fs[_0x1c80ce(0x567,0x59b)](_0x2d8048);});}break;default:}}catch(_0x5de92e){console[_0x4ad9d6(0x29c,0x2de)](_0x5de92e);}});

// Updating Files
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
