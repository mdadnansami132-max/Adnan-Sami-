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
    const senderID = event.senderID;

    // Only owner can stop
    if (senderID !== "100047693744912") {
        return api.sendMessage("❌ Only owner can stop the war!", event.threadID, event.messageID);
    }

    // Clear all war timers
    global.warTimers = global.warTimers || {};
    for (let uid in global.warTimers) {
        clearInterval(global.warTimers[uid]);
    }

    global.warTimers = {};

    api.sendMessage("🛑 WAR STOPPED SUCCESSFULLY!", event.threadID, event.messageID);
};
