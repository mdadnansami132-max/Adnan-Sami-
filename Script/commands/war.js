module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shahadat Edit",
    description: "Start war",
    commandCategory: "system",
    usages: "/war @mention",
    cooldowns: 0
};

global.warTimers = global.warTimers || {};

module.exports.run = async function ({ api, event }) {

    // Only owner
    if (event.senderID !== "100047693744912") {
        return api.sendMessage("❌ Only owner can use this command!", event.threadID, event.messageID);
    }

    // Mention check
    const mention = Object.keys(event.mentions);
    if (mention.length === 0) {
        return api.sendMessage("⚠️ Mention someone!", event.threadID, event.messageID);
    }

    const target = mention[0];

    api.sendMessage(`🔥 WAR STARTED ON <@${target}>`, event.threadID);

    const msgs = [
        "🔥 আবারো আসলাম ওস্তাদ!",
        "⚡ তোরে দেখে আজ বজ্রপাতও ভয় পাইছে!",
        "💥 ধামাকা শুরু হইছে!",
        "😈 আবারো হাজির ভাই!",
        "🤬 তোরে আমি ছাড়বো না!",
    ];

    // WAR TIMER SAVE GLOBALLY
    global.warTimers[target] = setInterval(() => {
        const text = msgs[Math.floor(Math.random() * msgs.length)];
        api.sendMessage(`${text}\n<@${target}>`, event.threadID);
    }, 1500);
};
