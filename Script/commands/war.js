module.exports.config = {
  name: "war",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "ADNAN SAMI",
  description: "Start war on mentioned user",
  commandCategory: "system",
  usages: "/war @mention",
  cooldowns: 0
};

global.warTimers = global.warTimers || {};

module.exports.run = async function ({ api, event }) {

  // ✅ ADMIN IDS (ONLY TWO)
  const admins = [
    "100047693744912",
    "100052951819398"
  ];

  // ✅ ADMIN CHECK
  if (!admins.includes(String(event.senderID))) {
    return api.sendMessage(
      "❌ Only Adnan can use this command!",
      event.threadID,
      event.messageID
    );
  }

  // ✅ MENTION CHECK
  const mentionData = event.mentions;
  const mentionIDs = Object.keys(mentionData);

  if (mentionIDs.length === 0) {
    return api.sendMessage(
      "⚠️ কাউকে mention করো!",
      event.threadID,
      event.messageID
    );
  }

  const target = mentionIDs[0];
  const targetName = mentionData[target];

  // ✅ ALREADY RUNNING CHECK
  if (global.warTimers[target]) {
    return api.sendMessage(
      "⚠️ এই ইউজারের উপর war আগে থেকেই চলছে!",
      event.threadID,
      event.messageID
    );
  }

  // ✅ WAR START MESSAGE
  api.sendMessage({
    body: `🔥 WAR STARTED!\nটার্গেট: ${targetName}`,
    mentions: [{ tag: targetName, id: target }]
  }, event.threadID);

  // ✅ WAR MESSAGES (তুমি এখানে পরে ৫০–১০০টা যোগ করতে পারবে)
  const warMessages = [
    "🔥 যুদ্ধ শুরু হয়ে গেছে!",
    "⚔️ সাবধান! লড়াই চলছে!",
    "💥 চাপ বাড়ছে!",
    "🔥 আজ পালানোর উপায় নেই!",
    "⚡ শেষ পর্যন্ত দেখা যাক!",
    "🛡️ শক্ত থাকো, যুদ্ধ কঠিন!"
  ];

  // ✅ INTERVAL SPAM
  global.warTimers[target] = setInterval(() => {
    const text = warMessages[Math.floor(Math.random() * warMessages.length)];

    api.sendMessage({
      body: `${text}\n\n${targetName}`,
      mentions: [{ tag: targetName, id: target }]
    }, event.threadID);

  }, 1500);
};
