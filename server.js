
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
        "https://cdn.discordapp.com/attachments/709175072438354021/712484436717076500/image0.jpg"
      )
      .setFooter(RANJO.author.username, RANJO.author.avatarURL) /////////EDIT BY RANJO//////

      .setTitle("> BY HAYPER") /////////EDIT BY RANJO//////

      .addField("> **𝐍𝐚𝐦𝐞 : SAHAND**") /////////EDIT BY RANJO//////

      .addField("> **𝐍𝐢𝐜𝐍𝐚𝐦𝐞:『LA』L͜͡OS ANGELES**") /////////EDIT BY RANJO//////

      .addField("> **𝐀𝐠𝐞 :20**") /////////EDIT BY RANJO//////

      .addField("> **𝐑𝐨𝐥𝐞 :OWNER**") /////////EDIT BY RANJO//////

      .addField("> **𝐅𝐫𝐨𝐦:GERMANY**") /////////EDIT BY RANJO//////

      .addField("> **𝐋𝐢𝐯𝐞𝐬: BERLIN**") /////////EDIT BY RANJO//////

      .addField("> **𝐏𝐮𝐛𝐠 𝐈𝐝: 5169599000 **") /////////EDIY BY RANJO//////

      .addField("> **𝐃𝐞𝐯𝐢𝐜𝐞 :IPHONE 11 PRO**") /////////EDIT BY RANJO//////

      .setColor("RANDOM"); /////////EDIT BY RANJO//////

    RANJO.channel.send({ embed }); /////////EDIT BY RANJO//////
  }
});

/////////////////////////////////////////////
client.login("NzM0MTEzMjExNDYwMDkxOTE0.XxM-NA.yETqdJTUYqlwgCBISGG12yupzCI")