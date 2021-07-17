const moment = require('moment-timezone');
const menu = (prefix) => {
	let p = 0
	return `*Hai ${pushname}*

*❖ Nama Bot* : Sakura
*❖ Prefix* : Multi
*❖ Owner* : Reihan
*❖ Owner* : @${configs.ownerList[0].split('@')[0]}
*❖ Lib* : Baileys
*❖ Time* : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB
*❖ Total Fitur : 123*

*</INFO>*
*• ${prefix}info*
*• ${prefix}owner*
*• ${prefix}limit*
*• ${prefix}listvn*
*• ${prefix}stickermenu*

*</GROUP ONLY>*
*• ${prefix}group* _open|close_
*• ${prefix}antilink* _on|off_
*• ${prefix}welcome* _on|off_
*• ${prefix}leave* _on|off_
*• ${prefix}setgroupicon* _replyImage_
*• ${prefix}setgroupname* _text_
*• ${prefix}setgroupdesc* _text_
*• ${prefix}hidetag* _text_
*• ${prefix}promote* _@tag_
*• ${prefix}demote* _@tag_
*• ${prefix}kick* _@tag_
*• ${prefix}add* _number_
*• ${prefix}getpp* _@tag_
*• ${prefix}tagall*
*• ${prefix}linkgroup*
*• ${prefix}revoke*
*• ${prefix}leave*

*</DOWNLOADER>*
*• ${prefix}play* _query_
*• ${prefix}ytmp3* _link_
*• ${prefix}ytmp4* _link_
*• ${prefix}igstory* _username_
*• ${prefix}ig* _link_
*• ${prefix}joox* _song_

*</STICKER>*
*• ${prefix}stickerwm* _pack|author_
*• ${prefix}takestick* _pack|author_
*• ${prefix}toimg* _replySticker_
*• ${prefix}togif* _replySticker_
*• ${prefix}semoji* _emoji_
*• ${prefix}stickerfire*
*• ${prefix}stickernobg*
*• ${prefix}stickergif*
*• ${prefix}sticker*

*</EDUCATION>*
*• ${prefix}nulis* _text_
*• ${prefix}brainly* _query_
*• ${prefix}kbbi* _query_
*• ${prefix}wiki* _query_

*</SEARCHING>*
*• ${prefix}playstore* _apk_
*• ${prefix}happymod* _apk_
*• ${prefix}iguser* _username_
*• ${prefix}igstalk* _username_
*• ${prefix}ytsearch* _query_
*• ${prefix}ytplaylist* _query_
*• ${prefix}ytchannel* _channel_
*• ${prefix}shoope* _product_
*• ${prefix}spotify* _song_
*• ${prefix}gsmarena* _hp_
*• ${prefix}searchmusic* _replyAudio_
*• ${prefix}wallpaper* _query_
*• ${prefix}pinterest* _query_
*• ${prefix}googleimage* _query_
*• ${prefix}jagokata* _kata_

*</PRIMBON>*
*• ${prefix}jodoh* _kamu|dia_
*• ${prefix}artinama* _nama_
*• ${prefix}artimimpi* _mimpi_

*</RANDOM>*
*• ${prefix}fml*
*• ${prefix}randomquran*
*• ${prefix}meme*
*• ${prefix}darkjoke*
*• ${prefix}pantun*
*• ${prefix}nickepep*
*• ${prefix}quotes*
*• ${prefix}estetikpic*

*</TEXTMAKER>*
*• ${prefix}wolflogo* _text1|text2_
*• ${prefix}logoaveng* _text1|text2_
*• ${prefix}phlogo* _text1|text2_
*• ${prefix}marvellogo* _text1|text2_
*• ${prefix}gtext* _text1|text2_
*• ${prefix}pubglogo* _text1|text2_
*• ${prefix}snowwrite* _text1|text2_
*• ${prefix}watercolour* _text1|text2_
*• ${prefix}harta* _text_
*• ${prefix}thundertext* _text_
*• ${prefix}flametext* _text_
*• ${prefix}glowtext* _text_
*• ${prefix}smoketext* _text_
*• ${prefix}lithgtext* _text_
*• ${prefix}flowertext* _text_
*• ${prefix}bneon* _text_
*• ${prefix}matrix* _text_
*• ${prefix}breakwall* _text_
*• ${prefix}gneon* _text_
*• ${prefix}dropwater* _text_
*• ${prefix}tfire* _text_
*• ${prefix}sandw* _text_
*• ${prefix}epep* _text_
*• ${prefix}gplaybutton* _text_
*• ${prefix}splaybutton* _text_
*• ${prefix}text3dbox* _text_
*• ${prefix}text3d* _text_
*• ${prefix}logobp* _text_
*• ${prefix}leavest* _text_
*• ${prefix}tlight* _text_
*• ${prefix}crosslogo* _text_
*• ${prefix}cslogo* _text_
*• ${prefix}crismes* _text_

*</IMAGEMAKER>*
*• ${prefix}missing* _text1|text2|text3|@tag_
*• ${prefix}calender* _replyImage / @tag_
*• ${prefix}drawing* _replyImage / @tag_
*• ${prefix}sketch* _replyImage / @tag_

*</OTHER>*
*• ${prefix}removebg* _replyImage / @tag_
*• ${prefix}qrencode* _text_
*• ${prefix}barcode* _text_
*• ${prefix}jadwalsholat* _daerah_
*• ${prefix}jadwaltv* _channel_
*• ${prefix}tebakgambar*

*</OWNER>*
*• ${prefix}setpp* _replyImage_
*• ${prefix}eval* _text_
*• ${prefix}term* _code_
*• ${prefix}block* _@tag_
*• ${prefix}unblock* _@tag_
*• ${prefix}join* _link_
*• ${prefix}bc* _text_
*• ${prefix}addvn* _replyAudio/vn_
*• ${prefix}delvn* _name_
*• ${prefix}premium* add* _@tag_
*• ${prefix}premium* del* _@tag_
*• ${prefix}premium* list
*• ${prefix}clearall*
*• ${prefix}resetlimit*
`
}

const ingfo = `Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript
Apabila terjadi error, kalian bisa menghubungi owner bot ketik !owner

Jika kalian ingin berdiskusi tentang bot silahkan kunjungi
https://chat.whatsapp.com/EV2o7Y4C2XNDT5AAQPZjqt

Terima kasih.
`


const mess = {
             wait: '[ WAIT ] SEDANG PROSES!',
			 group: '[ GROUP ] Only!',
			 admin: '[ ADMIN ]',
			 botAdmin: 'JADIKAN BOT ADMIN GROUP!',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00 malam',
			 ownerOnly: '[ OWNER ] BOT SAKURA!'
}

module.exports = {
	menu,
	ingfo,
	mess
}
