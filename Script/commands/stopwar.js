module.exports.config = {
    name: "stopwar",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "CHATGPT",
    description: "Stop running war",
    commandCategory: "fun",
    usages: "",
    cooldowns: 1
};

const ownerUID = "100047693744912";
const activeWars = global.activeWars || (global.activeWars = {});

module.exports.run = function ({ api, event }) {

    if (event.senderID !== ownerUID)
        return api.sendMessage("এই কমান্ড শুধু মালিক চালাতে পারবে!", event.threadID);

    const threadID = event.threadID;

    if (!activeWars[threadID])
        return api.sendMessage("বর্তমানে কোন war চলছে না!", threadID);

    clearInterval(activeWars[threadID]);
    delete activeWars[threadID];

    return api.sendMessage("⛔ War Stopped.", threadID);
};
