
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
///T BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO
client.on("message", RANJO => {
  /////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO

  if (RANJO.content.startsWith("$cv")) {
    /////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO/////////EDIT BY RANJO

    const embed = new Discord.RichEmbed() /////////EDIT BY RANJO//////
      .setThumbnail(
        /////////EDIT BY RANJO//////

        ""
      )

      .setImage(
        /////////EDIT BY RANJO//////
        "https://cdn.discordapp.com/attachments/796750980469358622/839993115716485160/image0.png"
      )
      .setFooter(RANJO.author.username, RANJO.author.avatarURL) /////////EDIT BY RANJO//////

      .setTitle("> ") /////////EDIT BY RANJO//////

      .addField("> ** :سڵاوی خواتان لێبێت،
هەڵساوین بە وەرگرتنی ستاف لە کوڕ و کچ بە پێی چەن یاسایەک
رێزگرتنی رۆل بەدەستەکان.
ئەکتیڤ بوون لە سێرڤەر.
ڕۆژانە بە لایەنی کەمەوە ٥ ڕیکلام بگڕێتەوە.
جوابدانەوەی جەنەڕال چات ئەگەر پێتنەکرا ڕۆل بەدەست تاگ بکە.

‏‎` ڕادەگەیەنرێت لە لایەن " 𝐋𝐄𝐆𝐄𝐍𝐃𝐒 "`

السلام عليك،
لقد بدأنا في أخذ الأولاد والبنات وفقا لبعض القوانين
احترام أدوار اليدين.
نشط على الخادم.
العوائد اليومية على الأقل خمسة إعلانات.
رد "المحادثة العامة" إذا لم تتمكن من لعب دور في العلامة.

 🤍 **") /////////EDIT BY RANJO//////



   








      .setColor("RANDOM"); /////////EDIT BY RANJO//////

    RANJO.channel.send({ embed }); /////////EDIT BY RANJO//////
  }
});

/////////////////////////////////////////////
client.login("ODQwMjk5Nzc3ODUyODMzODAz.YJWMJw.Yqtfh5pyMnkIKoMNCQP0KAutLfM")
