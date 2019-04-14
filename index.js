const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');

let passwordData = JSON.parse(fs.readFileSync('JSON/passwordData.json', 'utf8'));
let avancementData = JSON.parse(fs.readFileSync('JSON/avancementData.json', 'utf8'));

bot.on('ready', () => {
    console.log(`Je suis Connecté :`);
});

bot.on('guildMemberAdd',  member => {
    member.send(`Bienvenue ${member} sur l'Augurey-Roleplay. Si tu as rejoins notre Communauté, c'est sûrement pour Roleplay, alors laisse moi t'expliquer comment ton inscription va se dérouler. Tu dois te rendre dans #fiches-personnages, où tu pourra t'inscrire. Tu recevra une réponse avant 48h. J'espère avoir pu t'aider.`);
    var role = member.guild.roles.find('name', 'Nouveau');
    member.addRole(role);
})

bot.on('message', message => {
    let prefix = "!"
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${prefix}kick`) {
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

    if (cmd === `${prefix}ban`) {
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

    if (cmd === `${prefix}personnage`) {
        message.delete(1000)
        if (message.member.roles.get('554205242242236417')) {
            if (message.channel.id === `565815832781783040`) {
                let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs à qui attribuer les rôles.`);
                
                if (!args.length) {
                    return message.author.send(`Vous n'avez pas préciser quel rôle aura ce joueur.`)
                }
                if (args[1] === 'élève') {
                    var profession = message.guild.roles.find(role => role.name === "° ---------- Profession ---------- °");
                    var identite = message.guild.roles.find(role => role.name === "° -------------- Identité -------------- °");
                    var poudlard = message.guild.roles.find(role => role.name === "° ---------- Poudlard ---------- °");
                    var eleve = message.guild.roles.find(role => role.name === "Élève");
                    var donsmagiques = message.guild.roles.find(role => role.name === "° ---------- Don Magique ---------- °");
                    var appartenance = message.guild.roles.find(role => role.name === "° ---------- Appartenance ---------- °");
                    var ascendance = message.guild.roles.find(role => role.name === "° ------------- Ascendance -------------°");
                    var tiret = message.guild.roles.find(role => role.name === "° ------------- Autres -------------°");
                    var membreroleplay = message.guild.roles.find(role => role.name === "Membre-Roleplay");                    

                    sUser.addRole(profession);
                    sUser.addRole(identite);
                    sUser.addRole(poudlard);
                    sUser.addRole(eleve)
                    sUser.addRole(donsmagiques);
                    sUser.addRole(appartenance);
                    sUser.addRole(ascendance);
                    sUser.addRole(tiret);
                    sUser.addRole(membreroleplay);

                    let eleveEmbed = new Discord.RichEmbed()
                    .setTitle(`Création de Personnage`)
                    .setAuthor(sUser, sUser.avatarURL)
                    .setThumbnail("https://www.ahe-obernai.fr/wp-content/uploads/2016/08/1473126064_user.png")
                    .setColor(0x000000)
                    .addField('Personnage', `${sUser} rejoint le Roleplay en tant qu'Élève`)
                    .setFooter('!aide | Pour recevoir toutes les aides du serveur.')
					
					message.channel.send(eleveEmbed)
					.then(function (message) {
                        message.react('✅');
					});
                }
                if (args[1] === 'professeur') {
                    var profession = message.guild.roles.find(role => role.name === "° ---------- Profession ---------- °");
                    var identite = message.guild.roles.find(role => role.name === "° -------------- Identité -------------- °");
                    var poudlard = message.guild.roles.find(role => role.name === "° ---------- Poudlard ---------- °");
                    var professeur = message.guild.roles.find(role => role.name === "Professeur");
                    var matieres = message.guild.roles.find(role => role.name === "° ---------- Matière ---------- °");
                    var donsmagiques = message.guild.roles.find(role => role.name === "° ---------- Don Magique ---------- °");
                    var appartenance = message.guild.roles.find(role => role.name === "° ---------- Appartenance ---------- °");
                    var ascendance = message.guild.roles.find(role => role.name === "° ------------- Ascendance -------------°");
                    var tiret = message.guild.roles.find(role => role.name === "° ------------- Autres -------------°");
                    var membreroleplay = message.guild.roles.find(role => role.name === "Membre-Roleplay");                    

                    sUser.addRole(profession);
                    sUser.addRole(identite);
                    sUser.addRole(poudlard);
                    sUser.addRole(professeur)
                    sUser.addRole(matieres)
                    sUser.addRole(donsmagiques);
                    sUser.addRole(appartenance);
                    sUser.addRole(ascendance);
                    sUser.addRole(tiret);
                    sUser.addRole(membreroleplay);

                    let eleveEmbed = new Discord.RichEmbed()
                    .setTitle(`Création de Personnage`)
                    .setAuthor(sUser, sUser.avatarURL)
                    .setThumbnail("https://www.ahe-obernai.fr/wp-content/uploads/2016/08/1473126064_user.png")
                    .setColor(0x000000)
                    .addField('Personnage', `${sUser} rejoint le Roleplay en tant qu'Élève`)
                    .setFooter('!aide | Pour recevoir toutes les aides du serveur.')
					
					message.channel.send(eleveEmbed)
					.then(function (message) {
                        message.react('✅');
					});
                }
                if (args[1] === 'autre') {
                    var profession = message.guild.roles.find(role => role.name === "° ---------- Profession ---------- °");
                    var identite = message.guild.roles.find(role => role.name === "° -------------- Identité -------------- °");
                    var sorcier = message.guild.roles.find(role => role.name === "Sorcier");
                    var donsmagiques = message.guild.roles.find(role => role.name === "° ---------- Don Magique ---------- °");
                    var appartenance = message.guild.roles.find(role => role.name === "° ---------- Appartenance ---------- °");
                    var ascendance = message.guild.roles.find(role => role.name === "° ------------- Ascendance -------------°");
                    var tiret = message.guild.roles.find(role => role.name === "° ------------- Autres -------------°");
                    var membreroleplay = message.guild.roles.find(role => role.name === "Membre-Roleplay");                    

                    sUser.addRole(profession);
                    sUser.addRole(identite);
                    sUser.addRole(sorcier)
                    sUser.addRole(donsmagiques);
                    sUser.addRole(appartenance);
                    sUser.addRole(ascendance);
                    sUser.addRole(tiret);
                    sUser.addRole(membreroleplay);

                    let eleveEmbed = new Discord.RichEmbed()
                    .setTitle(`Création de Personnage`)
                    .setAuthor(sUser, sUser.avatarURL)
                    .setThumbnail("https://www.ahe-obernai.fr/wp-content/uploads/2016/08/1473126064_user.png")
                    .setColor(0x000000)
                    .addField('Personnage', `${sUser} rejoint le Roleplay en tant qu'Élève`)
                    .setFooter('!aide | Pour recevoir toutes les aides du serveur.')
					
					message.channel.send(eleveEmbed)
					.then(function (message) {
                        message.react(`✅`)
					});
                }
            }
        }
    }

    // AVANCEMENT
    if(!avancementData[`Avancement`]) avancementData[`Avancement`] = {}
    if(!avancementData[`Avancement`].asortilege) avancementData[`Avancement`].asortilege = 0.
    
    if(!avancementData[`Avancement`]) avancementData[`Avancement`] = {}
    if(!avancementData[`Avancement`].apotions) avancementData[`Avancement`].apotions = 0.

    if(!avancementData[`Avancement`]) avancementData[`Avancement`] = {}
    if(!avancementData[`Avancement`].ametamorphose) avancementData[`Avancement`].ametamorphose = 0.

    if(!avancementData[`Avancement`]) avancementData[`Avancement`] = {}
    if(!avancementData[`Avancement`].aachat) avancementData[`Avancement`].aachat = 0.

    if(!avancementData[`Avancement`]) avancementData[`Avancement`] = {}
    if(!avancementData[`Avancement`].achocogrenouille) avancementData[`Avancement`].achocogrenouille = 0.

    if(!avancementData[`Avancement`]) avancementData[`Avancement`] = {}
    if(!avancementData[`Avancement`].asurprise) avancementData[`Avancement`].asurprise = 0.


    
    if (cmd === `${prefix}setavancement`) {
        message.delete(0);
        if (message.member.roles.get('567033257254846484')) {
            if (!args.length) {
                return message.author.send(`Vous n'avez pas préciser ce que vous voulez faire. | !sorts {Sortilèges} = Lancer un Sortilège | !sorts liste {page} = La liste des sortilèges. `)
            }
            if (args[0] === 'Sortilège') {
                const amount = parseInt(args[1]);
                if (!amount) return message.author.send(`Vous n'avez pas précisé le pourcentage à indiquer.`);

                avancementData[`Avancement`].asortilege = amount;
                message.channel.send('Done')
            }
            if (args[0] === 'Potions') {
                const amount = parseInt(args[1]);
                if (!amount) return message.author.send(`Vous n'avez pas précisé le pourcentage à indiquer.`);

                avancementData[`Avancement`].apotions = amount;
                message.channel.send('Done')
            }
            if (args[0] === 'Métamorphose') {
                const amount = parseInt(args[1]);
                if (!amount) return message.author.send(`Vous n'avez pas précisé le pourcentage à indiquer.`);

                avancementData[`Avancement`].ametamorphose = amount;
                message.channel.send('Done')
            }
            if (args[0] === 'Achat') {
                const amount = parseInt(args[1]);
                if (!amount) return message.author.send(`Vous n'avez pas précisé le pourcentage à indiquer.`);

                avancementData[`Avancement`].aachat = amount;
                message.channel.send('Done')
            }
            if (args[0] === 'Chocogrenouille') {
                const amount = parseInt(args[1]);
                if (!amount) return message.author.send(`Vous n'avez pas précisé le pourcentage à indiquer.`);

                avancementData[`Avancement`].achocogrenouille = amount;
                message.channel.send('Done')
            }
            if (args[0] === 'Surprise') {
                const amount = parseInt(args[1]);
                if (!amount) return message.author.send(`Vous n'avez pas précisé le pourcentage à indiquer.`);

                avancementData[`Avancement`].asurprise = amount;
                message.channel.send('Done')
            }
        }
    }

    if (cmd === `${prefix}avancement`) {
        message.delete(0);
        if (message.member.roles.get('567033257254846484')) {
            if (message.channel.id === `567039942656786452`) {
                message.channel.bulkDelete(1);

                let avancementEmbed = new Discord.RichEmbed()
                .setTitle(`Saison 2 - Avancement`)
                .setThumbnail("https://image.noelshack.com/fichiers/2019/15/7/1555260876-augurey.png")
                .setColor(0x6E6E6E)
                .addField('Système de Sortilège', `${avancementData[`Avancement`].asortilege} %`)
                .addField('Système de Potions', `${avancementData[`Avancement`].apotions} %`)
                .addField('Système de Métamorphose', `${avancementData[`Avancement`].ametamorphose} %`)
                .addField('Système de Points', `100 %`)
                .addField(`Système d'Argent`, `100 %`)
                .addField(`Système d'Achat`, `${avancementData[`Avancement`].aachat} %`)
                .addField('Collection de Chocogrenouille', `${avancementData[`Avancement`].achocogrenouille} %`)
                .addField('Dragées Surprises de Bertie-Crochue',`100 %`)
                .addField('Système Surprise',`${avancementData[`Avancement`].asurprise} %`)
                .setFooter('Ouverture : 11/05 - 16h | Saison 2 is Comming Soon')

                message.channel.send(avancementEmbed)
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
    
    // Ancien Serpentard
    if(!passwordData[`Serpentard`]) passwordData[`Serpentard`] = {}
    if(!passwordData[`Serpentard`].ancienpassword) passwordData[`Serpentard`].ancienpassword = "Aucun"

    // Ancienne Serdaigle
    if(!passwordData[`Serdaigle`]) passwordData[`Serdaigle`] = {}
    if(!passwordData[`Serdaigle`].ancienneenigme) passwordData[`Serdaigle`].ancienneenigme = "Aucune"

    // Ancien Gryffondor
    if(!passwordData[`Gryffondor`]) passwordData[`Gryffondor`] = {}
    if(!passwordData[`Gryffondor`].ancienpassword) passwordData[`Gryffondor`].ancienpassword = "Aucun"

    // Ancien Poufsouffle
    if(!passwordData[`Poufsouffle`]) passwordData[`Poufsouffle`] = {}
    if(!passwordData[`Poufsouffle`].ancienpassword) passwordData[`Poufsouffle`].ancienpassword = "Aucun"

    // Serpentard
    if(!passwordData[`Serpentard`]) passwordData[`Serpentard`] = {}
    if(!passwordData[`Serpentard`].password) passwordData[`Serpentard`].password = "Aucun"

    // Serdaigle
    if(!passwordData[`Serdaigle`]) passwordData[`Serdaigle`] = {}
    if(!passwordData[`Serdaigle`].enigme) passwordData[`Serdaigle`].enigme = "Aucune"

    // Gryffondor
    if(!passwordData[`Gryffondor`]) passwordData[`Gryffondor`] = {}
    if(!passwordData[`Gryffondor`].password) passwordData[`Gryffondor`].password = "Aucun"

    // Poufsouffle
    if(!passwordData[`Poufsouffle`]) passwordData[`Poufsouffle`] = {}
    if(!passwordData[`Poufsouffle`].password) passwordData[`Poufsouffle`].password = "Aucun"
    
    // Commandes
    if (cmd === `${prefix}setmdp`) {
        message.delete(1500);
        if (message.channel.id === `565865879338745866`) {
            if (message.member.roles.get('554205242242236417')) {
                if (!args.length) {
                    return message.author.send(`Vous n'avez pas précisé à quelle maison vous voulez changer le Mot de Passe de la Salle Commune.`)
                }
                if (args[0] === 'Serpentard') {
                    var serpentardRole = message.guild.roles.find(role => role.name === "Salle Commune Serpentard");
                    message.guild.members.forEach(member => {
                        if(!member.roles.find(t => t.name == 'Salle Commune Serpentard')) return;
                        member.removeRole(serpentardRole)
                        .then(function() {
                        console.log(`Removed role from user ${member.user.tag}!`);
                        })
                    })
                    let scChannel = message.guild.channels.find(`name`, "salle-commune-serpentard");
                    let sNouveau = args.join(" ").slice(11);
                    if (!sNouveau) return message.author.send(`Vous n'avez pas préciser quel sera le nouveau Mot-De-Passe.`)

                    passwordData[`Serpentard`].ancienpassword = passwordData[`Serpentard`].password
                    passwordData[`Serpentard`].password = sNouveau

                    let changeEmbed = new Discord.RichEmbed()
                    .setTitle(`Changement de Mot-de-Passe - Serpentard`)
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setThumbnail("https://image.noelshack.com/fichiers/2019/15/4/1554983993-serpentard.png")
                    .setColor(0x088A08)
                    .addField('Ancien Mot-De-Passe', `${passwordData[`Serpentard`].ancienpassword}`)
                    .addField('Nouveau Mot-De-Passe', `${passwordData[`Serpentard`].password}`)
                    .setFooter('!aide | Pour recevoir toutes les aides du serveur.')

                    message.channel.send(changeEmbed)
                    scChannel.send(changeEmbed)
                    message.delete(300000)
                }
                if (args[0] === 'Gryffondor') {
                    var gryffondorRole = message.guild.roles.find(role => role.name === "Salle Commune Gryffondor");
                    message.guild.members.forEach(member => {
                        if(!member.roles.find(t => t.name == 'Salle Commune Gryffondor')) return;
                        member.removeRole(gryffondorRole)
                        .then(function() {
                        console.log(`Removed role from user ${member.user.tag}!`);
                        })
                    })
                    let scChannel = message.guild.channels.find(`name`, "salle-commune-gryffondor");
                    let sNouveau = args.join(" ").slice(11);
                    if (!sNouveau) return message.author.send(`Vous n'avez pas préciser quel sera le nouveau Mot-De-Passe.`)

                    passwordData[`Gryffondor`].ancienpassword = passwordData[`Gryffondor`].password
                    passwordData[`Gryffondor`].password = sNouveau

                    let changeEmbed = new Discord.RichEmbed()
                    .setTitle(`Changement de Mot-de-Passe - Gryffondor`)
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setThumbnail("https://image.noelshack.com/fichiers/2019/15/4/1554983994-gryffondor.png")
                    .setColor(0xDBA901)
                    .addField('Ancien Mot-De-Passe', `${passwordData[`Gryffondor`].ancienpassword}`)
                    .addField('Nouveau Mot-De-Passe', `${passwordData[`Gryffondor`].password}`)
                    .setFooter('!aide | Pour recevoir toutes les aides du serveur.')

                    message.channel.send(changeEmbed)
                    scChannel.send(changeEmbed)
                    message.delete(300000)
                }
                if (args[0] === 'Poufsouffle') {
                    var poufsouffleRole = message.guild.roles.find(role => role.name === "Salle Commune Poufsouffle");
                    message.guild.members.forEach(member => {
                        if(!member.roles.find(t => t.name == 'Salle Commune Poufsouffle')) return;
                        member.removeRole(poufsouffleRole)
                        .then(function() {
                        console.log(`Removed role from user ${member.user.tag}!`);
                        })
                    })
                    let scChannel = message.guild.channels.find(`name`, "salle-commune-poufsouffle");
                    let sNouveau = args.join(" ").slice(12);
                    if (!sNouveau) return message.author.send(`Vous n'avez pas préciser quel sera le nouveau Mot-De-Passe.`)

                    passwordData[`Poufsouffle`].ancienpassword = passwordData[`Poufsouffle`].password
                    passwordData[`Poufsouffle`].password = sNouveau

                    let changeEmbed = new Discord.RichEmbed()
                    .setTitle(`Changement de Mot-de-Passe - Poufsouffle`)
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setThumbnail("https://image.noelshack.com/fichiers/2019/15/4/1554992390-blason-de-poufsouffle.png")
                    .setColor(0xDBA901)
                    .addField('Ancien Mot-De-Passe', `${passwordData[`Poufsouffle`].ancienpassword}`)
                    .addField('Nouveau Mot-De-Passe', `${passwordData[`Poufsouffle`].password}`)
                    .setFooter('!aide | Pour recevoir toutes les aides du serveur.')

                    message.channel.send(changeEmbed)
                    scChannel.send(changeEmbed)
                    message.delete(300000)
                }
            }
        }
    }   

    if (cmd === `${prefix}setenigme`) {
        message.delete(1500);
        if (message.channel.id === `565865879338745866`) {
            if (message.member.roles.get('554205242242236417')) {
                var serdaigleRole = message.guild.roles.find(role => role.name === "Salle Commune Serdaigle");
                message.guild.members.forEach(member => {
                    if(!member.roles.find(t => t.name == 'Salle Commune Serdaigle')) return;
                    member.removeRole(serdaigleRole)
                    .then(function() {
                    console.log(`Removed role from user ${member.user.tag}!`);
                    })
                })

                let scChannel = message.guild.channels.find(`name`, "salle-commune-serdaigle");
                let sEnigme = args.join(" ").slice(10);
                if (!sEnigme) return message.author.send(`Vous n'avez pas préciser quelle sera la nouvelle énigme.`)
                
                passwordData[`Serdaigle`].ancienneenigme = passwordData[`Serdaigle`].enigme
                passwordData[`Serdaigle`].enigme = sEnigme

                let enigmeEmbed = new Discord.RichEmbed()
                .setTitle(`Changement d'Énigme' - Serdaigle`)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setThumbnail("https://image.noelshack.com/fichiers/2019/15/4/1554983994-blason-de-serdaigle.png")
                .setColor(0x0080FF)
                .addField('Ancienne Énigme', `${passwordData[`Serdaigle`].ancienneenigme}`)
                .addField('Nouvelle Énigme', `${passwordData[`Serdaigle`].enigme}`)
                .setFooter('!aide | Pour recevoir toutes les aides du serveur.')

                message.channel.send(enigmeEmbed)
                    scChannel.send(enigmeEmbed)
                    message.delete(300000)
            }
        }
    }
    
    if (cmd === `${prefix}enigme`) {
        message.delete(1500);
        if (message.channel.id === `557560396714737674`) {
            if (!args.length) {
                return message.author.send(`**[Heurtoir]** J'attend votre réponse !`)
            }
            if (args[0] === `${passwordData[`Serdaigle`].enigme}`) {
                var serdaigleRole = message.guild.roles.find(role => role.name === "Salle Commune Serdaigle");
                message.member.addRole(serdaigleRole)
                message.author.send(`**[Heurtoir]** C'est correct, vous pouvez entrez.`)
            }
            else
            {
                message.author.send(`**[Heurtoir]** Hum... Mauvaise réponse !`)
            }
        }
    }
    if (cmd === `${prefix}mdp`) {
        message.delete(1500);
        if (message.channel.id === `557561370216759296`) {
            if (!args.length) {
                return message.author.send(`**[Jedusor]** Vous n'avez pas prononcé le Mot-De-Passe.`)
            }
            if (args[0] === `${passwordData[`Serpentard`].password}`) {
                var serpentardRole = message.guild.roles.find(role => role.name === "Salle Commune Serpentard");
                message.member.addRole(serpentardRole)
                message.author.send(`**[Jedusor]** C'est correct, vous pouvez entrez.`)
            }
            else
            {
                message.author.send(`**[Jedusor]** Hum... Mauvais Mot-De-Passe !`)
            }
        }
        if (message.channel.id === `557559800548950019`) {
            if (!args.length) {
                return message.author.send(`**[La Grosse Dame]** Vous n'avez pas prononcé le Mot-De-Passe.`)
            }
            if (args[0] === `${passwordData[`Gryffondor`].password}`) {
                var gryffondorRole = message.guild.roles.find(role => role.name === "Salle Commune Gryffondor");
                message.member.addRole(gryffondorRole)
                message.author.send(`**[La Grosse Dame]** *La Grosse Dame chante, un verre à la main.* Corrrrrrecttttt !.`)
            }
            else
            {
                message.author.send(`**[La Grosse Dame]** Hum... Mauvais Mot-De-Passe !`)
            }
        }
        if (message.channel.id === `557561346196111367`) {
            if (!args.length) {
                return message.author.send(`**[Tonneau]** Vous n'avez pas prononcé le Mot-De-Passe.`)
            }
            if (args[0] === `${passwordData[`Poufsouffle`].password}`) {
                var poufsouffleRole = message.guild.roles.find(role => role.name === "Salle Commune Poufsouffle");
                message.member.addRole(poufsouffleRole)
                message.author.send(`**[Tonneau]** Je n'ai jamais vu d'élève aussi intélligent(e) !`)
            }
            else
            {
                message.author.send(`**[Tonneau]** Hum... Mauvais Mot-De-Passe !`)
            }
        }
    }

});

bot.login('NTUzMjY4NDM3MjU4OTkzNzA1.XKHyqw.yTb3nRSuY1VpEwbBGDwDL-sT3Is');
