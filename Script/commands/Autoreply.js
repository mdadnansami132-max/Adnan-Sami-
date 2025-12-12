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
    "miss you": "তোমাকেও মিস করছি 😢💖",
    "kiss de": "তুমি তো পঁচা, কিস দিবো না 🤭",
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
    "where are you": "তুমি কোথায় আছো? 🤔",
    "boss": "বস মানে Adnan 😏",

    // ইংলিশ রিপ্লাই
    "hello": "Hey! How's everything? 😃",
    "good night": "Good night! 🌙",
    "good morning": "Good morning! ☀️",
    "i love you": "Love you too 💖",
    "sorry": "Sorry! Didn't mean it 😅",
    "thanks": "You're welcome 😊",
    "miss you": "Miss you too 😢",
    "kiss me": "Haha, maybe later 🤭",
    "what's up": "Nothing much, you tell? 😎",
    "are you okay": "Yes! I'm good 😌",

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
    "emoji": "🙂🙃😌🤣😡😑😎❤️🔥",
    "tell me a joke": "Why did the computer get cold? Because it forgot to close Windows 🤣",
  };

  if (responses[msg]) {
    return api.sendMessage(responses[msg], threadID, messageID);
  }
};

module.exports.run = async function ({ api, event, args, Users }) {
  return this.handleEvent({ api, event, Users });
};
