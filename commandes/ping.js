"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "christmas", reaction: "🧒", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*⭕𝗣𝗢𝗣𝗞𝗜𝗗 𝗜𝗦 𝗢𝗡𝗟𝗜𝗡𝗘⭕* 🙏 \n\n ' + "🎄𝗠𝗘𝗥𝗥𝗬 𝗖𝗛𝗥𝗜𝗦𝗧𝗠𝗔𝗦🎄⭕";
    let d = '                                                                           𝗛𝗘𝗔𝗟𝗧𝗛 𝗦𝗧𝗔𝗧𝗨𝗦✨';
    let varmess = z + d;
    var mp4 = 'https://files.catbox.moe/248448.mp4';
    await zk.sendMessage(dest, { video: { url: mp4 }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
