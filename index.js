const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

let passwordData = JSON.parse(fs.readFileSync('JSON/passwordData.json', 'utf8'));
let avancementData = JSON.parse(fs.readFileSync('JSON/avancementData.json', 'utf8'));

bot.on('ready', () => {
    console.log(`Je suis Connecté :`);
});

bot.on('message', message => {
    let prefix = "!"
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}purge`) {
        if (message.member.roles.get('554205242242236417')) {
            const amount = parseInt(args[0]);
            if (!amount) return message.author.send(`Vous n'avez pas précisé le nombre de messages à supprimer.`);

            message.channel.bulkDelete(amount)
        }
    }
	
        if (cmd === `${prefix}kick`) {
        if (message.member.roles.get('554205242242236417')) {
            let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);
            let sRaison = args.join(" ").slice(22);

            let kickEmbed = new Discord.RichEmbed()
            .setDescription("~Kick~")
            .setColor("#e56b00")
            .addField("Utilisateur Exlue", `${sUser}`)
            .addField("Exlue par", `${message.author.username}`)
            .addField("Raison", sRaison)

            let logsChannel = message.guild.channels.find(`name`, "logs");
        
            if (message.member.roles.get('554205242242236417')) {
                message.guild.member(sUser).kick(sRaison);  
                logsChannel.send(kickEmbed);
            }
        }
    } 

    if (cmd === `${prefix}ban`) {
        if (message.member.roles.get('554205242242236417')) {
            let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);
            let sRaison = args.join(" ").slice(22);

            let banEmbed = new Discord.RichEmbed()
            .setDescription("~Ban~")
            .setColor("#e56b00")
            .addField("Utilisateur Banni", `${sUser}`)
            .addField("Banni par", `${message.author.username}`)
            .addField("Raison", sRaison)

            let logsChannel = message.guild.channels.find(`name`, "logs");

            if (message.member.roles.get('554205242242236417')) {
                message.guild.member(sUser).ban(sRaison)
                logsChannel.send(banEmbed);
            }
        }
    }
    
    if (cmd === `${prefix}proposition`) {
        message.delete(1500);
        if (message.channel.id === `567059724143558668`) {
            let sProposition = args.join(" ").slice(0);
            if (!sProposition) return message.author.send(`Vous n'avez précisé aucune proposition, merci d'en entrer une.`)

            let propositionEmbed = new Discord.RichEmbed()
            .setTitle(`Proposition - ${message.author.tag}`)
            .setAuthor(message.author, message.author.avatarURL)
            .setThumbnail("https://image.noelshack.com/fichiers/2019/15/7/1555260876-augurey.png")
            .setColor(0x6E6E6E)
            .addField('Idée de', `${message.author.username}`)
            .addField('Proposition', `${sProposition}`)
            .setFooter('!aide | Pour recevoir toutes les aides du serveur.')

            message.channel.send(propositionEmbed)
            .then(function (message) {
                message.react(`✅`)
                message.react(`❌`)
            });
        }
    }

bot.login(process.env.TOKEN);
