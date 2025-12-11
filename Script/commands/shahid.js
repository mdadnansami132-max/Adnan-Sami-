module.exports.config = {
    name: "shahid",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "De Lara Chini Chara",
    description: "Shahid command reply",
    commandCategory: "fun",
    usages: "shahid",
    cooldowns: 2,
};

module.exports.run = async function ({ api, event }) {
    const replyTexts = [
        "সবার বড় তাল শাহিদ চু*de বানায় তোর মার vu*দায় খাল 🥵",
        "শাহিদ হাসানের dhনের জোর 😩",
        "মুরগির মারে cu*দা শুরু করলে চলে রাত থেকে ভোর🥵🍒",
        "😈 শাহিদ ভাই রিয়েল বস!",
        "Call him fu**ckman🦸‍♂️🦸‍♂️🦸‍♂️",
    ];

    // Random message select
    const text = replyTexts[Math.floor(Math.random() * replyTexts.length)];

    return api.sendMessage(text, event.threadID, event.messageID);
};
