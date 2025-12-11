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
        "🔥 শাহিদ ভাই আসছেসেন বলো?",
        "😎 শাহিদ আসলে স্টাইল লেভেল বাড়ে!",
        "💥 শাহিদ নামটা শুনলেই পাওয়ার বের হয়!",
        "😈 শাহিদ ভাই রিয়েল বস!",
        "😂 শাহিদ কি করসেন আবার!"
    ];

    // Random message select
    const text = replyTexts[Math.floor(Math.random() * replyTexts.length)];

    return api.sendMessage(text, event.threadID, event.messageID);
};
