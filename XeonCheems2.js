require('./settings')
const {
	BufferJSON,
	WA_DEFAULT_EPHEMERAL,
	generateWAMessageFromContent,
	proto,
	generateWAMessageContent,
	generateWAMessage,
	prepareWAMessageMedia,
	areJidsSameUser,
	getContentType
} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const hx = require('hxz-api')
const {
	exec,
	spawn,
	execSync
} = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const {
	JSDOM
} = require('jsdom')
const speed = require('performance-now')
const {
	performance
} = require('perf_hooks')
const {
	Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const {
	smsg,
	formatp,
	tanggal,
	formatDate,
	getTime,
	isUrl,
	sleep,
	clockString,
	runtime,
	fetchJson,
	getBuffer,
	jsonformat,
	format,
	parseMention,
	getRandom
} = require('./lib/myfunc')
const dgxeon = require('xfarr-api')

//rpg function\\
const {
	addInventoriDarah,
	cekDuluJoinAdaApaKagaDiJson,
	addDarah,
	kurangDarah,
	getDarah
} = require('./storage/user/darah.js')
const {
	cekInventoryAdaAtauGak,
	addInventori,
	addBesi,
	addEmas,
	addEmerald,
	addUmpan,
	addPotion,
	kurangBesi,
	kurangEmas,
	kurangEmerald,
	kurangUmpan,
	kurangPotion,
	getBesi,
	getEmas,
	getEmerald,
	getUmpan,
	getPotion
} = require('./storage/user/alat_tukar.js')
const {
	addInventoriMonay,
	cekDuluJoinAdaApaKagaMonaynyaDiJson,
	addMonay,
	kurangMonay,
	getMonay
} = require('./storage/user/monay.js')
const {
	addInventoriLimit,
	cekDuluJoinAdaApaKagaLimitnyaDiJson,
	addLimit,
	kurangLimit,
	getLimit
} = require('./storage/user/limit.js')
const {
	cekDuluHasilBuruanNya,
	addInventoriBuruan,
	addIkan,
	addAyam,
	addKelinci,
	addDomba,
	addSapi,
	addGajah,
	kurangIkan,
	kurangAyam,
	kurangKelinci,
	kurangDomba,
	kurangSapi,
	kurangGajah,
	getIkan,
	getAyam,
	getKelinci,
	getDomba,
	getSapi,
	getGajah
} = require('./storage/user/buruan.js')
let DarahAwal = global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟', '🐠', '🐡']

//rpg database\\
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
	try {
		var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
		var budy = (typeof m.text == 'string' ? m.text : '')
		var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
		const isCmd = body.startsWith(prefix)
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const pushname = m.pushName || "No Name"
		const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
		const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const itsMe = m.sender == botNumber ? true : false
		const text = q = args.join(" ")
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const content = JSON.stringify(mek.message)

		//group\\
		const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
		const groupName = m.isGroup ? groupMetadata.subject : ''
		const participants = m.isGroup ? await groupMetadata.participants : ''
		const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
		const groupOwner = m.isGroup ? groupMetadata.owner : ''
		const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
		const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

		//member\\
		let picaks = [flaming, fluming, flarun, flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.afkTime)) user.afkTime = -1
				if (!('afkReason' in user)) user.afkReason = ''
				if (!isNumber(user.limit)) user.limit = limitUser
			} else global.db.data.users[m.sender] = {
				afkTime: -1,
				afkReason: '',
				limit: limitUser,
			}

			let chats = global.db.data.chats[m.chat]
			if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
			if (chats) {
				if (!('mute' in chats)) chats.mute = false
				if (!('antilink' in chats)) chats.antilink = false
			} else global.db.data.chats[m.chat] = {
				mute: false,
				antilink: false,
			}

			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
			if (setting) {
				if (!isNumber(setting.status)) setting.status = 0
				if (!('autobio' in setting)) setting.autobio = false
			} else global.db.data.settings[botNumber] = {
				status: 0,
				autobio: false,
			}

		} catch (err) {
			console.error(err)
		}

		//group target by xeon\\
		const reply = (teks) => {
			XeonBotInc.sendMessage(m.chat, {
				text: teks,
				contextInfo: {
					"externalAdReply": {
						"title": ` ${global.botname}`,
						"body": ` Join Bot's Official GC`,
						"previewType": "PHOTO",
						"thumbnailUrl": ``,
						"thumbnail": fs.readFileSync(`./XeonMedia/cheemspic.jpg`),
						"sourceUrl": "https://chat.whatsapp.com/LS1Xx3fSqg7FpSYSjKWhL5"
					}
				}
			}, {
				quoted: m
			})
		}

		const replay = (teks) => {
			XeonBotInc.sendMessage(m.chat, {
				text: teks,
				contextInfo: {
					"externalAdReply": {
						"title": ` ${global.botname}`,
						"body": ` Join Bot's Official GC`,
						"previewType": "PHOTO",
						"thumbnailUrl": ``,
						"thumbnail": fs.readFileSync(`./XeonMedia/cheemspic.jpg`),
						"sourceUrl": "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS"
					}
				}
			}, {
				quoted: m
			})
		}

		//Public & Self\\
		if (!XeonBotInc.public) {
			if (!m.key.fromMe) return
		}

		//Push Message To Console && Auto Read\\
		if (m.message) {
			XeonBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
			console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
		}

		//reset limit every 12 hours\\
		let cron = require('node-cron')
		cron.schedule('00 12 * * *', () => {
			let user = Object.keys(global.db.data.users)
			let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
			for (let jid of user) global.db.data.users[jid].limit = limitUser
			console.log('Limit Reseted')
		}, {
			scheduled: true,
			timezone: "Asia/Kolkata"
		})

		//auto set bio\\
		if (db.data.settings[botNumber].autobio) {
			let setting = global.db.data.settings[botNumber]
			if (new Date() * 1 - setting.status > 1000) {
				let uptime = await runtime(process.uptime())
				await XeonBotInc.setStatus(`${XeonBotInc.user.name} | Runtime : ${runtime(uptime)}`)
				setting.status = new Date() * 1
			}
		}

		//antilink\\
		if (db.data.chats[m.chat].antilink) {
			if (budy.match(`chat.whatsapp.com`)) {
				reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
				if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
				let gclink = (`https://chat.whatsapp.com/` + await XeonBotInc.groupInviteCode(m.chat))
				let isLinkThisGc = new RegExp(gclink, 'i')
				let isgclink = isLinkThisGc.test(m.text)
				if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
				if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
				if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🐶`)
				XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			}
		}

		//auto reply by xeon 🦄
		for (let anji of setik) {
			if (budy === anji) {
				result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
				XeonBotInc.sendMessage(m.chat, {
					sticker: result
				}, {
					quoted: m
				})
			}
		}
		for (let anju of vien) {
			if (budy === anju) {
				result = fs.readFileSync(`./XeonMedia/vn/${anju}.mp3`)
				XeonBotInc.sendMessage(m.chat, {
					audio: result,
					mimetype: 'audio/mp4',
					ptt: true
				}, {
					quoted: m
				})
			}
		}
		for (let anjh of imagi) {
			if (budy === anjh) {
				result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
				XeonBotInc.sendMessage(m.chat, {
					image: result
				}, {
					quoted: m
				})
			}
		}
		for (let anjh of videox) {
			if (budy === anjh) {
				result = fs.readFileSync(`./XeonMedia/vid/${anjh}.mp4`)
				XeonBotInc.sendMessage(m.chat, {
					video: result
				}, {
					quoted: m
				})
			}
		}

		//Mute Chat\\
		if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
			return
		}

		//media detect by 🦄xeon\\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

		//Respon Cmd with media\\
		if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
			let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
			let {
				text,
				mentionedJid
			} = hash
			let messages = await generateWAMessage(m.chat, {
				text: text,
				mentions: mentionedJid
			}, {
				userJid: XeonBotInc.user.id,
				quoted: m.quoted && m.quoted.fakeObj
			})
			messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
			messages.key.id = m.key.id
			messages.pushName = m.pushName
			if (m.isGroup) messages.participant = m.sender
			let msg = {
				...chatUpdate,
				messages: [proto.WebMessageInfo.fromObject(messages)],
				type: 'append'
			}
			XeonBotInc.ev.emit('messages.upsert', msg)
		}

		if (('family100' + m.chat in _family100) && isCmd) {
			kuis = true
			let room = _family100['family100' + m.chat]
			let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
			let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
			if (!isSurender) {
				let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
				if (room.terjawab[index]) return !0
				room.terjawab[index] = m.sender
			}
			let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
			let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
			XeonBotInc.sendText(m.chat, caption, m, {
				contextInfo: {
					mentionedJid: parseMention(caption)
				}
			}).then(mes => {
				return _family100['family100' + m.chat].pesan = mesg
			}).catch(_ => _)
			if (isWin || isSurender) delete _family100['family100' + m.chat]
		}

		if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklagu[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess song',
					buttonText: {
						displayText: 'Guess The Song'
					},
					type: 1
				}], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebaklagu[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = kuismath[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
				delete kuismath[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakgambar[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess picture',
					buttonText: {
						displayText: 'Guess The Picture'
					},
					type: 1
				}], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebakgambar[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkata[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess word',
					buttonText: {
						displayText: 'Guess The Word'
					},
					type: 1
				}], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebakkata[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = caklontong[m.sender.split('@')[0]]
			deskripsi = caklontong_desk[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess blank',
					buttonText: {
						displayText: 'Guess The Blank'
					},
					type: 1
				}], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete caklontong[m.sender.split('@')[0]]
				delete caklontong_desk[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebakkalimat[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess sentence',
					buttonText: {
						displayText: 'Guess The Sentence'
					},
					type: 1
				}], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebakkalimat[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaklirik[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess lyrics',
					buttonText: {
						displayText: 'Guess The Lyrics'
					},
					type: 1
				}], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebaklirik[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
			kuis = true
			jawaban = tebaktebakan[m.sender.split('@')[0]]
			if (budy.toLowerCase() == jawaban) {
				await XeonBotInc.sendButtonText(m.chat, [{
					buttonId: 'guess riddle',
					buttonText: {
						displayText: 'Guess The Riddle'
					},
					type: 1
				}], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
				delete tebaktebakan[m.sender.split('@')[0]]
			} else reply('*Wrong Answer!*')
		}

		//TicTacToe\\
		this.game = this.game ? this.game : {}
		let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			//reply(`[DEBUG]\n${parseInt(m.text)}`)
			if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				reply({
					'-3': 'Game Has Ended',
					'-2': 'Invalid',
					'-1': 'Invalid Position',
					0: 'Invalid Position',
				} [ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				} [v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
				room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, {
				mentions: parseMention(str)
			})
			await XeonBotInc.sendText(room.o, str, m, {
				mentions: parseMention(str)
			})
			if (isTie || isWin) {
				delete this.game[room.id]
			}
		}

		//Suit PvP\\
		this.suit = this.suit ? this.suit : {}
		let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
					XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
					delete this.suit[roof.id]
					return !0
				}
				roof.status = 'play'
				roof.asal = m.chat
				clearTimeout(roof.waktu)
				//delete roof[roof.id].waktu
				XeonBotInc.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, {
					mentions: [roof.p, roof.p2]
				})
				if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
				if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
					}
					delete this.suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /scissors/i
			let b = /rock/i
			let k = /paper/i
			let reg = /^(scissors|rock|paper)/i
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0]
				roof.text = m.text
				reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
				if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
				if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, {
					mentions: [roof.p, roof.p2]
				})
				delete this.suit[roof.id]
			}
		}

		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = global.db.data.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
		}

		if (db.data.users[m.sender].afkTime > -1) {
			let user = global.db.data.users[m.sender]
			reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
			user.afkTime = -1
			user.afkReason = ''
		}
		switch (command) {
		case 'chat': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
			if (args[0] === 'mute') {
				XeonBotInc.chatModify({
					mute: 'Infinity'
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'unmute') {
				XeonBotInc.chatModify({
					mute: null
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'archive') {
				XeonBotInc.chatModify({
					archive: true
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'unarchive') {
				XeonBotInc.chatModify({
					archive: false
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'read') {
				XeonBotInc.chatModify({
					markRead: true
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'unread') {
				XeonBotInc.chatModify({
					markRead: false
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			} else if (args[0] === 'delete') {
				XeonBotInc.chatModify({
					clear: {
						message: {
							id: m.quoted.id,
							fromMe: true
						}
					}
				}, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
			}
		}
		break
		case 'is':
			if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
			const apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
			const kah = apa[Math.floor(Math.random() * apa.length)]
			XeonBotInc.sendMessage(from, {
				text: `Question : Is ${q}\nAnswer : ${kah}`
			}, {
				quoted: m
			})

			break
		case 'what':
			if (!text) return replay(`Use Text, Example : ${prefix + command} he married `)
			const lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
			const kahk = lel[Math.floor(Math.random() * lel.length)]
			XeonBotInc.sendMessage(from, {
				text: `Question : What ${q}\nAnswer : ${kahk}`
			}, {
				quoted: m
			})

			break
		case 'can':
			if (!text) return replay(`Use Text, Example : ${prefix + command} you fuck her lol `)
			const bisa = [`Can`, `Can't`, `Cannot`, `Of Course You Can!!!`]
			const ga = bisa[Math.floor(Math.random() * bisa.length)]
			XeonBotInc.sendMessage(from, {
				text: `Question : Can ${q}\nAnswer : ${ga}`
			}, {
				quoted: m
			})

			break
		case 'how':
			if (!text) return replay(`Use Text, Example : ${prefix + command} is my face`)
			const gimana = [`It's Okay`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`, `Holy Cow! Really???`, `Dizzy Ah`, `Ohhh I See:(`, `The Patient, Boss:(`, `How Are You?`]
			const ya = gimana[Math.floor(Math.random() * gimana.length)]
			XeonBotInc.sendMessage(from, {
				text: `Question : ${q}\nAnswer : How ${ya}`
			}, {
				quoted: m
			})

			break
		case 'when':
			if (!text) return replay(`Use Text, Example : ${prefix + command} will i get married `)
			const kapan = ['5 More Days', '10 More Days', '15 More Days', '20 More Days', '25 More Days', '30 More Days', '35 More Days', '40 More Days', '45 More Days', '50 More Days', '55 More Days', '60 More Days', '65 More Days', '70 More Days', '75 More Days', '80 More Days', '85 More Days', '90 More Days', '100 More Days', '5 Months More', '10 Months More', '15 Months More', '20 Months More', '25 Months More', '30 Months More', '35 Months More', '40 Months More', '45 Months More', '50 Months More', '55 Months More', '60 Months More', '65 Months More', '70 Months More', '75 Months More', '80 Months More', '85 Months More', '90 Months More', '100 Months More', '1 More Year', '2 More Years', '3 More Years', '4 More Years', '5 More Years', 'Tomorrow', 'The Day After Tomorrow', `After This Command, You Too ${q}`]
			const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
			XeonBotInc.sendMessage(from, {
				text: `Question : ${q}\nAnswer : *${kapankah}*`
			}, {
				quoted: m
			})
			break
		case 'join': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!text) return replay(`Enter The Group Link!`)
			if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
			reply(mess.wait)
			let result = args[0].split('https://chat.whatsapp.com/')[1]
			await XeonBotInc.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'leave': {
			if (!isCreator) return replay(`${mess.owner}`)
			await XeonBotInc.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setexif': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!text) return replay(`Example : ${prefix + command} packname|author`)
			global.packname = text.split("|")[0]
			global.author = text.split("|")[1]
			reply(`Exif Has Been Successfully Changed to\n\n🐶 Packname : ${global.packname}\n🐶 Author : ${global.author}`)
		}
		break
		case 'kick': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'add': {
			if (!m.isGroup) return replay(`${mess.group}`)
			if (!isBotAdmins) return replay(`${mess.botAdmin}`)
			if (!isAdmins) return replay(`${mess.admin}`)
			let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'block': {
			if (!isCreator) return replay(`${mess.owner}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await XeonBotInc.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'unblock': {
			if (!isCreator) return replay(`${mess.owner}`)
			let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
			await XeonBotInc.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
		}
		break
		case 'setbotpp': {
			if (!isCreator) return replay(`${mess.owner}`)
			if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			await XeonBotInc.updateProfilePicture(botNumber, {
				url: media
			}).catch((err) => fs.unlinkSync(media))
			reply(mess.success)
		}
		break
		case 'style':
		case 'styletext': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
			db.data.users[m.sender].limit -= 1 // -1 limit
			let {
				styletext
			} = require('./lib/scraper')
			if (!text) return replay(`Enter Query Text!`)
			let anu = await styletext(text)
			let teks = `Entered Text ${text}\n\n`
			for (let i of anu) {
				teks += `🐶 *${i.name}* : ${i.result}\n\n`
			}
			reply(teks)
		}
		break
		case 'delete':
		case 'del': {
			if (!m.quoted) reply(false)
			let {
				chat,
				fromMe,
				id,
				isBaileys
			} = m.quoted
			if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
			XeonBotInc.sendMessage(m.chat, {
				delete: {
					remoteJid: m.chat,
					fromMe: true,
					id: m.quoted.id,
					participant: m.quoted.sender
				}
			})
		}
		break
		case 'chatinfo':
		case 'infochat': {
			if (!m.quoted) return reply(`Reply Message`)
			let msg = await m.getQuotedObj()
			if (!m.quoted.isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
			let teks = ''
			for (let i of msg.userReceipt) {
				let read = i.readTimestamp
				let unread = i.receiptTimestamp
				let waktu = read ? read : unread
				teks += `🐶 @${i.userJid.split('@')[0]}\n`
				teks += ` ┗━🐶 *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🐶 *Status :* ${read ? 'Read' : 'Sent'}\n\n`
			}
			XeonBotInc.sendTextWithMentions(m.chat, teks, m)
		}
		break
		case 'q':
		case 'quoted': {
			if (!m.quoted) return reply('Reply Message!!')
			let wokwol = await XeonBotInc.serializeM(await m.getQuotedObj())
			if (!wokwol.quoted) return reply('The Message You Replied To Does Not Contain A Reply')
			await wokwol.quoted.copyNForward(m.chat, true)
		}
		break
		case 'listpc':
		case 'pclist': {
			let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
			let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
			for (let i of anu) {
				let nama = store.messages[i].array[0].pushName
				teks += `🐕 *Name :* ${nama}\n🐕 *User :* @${i.split('@')[0]}\n🐕 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
			}
			XeonBotInc.sendTextWithMentions(m.chat, teks, m)
		}
		break
		case 'listgc':
		case 'gclist': {
			let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
			let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
			for (let i of anu) {
				let metadata = await XeonBotInc.groupMetadata(i)
				teks += `🐕 *Name :* ${metadata.subject}\n🐕 *Owner :* @${metadata.owner.split('@')[0]}\n🐕 *ID :* ${metadata.id}\n🐕 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n🐕 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
			}
			XeonBotInc.sendTextWithMentions(m.chat, teks, m)
		}
		break
		case 'listonlinexxx':
		case 'onlinelistxxx': {
			let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
			let online = [...Object.keys(store.presences[id]), botNumber]
			XeonBotInc.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🐶 @' + v.replace(/@.+/, '')).join`\n`, m, {
				mentions: online
			})
		}
		break
		case 'sticker':
		case 's':
		case 'stickergif':
		case 'sgif': {
			if (!quoted) return replay(`Reply Video/Image With Caption ${prefix + command}`)
			reply(mess.wait)
			if (/image/.test(mime)) {
				let media = await quoted.download()
				let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else if (/video/.test(mime)) {
				if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
				let media = await quoted.download()
				let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, {
					packname: global.packname,
					author: global.author
				})
				await fs.unlinkSync(encmedia)
			} else {
				reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
			}
		}
		break
		case 'smemex':
		case 'stickermemex':
		case 'stickmemex': {
			let {
				TelegraPh
			} = require('./lib/uploader')
			if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
			if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
			if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *Text*`)
			reply(mess.wait)
			mee = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			mem = await TelegraPh(mee)
			meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
			memek = await XeonBotInc.sendImageAsSticker(m.chat, meme, m, {
				packname: global.packname,
				author: global.author
			})
			await fs.unlinkSync(memek)
		}
		break
		case 'ebinary': {
			if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
			let {
				eBinary
			} = require('./lib/binary')
			let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
			let eb = await eBinary(teks)
			reply(eb)
		}
		break
		case 'dbinary': {
			if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
			let {
				dBinary
			} = require('./lib/binary')
			let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
			let db = await dBinary(teks)
			reply(db)
		}
		break
		case 'emojimix': {
			if (!text) return replay(`Example : ${prefix + command} 😅+🤔`)
			let [emoji1, emoji2] = text.split`+`
			let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
			for (let res of anu.results) {
				let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, res.url, m, {
					packname: global.packname,
					author: global.author,
					categories: res.tags
				})
				await fs.unlinkSync(encmedia)
			}
		}
		break
		case 'toimage':
		case 'toimg': {
			if (!quoted) return reply(`Reply Image`)
			if (!/webp/.test(mime)) reply(`Reply Sticker With Caption *${prefix + command}*`)
			reply(mess.wait)
			let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			let ran = await getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
				fs.unlinkSync(media)
				if (err) reply(err)
				let buffer = fs.readFileSync(ran)
				XeonBotInc.sendMessage(m.chat, {
					image: buffer
				}, {
					quoted: m
				})
				fs.unlinkSync(ran)
			})
		}
		break
		case 'tomp4':
		case 'tovideo': {
			if (!quoted) reply(`Reply Image`)
			if (!/webp/.test(mime)) return replay(`Reply Sticker With Caption *${prefix + command}*`)
			reply(mess.wait)
			let {
				webp2mp4File
			} = require('./lib/uploader')
			let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			let webpToMp4 = await webp2mp4File(media)
			await XeonBotInc.sendMessage(m.chat, {
				video: {
					url: webpToMp4.result,
					caption: 'Convert Webp To Video'
				}
			}, {
				quoted: m
			})
			await fs.unlinkSync(media)
		}
		break
		case 'toaud':
		case 'toaudio': {
			if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
			if (!quoted) return reply(`Send/Reply Video/Audio You Want To Convert To Audio With Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			let {
				toAudio
			} = require('./lib/converter')
			let audio = await toAudio(media, 'mp4')
			XeonBotInc.sendMessage(m.chat, {
				audio: audio,
				mimetype: 'audio/mpeg'
			}, {
				quoted: m
			})
		}
		break
		case 'tomp3': {
			if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want to Convert Into MP3 With Caption ${prefix + command}`)
			if (!/video/.test(mime) && !/audio/.test(mime)) return replay(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
			if (!quoted) return replay(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			let {
				toAudio
			} = require('./lib/converter')
			let audio = await toAudio(media, 'mp4')
			XeonBotInc.sendMessage(m.chat, {
				document: audio,
				mimetype: 'audio/mpeg',
				fileName: `Converted By ${XeonBotInc.user.name}.mp3`
			}, {
				quoted: m
			})
		}
		break
		case 'tovn':
		case 'toptt': {
			if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
			if (!quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
			reply(mess.wait)
			let media = await quoted.download()
			let {
				toPTT
			} = require('./lib/converter')
			let audio = await toPTT(media, 'mp4')
			XeonBotInc.sendMessage(m.chat, {
				audio: audio,
				mimetype: 'audio/mpeg',
				ptt: true
			}, {
				quoted: m
			})
		}
		break
		case 'togif': {
			if (!quoted) return reply(`Reply Image`)
			if (!/webp/.test(mime)) return reply(`Reply Sticker With Caption *${prefix + command}*`)
			reply(mess.wait)
			let {
				webp2mp4File
			} = require('./lib/uploader')
			let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			let webpToMp4 = await webp2mp4File(media)
			await XeonBotInc.sendMessage(m.chat, {
				video: {
					url: webpToMp4.result,
					caption: 'Convert Webp To Video'
				},
				gifPlayback: true
			}, {
				quoted: m
			})
			await fs.unlinkSync(media)
		}
		break
		case 'tourl': {
			reply(mess.wait)
			let {
				UploadFileUgu,
				webp2mp4File,
				TelegraPh
			} = require('./lib/uploader')
			let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
			if (/image/.test(mime)) {
				let anu = await TelegraPh(media)
				reply(util.format(anu))
			} else if (!/image/.test(mime)) {
				let anu = await UploadFileUgu(media)
				reply(util.format(anu))
			}
			await fs.unlinkSync(media)
		}
		break
		case 'imagenobgxxx':
		case 'removebgxxx':
		case 'remove-bgxxx': {
			if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
			let remobg = require('remove.bg')
			let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU', 'S258diZhcuFJooAtHTaPEn4T', '5LjfCVAp4vVNYiTjq9mXJWHF', 'aT7ibfUsGSwFyjaPZ9eoJc61', 'BY63t7Vx2tS68YZFY6AJ4HHF', '5Gdq1sSWSeyZzPMHqz7ENfi8', '86h6d6u4AXrst4BVMD9dzdGZ', 'xp8pSDavAgfE5XScqXo9UKHF', 'dWbCoCb3TacCP93imNEcPxcL']
			let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
			hmm = './src/remobg-' + getRandom('')
			localFile = await XeonBotInc.downloadAndSaveMediaMessage(quoted, hmm)
			outputFile = await './src/hremo-' + getRandom('.png')
			reply(mess.wait)
			remobg.removeBackgroundFromImageFile({
				path: localFile,
				apiKey: apinobg,
				size: "regular",
				type: "auto",
				scale: "100%",
				outputFile
			}).then(async result => {
				XeonBotInc.sendMessage(m.chat, {
					image: fs.readFileSync(outputFile),
					caption: mess.success
				}, {
					quoted: m
				})
				await fs.unlinkSync(localFile)
				await fs.unlinkSync(outputFile)
			})
		}
		break
		case 'yts':
		case 'ytsearch': {
			if (!text) return replay(`Example : ${prefix + command} Anime Story Whatsapp`)
			let yts = require("yt-search")
			let search = await yts(text)
			let teks = ' Search\n\n Result From ' + text + '\n\n'
			let no = 1
			for (let i of search.all) {
				teks += `🐶 No : ${no++}\n🐶 Type : ${i.type}\n🐶 Video ID : ${i.videoId}\n🐶 Title : ${i.title}\n🐶 Views : ${i.views}\n🐶 Duration : ${i.timestamp}\n🐶 Uploaded On : ${i.ago}\n🐶 Author : ${i.author.name}\n🐶 Url : ${i.url}\n\n─────────────────\n\n`
			}
			XeonBotInc.sendMessage(m.chat, {
				image: {
					url: search.all[0].thumbnail
				},
				caption: teks
			}, {
				quoted: m
			})
		}
		break
		case 'google': {
			if (!text) return reply(`Example : ${prefix + command} cheems shiba inu`)
			let google = require('google-it')
			google({
				'query': text
			}).then(res => {
				let teks = `Google Search Title : ${text}\n\n`
				for (let g of res) {
					teks += `🐶 *Title* : ${g.title}\n`
					teks += `🐶 *Description* : ${g.snippet}\n`
					teks += `🐶 *Link* : ${g.link}\n\n────────────────────────\n\n`
				}
				reply(teks)
			})
		}
		break
		case 'gimage':
		case 'googleimage': {
			if (!text) return reply(`Example : ${prefix + command} cheems`)
			let gis = require('g-i-s')
			gis(text, async (error, result) => {
				n = result
				images = n[Math.floor(Math.random() * n.length)].url
				let buttons = [{
					buttonId: `gimage ${text}`,
					buttonText: {
						displayText: '➡️➡️Next Image➡️➡️'
					},
					type: 1
				}]
				let buttonMessage = {
					image: {
						url: images
					},
					caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
					footer: XeonBotInc.user.name,
					buttons: buttons,
					headerType: 4
				}
				XeonBotInc.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			})
		}
		break
		case 'play':
		case 'song':
		case 'ytplay': {
			if (!text) return reply(`Example : ${prefix + command} Stay`)
			let yts = require("yt-search")
			let search = await yts(text)
			let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
			let buttons = [{
					buttonId: `ytmp3 ${anu.url}`,
					buttonText: {
						displayText: '🎶Audio🎶'
					},
					type: 1
				},
				{
					buttonId: `ytmp4 ${anu.url}`,
					buttonText: {
						displayText: '📽️Video📽️'
					},
					type: 1
				}
			]
			let buttonMessage = {
				image: {
					url: anu.thumbnail
				},
				caption: `
🐶 Title : ${anu.title}
🐶 Ext : Search
🐶 ID : ${anu.videoId}
🐶 Duration : ${anu.timestamp}
🐶 Viewes : ${anu.views}
🐶 Uploaded On : ${anu.ago}
🐶 Author : ${anu.author.name}
🐶 Channel : ${anu.author.url}
🐶 Description : ${anu.description}
🐶 Url : ${anu.url}`,
				footer: XeonBotInc.user.name,
				buttons: buttons,
				headerType: 4
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'ytmp3':
		case 'getmusic':
		case 'ytaudio': {
			let {
				yta
			} = require('./lib/y2mate')
			if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
			let quality = args[1] ? args[1] : '320kbps'
			let media = await yta(text, quality)
			if (media.filesize >= 999999) return reply('File Over Limit ' + util.format(media))
			XeonBotInc.sendImage(m.chat, media.thumb, `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${isUrl(text)}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '320kbps'}`, m)
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: media.dl_link
				},
				mimetype: 'audio/mpeg',
				fileName: `${media.title}.mp3`
			}, {
				quoted: m
			})
		}
		break
		case 'ytmp4':
		case 'getvideo':
		case 'ytvideo': {
			let {
				ytv
			} = require('./lib/y2mate')
			if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
			let quality = args[1] ? args[1] : '360p'
			let media = await ytv(text, quality)
			if (media.filesize >= 999999) return reply('File Over Limit ' + util.format(media))
			XeonBotInc.sendMessage(m.chat, {
				video: {
					url: media.dl_link
				},
				mimetype: 'video/mp4',
				fileName: `${media.title}.mp4`,
				caption: `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${isUrl(text)}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '360p'}`
			}, {
				quoted: m
			})
		}
		break
		case 'getmusicxxx': {
			let {
				yta
			} = require('./lib/y2mate')
			let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
			let quality = args[1] ? args[1] : '128kbps'
			let media = await yta(urls[text - 1], quality)
			if (media.filesize >= 100000) return reply('File Over Limit ' + util.format(media))
			XeonBotInc.sendImage(m.chat, media.thumb, `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${urls[text - 1]}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '128kbps'}`, m)
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: media.dl_link
				},
				mimetype: 'audio/mpeg',
				fileName: `${media.title}.mp3`
			}, {
				quoted: m
			})
		}
		break
		case 'getvideoxxx': {
			let {
				ytv
			} = require('./lib/y2mate')
			if (!text) throw `Example : ${prefix + command} 1`
			if (!m.quoted) throw 'Reply Message'
			if (!m.quoted.isBaileys) throw `Can Only Reply To Meessages From Bots`
			let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
			if (!urls) throw `Maybe The Message You Replied Does Not Contain The Video Search Result`
			let quality = args[1] ? args[1] : '360p'
			let media = await ytv(urls[text - 1], quality)
			if (media.filesize >= 100000) return reply('File Over Limit ' + util.format(media))
			XeonBotInc.sendMessage(m.chat, {
				video: {
					url: media.dl_link
				},
				mimetype: 'video/mp4',
				fileName: `${media.title}.mp4`,
				caption: `🐶 Title : ${media.title}\n🐶 File Size : ${media.filesizeF}\n🐶 Url : ${urls[text - 1]}\n🐶 Ext : MP3\n🐶 Resolution : ${args[1] || '360p'}`
			}, {
				quoted: m
			})
		}
		break
		case 'pinterest': {
			reply(mess.wait)
			let {
				pinterest
			} = require('./lib/scraper')
			anu = await pinterest(text)
			result = anu[Math.floor(Math.random() * anu.length)]
			XeonBotInc.sendMessage(m.chat, {
				image: {
					url: result
				},
				caption: '🐶 Media Url : ' + result
			}, {
				quoted: m
			})
		}
		break
		case 'webtonsearch':
		case 'webtoon':
			if (!text) return reply('What Are you Looking For??')
			await reply(mess.wait)
			dgxeon.Webtoons(q).then(async data => {
					let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*👍🏻 Like :* ${i.like}\n`
						txt += `*🤴🏻 Creator :* ${i.creator}\n`
						txt += `*🎥 Genre :* ${i.genre}\n`
						txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
					}
					await reply(txt)
				})
				.catch((err) => {
					reply(mess.error)
				})
			break
		case 'drakorxxx':
			if (!text) return reply('What Are You Looking For??')
			await reply(mess.wait)
			dgxeon.Drakor(`${text}`).then(async data => {
					let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*📆 Years :* ${i.years}\n`
						txt += `*🎥 Genre :* ${i.genre}\n`
						txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
					}
					await sendFileFromUrl(from, data[0].thumbnail, txt, m)
				})
				.catch((err) => {
					reply(mess.error)
				})
			break
		case 'animexxx': {
			if (!text) return reply(`What Anime Are You Looking For??`)
			await reply(mess.wait)
			dgxeon.Anime(q).then(async data => {
					let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
					}
					let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
					var but = [{
						"urlButton": {
							"displayText": "Watch🎥",
							"url": `${myweb}`
						}
					}]
					await XeonBotInc.send5ButLoc(from, txt, `© ${ownername}`, gam, but, {
						userJid: m.chat,
						quoted: m
					})
				})
				.catch((err) => {
					reply(mess.error)
				})
		}
		break
		case 'characterxxx':
		case 'karakterxxx':
			if (!text) return reply(`What Anime Character Are You Looking For??`)
			await reply(mess.wait)
			dgxeon.Character(q).then(async data => {
					let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
					for (let i of data) {
						txt += `*📫 Character :* ${i.character}\n`
						txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
					}
					let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
					var but = []
					await XeonBotInc.send5ButLoc(from, txt, `© ${ownername}`, gam, but, {
						userJid: m.chat,
						quoted: m
					})
				})
				.catch((err) => {
					reply(mess.error)
				})
			break
		case 'manga':
			if (!text) return reply(`What Manga Are You Looking For??`)
			await reply(mess.wait)
			dgxeon.Manga(`${text}`).then(async data => {
					let txt = `*------「 MANGA-SEARCH 」------*\n\n`
					for (let i of data) {
						txt += `*📫 Title :* ${i.judul}\n`
						txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
					}
					let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com', ''))
					var but = []
					await XeonBotInc.send5ButLoc(from, txt, `© ${ownername}`, gam, but, {
						userJid: m.chat,
						quoted: m
					})
				})
				.catch((err) => {
					reply(mess.error)
				})
			break
        case 'ahegao':
        case 'ass':
        case 'bdsm':
        case 'blowjob':
        case 'cuckold':
        case 'cum':
        case 'ero':
        case 'femdom':
        case 'foot':
        case 'gangbang':
        case 'glasses':
        case 'hentai':
        case 'hentaigif':
        case 'jahy':
        case 'maid':
        case 'manga':
        case 'masturbation':
        case 'mobilewall':
        case 'netorare':
        case 'nsfwneko':
        case 'sfwneko':
        case 'orgy':
        case 'panties':
        case 'pussy':
        case 'tentacles':
        case 'thighs':
        case 'yuri':
        case 'zettairyouiki':
        case 'blowjob': {
			reply(mess.wait)
			XeonBotInc.sendMessage(m.chat, {
				image: {
					url: api('zenz', '/api/morensfw/' + command, {}, 'apikey')
				},
				caption: 'Generated Random ' + command
			}, {
				quoted: m
			})
		}
		break
		case 'couplepp':
		case 'ppcouple': {
			reply(mess.wait)
			let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
			let random = anu[Math.floor(Math.random() * anu.length)]
			XeonBotInc.sendMessage(m.chat, {
				image: {
					url: random.male
				},
				caption: `Couple Male🙎🏻‍♂️`
			}, {
				quoted: m
			})
			XeonBotInc.sendMessage(m.chat, {
				image: {
					url: random.female
				},
				caption: `Couple Female🙎🏻‍♀️`
			}, {
				quoted: m
			})
		}
		break
		case 'coffee':
		case 'kopi': {
			let buttons = [{
				buttonId: `coffe`,
				buttonText: {
					displayText: '➡️Next Image➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: 'https://coffee.alexflipnote.dev/random'
				},
				caption: `☕ Random Coffee`,
				footer: XeonBotInc.user.name,
				buttons: buttons,
				headerType: 4
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'wallpaper': {
			if (!text) return reply(`Enter Query Title`)
			let {
				wallpaper
			} = require('./lib/scraper')
			anu = await wallpaper(text)
			result = anu[Math.floor(Math.random() * anu.length)]
			let buttons = [{
				buttonId: `wallpaper ${text}`,
				buttonText: {
					displayText: '➡️Next Image➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: result.image[0]
				},
				caption: `🐶 Title : ${result.title}\n🐶 Category : ${result.type}\n🐶 Detail : ${result.source}\n🐶 Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
				footer: XeonBotInc.user.name,
				buttons: buttons,
				headerType: 4
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'wikimedia': {
			if (!text) return reply(`Enter Query Title`)
			let {
				wikimedia
			} = require('./lib/scraper')
			anu = await wikimedia(text)
			result = anu[Math.floor(Math.random() * anu.length)]
			let buttons = [{
				buttonId: `wikimedia ${text}`,
				buttonText: {
					displayText: '➡️Next Image➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: result.image
				},
				caption: `🐶 Title : ${result.title}\n🐶 Source : ${result.source}\n🐶 Media Url : ${result.image}`,
				footer: XeonBotInc.user.name,
				buttons: buttons,
				headerType: 4
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'quotesanime':
		case 'animequotes':
		case 'animequote':
		case 'quoteanime': {
			let {
				quotesAnime
			} = require('./lib/scraper')
			let anu = await quotesAnime()
			result = anu[Math.floor(Math.random() * anu.length)]
			let buttons = [{
				buttonId: `quotesanime`,
				buttonText: {
					displayText: '➡️Next➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 2
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'motivasi':
		case 'motivationalquote':
		case 'bucinquote':
		case 'katasenja':
		case 'puisi': {
			let anu = await fetchJson(api('zenz', '/randomtext/' + command, {}, 'apikey'))
			let buttons = [{
				buttonId: `motivasi`,
				buttonText: {
					displayText: '➡️Next➡️'
				},
				type: 1
			}]
			let buttonMessage = {
				text: anu.result.message,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 2
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case '3dchristmas':
		case '3ddeepsea':
		case 'americanflag':
		case '3dscifi':
		case '3drainbow':
		case '3dwaterpipe':
		case 'halloweenskeleton':
		case 'sketch':
		case 'bluecircuit':
		case 'space':
		case 'metallic':
		case 'fiction':
		case 'greenhorror':
		case 'transformer':
		case 'berry':
		case 'thunder':
		case 'magma':
		case '3dcrackedstone':
		case '3dneonlight':
		case 'impressiveglitch':
		case 'naturalleaves':
		case 'fireworksparkle':
		case 'matrix':
		case 'dropwater':
		case 'harrypotter':
		case 'foggywindow':
		case 'neondevils':
		case 'christmasholiday':
		case '3dgradient':
		case 'blackpink':
		case 'gluetext': {
			if (!text) return reply(`Enter Text, Example : ${prefix + command} Xeon`)
			reply(mess.wait)
			XeonBotInc.sendMessage(m.chat, {
				image: {
					url: api('zenz', '/textpro/' + command, {
						text: text
					}, 'apikey')
				},
				caption: `Text Pro ${command}`
			}, {
				quoted: m
			})
		}
		break
		case 'nomerhoki':
		case 'nomorhoki': {
			if (!Number(text)) return reply(`Example : ${prefix + command} 916909137213`)
			let anu = await primbon.nomer_hoki(Number(text))
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Phone Number :* ${anu.message.nomer_hp}\n🐶 *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n🐶 *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n🐶 *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
		}
		break
		case 'artimimpi':
		case 'tafsirmimpi': {
			if (!text) return reply(`Example : ${prefix + command} belanja`)
			let anu = await primbon.tafsir_mimpi(text)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Dream :* ${anu.message.mimpi}\n🐶 *Meaning :* ${anu.message.arti}\n🐶 *Solution :* ${anu.message.solusi}`, m)
		}
		break
		case 'ramalanjodoh':
		case 'ramaljodoh': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Your Name :* ${anu.message.nama_anda.nama}\n🐶 *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n🐶 *Couple Name :* ${anu.message.nama_pasangan.nama}\n🐶 *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'ramalanjodohbali':
		case 'ramaljodohbali': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Your Name :* ${anu.message.nama_anda.nama}\n🐶 *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n🐶 *Couple Name :* ${anu.message.nama_pasangan.nama}\n🐶 *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'suamiistri': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Husband's Name :* ${anu.message.suami.nama}\n🐶 *Husband Born :* ${anu.message.suami.tgl_lahir}\n🐶 *Wife's Name :* ${anu.message.istri.nama}\n🐶 *Born Wife :* ${anu.message.istri.tgl_lahir}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'ramalancinta':
		case 'ramalcinta': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
			let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
			let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Your Name :* ${anu.message.nama_anda.nama}\n🐶 *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n🐶 *Couple Name :* ${anu.message.nama_pasangan.nama}\n🐶 *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n🐶 *Positive Side :* ${anu.message.sisi_positif}\n🐶 *Negative Side :* ${anu.message.sisi_negatif}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'artinama': {
			if (!text) throw `Example : ${prefix + command} Dika Ardianta`
			let anu = await primbon.arti_nama(text)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Meaning :* ${anu.message.arti}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'kecocokannama':
		case 'cocoknama': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
			let [nama, tgl, bln, thn] = text.split`,`
			let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Life Path :* ${anu.message.life_path}\n🐶 *Destiny :* ${anu.message.destiny}\n🐶 *Destiny Desire :* ${anu.message.destiny_desire}\n🐶 *Personality :* ${anu.message.personality}\n🐶 *Percentage :* ${anu.message.persentase_kecocokan}`, m)
		}
		break
		case 'kecocokanpasangan':
		case 'cocokpasangan':
		case 'pasangan': {
			if (!text) throw `Example : ${prefix + command} Dika|Novia`
			let [nama1, nama2] = text.split`|`
			let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendImage(m.chat, anu.message.gambar, `🐶 *Your Name :* ${anu.message.nama_anda}\n🐶 *Couple Name :* ${anu.message.nama_pasangan}\n🐶 *Positive Side :* ${anu.message.sisi_positif}\n🐶 *Negative Side :* ${anu.message.sisi_negatif}`, m)
		}
		break
		case 'jadianpernikahan':
		case 'jadiannikah': {
			if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Wedding Date :* ${anu.message.tanggal}\n🐶 *Characteristics :* ${anu.message.karakteristik}`, m)
		}
		break
		case 'sifatusaha': {
			if (!ext) throw `Example : ${prefix+ command} 28, 12, 2021`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.hari_lahir}\n🐶 *Business :* ${anu.message.usaha}`, m)
		}
		break
		case 'rejeki':
		case 'rezeki': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.hari_lahir}\n🐶 *Sustenance :* ${anu.message.rejeki}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'pekerjaan':
		case 'kerja': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.hari_lahir}\n🐶 *Profession :* ${anu.message.pekerjaan}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'ramalannasib':
		case 'ramalnasib':
		case 'nasib': {
			if (!text) throw `Example : 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.ramalan_nasib(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Analysis :* ${anu.message.analisa}\n🐶 *Root Number :* ${anu.message.angka_akar}\n🐶 *Nature :* ${anu.message.sifat}\n🐶 *Element :* ${anu.message.elemen}\n🐶 *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
		}
		break
		case 'potensipenyakit':
		case 'penyakit': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Analysis :* ${anu.message.analisa}\n🐶 *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'artitarot':
		case 'tarot': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendImage(m.chat, anu.message.image, `🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Tarot Symbol :* ${anu.message.simbol_tarot}\n🐶 *Meaning :* ${anu.message.arti}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'fengshui': {
			if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
			let [nama, gender, tahun] = text.split`,`
			let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tahun_lahir}\n🐶 *Gender :* ${anu.message.jenis_kelamin}\n🐶 *Kua Number :* ${anu.message.angka_kua}\n🐶 *Group :* ${anu.message.kelompok}\n🐶 *Character :* ${anu.message.karakter}\n🐶 *Good Sector :* ${anu.message.sektor_baik}\n🐶 *Bad Sector :* ${anu.message.sektor_buruk}`, m)
		}
		break
		case 'haribaik': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.petung_hari_baik(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *When Challenged :* ${anu.message.kala_tinantang}\n🐶 *Info :* ${anu.message.info}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'harisangar':
		case 'taliwangke': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Results :* ${anu.message.result}\n🐶 *Info :* ${anu.message.info}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'harinaas':
		case 'harisial': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Day Of Birth :* ${anu.message.hari_lahir}\n🐶 *Date Of Birth :* ${anu.message.tgl_lahir}\n🐶 *Fateful Day :* ${anu.message.hari_naas}\n🐶 *Info :* ${anu.message.catatan}\n🐶 *Notes :* ${anu.message.info}`, m)
		}
		break
		case 'nagahari':
		case 'harinaga': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Day Of Birth :* ${anu.message.hari_lahir}\n🐶 *Date Of Birth :* ${anu.message.tgl_lahir}\n🐶 *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'arahrejeki':
		case 'arahrezeki': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Day Of Birth :* ${anu.message.hari_lahir}\n🐶 *Date Of Birth :* ${anu.message.tgl_lahir}\n🐶 *Sustenance Direction :* ${anu.message.arah_rejeki}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'peruntungan': {
			if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
			let [nama, tgl, bln, thn, untuk] = text.split`,`
			let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'weton':
		case 'wetonjawa': {
			if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.weton_jawa(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Date :* ${anu.message.tanggal}\n🐶 *Number Of Neptune :* ${anu.message.jumlah_neptu}\n🐶 *Day Character :* ${anu.message.watak_hari}\n🐶 *Dragon Day :* ${anu.message.naga_hari}\n🐶 *Good Hour :* ${anu.message.jam_baik}\n🐶 *Birth Character :* ${anu.message.watak_kelahiran}`, m)
		}
		break
		case 'sifat':
		case 'karakter': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
			let [nama, tgl, bln, thn] = text.split`,`
			let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Lifeline :* ${anu.message.garis_hidup}`, m)
		}
		break
		case 'keberuntungan': {
			if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
			let [nama, tgl, bln, thn] = text.split`,`
			let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Name :* ${anu.message.nama}\n🐶 *Born :* ${anu.message.tgl_lahir}\n🐶 *Results :* ${anu.message.result}`, m)
		}
		break
		case 'memancing': {
			if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
			let [tgl, bln, thn] = text.split`,`
			let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Date :* ${anu.message.tgl_memancing}\n🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'masasubur': {
			if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} First Day Of Menstruation Cycle`
			let [tgl, bln, thn, siklus] = text.split`,`
			let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Results :* ${anu.message.result}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'zodiak':
		case 'zodiac': {
			if (!text) throw `Example : ${prefix+ command} 7 7 2005`
			let zodiak = [
				["capricorn", new Date(1970, 0, 1)],
				["aquarius", new Date(1970, 0, 20)],
				["pisces", new Date(1970, 1, 19)],
				["aries", new Date(1970, 2, 21)],
				["taurus", new Date(1970, 3, 21)],
				["gemini", new Date(1970, 4, 21)],
				["cancer", new Date(1970, 5, 22)],
				["leo", new Date(1970, 6, 23)],
				["virgo", new Date(1970, 7, 23)],
				["libra", new Date(1970, 8, 23)],
				["scorpio", new Date(1970, 9, 23)],
				["sagittarius", new Date(1970, 10, 22)],
				["capricorn", new Date(1970, 11, 22)]
			].reverse()

			function getZodiac(month, day) {
				let d = new Date(1970, month - 1, day)
				return zodiak.find(([_, _d]) => d >= _d)[0]
			}
			let date = new Date(text)
			if (date == 'Invalid Date') throw date
			let d = new Date()
			let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
			let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

			let zodiac = await getZodiac(birth[1], birth[2])

			let anu = await primbon.zodiak(zodiac)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Zodiac :* ${anu.message.zodiak}\n🐶 *Number :* ${anu.message.nomor_keberuntungan}\n🐶 *Aroma :* ${anu.message.aroma_keberuntungan}\n🐶 *Planet :* ${anu.message.planet_yang_mengitari}\n🐶 *Flower :* ${anu.message.bunga_keberuntungan}\n🐶 *Color :* ${anu.message.warna_keberuntungan}\n🐶 *Stone :* ${anu.message.batu_keberuntungan}\n🐶 *Element :* ${anu.message.elemen_keberuntungan}\n🐶 *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n🐶 *Notes :* ${anu.message.catatan}`, m)
		}
		break
		case 'shio': {
			if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
			let anu = await primbon.shio(text)
			if (anu.status == false) return reply(anu.message)
			XeonBotInc.sendText(m.chat, `🐶 *Results :* ${anu.message}`, m)
		}
		break
		case 'stalker':
		case 'stalk': {
			if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply('Your Daily Limit Has Expired')
			if (!text) return reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
			let [type, id, zone] = args
			if (type.toLowerCase() == 'ff') {
				if (!id) return reply(`No Query id, Example ${prefix + command} ff 552992060`)
				let anu = await fetchJson(api('zenz', '/api/nickff', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'ml') {
				if (!id) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
				if (!zone) return reply(`No Query id, Example : ${prefix + command} ml 214885010 2253`)
				let anu = await fetchJson(api('zenz', '/api/nickml', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id,
					query2: zone
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'aov') {
				if (!id) return reply(`No Query id, Example ${prefix + command} aov 293306941441181`)
				let anu = await fetchJson(api('zenz', '/api/nickaov', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'cod') {
				if (!id) return reply(`No Query id, Example ${prefix + command} cod 6290150021186841472`)
				let anu = await fetchJson(api('zenz', '/api/nickcod', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'pb') {
				if (!id) return reply(`No Query id, Example ${prefix + command} pb riio46`)
				let anu = await fetchJson(api('zenz', '/api/nickpb', {
					apikey: global.APIKeys[global.APIs['zenz']],
					query: id
				}))
				if (anu.status == false) return reply(anu.result.message)
				reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'ig') {
				if (!id) return reply(`No Query username, Example : ${prefix + command} ig josephxeon13`)
				let {
					result: anu
				} = await fetchJson(api('zenz', '/api/stalker/ig', {
					username: id
				}, 'apikey'))
				if (anu.status == false) return reply(anu.result.message)
				XeonBotInc.sendMedia(m.chat, anu.caption.profile_hd, '', `🐶 Full Name : ${anu.caption.full_name}\n🐶 User Name : ${anu.caption.user_name}\n🐶 ID ${anu.caption.user_id}\n🐶 Following : ${anu.caption.followers}\n🐶 Followers : ${anu.caption.following}\n🐶 Bussines : ${anu.caption.bussines}\n🐶 Professional : ${anu.caption.profesional}\n🐶 Verified : ${anu.caption.verified}\n🐶 Private : ${anu.caption.private}\n🐶 Bio : ${anu.caption.biography}\n🐶 Bio Url : ${anu.caption.bio_url}`, m)
				db.data.users[m.sender].limit -= 1
			} else if (type.toLowerCase() == 'npm') {
				if (!id) return reply(`No Query username, Example : ${prefix + command} npm scrape-primbon`)
				let {
					result: anu
				} = await fetchJson(api('zenz', '/api/stalker/npm', {
					query: id
				}, 'apikey'))
				if (anu.status == false) return reply(anu.result.message)
				reply(`🐶 Name : ${anu.name}\n🐶 Version : ${Object.keys(anu.versions)}\n🐶 Created : ${tanggal(anu.time.created)}\n🐶 Modified : ${tanggal(anu.time.modified)}\n🐶 Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n🐶 Description : ${anu.description}\n🐶 Homepage : ${anu.homepage}\n🐶 Keywords : ${anu.keywords}\n🐶 Author : ${anu.author.name}\n🐶 License : ${anu.license}\n🐶 Readme : ${anu.readme}`)
				db.data.users[m.sender].limit -= 1
			} else {
				reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
			}
		}
		break
		case 'tiktokd':
		case 'tiktoknowmx': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/tiktok', {
				url: text
			}, 'apikey'))
			let buttons = [{
					buttonId: `tiktokwm ${text}`,
					buttonText: {
						displayText: '🥬With Watermark🥬'
					},
					type: 1
				},
				{
					buttonId: `tiktokmp3 ${text}`,
					buttonText: {
						displayText: '🎵Audio🎵'
					},
					type: 1
				}
			]
			let buttonMessage = {
				video: {
					url: anu.result.nowatermark
				},
				caption: `Download From ${text}`,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 5
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'tiktokwmx':
		case 'tiktokwatermarkx': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/tiktok', {
				url: text
			}, 'apikey'))
			let buttons = [{
					buttonId: `tiktoknowm ${text}`,
					buttonText: {
						displayText: '🥬No Watermark🥬'
					},
					type: 1
				},
				{
					buttonId: `tiktokmp3 ${text}`,
					buttonText: {
						displayText: '🎵Audio🎵'
					},
					type: 1
				}
			]
			let buttonMessage = {
				video: {
					url: anu.result.watermark
				},
				caption: `Download From ${text}`,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 5
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'tiktokmp3x':
		case 'tiktokaudiox': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/musically', {
				url: text
			}, 'apikey'))
			let buttons = [{
					buttonId: `tiktoknowm ${text}`,
					buttonText: {
						displayText: '🥬No Watermark🥬'
					},
					type: 1
				},
				{
					buttonId: `tiktokwm ${text}`,
					buttonText: {
						displayText: '🥬With Watermark🥬'
					},
					type: 1
				}
			]
			let buttonMessage = {
				text: `Download From ${text}`,
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 2
			}
			let msg = await XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: anu.result.audio
				},
				mimetype: 'audio/mpeg'
			}, {
				quoted: msg
			})
		}
		break
		case 'instagramx':
		case 'igx':
		case 'ig':
		case 'instagram':
		case 'igdlx': {
			if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'

			let urlnya = text

			hx.igdl(urlnya)

				.then(async (result) => {
					XeonBotInc.sendMessage(m.chat, {
						image: {
							url: result.user.profilePicUrl
						},
						jpegThumbnail: await getBuffer(result.user.profilePicUrl),
						caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Jumlah Media :* ${result.medias.length}\n*⬤ Url :* ${text}`
					}, {
						quoted: m
					})
					for (let i of result.medias) {
						if (i.url.includes('mp4')) {
							let link = await getBuffer(i.url)
							XeonBotInc.sendMessage(m.chat, {
								video: link,
								jpegThumbnail: await getBuffer(i.preview),
								caption: `*Instagram ${i.type}*`
							}, {
								quoted: m
							})
						} else {
							let link = await getBuffer(i.url)
							XeonBotInc.sendMessage(m.chat, {
								image: link,
								jpegThumbnail: await getBuffer(i.preview),
								caption: `*Instagram ${i.type}*`
							}, {
								quoted: m
							})
						}
					}
				}).catch((err) => m.reply(`*Sorry Instagram Instagram ${text} Not found*, ${err}`))
		}
		break
        case 'igs': 
        case 'igstory': 
        case 'instagramstory': {       
            let urlnya = text
            hx.igstory(urlnya).then(result => {
                XeonBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Media :* ${result.medias.length}\n*⬤ Bio :* ${result.user.biography}` }, { quoted: m })             	                      	            
                for(let i of result.medias) {
                    if(i.url.includes('mp4')){
                        let link = await getBuffer(i.url)
                        XeonBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 
                    } else {
                        let link = await getBuffer(i.url)
                        XeonBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })
                    }
            }

            }).catch((err) => m.reply(`*Sorry Story Instagram user named ${text} not found*, ${err}`))
        }		
        break
		case 'joox':
		case 'jooxdl': {
			if (!text) return reply(`No Query Title`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/joox', {
				query: text
			}, 'apikey'))
			let msg = await XeonBotInc.sendImage(m.chat, anu.result.img, `🐶 Title : ${anu.result.lagu}\n🐶 Album : ${anu.result.album}\n🐶 Singer : ${anu.result.penyanyi}\n🐶 Publish : ${anu.result.publish}\n🐶 Lyrics :\n${anu.result.lirik.result}`, m)
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: anu.result.mp4aLink
				},
				mimetype: 'audio/mpeg',
				fileName: anu.result.lagu + '.m4a'
			}, {
				quoted: msg
			})
		}
		break
		case 'soundcloud':
		case 'scdl': {
			if (!text) return reply(`No Query Title`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/downloader/soundcloud', {
				url: isUrl(text)[0]
			}, 'apikey'))
			let msg = await XeonBotInc.sendImage(m.chat, anu.result.thumb, `🐶 Title : ${anu.result.title}\n🐶 Url : ${isUrl(text)[0]}`)
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: anu.result.url
				},
				mimetype: 'audio/mpeg',
				fileName: anu.result.title + '.m4a'
			}, {
				quoted: msg
			})
		}
		break
		case 'twitdlx':
		case 'twitterx': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/api/downloader/twitter', {
				url: text
			}, 'apikey'))
			let buttons = [{
				buttonId: `twittermp3 ${text}`,
				buttonText: {
					displayText: '🎵Audio🎵'
				},
				type: 1
			}]
			let buttonMessage = {
				video: {
					url: anu.result.HD || anu.result.SD
				},
				caption: util.format(anu.result),
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 5
			}
			XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
		}
		break
		case 'twittermp3x':
		case 'twitteraudiox': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/api/downloader/twitter', {
				url: text
			}, 'apikey'))
			let buttons = [{
				buttonId: `twitter ${text}`,
				buttonText: {
					displayText: '📽️Video📽️'
				},
				type: 1
			}]
			let buttonMessage = {
				image: {
					url: anu.result.thumb
				},
				caption: util.format(anu.result),
				footer: 'Press The Button Below',
				buttons: buttons,
				headerType: 4
			}
			let msg = await XeonBotInc.sendMessage(m.chat, buttonMessage, {
				quoted: m
			})
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: anu.result.audio
				}
			}, {
				quoted: msg
			})
		}
		break
		case 'fbdlx':
		case 'fbx':
		case 'facebookx': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/api/downloader/facebook', {
				url: text
			}, 'apikey'))
			XeonBotInc.sendMessage(m.chat, {
				video: {
					url: anu.result.url
				},
				caption: `🐶 Title : ${anu.result.title}`
			}, {
				quoted: m
			})
		}
		break
		case 'pindl':
		case 'pinterestdl': {
			if (!text) return reply(`Enter Query Link!`)
			reply(mess.wait)
			let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', {
				url: text
			}, 'apikey'))
			XeonBotInc.sendMessage(m.chat, {
				video: {
					url: anu.result
				},
				caption: `Download From ${text}`
			}, {
				quoted: m
			})
		}
		break
		case 'umma':
		case 'ummadl': {
			if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
			let {
				umma
			} = require('./lib) scraper')
			let anu = await umma(isUrl(text)[0])
			if (anu.type == 'video') {
				let buttons = [{
						buttonId: `ytmp3 ${anu.media[0]} 128kbps`,
						buttonText: {
							displayText: '🎵Audio🎵'
						},
						type: 1
					},
					{
						buttonId: `ytmp4 ${anu.media[0]} 360p`,
						buttonText: {
							displayText: '📽️Video📽️'
						},
						type: 1
					}
				]
				let buttonMessage = {
					image: {
						url: anu.author.profilePic
					},
					caption: `
🐶 Title : ${anu.title}
🐶 Author : ${anu.author.name}
🐶 Like : ${anu.like}
🐶 Caption : ${anu.caption}
🐶 Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
					footer: XeonBotInc.user.name,
					buttons,
					headerType: 4
				}
				XeonBotInc.sendMessage(m.chat, buttonMessage, {
					quoted: m
				})
			} else if (anu.type == 'image') {
				anu.media.map(async (url) => {
					XeonBotInc.sendMessage(m.chat, {
						image: {
							url
						},
						caption: `🐶 Title : ${anu.title}\n🐶 Author : ${anu.author.name}\n🐶 Like : ${anu.like}\n🐶 Caption : ${anu.caption}`
					}, {
						quoted: m
					})
				})
			}
		}
		break
		case 'ringtone': {
			if (!text) return reply(`Example : ${prefix + command} black rover`)
			let {
				ringtone
			} = require('./lib/scraper')
			let anu = await ringtone(text)
			let result = anu[Math.floor(Math.random() * anu.length)]
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: result.audio
				},
				fileName: result.title + '.mp3',
				mimetype: 'audio/mpeg'
			}, {
				quoted: m
			})
		}
		break
		case 'iqraxxx': {
			oh = `Example : ${prefix + command} 3\n\nIQRA Which Is Available : 1,2,3,4,5,6`
			if (!text) return reply(oh)
			yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
			XeonBotInc.sendMessage(m.chat, {
				document: yy,
				mimetype: 'application/pdf',
				fileName: `iqra${text}.pdf`
			}, {
				quoted: m
			}).catch((err) => reply(oh))
		}
		break
		case 'juzamma': {
			if (args[0] === 'pdf') {
				reply(mess.wait)
				XeonBotInc.sendMessage(m.chat, {
					document: {
						url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'
					},
					mimetype: 'application/pdf',
					fileName: 'juz-amma-arab-latin-indonesia.pdf'
				}, {
					quoted: m
				})
			} else if (args[0] === 'docx') {
				reply(mess.wait)
				XeonBotInc.sendMessage(m.chat, {
					document: {
						url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'
					},
					mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
					fileName: 'juz-amma-arab-latin-indonesia.docx'
				}, {
					quoted: m
				})
			} else if (args[0] === 'pptx') {
				reply(mess.wait)
				XeonBotInc.sendMessage(m.chat, {
					document: {
						url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'
					},
					mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
					fileName: 'juz-amma-arab-latin-indonesia.pptx'
				}, {
					quoted: m
				})
			} else if (args[0] === 'xlsx') {
				reply(mess.wait)
				XeonBotInc.sendMessage(m.chat, {
					document: {
						url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'
					},
					mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
					fileName: 'juz-amma-arab-latin-indonesia.xlsx'
				}, {
					quoted: m
				})
			} else {
				reply(`What Format Do You Want? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
			}
		}
		break
		case 'hadisxxx':
		case 'hadistxxx': {
			if (!args[0]) return reply(`Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
			if (!args[1]) return reply(`Which Hadith??\n\nExample:\n${prefix + command} muslim 1`)
			try {
				let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
				let {
					number,
					arab,
					id
				} = res.find(v => v.number == args[1])
				reply(`No. ${number}

${arab}

${id}`)
			} catch (e) {
				reply(`Hadith Not Found !`)
			}
		}
		break
		case 'alquranxxx': {
			if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
			if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is Surah Al-Fatihah Verse 2 Along With The Audio, And The Verse Is Just 1`)
			let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
			let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
			reply(txt)
			XeonBotInc.sendMessage(m.chat, {
				audio: {
					url: res.result.data.audio.primary
				},
				mimetype: 'audio/mpeg'
			}, {
				quoted: m
			})
		}
		break
		case 'tafsirsurahxxx': {
			if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
			if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
			let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
			let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
			reply(txt)
		}
		break
		case 'bass':
		case 'blown':
		case 'deep':
		case 'earrape':
		case 'fast':
		case 'fat':
		case 'nightcore':
		case 'reverse':
		case 'robot':
		case 'slow':
		case 'smooth':
		case 'squirrel':
			try {
				let set
				if(/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
				if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
				if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
				if (/earrape/.test(command)) set = '-af volume=12'
				if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
				if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
				if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
				if (/reverse/.test(command)) set = '-filter_complex "areverse"'
				if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
				if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
				if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
				if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
				if (/audio/.test(mime)) {
					reply(mess.wait)
					let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
					let ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply(err)
						let buff = fs.readFileSync(ran)
						XeonBotInc.sendMessage(m.chat, {
							audio: buff,
							mimetype: 'audio/mpeg'
						}, {
							quoted: m
						})
						fs.unlinkSync(ran)
					})
				} else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
			} catch (e) {
				reply(e)
			}
			break
        case 'public': {
			if (!isCreator) return replay(`${mess.owner}`)
			XeonBotInc.public = true
			reply('Successful Change To Public Usage')
		}
		break
		case 'self': {
			if (!isCreator) return replay(`${mess.owner}`)
			XeonBotInc.public = false
			reply('Successful Change To Self Usage')
		}
		break
		case 'ping':
		case 'botstatus':
		case 'statusbot': {
			const used = process.memoryUsage()
			const cpus = os.cpus().map(cpu => {
				cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
				return cpu
			})
			const cpu = cpus.reduce((last, cpu, _, {
				length
			}) => {
				last.total += cpu.total
				last.speed += cpu.speed / length
				last.times.user += cpu.times.user
				last.times.nice += cpu.times.nice
				last.times.sys += cpu.times.sys
				last.times.idle += cpu.times.idle
				last.times.irq += cpu.times.irq
				return last
			}, {
				speed: 0,
				total: 0,
				times: {
					user: 0,
					nice: 0,
					sys: 0,
					idle: 0,
					irq: 0
				}
			})
			let timestamp = speed()
			let latensi = speed() - timestamp
			neww = performance.now()
			oldd = performance.now()
			respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
			reply(respon)
		}
		break
		case 'speedtest': {
			reply('Testing Speed...')
			let cp = require('child_process')
			let {
				promisify
			} = require('util')
			let exec = promisify(cp.exec).bind(cp)
			let o
			try {
				o = await exec('python3 speed.py')
			} catch (e) {
				o = e
			} finally {
				let {
					stdout,
					stderr
				} = o
				if (stdout.trim()) reply(stdout)
				if (stderr.trim()) reply(stderr)
			}
		}
		break
        case 'cry':
		case 'kill':
		case 'hug':
		case 'pat':
		case 'lick':
		case 'kiss':
		case 'bite':
		case 'yeet':
		case 'neko':
		case 'bully':
		case 'bonk':
		case 'wink':
		case 'poke':
		case 'nom':
		case 'slap':
		case 'smile':
		case 'wave':
		case 'awoo':
		case 'blush':
		case 'smug':
		case 'glomp':
		case 'happy':
		case 'dance':
		case 'cringe':
		case 'cuddle':
		case 'highfive':
		case 'shinobu':
		case 'megumin':
		case 'handhold':
			reply(mess.wait)
			axios.get(`https://api.waifu.pics/sfw/${command}`)
				.then(({
					data
				}) => {
					XeonBotInc.sendImageAsSticker(m.chat, data.url, m, {
						packname: global.packname,
						author: global.author
					})
				})
			break
		case 'waifu':
		case 'loli':
			reply(mess.wait)
			axios.get(`https://api.waifu.pics/sfw/waifu`)
				.then(({
					data
				}) => {
					XeonBotInc.sendImage(m.chat, data.url, mess.success, m)
				})
			break
		case "setmenuxxx":
			if (!text) return reply("1. image\n2. list\n3. catalog\n\nExample .setmenu image")
			if (q == "image") {
				typemenu = 'image'
				reply("Success Changing Menu To " + q)
			} else if (q == "list") {
				typemenu = 'list'
				reply("Success Changing Menu To " + q)
			} else if (q == "catalog") {
				typemenu = 'catalog'
				reply("Success Changing Menu To " + q)
			}
			break
		case 'list':
		case 'menu':
		case 'help':
		case '?': {
			timestampe = speed();
			latensie = speed() - timestampe
			anu = ``
			const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				templateMessage: {
					hydratedTemplate: {
						hydratedContentText: anu,
						locationMessage: {
							jpegThumbnail: fs.readFileSync('./XeonMedia/cheemspic.jpg')
						},
						hydratedFooterText: `
┌─❖
│「 Hi 👋 」
└┬❖ 「 ${pushname} 」
┌┤✑  How Are You? 😄
│└───────────────┈ ⳹
│ 「 BOT INFO 」
│✙ 𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│✙ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│✙ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${global.botname}
│✙ 𝗢𝘄??𝗲𝗿 𝗡𝗮𝗺𝗲 : ${global.ownername}
│✙ 𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿 : ${global.owner}
│✙ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│✙ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│✙ 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
└┬──────────────┈ ⳹
   │✑  Please Select The Button Below
   └───────────────┈ ⳹`,
						hydratedButtons: [ {
							quickReplyButton: {
								displayText: '🍇All Menu🍇',
								id: `${prefix}allmenu`
							}
						}, {
							quickReplyButton: {
								displayText: '🍒List Menu🍒',
								id: `${prefix}command`
							}
						}, ]
					}
				}
			}), {
				userJid: m.chat
			})
			XeonBotInc.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
		case 'command': {
			let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
				listMessage: {
					title: `Hi ${pushname}`,
					description: `Please Choose The Menu\n\n`,
					buttonText: "Menu",
					footerText: `${global.footer}`,
					listType: "SINGLE_SELECT",
					sections: [{
							"title": "Main Features",
							"rows": [{
								"title": "Main Menu",
								"description": "Displays The List Of Main Features",
								"rowId": `${prefix}mainmenu`
							}]
						},
						{
							"title": "Bot Features",
							"rows": [{
									"title": "All Menu",
									"description": "Displays The List Of All The Features!",
									"rowId": `${prefix}allmenu`
								},
								{
									"title": "Owner Menu",
									"description": "Displays The List Of Owner Features",
									"rowId": `${prefix}ownermenu`
								},
								{
									"title": "Group Menu",
									"description": "Displays The List Of Main Features",
									"rowId": `${prefix}groupmenu`
								},
								{
									"title": "Rpg Menu",
									"description": "Displays The List Of Rpg Features",
									"rowId": `${prefix}rpgmenu`
								},
								{
									"title": "Download Menu",
									"description": "Displays The List Of Download Features",
									"rowId": `${prefix}downloadmenu`
								},
								{
									"title": "Search Menu",
									"description": "Displays The List Of Searching Features",
									"rowId": `${prefix}searchmenu`
								},
								{
									"title": "Random Menu",
									"description": "Displays The List Of Random Features",
									"rowId": `${prefix}randommenu`
								},
								{
									"title": "Random Anime Menu",
									"description": "Displays The List Of Random Anime Features",
									"rowId": `${prefix}randomanimemenu`
								},
								{
									"title": "Fun Menu",
									"description": "Displays The List Of Fun Features",
									"rowId": `${prefix}funmenu`
								},
								{
									"title": "Convert Menu",
									"description": "Displays The List Of Convert Features",
									"rowId": `${prefix}convertmenu`
								},
								{
									"title": "Database Menu",
									"description": "Displays The List Of Database Features",
									"rowId": `${prefix}databasemenu`
								},
								{
									"title": "Voice Changer Menu",
									"description": "Displays The List Of Voice Changing Features",
									"rowId": `${prefix}voicechangermenu`
								},
								{
									"title": "Islamic Menu",
									"description": "Displays The List Of Islamic Features",
									"rowId": `${prefix}islamicmenu`
								},
								{
									"title": "Horoscope Menu",
									"description": "Displays The List Of Horoscope Features",
									"rowId": `${prefix}horoscopemenu`
								}
							]
						},
						{
							"title": "Chat With Fellow Users",
							"rows": [{
								"title": "Anonymous Chat Menu",
								"description": "Displays The List Of Anonymous Chat Features",
								"rowId": `${prefix}anonymouschatmenu`
							}]
						}
					],
					listType: 1
				}
			}), {})
			XeonBotInc.relayMessage(m.chat, template.message, {
				messageId: template.key.id
			})
		}
		break
        default:
			if (budy.startsWith('=>')) {
				if (!isCreator) return reply(mess.owner)

				function Return(sul) {
					sat = JSON.stringify(sul, null, 2)
					bang = util.format(sat)
					if (sat == undefined) {
						bang = util.format(sul)
					}
					reply(bang)
				}
				try {
					reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
				} catch (e) {
					reply(String(e))
				}
			}

			if (budy.startsWith('>')) {
				if (!isCreator) return reply(mess.owner)
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await reply(evaled)
				} catch (err) {
					await reply(String(err))
				}
			}

			if (budy.startsWith('$')) {
				if (!isCreator) return reply(mess.owner)
				exec(budy.slice(2), (err, stdout) => {
					if (err) return reply(err)
					if (stdout) return reply(stdout)
				})
			}

			if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
				this.anonymous = this.anonymous ? this.anonymous : {}
				let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
				if (room) {
					if (/^.*(next|leave|start)/.test(m.text)) return
					if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
					let other = [room.a, room.b].find(user => user !== m.sender)
					m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
						contextInfo: {
							...m.msg.contextInfo,
							forwardingScore: 0,
							isForwarded: true,
							participant: other
						}
					} : {})
				}
				return !0
			}

			if (isCmd && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (m.isBaileys) return
				let msgs = global.db.data.database
				if (!(budy.toLowerCase() in msgs)) return
				XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
			}
		}


	} catch (err) {
		m.reply(util.format(err))
	}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})