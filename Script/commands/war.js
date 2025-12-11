module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shahadat Edit",
    description: "Start war on mentioned user",
    commandCategory: "system",
    usages: "/war @mention",
    cooldowns: 0
};

let warTimers = {};

module.exports.run = async function ({ api, event }) {
    const senderID = event.senderID;

    // Only you can use it
    if (senderID !== "100047693744912") {
        return api.sendMessage("❌ Only my owner can use this command!", event.threadID, event.messageID);
    }

    // Check mention
    const mention = Object.keys(event.mentions);
    if (mention.length === 0) {
        return api.sendMessage("⚠️ Please mention a user.\nExample: /war @user", event.threadID, event.messageID);
    }

    const target = mention[0];

    api.sendMessage(`🔥 WAR Started on <@${target}>`, event.threadID);

    // 100 custom war messages
    const warMsgs = [
        "🔥 তুমি জানো না তুমি কার সাথে পাংগা নিয়েছো!",
        "😈 আবারো আসলাম ভাই!",
        "💣 তোরে ধুমাইয়া দিলাম!",
        "⚡ তোরে দেখে আজ বজ্রপাতও ভয় পাইছে!",
        "💥 ধামাকা শুরু হইছে!",
        "🔥 আবারো আসলাম ওস্তাদ!",
        "😈 এ যুদ্ধে তুমি হারবা নিশ্চিত!",
    ];

    // Loop war
    warTimers[target] = setInterval(() => {
        const msg = warMsgs[Math.floor(Math.random() * warMsgs.length)];
        api.sendMessage(msg + ` 😈 @${event.mentions[target].replace("@", "")}`, event.threadID);
    }, 1500); // every 1.5 seconds
};
