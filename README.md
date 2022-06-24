<h1 align="center">Personal Whatsapp Bot<br></h1>


<p align="center">
This is a automated whatsapp bot originally created by <a href="https://github.com/DGXeon" target="_blank">Xeon</a>using <a href="https://github.com/adiwajshing/Baileys" target="_blank">Baileys</a> and <a href="https://github.com/nodejs" target="_blank">Nodejs</a>  and then stripped down to have only features for personal use . Dont forget to give a star bro.
</p>


------
## `SETTINGS`

- CHANGE OWNER NUMBER [Here](https://github.com/DGXeon/CheemsBot-MD2/blob/master/config/config.json#L26)
- CHANGE OWNER NAME [Here](https://github.com/DGXeon/CheemsBot-MD2/blob/master/config/config.json#L37)
- CHANGE BOT NAME [Here](https://github.com/DGXeon/CheemsBot-MD2/blob/master/config/config.json#L28)


# Install Manually 👇
## `Requirements`
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* [FFmpeg](https://github.com/BtbN/FFmpeg-Builds/releases/download/autobuild-2020-12-08-13-03/ffmpeg-n4.3.1-26-gca55240b8c-win64-gpl-4.3.zip)
* [Libwebp](https://developers.google.com/speed/webp/download)
* Any text editor
## `Clone Repo & Installation dependencies`
```bash
git clone https://github.com/AG4lyf/personal-wp-bot
cd personal-wp-bot
npm install
npm start
```
## `For Termux/Ssh/Ubuntu`
```bash
apt update
apt upgrade
pkg update && pkg upgrade
pkg install bash
pkg install libwebp
pkg install git -y
pkg install nodejs -y 
pkg install ffmpeg -y 
pkg install wget
pkg install imagemagick -y
git clone https://github.com/AG4lyf/personal-wp-bot
cd personal-wp-bot
npm install
npm start
```
## `For VPS`
```bash
apt install nodejs 
apt install git 
apt install ffmpeg 
apt install libwebp 
apt install imagemagick
apt install bash
git clone https://github.com/AG4lyf/personal-wp-bot
cd personal-wp-bot
npm install
npm start
```
## `For 24/7 Activation`
```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
