const fs = global.nodemodule["fs-extra"];
const path = global.nodemodule["path"];

module.exports.config = {
  name: "autoreplybot",
  version: "6.0.2",
  hasPermssion: 0,
  credits: "Adnan",
  description: "Auto-response bot with specified triggers",
  commandCategory: "No Prefix",
  usages: "[any trigger]",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  if (!body) return;
  const name = await Users.getNameUser(senderID);
  const msg = body.toLowerCase().trim();

  const responses = {
    // বাংলা রিপ্লাই
    "sunjid": "ami sunjid ke cudte chai tel chara thuthu diya or putkite amar bot er lohar nunu vhore diye mal falabo or putkite",
    "সানজিদ": "সানজিদ না শক্তিমান বল🗿",
    "hi": "হাই! কেমন আছো? 😎",
    "hello": "হ্যালো! ভালো আছো? 👋",
    "good morning": "শুভ সকাল! দিনটা সুন্দর কাটুক ☀️",
    "good night": "শুভ রাত্রি! ভালো ঘুমাও 🌙",
    "how are you": "কেমন আছো? 😊",
    "bye": "বিদায়! আবার আসবা 😁",
    "thanks": "ধন্যবাদ! তুমি ভালো থাকো 😘",
    "i love you": "ভালোবাসি তোমাকে ❤️",
    "sorry": "মাফ করে দিও 😔",
    "kire": "কিরে, কি করস? 😎",
    "assalamualaikum": "ওয়ালাইকুম আসসালাম ❤️",
    "মিরাজ": "মিরাজ না প্রটিনম্যন বল",
    "boss": "বস মানে Adnan 😏",

    // ইংলিশ রিপ্লাই
    "hello": "Hey! How's everything? 😃",
    "miraz": "মিরাজ না প্রটিনম্যন বল",
    "good morning": "Good morning! ☀️",
    "i love you": "Love you too 💖",
    "sorry": "Sorry! Didn't mean it 😅",
    "thanks": "You're welcome 😊",
    "niloy": "নিলয় এর হোল কাটতে চাই গদগদ গদগদ",
    "kiss me": "Haha, maybe later 🤭",
    "নিলয়": "নিলয় এর হোল কাটতে চাই গদগদ গদগদ",
    "সহিদ": "🥵সবার বড় বড় তাল সহিদ চু*দে বানায় ভো*দায় খাল🥵🍒সহিদের ধ*নের জোর চু*দা শুরু করলে হয় রাত থেকে ভোর🥵🥵🍒",

    // Adnan related
    "owner": "OWNER: Adnan\nFacebook: https://facebook.com/",
    "admin": "Admin হলেন Adnan 😎",
    "adnan": "উনি এখন বিজি আছেন, কি বলবেন আমাকে বলুন 😌",
    "tor nam ki": "My name is Adnan Chat Bot 🤖",

    // Funny / Attitude
    "lol": "😂😂",
    "hmm": "Hmmmm... 🤨",
    "kire bot": "হ্যাঁ বলো? 😎",
    "bap": "তোর বাপ Adnan 😏",
    "chill": "Chill bro 😎",

    // Random
    "Shahid": "ফা*কম্যেন",
    "নিলয়": "ঝরনার ভু*দা চুষতে ব্যস্ত🥵🍒",
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};
