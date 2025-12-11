module.exports.config = {
    name: "warstop",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shahadat Edit",
    description: "Stop war",
    commandCategory: "system",
    usages: "/warstop",
    cooldowns: 0
};

module.exports.run = async function ({ api, event }) {

    // Only owner
    if (event.senderID !== "100047693744912") {
        return api.sendMessage("❌ Only owner can stop!", event.threadID, event.messageID);
    }

    if (!global.warTimers || Object.keys(global.warTimers).length === 0) {
        return api.sendMessage("⚠️ War is not running!", event.threadID, event.messageID);
    }

    // CLEAR ALL TIMERS
    for (let id in global.warTimers) {
        clearInterval(global.warTimers[id]);
    }

    global.warTimers = {};

    api.sendMessage("🛑 WAR STOPPED SUCCESSFULLY!", event.threadID, event.messageID);
};
