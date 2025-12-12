const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
 name: "owner2",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "Shahadat SAHU",
 description: "Display bot owner's information",
 commandCategory: "Info",
 usages: "",
 cooldowns: 5,
 dependencies: {
 request: "",
 "fs-extra": "",
 axios: ""
 }
};

module.exports.run = async function ({ api, event }) {
 const imageUrl = "https://graph.facebook.com/100001039692046/picture?height=720&width=720&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662";
 const path = __dirname + "/cache/owner.png";

 request(imageUrl)
 .pipe(fs.createWriteStream(path))
 .on("close", () => {
 api.sendMessage({
 body:
`🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟

👑 𝗡𝗮me:ADNAN SAMI
😻 𝗔𝗱𝗱𝗿𝗲𝘀𝘀:CHANDPUR
💼 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻:Barista☕

🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: Not for outsiders
💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿:You have to command owner info
📺 𝗬𝗼𝘂𝗧𝘂𝗯𝗲: Cudlingpong
📸 𝗜𝗻𝘀𝘁🫴👌
📱 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽: Button phone
🎵 𝗧𝗶𝗸𝗧𝗼𝗸: The sounds like cringe
👻 𝗦𝗻𝗮𝗽𝗰𝗵𝗮𝘁:Filter cdi na emnei Alhamdulillah

🤖 𝗕𝗢𝗧 𝗕𝗬: ─꯭─MURGI CHOR☢️☣️
`,
 attachment: fs.createReadStream(path)
 }, event.threadID, () => fs.unlinkSync(path));
 });
};
