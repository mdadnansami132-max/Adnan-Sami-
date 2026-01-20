module.exports.config = {
  name: "stopwar",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ADNAN SAMI",
  description: "Stop war",
  commandCategory: "system",
  usages: "/stopwar @mention",
  cooldowns: 0
};

module.exports.run = async function ({ api, event }) {

  const admins = [
    "100047693744912",
    "100052951819398"
  ];

  // ✅ ADMIN CHECK
  if (!admins.includes(String(event.senderID))) {
    return api.sendMessage(
      "❌ Only Adnan can stop war!",
      event.threadID,
      event.messageID
    );
  }

  const mentionData = event.mentions;
  const mentionIDs = Object.keys(mentionData);

  if (mentionIDs.length === 0) {
    return api.sendMessage(
      "⚠️ কাউকে mention করো যার war বন্ধ করবে!",
      event.threadID,
      event.messageID
    );
  }

  const target = mentionIDs[0];

  if (!global.warTimers[target]) {
    return api.sendMessage(
      "⚠️ এই ইউজারের উপর কোনো war চলছে না!",
      event.threadID,
      event.messageID
    );
  }

  clearInterval(global.warTimers[target]);
  delete global.warTimers[target];

  api.sendMessage(
    "🛑 WAR STOPPED SUCCESSFULLY!",
    event.threadID,
    event.messageID
  );
};
