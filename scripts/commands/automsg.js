module.exports.config = {
    name: "autotime",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "msg",
  prefix: true, 
  category: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};
const nam = [{
    timer: '12:00:00 AM',
    message: ['~ এখন রাত ১১টা বাজে ঘুমাও না হলে আসো গেম খেলি😙']
},
             {
    timer: '1:00:00 AM',
    message: ['~ এখন রাত ১২টা বাজে কেউ টয়লেটে ডুকবে না 🤟']
},
						{
    timer: '2:00:00 AM',
    message: ['~এখন রাত ১টা বাজে প্রেম না কইরা যাইয়া ঘুমা বেক্কল😾']
},
						 {
    timer: '3:00:00 AM',
    message: ['গুরুপের সব চিয়াপ।']
},
						 {
    timer: '4:00:00 AM',
    message: ['~এখন রাত ৩টা বাজে সবাই মনে হয় ঘুম🥹 আমার ভাই ঘুম আসে না  ']
},
						 {
    timer: '5:00:00 AM',
    message: ['~এখন রাত ৪টা বাজে একটু পর ফজরের আযান দিলে নামাজ পড়ে নিও সবাই ']
},
						 {
    timer: '6:00:00 AM',
    message: ['~এখন ভোর ৫টা বাজে সবাই নামাজ পড়ছো তো?❤️  ']
},
						 {
    timer: '7:00:00 AM',
    message: ['~এখন সকাল ৬টা বাজে ঘুম থেকে উঠো সবাই  ']
},
						 {
    timer: '8:00:00 AM',
    message: [' ৭ টা বাজে একদম গরুর মতো ঘুমাচ্ছে ']
},
						 {
    timer: '9:00:00 AM',
    message: [' ৮টা বাজে উঠ যারুয়া ']
},
             {
    timer: '10:00:00 AM',
    message: [' ৯ টা বাজে সাদিয়ারে কল দেও  ' ]
},
						 {
    timer: '11:00:00 AM',
    message: [' আমার বউ কই 😭 ']
},
						 {
    timer: '12:00:00 PM',
    message: ['~ এখন ১৯৭১ সাল দেখো বাহিরে যুদ্ধ হচ্ছে ']
},					
						 {
    timer: '1:00:00 PM',
    message: [' siuuuuu ']
},
						 {
    timer: '2:00:00 PM',
    message: ['~ ১টা বাজে গোছল করতে যা সাবধান টয়লেটে উল্টা পাল্টা কিছু করবি না 😻 ']
},
						 {
    timer: '3:00:00 PM',
    message: ['২টা বাজে মারা দে ']
},
						 {
    timer: '4:00:00 PM',
    message: [' Passi Or Ponaldo']
},
						{
    timer: '5:00:00 PM',
    message: [' ৪টা বাজে রাস্তায় মেয়ে দেখতে যাবি না ']
},
						 {
    timer: '6:00:00 PM',
    message: [' গরম 🔥']
},
						 {
    timer: '7:00:00 PM',
    message: [' বেচে থেকে লাভ কি জীবনে প্রেম ই করতে পারি নাই ']
},
             {
    timer: '8:00:00 PM',
    message: [' ৭টা বাজে তোর উচিত এখন মরে যাওয়া 🙂  ']
},
             {
    timer: '9:00:00 PM',
    message: [' সাদিয়ার কথা মনে পরে 😭 help me ']
},
             {
    timer: '10:00:00 PM',
    message: ['😅 life is short']
},
            {
    timer: '11:00:00 PM',
    message: [' এ তোর সিলেবাস শেষ হইছে পরতে বয় যা ']
}];
module.exports.onLoad = o => setInterval(() => {
    const r = a => a[Math.floor(Math.random()*a.length)];
    if (á = nam.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) global.data.allThreadID.forEach(i => o.api.sendMessage(r(á.message), i));
}, 1000);
module.exports.run = o => {};
