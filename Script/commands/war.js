module.exports.config = {
    name: "war",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Shahadat Edit + Fixed by ChatGPT",
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

    const target = mention[0]; // UID

    // Get target user's name
    const info = await api.getUserInfo(target);
    const name = info[target].name;

    // Start message with name mention
    api.sendMessage({
        body: `🔥 WAR STARTED ON ${name}`,
        mentions: [{ id: target, tag: name }]
    }, event.threadID);

    const msgs = [
        "তর মার ভু*day চায়নার চুং চিং পং বো*ma ব্লাst কইরা আমি তর মার Vhu*দায় পর*মানু সূচনা করবো",
        "তর মাকে আমি র*কেটের সাথে বাইন্ধা ১০০০০০০ হড়স পাওয়ার এ চাদে নিয়া চু*dum",
        "দেখ আকাশ ভরা তারা তোর মারে চু**dmu...",
        "বিছানার চাদর দিয়ে তর মার দু**ধ ২টি টাইট করে বেঁধে...",
        "_উড়ন্ত বিমান এর পাখার সামনে নিয়া তোর মারে chu**দবো...",
        "তোর মাকে দু পা কাধে উঠাইয়া chu*দতে chu*দতে...",
        "কাঠাল গাছের গোড়া আর আম গাছের ছাল তর মারে...",
        "যামু সুন্দরবন নিয়ে আসমু হাতির dho*ন আইনা...",
        "ku*ত্তায় chu*দে রাস্তায় বাঘ chu*দে বনে..."
    ];

    // SAVE WAR TIMER
    global.warTimers[target] = setInterval(() => {

        const text = msgs[Math.floor(Math.random() * msgs.length)];

        api.sendMessage({
            body: `${text}`,
            mentions: [{ id: target, tag: name }]
        }, event.threadID);

    }, 1500);
};
