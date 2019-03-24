const Discord = require('discord.js');
const moment = require('moment')
const fs = require('fs');
const bot = new Discord.Client ();

let userData = JSON.parse(fs.readFileSync('JSON/userData.json', 'utf8'));
let coursData = JSON.parse(fs.readFileSync('JSON/coursData.json', 'utf8'));
let spellData = JSON.parse(fs.readFileSync('JSON/spellData.json', 'utf8'));
let housesData = JSON.parse(fs.readFileSync('JSON/housesData.json', 'utf8'));

bot.on('ready', () => {
    bot.user.setActivity(`'à vous aider.`);
    console.log('Je suis bien connecté')
});

bot.on('message', message => {
    // Variantes 
    let prefix = "!";
    let sprefix = "$"
    let sender = message.author;

    // JSON

    // Compte Bancaire
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].compte) userData[sender.id].compte = 0.

    // Paye 
    if(!userData[sender.id]) userData[sender.id] = {}
    if (!userData[sender.id].lastDaily) userData[sender.id].lastDaily = "Non collectée"

    // Valide la création du compte Gringotts
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].gringotts) userData[sender.id].gringotts = "Non"

    // Argent || Compte en Banque || Porte-Feuille
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].money) userData[sender.id].money = 0.

    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].banque) userData[sender.id].banque = 0.

    // Animal
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].animal) userData[sender.id].animal = "Non"

    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].animald) userData[sender.id].animald = 0.

    // Au-Royaume-Du-Hiboux || Menagerie-Magique

    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].auroyaumeduhibouxd) userData[sender.id].auroyaumeduhibouxd = 0.

    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].menageried) userData[sender.id].menageried = 0.

    // Chaudron
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].chaudron) userData[sender.id].chaudron = "Non"

    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].chaudrond) userData[sender.id].chaudrond = 0.

    // Madame Guipure || Tissard et Brodette
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].robes) userData[sender.id].robes = "Non"
    
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].robesd) userData[sender.id].robesd = 0.

    // Apothicaire
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].apothicaire) userData[sender.id].apothicaire = "Non"
    
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].apothicaired) userData[sender.id].apothicaired = 0.

    // Fleury et Bott
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].manuels) userData[sender.id].manuels = "Non"
    
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].manuelsd) userData[sender.id].manuelsd = 0.

    // Ollivander
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].ollivander) userData[sender.id].ollivander = "Non"
    
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].ollivanderd) userData[sender.id].ollivanderd = 0.

    // Balais
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].balais) userData[sender.id].balais = "Non"
    
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].balaisd) userData[sender.id].balaisd = 0.
    
    // COMMANDES
    
    if (message.content === prefix + "balance") {
        message.delete(1500);
        if (message.channel.id === '553620262340263938') {
            message.channel.send({embed:{
                title: "Gringotts",
                color: 0x0079FF,
                fields: [{
                    name: "Compte Crée ?",
                    value: userData[sender.id].gringotts,
                    inline: true
                },
                {
                    name: "Propriétaire du Compte",
                    value: message.author.username,
                    inline: true
                },
                {
                    name: "Balance du Compte",
                    value: userData[sender.id].banque,
                    inline: true
                },
                {
                    name: "Porte-Feuille",
                    value: userData[sender.id].money,
                    inline: true
                }]
            }})
        }
    }

    if (message.content === prefix + "argent") {
        message.delete(1500);
        message.channel.send({embed:{
            title: "Bourse",
            color: 0x0079FF,
            fields: [{
                name: "Propriétaire de la Bourse",
                value: message.author.username,
                inline: true
            },
            {
                name: "Balance de la Bourse",
                value: userData[sender.id].money,
                inline: true
            }]
        }})
    }
    
    if (message.content === prefix + "compte") {
        message.delete(1500);
        if (message.channel.id === '553620262340263938') {
            if (message.member.roles.get('553235026742083618')) {
                if (userData[sender.id].compte < 1000.) {
                    userData[sender.id].compte += 2000.
                    userData[sender.id].gringotts = "Oui"
                    userData[sender.id].banque += 350.
                    message.channel.send({embed:{
                        title: "Gringotts",
                        color: 0x0079FF,
                        fields: [{
                            name: "Création du compte",
                            value: userData[sender.id].gringotts,
                            inline: true
                        },
                        {
                            name: "Propriétaire",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Balance du Compte",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (userData[sender.id].compte > 1000.) {
                        message.delete(2500);
                        message.channel.send(`Désolé ${message.author} mais tu as déjà crée ton compte.`);
                        console.log(`Quelqu'un avait déjà crée un compte.`)
                    }
                }
            }
            if (message.member.roles.get('553235077182521413')) {
                if (userData[sender.id].compte < 1000.) {
                    userData[sender.id].compte += 2000.
                    userData[sender.id].gringotts = "Oui"
                    userData[sender.id].banque += 250.
                    message.channel.send({embed:{
                        title: "Gringotts",
                        color: 0x0079FF,
                        fields: [{
                            name: "Création du compte",
                            value: userData[sender.id].gringotts,
                            inline: true
                        },
                        {
                            name: "Propriétaire",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Balance du Compte",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (userData[sender.id].compte > 1000.) {
                        message.delete(2500);
                        message.channel.send(`Désolé ${message.author} mais tu as déjà crée ton compte.`);
                        console.log(`Quelqu'un avait déjà crée un compte.`)
                    }
                }
            }
            if (message.member.roles.get('553235118274117646')) {
                if (userData[sender.id].compte < 1000.) {
                    userData[sender.id].compte += 2000.
                    userData[sender.id].gringotts = "Oui"
                    userData[sender.id].banque += 220.
                    message.channel.send({embed:{
                        title: "Gringotts",
                        color: 0x0079FF,
                        fields: [{
                            name: "Création du compte",
                            value: userData[sender.id].gringotts,
                            inline: true
                        },
                        {
                            name: "Propriétaire",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Balance du Compte",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (userData[sender.id].compte > 1000.) {
                        message.delete(2500);
                        message.channel.send(`Désolé ${message.author} mais tu as déjà crée ton compte.`);
                        console.log(`Quelqu'un avait déjà crée un compte.`)
                    }
                }
            }
        }
        else
        {
            message.delete(2500);
            console.log(`Quelqu'un s'est trompé de channel.`)
        }
    }

    if (message.content === prefix + "retirer") {
        message.delete(1500);
        if (message.channel.id === '553620262340263938') {
            userData[sender.id].banque -= 50.
            userData[sender.id].money += 50.
            message.channel.send({embed:{
                title: "Gringotts",
                color: 0x0079FF,
                fields: [{
                    name: "Retrait",
                        value: `50 Gallions`,
                        inline: true
                    },
                    {
                        name: "Compte",
                        value: userData[sender.id].banque,
                        inline: true
                    }]
                }})
            console.log(`Quelqu'un vient de retirer 50 gallions.`)
        }
    }
    
    if (message.content === prefix + "deposer") {
        message.delete(1500);
        if (message.channel.id === '553620262340263938') {
            userData[sender.id].banque += 50.
            userData[sender.id].money -= 50.
            message.channel.send({embed:{
                title: "Gringotts",
                color: 0x0079FF,
                fields: [{
                    name: "Dépot",
                    value: `50 Gallions`,
                    inline: true
                },
                {
                    name: "Compte",
                    value: userData[sender.id].banque,
                    inline: true
                }]
            }})
            console.log(`Quelqu'un vient de déposer 50 gallions.`)
        }
    }

    if (message.content === prefix + "paye") {
        if (message.channel.id === '554018788614471681') {
            if (message.member.roles.get('553251123213893635')) {
                if (userData[sender.id].lastDaily != moment().format('L')) {
                    userData[sender.id].lastDaily = moment().format('L')
                    userData[sender.id].banque += 255;
                    message.channel.send({embed:{
                        title: "Paye",
                        color: 0x0079FF,
                        fields: [{
                            name: "Reçue",
                            value: `255 Gallions`,
                            inline: true
                        },
                        {
                            name: "Balance",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
            }
            if (message.member.roles.get('553251197382033427')) {
                if (userData[sender.id].lastDaily != moment().format('L')) {
                    userData[sender.id].lastDaily = moment().format('L')
                    userData[sender.id].banque += 155;
                    message.channel.send({embed:{
                        title: "Paye",
                        color: 0x0079FF,
                        fields: [{
                            name: "Reçue",
                            value: `155 Gallions`,
                            inline: true
                        },
                        {
                            name: "Balance",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
            }
            if (message.member.roles.get('553249625587580929')) {
                if (userData[sender.id].lastDaily != moment().format('L')) {
                    userData[sender.id].lastDaily = moment().format('L')
                    userData[sender.id].banque += 245;
                    message.channel.send({embed:{
                        title: "Paye",
                        color: 0x0079FF,
                        fields: [{
                            name: "Reçue",
                            value: `245 Gallions`,
                            inline: true
                        },
                        {
                            name: "Balance",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
            }
            if (message.member.roles.get('553249741979385878')) {
                if (userData[sender.id].lastDaily != moment().format('L')) {
                    userData[sender.id].lastDaily = moment().format('L')
                    userData[sender.id].banque += 175;
                    message.channel.send({embed:{
                        title: "Paye",
                        color: 0x0079FF,
                        fields: [{
                            name: "Reçue",
                            value: `175 Gallions`,
                            inline: true
                        },
                        {
                            name: "Balance",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
            }
            if (message.member.roles.get('553250969106907137')) {
                if (userData[sender.id].lastDaily != moment().format('L')) {
                    userData[sender.id].lastDaily = moment().format('L')
                    userData[sender.id].banque += 125;
                    message.channel.send({embed:{
                        title: "Paye",
                        color: 0x0079FF,
                        fields: [{
                            name: "Reçue",
                            value: `125 Gallions`,
                            inline: true
                        },
                        {
                            name: "Balance",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
            }
            if (message.member.roles.get('553251043312402433')) {
                if (userData[sender.id].lastDaily != moment().format('L')) {
                    userData[sender.id].lastDaily = moment().format('L')
                    userData[sender.id].banque += 115;
                    message.channel.send({embed:{
                        title: "Paye",
                        color: 0x0079FF,
                        fields: [{
                            name: "Reçue",
                            value: `115 Gallions`,
                            inline: true
                        },
                        {
                            name: "Balance",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
            }
            if (message.member.roles.get('553641003710677002')) {
                if (userData[sender.id].lastDaily != moment().format('L')) {
                    userData[sender.id].lastDaily = moment().format('L')
                    userData[sender.id].banque += 95;
                    message.channel.send({embed:{
                        title: "Paye",
                        color: 0x0079FF,
                        fields: [{
                            name: "Reçue",
                            value: `95 Gallions`,
                            inline: true
                        },
                        {
                            name: "Balance",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
            }
            else
            {
                if (userData[sender.id].lastDaily != moment().format('L')) {
                    userData[sender.id].lastDaily = moment().format('L')
                    userData[sender.id].banque += 25;
                    message.channel.send({embed:{
                        title: "Paye",
                        color: 0x0079FF,
                        fields: [{
                            name: "Reçue",
                            value: `25 Gallions`,
                            inline: true
                        },
                        {
                            name: "Balance",
                            value: userData[sender.id].banque,
                            inline: true
                        }]
                    }})
                }
            }
        }
    }
    if (message.content === prefix + "hiboux") {
        message.delete(1500);
        if (message.channel.id === '553620155914125324') {
            if (userData[sender.id].auroyaumeduhibouxd < 1000.) {
                if (userData[sender.id].animald < 1000.) {
                    if (message.member.roles.get('553250258012864526')) {
                        if (userData[sender.id].money > 40.) {
                        message.channel.send(`**[Eeylops]** Bonjour ! Bienvenue au Royaume du Hiboux. Vous venez achetez un hiboux ? Suivez moi.`);
                            message.channel.send(`*Eeylops vous emmène dans une pièce intermédiaire, dans laquelle des hiboux sont entreposés dans de grandes cages, dont certaines ouvertes.`);
                            message.channel.send(`**[Eeylops]** Celui-ci, vous êtes sûr? Oui ? Très bien. *Helias sort et prend le hiboux sur son épaule, et le met dans une cage, qu'elle vous tend.*`);
                            message.channel.send(`**[40 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 40;
                            userData[sender.id].animal = "Oui"
                            userData[sender.id].auroyaumeduhibouxd = 2000.
                            userData[sender.id].animald += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 40.) {
                                message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                                console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat de Hiboux.`);
                            }
                        }
                    }
                    if (message.member.roles.get('553250324312489984')) {
                        if (userData[sender.id].money > 40.) {
                            message.channel.send(`**[Eeylops]** Bonjour ${message.member}. Tu viens acheté un hiboux ? Suit moi.`);
                            message.channel.send(`*Eeylops vous emmène dans une pièce intermédiaire, dans laquelle des hiboux sont entreposés dans de grandes cages, dont certaines ouvertes.`);
                            message.channel.send(`**[Eeylops]** Celui-ci, vous êtes sûr? Oui ? Très bien. *Helias sort et prend le hiboux sur son épaule, et le met dans une cage, qu'elle vous tend.*`);
                            message.channel.send(`**[40 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 40;
                            userData[sender.id].animal = "Oui"
                            userData[sender.id].auroyaumeduhibouxd = 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 40.) {
                                message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                                console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat de Hiboux.`);
                            }
                        }
                    }
                }
                else
                {
                    if (userData[sender.id].animald > 1000.) {
                        message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                        console.log(`Tu as déjà acheté ça.`)
                    }
                }
            }
            else
            {
                if (userData[sender.id].auroyaumeduhibouxd > 1000.) {
                message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
    }
    
    if (message.content === prefix + "chaudron") {
        message.delete(1500);
        if (message.channel.id === '553619860353974272') {
            if (userData[sender.id].chaudrond < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    if (userData[sender.id].money > 25.) {
                        message.channel.send(`**[Potage]** Bonjour. Je vous souhaite le bienvenue Au Bon Chaudron. Je suppose que rentres en Première Année ? J'ai pile ce qu'il te faut.`);
                        message.channel.send(`*Potage pointe deux chaudrons avec sa baguette, qui viennent se rapetissir dans un petit sac.*`);
                        message.channel.send(`**[Potage]** Ce sera plus facile pour le transport. Ils reprendront leurs tailles dès que tu les sortira du sac.`)
                        message.channel.send(`**[25 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id].money -= 25;
                        userData[sender.id].chaudron = "Oui"
                        userData[sender.id].chaudrond = 2000.

                    }
                    if (userData[sender.id].money < 25.) {
                        message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat de Chaudron.`)
                    }
                }
                if (message.member.roles.get('553250324312489984')) {
                    if (userData[sender.id].money > 25.) {
                        message.channel.send(`**[Potage]** Bonjour ${message.member}, tu rentres en deuxième année à Poudlard, j'ai tout ce qu'il te faut en réserve. Attend moi-là.`);
                        message.channel.send(`*Potage se dirige vers sa réserve, et elle revient avec deux chaudron, qu'elle fait léviter. Elle les fait se rapetissir dans un sac.*`);
                        message.channel.send(`**[Potage]** Voilà, ce sera plus simple pour les transporter. Cela fera 25 Gallions, s'il te plait.`);
                        message.channel.send(`**[25 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id].money -= 25;
                        userData[sender.id].chaudron = "Oui"
                        userData[sender.id].chaudrond = 2000.
                    }
                    if (userData[sender.id].money < 25.) {
                        message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat de Chaudron.`)
                    }
                }
            }
            else
            {
                if (userData[sender.id].chaudrond > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
        else
        {
            message.delete(1500);
            console.log(`Une personne n'était pas dans le bon channel.`)
        }
    }

    if (message.content === prefix + "menagerie") {
        message.delete(1500);
        if (message.channel.id === '553619933913808927') {
            if (userData[sender.id].menageried < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    message.channel.send(`**[Helias]** Bonjour, et bienvenue à la Ménagerie Magique. Ici, vous pouvez acheter des chats ou des rats.`);
                    message.channel.send(`**[Helias]** Que souhaitez-vous ? [!chat pour acheter un chat | !rat pour acheter un rat]`);
                }
                if (message.member.roles.get('553250324312489984')) {
                    message.channel.send(`**[Helias]** Oh, bonjour ${message.member}, tu viens acheter ton animal ?`);
                    message.channel.send(`**[Helias]** Que souhaites-tu ? [!chat pour acheter un chat | !rat pour acheter un rat]`);
                }
            }
            else
            {
                if (userData[sender.id].menageried > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
    }

    if (message.content === prefix + "chat") {
        message.delete(1500);
        if (message.channel.id === '553619933913808927') {
            if (userData[sender.id].menageried < 1000.) {
                if (userData[sender.id].animald < 1000) {
                    if (message.member.roles.get('553250258012864526')) {
                        if (userData[sender.id].money > 40.) {
                            message.channel.send(`**[Helias]** Très bien, suivez moi. *Helias vous emmène auprès d'un parc du magasin, dans lequel des chats gambadent.*`);
                            message.channel.send(`**[Helias]** Celui-ci, vous êtes sûr? Oui ? Très bien. *Helias sort et prend le chat dans ses mains, et le met dans une cage, qu'elle vous tend.*`);
                            message.channel.send(`**[40 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 40;
                            userData[sender.id].animal = "Oui"
                            userData[sender.id].menageried += 2000.
                            userData[sender.id].animald += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 40.) {
                                message.channel.send(`**[Helias]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                                console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Chat.`);
                            }
                        }
                    }
                    else
                    {
                        if (message.member.roles.get('553250324312489984')) {
                            if (userData[sender.id].money > 40.) {
                                message.channel.send(`**[Helias]** Très bien, suis moi. *Helias vous emmène auprès d'un parc du magasin, dans lequel des chats gambadent.*`);
                                message.channel.send(`**[Helias]** Celui-ci, tu es sûr? Oui ? Très bien. *Helias sort et prend le chat dans ses mains, et le met dans une cage, qu'elle vous tend.*`);
                                message.channel.send(`**[40 Gallions vous ont étés retirés de votre compte.]**`);
                                userData[sender.id].money -= 40;
                                userData[sender.id].animal = "Oui"
                                userData[sender.id].menageried += 2000.
                                userData[sender.id].animald += 2000.
                            }
                            else
                            {
                                if (userData[sender.id].money < 40.) {
                                    message.channel.send(`**[Helias]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                                    console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Chat.`);  
                                }
                            }
                        }
                    }
                }
                else
                {
                    if (userData[sender.id].animald > 1000.) {
                        message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                        console.log(`Tu as déjà acheté ça.`)
                    }
                }
            }
            else
                {
                if (userData[sender.id].menageried > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
    }

    if (message.content === prefix + "rat") {
        message.delete(1500);
        if (message.channel.id === '553619933913808927') {
            if (userData[sender.id].menageried < 1000.) {
                if (userData[sender.id].animald < 1000.) {
                    if (message.member.roles.get('553250258012864526')) {
                        if (userData[sender.id].money > 30.) {
                            message.channel.send(`**[Helias]** Très bien, suivez moi. *Helias vous emmène auprès de plusieurs cages, contenant différents rats.*`);
                            message.channel.send(`**[Helias]** Celui-ci, vous êtes sûr? Oui ? Très bien. *Helias sort et prend le rat dans ses mains, et le met dans une cage, qu'elle vous tend.*`)
                            message.channel.send(`**[30 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 30;
                            userData[sender.id].animal = "Oui"
                            userData[sender.id].menageried += 2000.
                            userData[sender.id].animald += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 30) {
                                message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                                console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Chat.`);
                            }
                        }
                    }
                    else
                    {
                        if (message.member.roles.get('553250324312489984')) {
                            if (userData[sender.id].money > 30.) {
                                message.channel.send(`**[Helias]** Très bien, suis moi. *Helias vous emmène auprès de plusieurs cages, contenant différents rats.*`);
                                message.channel.send(`**[Helias]** Celui-ci, tu es sûr? Oui ? Très bien. *Helias sort et prend le rat dans ses mains, et le met dans une cage, qu'elle vous tend.*`)
                                message.channel.send(`**[30 Gallions vous ont étés retirés de votre compte.]**`);
                                userData[sender.id].money -= 30;
                                userData[sender.id].animal = "Oui"
                                userData[sender.id].menageried += 2000.
                                userData[sender.id].animald += 2000.
                            }
                            else
                            {
                                if (userData[sender.id].money < 30) {
                                    message.channel.send(`**[Potage]** Mais, tu n'as pas assez d'argent pour payer tes fournitures. Reviens quand tu aura les moyens.`);
                                    console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Rat.`);
                                }
                            }
                        }
                    }
                }
                else
                {
                    if (userData[sender.id].animald > 1000.) {
                        message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                        console.log(`Tu as déjà acheté ça.`)
                    }
                }
            }
            else
            {
                if (userData[sender.id].menageried > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
    }

    if (message.content === prefix + "robes") {
        message.delete(1500);
        if (message.channel.id === '554696431533817873') {
            if (userData[sender.id].robesd < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    if (userData[sender.id].money > 45.) {
                        message.channel.send(`**[Jykes]** Bonjour, et bienvenue chez Tissard et Brodette, vous venez acheter vos robes ?`);
                        message.channel.send(`**[Jykes]** C'est bien ce que je me disais *Jykes se retourne et prend une pile de robes, agréablement pliée*.`);
                        message.channel.send(`**[Jykes]** Cela vous coûtera 45 Gallions.`);
                        message.channel.send(`**[45 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id].money -= 45;
                        userData[sender.id].robes = "Oui"
                        userData[sender.id].robesd += 2000.
                    }
                    else
                    {
                        if (userData[sender.id].money < 45.) {
                            message.channel.send(`**[Jykes]** Je suis désolée, mais vous n'avez pas assez d'argent pour vous procurer ces robes.`)
                            console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Robes.`);
                        }
                    }
                }
                else
                {
                    if (message.member.roles.get('553250324312489984')) {
                        if (userData[sender.id].money > 45.) {
                            message.channel.send(`**[Jykes]** Bonjour, et bienvenue chez Tissard et Brodette, vous venez acheter vos robes ?`);
                            message.channel.send(`**[Jykes]** C'est bien ce que je me disais *Jykes se retourne et prend une pile de robes, agréablement pliée*.`);
                            message.channel.send(`**[Jykes]** Cela vous coûtera 45 Gallions.`);
                            message.channel.send(`**[45 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 45;
                            userData[sender.id].robes = "Oui"
                            userData[sender.id].robesd += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 45.) {
                                message.channel.send(`**[Jykes]** Je suis désolée, mais vous n'avez pas assez d'argent pour vous procurer ces robes.`)
                                console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Robes.`);
                            }
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id].robesd > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
        else
        {
            if (message.channel.id === '553619086266073118') {
                if (userData[sender.id].robesd < 1000.) {
                    if (message.member.roles.get('553250258012864526')) {
                        if (userData[sender.id].money > 25.) {
                            message.channel.send(`**[Madame Guipure]** Bonjour mon enfant. Toi, tu vas à Poudlard cette année ? Je ne me trompe jamais.`);
                            message.channel.send(`**[Madame Guipure]** Ne bouge pas, je vais te chercher ce qu'il te faut.`);
                            message.channel.send(`*Madame Guipure se dirige vers son arrière-boutique. Elle revient plusieurs minutes après, avec tout le matériel qu'il vous faut.*`);
                            message.channel.send(`**[Madame Guipure]** Tiens mon garçon, voici ce qu'il te faut pour ta rentrée à Poudlard.`);
                            message.channel.send(`*Madame Guipure vous a donnée une pile d'objet, dont vos deux robes pour Poudlard.*`);
                            message.channel.send(`**[25 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 25;
                            userData[sender.id].robes = "Oui"
                            userData[sender.id].robesd += 2000.
                        }
                        else
                        {
                        if (userData[sender.id].money < 25.) {
                            message.channel.send(`**[Madame Guipure]** Reviens lorsque tu aura l'argent pour te procurer ceci.`);
                            console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Robes.`);
                            }
                        }
                    }
                    else
                    {
                        if (message.member.roles.get('553250324312489984')) {
                            if (userData[sender.id].money > 25.) {
                                message.channel.send(`**[Madame Guipure]** Bonjour ${message.member}, tu viens acheter tes nouvelles robes ?`);
                                message.channel.send(`**[Madame Guipure]** Je vais te chercher ce qu'il te faut, ne bouge pas.`);
                                message.channel.send(`*Madame Guipure se dirige vers son arrière-boutique. Elle revient plusieurs minutes après, avec tout le matériel qu'il vous faut.*`);
                                message.channel.send(`**[Madame Guipure]** Tiens mon garçon, voici ce qu'il te faut pour ta rentrée à Poudlard.`);
                                message.channel.send(`**[25 Gallions vous ont étés retirés de votre compte.]**`);
                                userData[sender.id].money -= 25;
                                userData[sender.id].robes = "Oui"
                                userData[sender.id].robesd += 2000.
                            }
                            else
                            {
                                if (userData[sender.id].money < 25.) {
                                    message.channel.send(`**[Madame Guipure]** Reviens lorsque tu aura l'argent pour te procurer ceci.`);
                                    console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Robes.`);
                                }
                            }
                        }
                    }
                }
                else
                {
                    if (userData[sender.id].robesd > 1000.) {
                        message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                        console.log(`Tu as déjà acheté ça.`)
                    }
                }
            }
        }
    }

    if (message.content === prefix + "apothicaire") {
        message.delete(1500);
        if (message.channel.id === '553619319536222218') {
            if (userData[sender.id].apothicaired < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    if (userData[sender.id].money > 25.) {
                        message.channel.send(`**[Jiggers]** Bonjour mon enfant. Tu fais ta rentrée dans l'école de Poudlard, c'est ça?`);
                        message.channel.send(`**[Slugg]** Ah, un futur élève de Poudlard ? *Dit un deuxième homme, proche du premier*`);
                        message.channel.send(`**[Slug]** Je vais lui chercher ses fournitures.`);
                        message.channel.send(`*La deuxième personne s'enfonce dans une cave, grâce à des escaliers, qu'ils remontent quelques temps après.*`);
                        message.channel.send(`*Une pile d'objets volent derrière lui, et se pose finalement sur le comptoir.*`);
                        message.channel.send(`**[Jiggers]** Voici pour toi, tu as tout ce qu'il te faut.`);
                        message.channel.send(`**[25 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id].money -= 25;
                        userData[sender.id].apothicaire = "Oui"
                        userData[sender.id].apothicaired += 2000.
                    }
                    else
                    {
                        if (userData[sender.id].money < 25.) {
                            message.channel.send(`**[Jiggers]** Mais, on dirait bien que tu n'as pas l'argent pour acheter ceci.`);
                            console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Apotichaire.`);
                        }
                    }
                }
                else
                {
                    if (message.member.roles.get('553250324312489984')) {
                        if (userData[sender.id].money > 30.) {
                            message.channel.send(`**[Jigger]** Bonjour ${message.member}. Tu viens chercher ton matériel pour ta deuxième année ?`);
                            message.channel.send(`**[Jiggers]** Je vois, *Jigers s'enfonce dans dans une cave, grâce à des escaliers, qu'ils remontent quelques secondes après.*`);
                            message.channel.send(`*Une pile d'objets volent derrière lui, et se pose finalement sur le comptoir.*`);
                            message.channel.send(`**[Jiggers]** Voici pour toi, tu as tout ce qu'il te faut.`);
                            message.channel.send(`**[30 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 30;
                            userData[sender.id].apothicaire = "Oui"
                            userData[sender.id].apothicaired += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 30.) {
                                message.channel.send(`**[Jiggers]** Mais, on dirait bien que tu n'as pas l'argent pour acheter ceci.`);
                                console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Apotichaire.`);
                            }
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id].apothicaired > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
    }
    
    if (message.content === prefix + "manuels") {
        message.delete(1500);
        if (message.channel.id === '553620031083380756') {
            if (userData[sender.id].manuelsd < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    if (userData[sender.id].money > 30.) {
                        message.channel.send(`**[Fleury]** Oh, nous avons de la visite. Bonjour, et bienvenue chez Fleury et Bott. Vous venez pour vos fournitures c'est cela? En première année je suppose.`);
                        message.channel.send(`**[Fleury]** Je vais vous apporter ça. *Fleury fait un geste avec sa baguette, et une pile de livres, attachés les uns aux autres se déplacèrent jusqu'au comptoir.*`);
                        message.channel.send(`**[Fleury]** Voici, pour vous, jeune-homme. Cela fera 30 Gallions.`);
                        message.channel.send(`**[30 Gallions vous ont étés retirés de votre compte.]**`);
                        userData[sender.id].money -= 30;
                        userData[sender.id].manuels = "Oui"
                        userData[sender.id].manuelsd += 2000.
                    }
                    else
                    {
                        if (userData[sender.id].money < 30.) {
                            message.channel.send(`**[Fleury]** Reviens lorsque tu aura l'argent pour te procurer ces manuels.`);
                            console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Manuels.`);
                        }
                    }
                }
                else
                {
                    if (message.member.roles.get('553250324312489984')) {
                        if (userData[sender.id].money > 45.) {
                            message.channel.send(`**[Fleury]** Bott, nous avons de la visite ! Bonjour ${message.member}, et bienvenue chez Fleury et Bott.`);
                            message.channel.send(`**[Fleury]** Tu viens acheter tes fournitures pour ta deuxième année, c'est ça? Il n'y a pas de soucis, je t'ammène ceci.`);
                            message.channel.send(`*Fleury fait un geste avec sa baguette, et une pile de livres, attachés les uns aux autres se déplacèrent jusqu'au comptoir.*`);
                            message.channel.send(`**[Fleury]** Voici, pour toi, jeune-homme. Cela fera 30 Gallions.`);
                            message.channel.send(`**[45 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 45;
                            userData[sender.id].manuels = "Oui"
                            userData[sender.id].manuelsd += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 45.) {
                                message.channel.send(`**[Fleury]** Reviens lorsque tu aura l'argent pour te procurer ces manuels.`);
                                console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Manuels.`);
                            }
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id].manuelsd > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
    }
    
    if (message.content === prefix + "baguette") {
        message.delete(1500);
        if (message.channel.id === '553966887734738944') {
            if (userData[sender.id].ollivanderd < 1000.) {
                if (userData[sender.id].money > 7.) {
                    message.channel.send(`**[Ollivander]** Bonjour ${message.member}, tu viens cherchez ta baguette c'est cela ? Je vais te chercher celle-ci.` );
                    message.channel.send('*Le vendeur se dirige vers les rangées de baguettes, entreposées derrière lui. Il revient quelques secondes après, une boite à la main.*');
                    message.channel.send('**[Ollivander]**Je crois que celle-ci sera parfaite...');
                    message.channel.send(`*Le vendeur vous a donné une boite, contenant votre baguette.`);
                    message.channel.send(`**[7 Gallions vous ont étés retirés de votre compte.]**`);
                    userData[sender.id].money -= 7;
                    userData[sender.id].ollivander = "Oui"
                    userData[sender.id].ollivanderd += 2000.
                }
                else
                {
                    if (userData[sender.id].money < 7.) {
                        message.channel.send(`**[Ollivander]** Mais, on dirait bien que tu n'as pas les moyens de t'acheter une baguette.`);
                        console.log(`Quelqu'un n'avait pas l'argent requis pour l'achat Baguette.`);
                    }
                }
            }
            else
            {
                if (userData[sender.id].ollivanderd > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
    }

    if (message.content === prefix + "oakshaft79") {
        message.delete(1500);
        if (message.channel.id === '554696324432265251') {
            if (userData[sender.id].balaisd < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    message.channel.send(`**[Felis]** Vous n'avez pas l'âge pour acheter un balais, j'en suis désolé.`);
                    console.log(`Quelqu'un a essayé d'utiliser !oakshaft79`);
                }
                else
                {
                    if (message.member.roles.get('553250324312489984')) {
                        if (userData[sender.id].money > 95.) {
                            message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                            message.channel.send(`**[Felis]** Vous souhaitez un Oakshaft 79, c'est cela?`);
                            message.channel.send(`**[Felis]** Je vois, vous achez choisit l'endurance, c'est un très bon choix.`);
                            message.channel.send(`**[95 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 95;
                            userData[sender.id].balais = "Oakshaft79"
                            userData[sender.id].balaisd += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 95.) {
                                message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                                console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`);
                            }
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id].balaisd > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`)
                }
            }
        }
    }

    if (message.content === prefix + "brossdur2") {
        message.delete(1500);
        if (message.channel.id === '554696324432265251') {
            if (userData[sender.id].balaisd < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    message.channel.send(`**[Felis]** Vous n'avez pas l'âge pour acheter un balais, j'en suis désolé.`);
                    console.log(`Quelqu'un a essayé d'utiliser !brossdur2`);
                }
                else
                {
                    if (message.member.roles.get('553250324312489984')) {
                        if (userData[sender.id].money > 115.) {
                            message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                            message.channel.send(`**[Felis]** Vous souhaitez un Brossdur 2, c'est cela?`);
                            message.channel.send(`**[Felis]** Je vois, c'est un très bon choix.`);
                            message.channel.send(`**[115 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 115;
                            userData[sender.id].balaisd = "Brossdur2"
                            userData[sender.id].balaisd += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 115.) {
                                message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                                console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`);
                            }
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id].balaisd > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`);
                }
            }
        }
    }

    if (message.content === prefix + "brossdur3") {
        message.delete(1500);
        if (message.channel.id === '554696324432265251') {
            if (userData[sender.id].balaisd < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    message.channel.send(`**[Felis]** Vous n'avez pas l'âge pour acheter un balais, j'en suis désolé.`);
                    console.log(`Quelqu'un a essayé d'utiliser !brossdur3`);
                }
                else
                {
                    if (message.member.roles.get('553250324312489984')) {
                        if (userData[sender.id].money > 135.) {
                            message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                            message.channel.send(`**[Felis]** Vous souhaitez un Brossdur 3, c'est cela?`);
                            message.channel.send(`**[Felis]** Je vois, c'est un très bon choix.`);
                            message.channel.send(`**[135 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 135;
                            userData[sender.id].balais = "Brossdur3"
                            userData[sender.id].balaisd += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 135.) {
                                message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                                console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`);
                            }
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id].balaisd > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`);
                }
            }
        }
    }

    if (message.content === prefix + "comete180") {
        message.delete(1500);
        if (message.channel.id === '554696324432265251') {
            if (userData[sender.id].balaisd < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    message.channel.send(`**[Felis]** Vous n'avez pas l'âge pour acheter un balais, j'en suis désolé.`);
                    console.log(`Quelqu'un a essayé d'utiliser !comete180`);
                }
                else
                {
                    if (message.member.roles.get('553250324312489984')) {
                        if (userData[sender.id].money > 165.) {
                            message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                            message.channel.send(`**[Felis]** Vous souhaitez un Comète 180, c'est cela?`);
                            message.channel.send(`**[Felis]** Je vois, c'est un très bon choix.`);
                            message.channel.send(`**[165 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 165;
                            userData[sender.id].balais = "Comete180"
                            userData[sender.id].balaisd += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 165.) {
                                message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                                console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`);
                            }
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id].balaisd > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`);
                }
            }
        }
    }

    if (message.content === prefix + "nimbus1000") {
        if (message.channel.id === '554696324432265251') {
            if (userData[sender.id].balaisd < 1000.) {
                if (message.member.roles.get('553250258012864526')) {
                    message.channel.send(`**[Felis]** Vous n'avez pas l'âge pour acheter un balais, j'en suis désolé.`);
                    console.log(`Quelqu'un a essayé d'utiliser !nimbus1000`);
                }
                else
                {
                    if (message.member.roles.get('553250324312489984')) {
                        if (userData[sender.id].money > 255.) {
                            message.channel.send(`**[Felis]** Bonjour, et bienvenue chez Quality Quidditch Supplies.`);
                            message.channel.send(`**[Felis]** Vous souhaitez un Nimbus 1000, c'est cela?`);
                            message.channel.send(`**[Felis]** Je vois, sa vitesse est révolutionnaire. C'est un très bon choix.`);
                            message.channel.send(`**[255 Gallions vous ont étés retirés de votre compte.]**`);
                            userData[sender.id].money -= 255;
                            userData[sender.id].balais = 'Nimbus100'
                            userData[sender.id].balaisd += 2000.
                        }
                        else
                        {
                            if (userData[sender.id].money < 255.) {
                                message.channel.send(`**[Felis]** Mais, vous n'avez pas les moyens de vous procurer ceci.`);
                                console.log(`Quelqu'un a essayé d'acheter un balais, mais n'a pas pu.`);
                            }
                        }
                    }
                }
            }
            else
            {
                if (userData[sender.id].balaisd > 1000.) {
                    message.channel.send(`Désolé ${message.author} mais tu as déjà acheté ceci.`)
                    console.log(`Tu as déjà acheté ça.`);
                }
            }
        }
    }

    if (message.content === prefix + "debout") {
        // Message Aléatoire
        var roll = (Math.floor(Math.random()*100)+1);
        if (userData[sender.id].balaisd > 1000.) {
            message.channel.send({embed:{
                title: "Balais",
                color: 0x0079FF,
                fields: [{
                    name: "Balais ?",
                    value: userData[sender.id].balais,
                    inline: true
                },
                {
                    name: "Propriétaire du balais",
                    value: message.author.username,
                    inline: true
                },
                {
                    name: "Dés",
                    value: roll,
                    inline: true
                }]
            }})
        }
        else
        {
            if (userData[sender.id].balaisd < 1000.) {
                message.channel.send(`Désolé ${message.author}, mais tu n'as pas de balais. `);
                console.log(`Quelqu'un n'avait pas de balais, et n'a pas pu utiliser !debout.`);
            }
        }
    }
    
    // Potions
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].potions) coursData["Cours"].potions = 0.
    
    // Histoire de la magie
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].histoire) coursData["Cours"].histoire = 0.

    // DCFM
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].defense) coursData["Cours"].defense = 0.

    // Sortilèges
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].sortileges) coursData["Cours"].sortileges = 0.

    // Divination
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].divination) coursData["Cours"].divination = 0.

    // Astronomie
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].astronomie) coursData["Cours"].astronomie = 0.

    // Études des Moldus
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].emoldus) coursData["Cours"].emoldus = 0.

    // Études des Runes
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].erunes) coursData["Cours"].erunes = 0.

    // Métamorphose
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].metamorphose) coursData["Cours"].metamorphose = 0.

    // Soins aux Créatures Magiques
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].soinscm) coursData["Cours"].soinscm = 0.

    // Botanique
    if(!coursData["Cours"]) coursData["Cours"] = {}
    if(!coursData["Cours"].botanique) coursData["Cours"].botanique = 0.

    if (message.content === prefix + 'cours') {;
        message.delete(1500);
        if (message.channel.id === '557561191162183681') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].potions < 1000.) {
                    coursData["Cours"].potions += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Potions`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].potions > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours de Potions, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours de Potions, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
        if (message.channel.id === '557558034490982421') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].histoire < 1000.) {
                    coursData["Cours"].histoire += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Histoire de la Magie`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].histoire > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours d'Histoire de la Magie, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours d'Histoire de la Magie, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }

        if (message.channel.id === '557557881071861782') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].defense < 1000.) {
                    coursData["Cours"].defense += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Défense Contre les Forces du Mal`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].defense > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours de Défense Contre les Forces du Mal, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours de Défense Contre les Forces du Mal, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
        if (message.channel.id === '557559064595529728') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].sortileges < 1000.) {
                    coursData["Cours"].sortileges += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Sortilèges`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].sortileges > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours de Sortilèges, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours de Sortilèges, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
        if (message.channel.id === '557559853485260820') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].divination < 1000.) {
                    coursData["Cours"].divination += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Divination`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].divination > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours de Divination, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours de Divination, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
        if (message.channel.id === '557560876467486733') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].astronomie < 1000.) {
                    coursData["Cours"].astronomie += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Astronomie`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].astronomie > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours d'Astronomie, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours d'Astronomie, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
        if (message.channel.id === '557557826092793856') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].emoldus < 1000.) {
                    coursData["Cours"].emoldus += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Études des Moldus`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].emoldus > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours d'Études des Moldus, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours d'Études des Moldus, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
        if (message.channel.id === '557560763787771905') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].erunes < 1000.) {
                    coursData["Cours"].erunes += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Études des Runes`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].erunes > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours d'Études des Runes, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours d'Études des Runes, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
        if (message.channel.id === '557560501287125013') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].metamorphose < 1000.) {
                    coursData["Cours"].metamorphose += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Métamorphose`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].metamorphose > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours de Métamorphose, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours de Métamorphose, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
        if (message.channel.id === '557561699587194942') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].soinscm < 1000.) {
                    coursData["Cours"].soinscm += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Soin aux Créatures Magiques`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].soinscm > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours de Soins aux Créatures Magiques, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours de Soins aux Créatures Magiques, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
        if (message.channel.id === '557575953434279937') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].botanique < 1000.) {
                    coursData["Cours"].botanique += 2000;
                    message.channel.send({embed:{
                        title: "Début de cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Botanique`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Temps",
                            value: "~ 30 minutes",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].soinscm > 1000.) {
                        message.channel.send(`Un cours est déjà en cours, ${prefix}fcours pour terminer un cours`);
                        console.log(`Quelqu'un a essayé de démarrer un cours de Botanique, alors que le précédent n'était pas terminé. [Échec].`);
                    }
                }
            }
            else
            {
                message.channel.send(`Tu n'es pas Professeur, tu ne peux donc pas utiliser cette commande.`);
                console.log(`Quelqu'un a essayé de démarrer un cours de Botanique, mais n'avais pas le rôle neccessaire. [Échec].`);
            }
        }
    }

    if (message.content === prefix + "fcours") {
        message.delete(1500);
        if (message.channel.id === '557561191162183681') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].potions > 1000.) {
                   coursData["Cours"].potions -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Potions`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].potions < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557558034490982421') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].histoire > 1000.) {
                   coursData["Cours"].histoire -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Histoire de la Magie`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].histoire < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557557881071861782') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].defense > 1000.) {
                   coursData["Cours"].defense -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Défense Contre les Forces du Mal`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].defense < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557559064595529728') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].sortileges > 1000.) {
                   coursData["Cours"].sortileges -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Sortilèges`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].sortileges < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557559853485260820') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].divination > 1000.) {
                   coursData["Cours"].divination -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Divination`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].divination < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557560876467486733') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].astronomie > 1000.) {
                   coursData["Cours"].astronomie -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Astronomie`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].astronomie < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557557826092793856') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].emoldus > 1000.) {
                   coursData["Cours"].emoldus -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Études des Moldus`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].emoldus < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557560763787771905') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].erunes > 1000.) {
                   coursData["Cours"].erunes -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Études des Runes`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].erunes < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557560501287125013') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].metamorphose > 1000.) {
                   coursData["Cours"].metamorphose -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Métamorphose`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].metamorphose < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557561699587194942') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].soinscm > 1000.) {
                   coursData["Cours"].soinscm -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Soins aux Créatures Magiques`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].soinscm < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
        if (message.channel.id === '557575953434279937') {
            if (message.member.roles.get('553249741979385878')) {
                if (coursData["Cours"].botanique > 1000.) {
                   coursData["Cours"].botanique -= 2000.
                   message.channel.send({embed:{
                        title: "Fin du cours",
                        color: 0x0079FF,
                        fields: [{
                            name: "Matière",
                            value: `Botanique`,
                            inline: true
                        },
                        {
                            name: "Professeur",
                            value: message.author.username,
                            inline: true
                        },
                        {
                            name: "Statut",
                            value: "Terminé",
                            inline: true
                        }]
                    }})
                }
                else
                {
                    if (coursData["Cours"].botanique < 1000.) {
                        message.channel.send(`Il n'y a actuellement aucun cours.`)
                    }
                }
            }
        }
    }
    
    // Potions
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].potionsc) userData[sender.id].potionsc = 0.

    // Histoire de la Magie
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].histoirec) userData[sender.id].histoirec = 0.

    // Défense Contre les Forces du Mal
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].defensec) userData[sender.id].defensec = 0.

    // Sortilèges
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].sortilegesc) userData[sender.id].sortilegesc = 0.

    // Divination
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].divinationc) userData[sender.id].divinationc = 0.

    // Astronomie
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].astronomiec) userData[sender.id].astronomiec = 0.

    // Études des Moldus
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].emoldusc) userData[sender.id].emoldusc = 0.

    // Études des Runes
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].erunesc) userData[sender.id].erunes = 0.

    // Métamorphose
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].metamorphosec) userData[sender.id].metamorphosec = 0.

    // Soins aux Créatures Magiques
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].soinscmc) userData[sender.id].soinscmc = 0.

    // Botanique
    if(!userData[sender.id]) userData[sender.id] = {}
    if(!userData[sender.id].botaniquec) userData[sender.id].botaniquec = 0.

    if (message.content === prefix + "jcours") {
        message.delete(1500);
        if (message.channel.id === '557561191162183681') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].potionsc < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].potionsc += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours de Potions.`)
                }
                else
                {
                    if (userData[sender.id].potionsc > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours de Potions.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557558034490982421') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].histoirec < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].histoirec += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours d'Histoire de la Magie.`)
                }
                else
                {
                    if (userData[sender.id].histoirec > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours d'Histoire de la Magie.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557557881071861782') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].defensec < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].defensec += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours de Défense Contre les Forces du Mal.`);
                }
                else
                {
                    if (userData[sender.id].defensec > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours de Défense Contre les Forces du Mal.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557559064595529728') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].sortilegesc < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].sortilegesc += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours de Sortilèges.`);
                }
                else
                {
                    if (userData[sender.id].sortilegesc > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours de Sortilèges.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557559853485260820') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].divinationc < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].divinationc += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours de Divination.`);
                }
                else
                {
                    if (userData[sender.id].divinationc > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours de Divinations.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557560876467486733') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].astronomiec < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].astronomiec += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours d'Astronomie.`);
                }
                else
                {
                    if (userData[sender.id].astronomiec > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours d'Astronomie'.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557557826092793856') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].emoldusc < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].emoldusc += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours d'Études des Moldus.`);
                }
                else
                {
                    if (userData[sender.id].emoldusc > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours d'Études des Moldus'.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557560763787771905') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].erunesc < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].erunesc += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours d'Études des Runes.`);
                }
                else
                {
                    if (userData[sender.id].erunesc > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours d'Études des Runes'.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557560501287125013') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].metamorphosec < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].metamorphosec += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours de Métamorphose.`);
                }
                else
                {
                    if (userData[sender.id].metamorphosec > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours de Métamorphose.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557561699587194942') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].soinscmc < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].soinscmc += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours de Soins aux Créatures Magiques.`);
                }
                else
                {
                    if (userData[sender.id].soinscmc > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours de Soins aux Créatures Magiques.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
        if (message.channel.id === '557575953434279937') {
            if (message.member.roles.get('553249460688388107')) {
                if (userData[sender.id].botaniquec < 1000.) {
                    message.channel.send (`${message.author} vient de rejoindre le cours.`);
                    userData[sender.id].botaniquec += 2000.
                    console.log(`${message.author.username} vient de rejoindre le cours de Botanique.`);
                }
                else
                {
                    if (userData[sender.id].botaniquec > 1000.) {
                        message.channel.send(`Tu fais déjà partit d'un cours de Botanique.`);
                        console.log(`Échec Cours.`);
                    }
                }
            }
        }
    }

    if (message.content === prefix + "lcours") {
        message.delete(1500);
        if (message.channel.id === '554018788614471681') {
            userData[sender.id].potionsc -= 2000;
            userData[sender.id].histoirec -= 2000;
            userData[sender.id].defensec -= 2000;
            userData[sender.id].sortilegesc -= 2000;
            userData[sender.id].divinationc -= 2000;
            userData[sender.id].astronomiec -= 2000;
            userData[sender.id].emoldusc -= 2000;
            userData[sender.id].erunesc -= 2000;
            userData[sender.id].metamorphosec -= 2000;
            userData[sender.id].soinscmc -= 2000;
            userData[sender.id].botaniquec -= 2000;
            message.channel.send(`Vous avez bien quitté vos cours.`);
            console.log('Échec !lcours')
        }
    }

    // Protego
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].protego) spellData[sender.id].protego = 0.
    
    // Rictus Sempra
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].rictus) spellData[sender.id].rictus = 0.

    // Expecto Patronum
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].patronum) spellData[sender.id].patronum = 0.

    // Petrificus Totalus
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].petrificust) spellData[sender.id].petrificust = 0.

    // Wingiardium Leviosa
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].wingardium) spellData[sender.id].wingardium = 0.

    // Incendio
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].incendio) spellData[sender.id].incendio = 0.

    // Endoloris
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].endoloris) spellData[sender.id].endoloris = 0.

    // Avada Kedavra
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].avadakedavra) spellData[sender.id].avadakedavra = 0.

    // Accio
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].accio) spellData[sender.id].accio = 0.

    // Repulso
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].repulso) spellData[sender.id].repulso = 0.

    // Expelliarmus
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].expelliarmus) spellData[sender.id].expelliarmus = 0.

    // Stupefix
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].stupefix) spellData[sender.id].stupefix = 0.

    // Oppugno
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].oppugno) spellData[sender.id].oppugno = 0.

    // Lumos
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].lumos) spellData[sender.id].lumos = 0.

    // Nox
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].nox) spellData[sender.id].nox = 0.

    // Expulso
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].expulso) spellData[sender.id].expulso = 0.

    // Confringo
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].confringo) spellData[sender.id].confringo = 0.

    // Alohomora
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].alohomora) spellData[sender.id].alohomora = 0.

    // Bloclang
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].bloclang) spellData[sender.id].bloclang = 0.

    // Revigors
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].revigors) spellData[sender.id].revigors = 0.

    // Finite Incantatem
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].finite) spellData[sender.id].finite = 0.

    // Acidious Strium
    if(!spellData[sender.id]) spellData[sender.id] = {}
    if(!spellData[sender.id].acidious) spellData[sender.id].acidious = 0.

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === `${sprefix}stupefix`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let stupefixEmbed = new Discord.RichEmbed()
        .setColor("#A9D0F5")
        .setTitle(`Stupefix`)
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Stupefix sur ${sUser}`)
        .addField(`Détails`, `${sUser} se fait ejecté à quelques mètres. (3 Secondes pour utiliser $protego).`)

        let stupefixeEmbed = new Discord.RichEmbed()
        .setColor("#A9D0F5")
        .setTitle("Stupefix")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)


        if(spellData[sender.id].stupefix > 1000.) {
            message.channel.send(stupefixEmbed);
            return;
        }
        else
        {
            if(spellData[sender.id].stupefix < 1000.) {
                message.delete(1500);
                message.channel.send(stupefixeEmbed);
            }
        }
    }

    if (cmd === `${prefix}addstupefix`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addStupefix = new Discord.RichEmbed()
        .setColor("#A9D0F5")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Stupefix.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].stupefix < 1000.) {
                    spellData[sUser.id].stupefix += 2000
                    message.channel.send(addStupefix);
                }
                else
                {
                    if (spellData[sUser.id].stupefix > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removestupefix`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removestupefix = new Discord.RichEmbed()
        .setColor("#A9D0F5")
        .setTitle("Stupefix")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Stupefix" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].stupefix > 1000.) {
                    spellData[sUser.id].stupefix -= 2000;
                    message.channel.send(removestupefix);
                }
                else
                {
                    if (spellData[sUser.id].stupefix < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Stupefix.`)
                    }
                }
            }
        }
    }
    if (cmd === `${sprefix}confringo`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let confringoEmbed = new Discord.RichEmbed()
        .setColor("#FFBF00")
        .setTitle("Confringo")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Confringo sur ${sUser}`)
        .addField(`Détails`, `${sUser} ressent une explosion très proche de lui, suivit d'un jet de flamme. (3 Secondes pour utiliser $protego).`)

        let confringoeEmbed = new Discord.RichEmbed()
        .setColor("#FFBF00")
        .setTitle("Confringo")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)
        
        if(spellData[sender.id].confringo > 1000.) {
            message.channel.send(confringoEmbed);
            return;
        }
        else
        {
            if(spellData[sender.id].confringo < 1000.) {
                message.channel.send(confringoeEmbed);
                return;
            }
        }
    }

    if (cmd === `${prefix}addconfringo`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addConfringo = new Discord.RichEmbed()
        .setColor("#FFBF00")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Confringo.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].confringo < 1000.) {
                    spellData[sUser.id].confringo += 2000
                    message.channel.send(addConfringo);
                }
                else
                {
                    if (spellData[sUser.id].confringo > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removeconfringo`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeconfringo = new Discord.RichEmbed()
        .setColor("#FFBF00")
        .setTitle("Confringo")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Confringo" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].confringo > 1000.) {
                    spellData[sUser.id].confringo -= 2000;
                    message.channel.send(removeconfringo);
                }
                else
                {
                    if (spellData[sUser.id].confringo < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Confringo.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}avadakedavra`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let avadakedavraEmbed = new Discord.RichEmbed()
        .setColor("#088A08")
        .setTitle("Avada Kedavra")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Avada Kedavra sur ${sUser}`)
        .addField(`Détails`, `${sUser} reçoit le sortilège en plein fouet, il tombe immédiatement au sol avant de mourrir. (3 Secondes pour utiliser $protego).`)

        let avadakedavraeEmbed = new Discord.RichEmbed()
        .setColor("#088A08")
        .setTitle("Avada Kedavra")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)
        
        if(spellData[sender.id].avadakedavra > 1000.) {
            message.channel.send(avadakedavraEmbed);
            return;
        }
        else
        {
            if(spellData[sender.id].avadakedavra < 1000.) {
                message.channel.send(avadakedavraeEmbed);
                return;
            }
        }
    }

    if (cmd === `${prefix}addavadakedavra`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addAvadakedavra = new Discord.RichEmbed()
        .setColor("#088A08")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Avada Kedavra.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].avadakedavra < 1000.) {
                    spellData[sUser.id].avadakedavra += 2000
                    message.channel.send(addAvadakedavra);
                }
                else
                {
                    if (spellData[sUser.id].avadakedavra > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removeavadakedavra`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeAvadakedavra = new Discord.RichEmbed()
        .setColor("#088A08")
        .setTitle("Avada Kedavra")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Avada Kedavra" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].avadakedavra > 1000.) {
                    spellData[sUser.id].avadakedavra -= 2000;
                    message.channel.send(removeAvadakedavra);
                }
                else
                {
                    if (spellData[sUser.id].avadakedavra < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Avada Kedavra.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}rictussempra`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let rictussempraEmbed = new Discord.RichEmbed()
        .setColor("#81F7F3")
        .setTitle("Rictus Sempra")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Rictus Sempra sur ${sUser}`)
        .addField(`Détails`, `${sUser} ressent des chatouilles sur tout son corps. (3 Secondes pour utiliser $protego).`)

        let rictussempraeEmbed = new Discord.RichEmbed()
        .setColor("#81F7F3")
        .setTitle("Rictus Sempra")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)
        
        if(spellData[sender.id].rictus > 1000.) {
            message.channel.send(rictussempraEmbed);
            return;
        }
        else
        {
            if(spellData[sender.id].rictus < 1000.) {
                message.channel.send(rictussempraeEmbed);
                return;
            }
        }
    }

    if (cmd === `${prefix}addrictussempra`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addRictusSempra = new Discord.RichEmbed()
        .setColor("#81F7F3")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Rictus Sempra.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].rictus < 1000.) {
                    spellData[sUser.id].rictus += 2000
                    message.channel.send(addRictusSempra);
                }
                else
                {
                    if (spellData[sUser.id].rictus > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }
    
    if (cmd === `${prefix}removerictussempra`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removerictussempra = new Discord.RichEmbed()
        .setColor("#81F7F3")
        .setTitle("Rictus Sempra")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Rictus Sempra" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].rictus > 1000.) {
                    spellData[sUser.id].rictus -= 2000;
                    message.channel.send(removerictussempra);
                }
                else
                {
                    if (spellData[sUser.id].rictus < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Rictus Sempra.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}expelliarmus`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let expelliarmusEmbed = new Discord.RichEmbed()
        .setColor("#FE2E2E")
        .setTitle("Expelliarmus")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Expelliarmus sur ${sUser}`)
        .addField(`Détails`, `${sUser} lâche sa baguette qui commence à s'envoler. (3 Secondes pour utiliser $protego).`)

        let expelliarmuseEmbed = new Discord.RichEmbed()
        .setColor("#FE2E2E")
        .setTitle("Expelliarmus")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)
        
        if(spellData[sender.id].expelliarmus > 1000.) {
            message.channel.send(expelliarmusEmbed);
            return;
        }
        else
        {
            if(spellData[sender.id].expelliarmus < 1000.) {
                message.channel.send(expelliarmuseEmbed);
                return;
            }
        }
    }

    if (cmd === `${prefix}addexpelliarmus`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addexpelliarmus = new Discord.RichEmbed()
        .setColor("#FE2E2E")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Expelliarmus.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].expelliarmus < 1000.) {
                    spellData[sUser.id].expelliarmus += 2000
                    message.channel.send(addexpelliarmus);
                }
                else
                {
                    if (spellData[sUser.id].expelliarmus > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removeexpelliarmus`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeexpelliarmus = new Discord.RichEmbed()
        .setColor("#FE2E2E")
        .setTitle("Expelliarmus")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Expelliarmus" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].expelliarmus > 1000.) {
                    spellData[sUser.id].expelliarmus -= 2000;
                    message.channel.send(removeexpelliarmus);
                }
                else
                {
                    if (spellData[sUser.id].expelliarmus < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Expelliarmus.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}endoloris`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let endolorisEmbed = new Discord.RichEmbed()
        .setColor("#FA5858")
        .setTitle("Endoloris")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Endoloris sur ${sUser}`)
        .addField(`Détails`, `${sUser} commence à souffrir, comme torturé de tout les côtés. (3 Secondes pour utiliser $protego).`)

        let endoloriseEmbed = new Discord.RichEmbed()
        .setColor("#FA5858")
        .setTitle("Endoloris")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)
        
        if(spellData[sender.id].endoloris > 1000.) {
            message.channel.send(endolorisEmbed);
            return;
        }
        else
        {
            if(spellData[sender.id].endoloris < 1000.) {
                message.channel.send(endoloriseEmbed);
                return;
            }
        }
    }

    if (cmd === `${prefix}addendoloris`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addendoloris = new Discord.RichEmbed()
        .setColor("#FA5858")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Endoloris.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].endoloris < 1000.) {
                    spellData[sUser.id].endoloris += 2000
                    message.channel.send(addendoloris);
                }
                else
                {
                    if (spellData[sUser.id].endoloris > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removeendoloris`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeendoloris = new Discord.RichEmbed()
        .setColor("#FA5858")
        .setTitle("Endoloris")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Endoloris" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].endoloris > 1000.) {
                    spellData[sUser.id].endoloris -= 2000;
                    message.channel.send(removeendoloris);
                }
                else
                {
                    if (spellData[sUser.id].endoloris < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Endoloris.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}protego`) {
        let protegoEmbed = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setTitle("Protego")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Protego`)
        .addField(`Détails`, `${message.author.username} se protège du sortilège, qui ricoche sur son sortilège.`)

        let protegoeEmbed = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setTitle("Protego")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].protego > 1000.) {
            message.channel.send(protegoEmbed)
        }
        else
        {
            if (spellData[sender.id].protego < 1000.) {
                message.channel.send(protegoeEmbed)
            }
        }
    }

    if (cmd === `${prefix}addprotego`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addprotego = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Protego.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].protego < 1000.) {
                    spellData[sUser.id].protego += 2000
                    message.channel.send(addprotego);
                }
                else
                {
                    if (spellData[sUser.id].protego > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removeprotego`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeprotego = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setTitle("Protego")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Protego" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].protego > 1000.) {
                    spellData[sUser.id].protego -= 2000;
                    message.channel.send(removeprotego);
                }
                else
                {
                    if (spellData[sUser.id].protego < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Protego.`)
                    }
                }
            }
        }
    }
    
    if (cmd === `${sprefix}patronum`) {

        let patronumEmbed = new Discord.RichEmbed()
        .setColor("#8181F7")
        .setTitle("Expecto Patronum")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise son Patronus`)
        .addField(`Détails`, `Une forme corporelle argentée s'échappe de la baguette, suivant la tracé de celle-ci, prête à se défendre.`)

        let patronumeEmbed = new Discord.RichEmbed()
        .setColor("#8181F7")
        .setTitle("Expecto Patronum")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].patronum > 1000.) {
            message.channel.send(patronumEmbed)
        }
        else
        {
            if (spellData[sender.id].patronum < 1000.) {
                message.channel.send(patronumeEmbed)
            }
        }
    }

    if (cmd === `${prefix}addpatronum`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addpatronum = new Discord.RichEmbed()
        .setColor("#8181F7")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Expecto Patronum.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].patronum < 1000.) {
                    spellData[sUser.id].patronum += 2000
                    message.channel.send(addpatronum);
                }
                else
                {
                    if (spellData[sUser.id].patronum > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removepatronum`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removepatronum = new Discord.RichEmbed()
        .setColor("#8181F7")
        .setTitle("Expecto Patronum")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Expecto Patronum" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].patronum > 1000.) {
                    spellData[sUser.id].patronum -= 2000;
                    message.channel.send(removepatronum);
                }
                else
                {
                    if (spellData[sUser.id].patronum < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Expecto Patronum.`)
                    }
                }
            }
        }  
    }
    
    if (cmd === `${sprefix}oppugno`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let oppugnoEmbed = new Discord.RichEmbed()
        .setColor("#F781D8")
        .setTitle("Oppugno")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Oppugno`)
        .addField(`Détails`, `Une huée d'oiseaux se dirigèrent vers ${sUser} pour l'attaquer.`)

        let oppugnoeEmbed = new Discord.RichEmbed()
        .setColor("#F781D8")
        .setTitle("Oppugno")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].oppugno > 1000.) {
            message.channel.send(oppugnoEmbed)
        }
        else
        {
            if (spellData[sender.id].oppugno < 1000.) {
                message.channel.send(oppugnoeEmbed)
            }
        }
    }

    if (cmd === `${prefix}addoppugno`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addoppugno = new Discord.RichEmbed()
        .setColor("#F781D8")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Oppugno.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].oppugno < 1000.) {
                    spellData[sUser.id].oppugno += 2000
                    message.channel.send(addoppugno);
                }
                else
                {
                    if (spellData[sUser.id].oppugno > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removeoppugno`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeoppugno = new Discord.RichEmbed()
        .setColor("#8181F7")
        .setTitle("Oppugno")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Oppugno" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].oppugno > 1000.) {
                    spellData[sUser.id].oppugno -= 2000;
                    message.channel.send(removeoppugno);
                }
                else
                {
                    if (spellData[sUser.id].oppugno < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Oppugno.`)
                    }
                }
            }
        }
    }
    
    if (cmd === `${sprefix}incendio`) {
        let incendioEmbed = new Discord.RichEmbed()
        .setColor("#DF7401")
        .setTitle("Incendio")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Incendio`)
        .addField(`Détails`, `Une flamme apparut sur l'objet pointé par ${message.author.username}.`)

        let incendioeEmbed = new Discord.RichEmbed()
        .setColor("#DF7401")
        .setTitle("Incendio")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].incendio > 1000.) {
            message.channel.send(incendioEmbed);
        }
        else
        {
            if (spellData[sender.id].incendio < 1000.) {
                message.channel.send(incendioeEmbed);
            }
        }
    }

    if (cmd === `${prefix}addincendio`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addincendio = new Discord.RichEmbed()
        .setColor("#DF7401")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Incendio.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].incendio < 1000.) {
                    spellData[sUser.id].incendio += 2000
                    message.channel.send(addincendio);
                }
                else
                {
                    if (spellData[sUser.id].incendio > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removeincendio`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeincendio = new Discord.RichEmbed()
        .setColor("#DF7401")
        .setTitle("Incendio")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Incendio" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].incendio > 1000.) {
                    spellData[sUser.id].incendio -= 2000;
                    message.channel.send(removeincendio);
                }
                else
                {
                    if (spellData[sUser.id].incendio < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Incendio.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}accio`) {
        let accioEmbed = new Discord.RichEmbed()
        .setColor("#ACFA58")
        .setTitle("Accio")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Accio`)
        .addField(`Détails`, `L'objet pointé par ${message.author.username} lévite jusqu'à lui.`)

        let accioeEmbed = new Discord.RichEmbed()
        .setColor("#ACFA58")
        .setTitle("Accio")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].accio > 1000.) {
            message.channel.send(accioEmbed);
        }
        else
        {
            if (spellData[sender.id].accio < 1000.) {
                message.channel.send(accioeEmbed);
            }
        }
    }
    
    if (cmd === `${prefix}addaccio`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addaccio = new Discord.RichEmbed()
        .setColor("#ACFA58")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Accio.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].accio < 1000.) {
                    spellData[sUser.id].accio += 2000
                    message.channel.send(addaccio);
                }
                else
                {
                    if (spellData[sUser.id].accio > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }
    
    if (cmd === `${prefix}removeaccio`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeaccio = new Discord.RichEmbed()
        .setColor("#ACFA58")
        .setTitle("Accio")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Accio" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].accio > 1000.) {
                    spellData[sUser.id].accio -= 2000;
                    message.channel.send(removeaccio);
                }
                else
                {
                    if (spellData[sUser.id].accio < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Accio.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}expulso`) {
        let expulsoEmbed = new Discord.RichEmbed()
        .setColor("#ACFA58")
        .setTitle("Expulso")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Expulso`)
        .addField(`Détails`, `Une détonation retentit à l'endroit pointé par la baguette de ${message.author.username}.`)

        let expulsoeEmbed = new Discord.RichEmbed()
        .setColor("#ACFA58")
        .setTitle("Expulso")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].expulso > 1000.) {
            message.channel.send(expulsoEmbed);
        }
        else
        {
            if (spellData[sender.id].expulso < 1000.) {
                message.channel.send(expulsoeEmbed);
            }
        }
    }

    if (cmd === `${prefix}addexpulso`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addexpulso = new Discord.RichEmbed()
        .setColor("#ACFA58")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Expulso.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].expulso < 1000.) {
                    spellData[sUser.id].expulso += 2000
                    message.channel.send(addexpulso);
                }
                else
                {
                    if (spellData[sUser.id].expulso > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removeexpulso`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeexpulso = new Discord.RichEmbed()
        .setColor("#ACFA58")
        .setTitle("Expulso")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Expulso" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].expulso > 1000.) {
                    spellData[sUser.id].expulso -= 2000;
                    message.channel.send(removeexpulso);
                }
                else
                {
                    if (spellData[sUser.id].expulso < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Expulso.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}lumos`) {
        let lumosEmbed = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setTitle("Lumos")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Lumos`)
        .addField(`Détails`, `Une lumière s'échappe de la baguette de ${message.author.username}.`)

        let lumoseEmbed = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setTitle("Lumos")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].lumos > 1000.) {
            message.channel.send(lumosEmbed);
        }
        else
        {
            if (spellData[sender.id].lumos < 1000.) {
                message.channel.send(lumoseEmbed);
            }
        }
    }

    if (cmd === `${prefix}addlumos`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addlumos = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Lumos.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].lumos < 1000.) {
                    spellData[sUser.id].lumos += 2000
                    message.channel.send(addlumos);
                }
                else
                {
                    if (spellData[sUser.id].lumos > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removelumos`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removelumos = new Discord.RichEmbed()
        .setColor("#FFFFFF")
        .setTitle("Lumos")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Lumos" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].lumos > 1000.) {
                    spellData[sUser.id].lumos -= 2000;
                    message.channel.send(removelumos);
                }
                else
                {
                    if (spellData[sUser.id].lumos < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Lumos.`)
                    }
                }
            }
        }
    }
    
    if (cmd === `${sprefix}nox`) {
        let noxEmbed = new Discord.RichEmbed()
        .setColor("#151515")
        .setTitle("Nox")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Nox`)
        .addField(`Détails`, `La lumière de la baguette de ${message.author.username} s'éteind, laissant le noir autour de lui.`)

        let noxeEmbed = new Discord.RichEmbed()
        .setColor("#151515")
        .setTitle("Nox")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].nox > 1000.) {
            message.channel.send(noxEmbed);
        }
        else
        {
            if (spellData[sender.id].nox < 1000.) {
                message.channel.send(noxeEmbed);
            }
        }
    }

    if (cmd === `${prefix}addnox`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addnox = new Discord.RichEmbed()
        .setColor("#151515")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Nox.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].nox < 1000.) {
                    spellData[sUser.id].nox += 2000
                    message.channel.send(addnox);
                }
                else
                {
                    if (spellData[sUser.id].nox > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removenox`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removenox = new Discord.RichEmbed()
        .setColor("#151515")
        .setTitle("Nox")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Nox" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].nox > 1000.) {
                    spellData[sUser.id].nox -= 2000;
                    message.channel.send(removenox);
                }
                else
                {
                    if (spellData[sUser.id].nox < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Nox.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}repulso`) {
        let repulsoEmbed = new Discord.RichEmbed()
        .setColor("#DA81F5")
        .setTitle("Repulso")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Repulso`)
        .addField(`Détails`, `L'objet pointé par ${message.author.username} se fait expulsé à l'autre bout de la pièce.`)

        let repulsoeEmbed = new Discord.RichEmbed()
        .setColor("#DA81F5")
        .setTitle("Repulso")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].repulso > 1000.) {
            message.channel.send(repulsoEmbed);
        }
        else
        {
            if (spellData[sender.id].repulso < 1000.) {
                message.channel.send(repulsoeEmbed);
            }
        }
    }

    if (cmd === `${prefix}addrepulso`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addrepulso = new Discord.RichEmbed()
        .setColor("#DA81F5")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Repulso.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].repulso < 1000.) {
                    spellData[sUser.id].repulso += 2000
                    message.channel.send(addrepulso);
                }
                else
                {
                    if (spellData[sUser.id].repulso > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removerepulso`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removerepulso = new Discord.RichEmbed()
        .setColor("#DA81F5")
        .setTitle("Repulso")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Repulso" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].repulso > 1000.) {
                    spellData[sUser.id].repulso -= 2000;
                    message.channel.send(removerepulso);
                }
                else
                {
                    if (spellData[sUser.id].repulso < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Repulso.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}petrificustotalus`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let petrificusEmbed = new Discord.RichEmbed()
        .setColor("#F781D8")
        .setTitle("Petrificus Totalus")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Petrificus Totalus`)
        .addField(`Détails`, `Le sortilège touche ${sUser} en pleine poitrine, le paralysant.`)

        let petrificuseEmbed = new Discord.RichEmbed()
        .setColor("#F781D8")
        .setTitle("Petrificus Totalus")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].petrificust > 1000.) {
            message.channel.send(petrificusEmbed)
        }
        else
        {
            if (spellData[sender.id].petrificust < 1000.) {
                message.channel.send(petrificuseEmbed)
            }
        }
    }

    if (cmd === `${prefix}addpetrificustotalus`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addpetrificus = new Discord.RichEmbed()
        .setColor("#DA81F5")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Petrificus Totalus.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].petrificust < 1000.) {
                    spellData[sUser.id].petrificust += 2000
                    message.channel.send(addpetrificus);
                }
                else
                {
                    if (spellData[sUser.id].petrificust > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removepetrificustotalus`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removepetrificustotalus = new Discord.RichEmbed()
        .setColor("#DA81F5")
        .setTitle("Petrificus Totalus")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Petrificus Totalus" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].petrificust > 1000.) {
                    spellData[sUser.id].petrificust -= 2000;
                    message.channel.send(removepetrificustotalus);
                }
                else
                {
                    if (spellData[sUser.id].petrificust < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Petrificus Totalus.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}revigors`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let revigorsEmbed = new Discord.RichEmbed()
        .setColor("#81F79F")
        .setTitle("Revigors")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Revigors`)
        .addField(`Détails`, `${sUser} sent une chaleur en lui, celui-ci récupère immédiatement de l'énergie.`)

        let revigorseEmbed = new Discord.RichEmbed()
        .setColor("#81F79F")
        .setTitle("Revigors")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].revigors > 1000.) {
            message.channel.send(revigorsEmbed)
        }
        else
        {
            if (spellData[sender.id].revigors < 1000.) {
                message.channel.send(revigorseEmbed)
            }
        }
    }

    if (cmd === `${prefix}addrevigors`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addrevigors = new Discord.RichEmbed()
        .setColor("#81F79F")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Revigors.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].revigors < 1000.) {
                    spellData[sUser.id].revigors += 2000
                    message.channel.send(addrevigors);
                }
                else
                {
                    if (spellData[sUser.id].revigors > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removerevigors`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removerevigors = new Discord.RichEmbed()
        .setColor("#81F79F")
        .setTitle("Revigors")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Revigors" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].revigors > 1000.) {
                    spellData[sUser.id].revigors -= 2000;
                    message.channel.send(removerevigors);
                }
                else
                {
                    if (spellData[sUser.id].revigors < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Revigors.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}wingardiumleviosa`) {
        let wingardiumEmbed = new Discord.RichEmbed()
        .setColor("#F2F5A9")
        .setTitle("Wingardium Leviosa")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Wingardium Leviosa`)
        .addField(`Détails`, `L'objet pointé par ${message.author.username} se soulève délicatement, avant de léviter dans la direction pointée par ${message.author.username}.`)

        let wingardiumeEmbed = new Discord.RichEmbed()
        .setColor("#F2F5A9")
        .setTitle("Wingardium Leviosa")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].wingardium > 1000.) {
            message.channel.send(wingardiumEmbed);
        }
        else
        {
            if (spellData[sender.id].wingardium < 1000.) {
                message.channel.send(wingardiumeEmbed);
            }
        }
    }

    if (cmd === `${prefix}addwingardiumleviosa`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addwingardiumleviosa = new Discord.RichEmbed()
        .setColor("#F2F5A9")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Wingardium Leviosa.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].wingardium < 1000.) {
                    spellData[sUser.id].wingardium += 2000
                    message.channel.send(addwingardiumleviosa);
                }
                else
                {
                    if (spellData[sUser.id].wingardium > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removewingardiumleviosa`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removewingardiumleviosa = new Discord.RichEmbed()
        .setColor("#F2F5A9")
        .setTitle("Wingardium Leviosa")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Wingardium Leviosa" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].wingardium > 1000.) {
                    spellData[sUser.id].wingardium -= 2000;
                    message.channel.send(removewingardiumleviosa);
                }
                else
                {
                    if (spellData[sUser.id].wingardium < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Wingardium Leviosa.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}bloclang`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let bloclangEmbed = new Discord.RichEmbed()
        .setColor("#F5F6CE")
        .setTitle("Bloclang")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Bloclang`)
        .addField(`Détails`, `La langue de ${sUser} se colle à son palais, l'empêchant de parler.`)

        let bloclangeEmbed = new Discord.RichEmbed()
        .setColor("#F5F6CE")
        .setTitle("Bloclang")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].bloclang > 1000.) {
            message.channel.send(bloclangEmbed)
        }
        else
        {
            if (spellData[sender.id].bloclang < 1000.) {
                message.channel.send(bloclangeEmbed)
            }
        }
    }

    if (cmd === `${prefix}addbloclang`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addbloclang = new Discord.RichEmbed()
        .setColor("#F5F6CE")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Bloclang.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].bloclang < 1000.) {
                    spellData[sUser.id].bloclang += 2000
                    message.channel.send(addbloclang);
                }
                else
                {
                    if (spellData[sUser.id].bloclang > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removebloclang`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removebloclang = new Discord.RichEmbed()
        .setColor("#F2F5A9")
        .setTitle("Bloclang")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Bloclang" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].bloclang > 1000.) {
                    spellData[sUser.id].bloclang -= 2000;
                    message.channel.send(removebloclang);
                }
                else
                {
                    if (spellData[sUser.id].bloclang < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Bloclang.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}alohomora`) {
        let alohomoraEmbed = new Discord.RichEmbed()
        .setColor("#045FB4")
        .setTitle("Alohomora")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Alohomora`)
        .addField(`Détails`, `Le loquet pointé par la baguette de ${message.author.username} s'ouvre, la porte suivant le même geste.`)

        let alohomoraeEmbed = new Discord.RichEmbed()
        .setColor("#045FB4")
        .setTitle("Alohomora")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].alohomora > 1000.) {
            message.channel.send(alohomoraEmbed);
        }
        else
        {
            if (spellData[sender.id].alohomora < 1000.) {
                message.channel.send(alohomoraeEmbed);
            }
        }
    }

    if (cmd === `${prefix}addalohomora`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addalohomora = new Discord.RichEmbed()
        .setColor("#045FB4")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Alohomora.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].alohomora < 1000.) {
                    spellData[sUser.id].alohomora += 2000
                    message.channel.send(addalohomora);
                }
                else
                {
                    if (spellData[sUser.id].alohomora > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removealohomora`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removealohomora = new Discord.RichEmbed()
        .setColor("#045FB4")
        .setTitle("Alohomora")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Alohomora" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].alohomora > 1000.) {
                    spellData[sUser.id].alohomora -= 2000;
                    message.channel.send(removealohomora);
                }
                else
                {
                    if (spellData[sUser.id].alohomora < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Alohomora.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}finite`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let finiteEmbed = new Discord.RichEmbed()
        .setColor("#F6CECE")
        .setTitle("Finite Incantatem")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Finiti Incantatem`)
        .addField(`Détails`, `L'effet du précédent sortilège lancé sur ${sUser} disparait.`)

        let finiteeEmbed = new Discord.RichEmbed()
        .setColor("#F6CECE")
        .setTitle("Finite Incantatem")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].finite > 1000.) {
            message.channel.send(finiteEmbed)
        }
        else
        {
            if (spellData[sender.id].finite < 1000.) {
                message.channel.send(finiteeEmbed)
            }
        }
    }

    if (cmd === `${prefix}addfinite`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addfinite = new Discord.RichEmbed()
        .setColor("#F6CECE")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Finite Incantatem.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].finite < 1000.) {
                    spellData[sUser.id].finite += 2000
                    message.channel.send(addfinite);
                }
                else
                {
                    if (spellData[sUser.id].finite > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removefinite`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removefinite = new Discord.RichEmbed()
        .setColor("#F6CECE")
        .setTitle("Finite Incantatem")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Finite Incantatem" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].finite > 1000.) {
                    spellData[sUser.id].finite -= 2000;
                    message.channel.send(removefinite);
                }
                else
                {
                    if (spellData[sUser.id].finite < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Finite Incantatem.`)
                    }
                }
            }
        }
    }

    if (cmd === `${sprefix}acidious`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let acidiousEmbed = new Discord.RichEmbed()
        .setColor("#8A0808")
        .setTitle("Acidious Strium")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `${message.author.username} utilise Acidious Strium`)
        .addField(`Détails`, `Une flèche d'acide s'échappe de la baguette de ${message.author.username} et se lance en direction de ${sUser}`)

        let acidiouseEmbed = new Discord.RichEmbed()
        .setColor("#8A0808")
        .setTitle("Acidious Strium")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Sortilège`, `Tu n'as pas appris ce sortilège.`)

        if (spellData[sender.id].acidious > 1000.) {
            message.channel.send(acidiousEmbed)
        }
        else
        {
            if (spellData[sender.id].acidious < 1000.) {
                message.channel.send(acidiouseEmbed)
            }
        }
    }

    if (cmd === `${prefix}addacidious`) {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let addacidious = new Discord.RichEmbed()
        .setColor("#8A0808")
        .setTitle("Apprentissage")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(sUser, "viens d'apprendre le sortilège Acidious Strium.")

        if (message.channel.id === '554260058377027595') {
            if (message.member.roles.get('553249741979385878')) {
                if (spellData[sUser.id].acidious < 1000.) {
                    spellData[sUser.id].acidious += 2000
                    message.channel.send(addacidious);
                }
                else
                {
                    if (spellData[sUser.id].acidious > 1000.) {
                        message.channel.send(`Ce joueur connait déjà ce sortilège.`)
                    }
                }
            }
        }
    }

    if (cmd === `${prefix}removeacidious`) {
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        let removeacidious = new Discord.RichEmbed()
        .setColor("#8A0808")
        .setTitle("Acidious Strium")
        .setThumbnail('https://image.noelshack.com/fichiers/2019/12/3/1553090684-le-mage-noir.png')
        .addField(`Vous venez de supprimer l'apprentissage du sortilège "Acidious Strium" à ${sUser}`)

        if (message.channel.id === '554260058377027595') {
            message.delete(1500)
            if (message.member.roles.get('554205242242236417')) {
                if (spellData[sUser.id].acidious > 1000.) {
                    spellData[sUser.id].acidious -= 2000;
                    message.channel.send(removeacidious);
                }
                else
                {
                    if (spellData[sUser.id].acidious < 1000.) {
                        message.channel.send(`Ce joueur ne connait pas Acidious Strium.`)
                    }
                }
            }
        }
    }

    if (message.content === prefix + "sortslist") {
        message.delete(1500);
        if (message.channel.id === '554018788614471681') {
            message.author.send({embed:{
                title: "Liste des Sorts(L'Augurey)",
                color: 0x0079FF,
                fields: [{
                    name: "Nox | $nox",
                    value: `Permet d'éteindre la lumière de sa baguette (Après un $lumos)'.`,
                    inline: false
                },
                {
                    name: "Lumos | $lumos",
                    value: `Permet de faire apparaître une lumière au bout de sa baguette.`,
                    inline: false
                },
                {
                    name: "Accio | $accio",
                    value: `Permet d'attirer un objet vers soit.'.`,
                    inline: false
                },
                {
                    name: "Expulso | $expulso",
                    value: `Créer une détonation à l'endroit visé.`,
                    inline: false
                },
                {
                    name: "Repulso | $repulso",
                    value: `Permet d'expulser un objet loin de soit.`,
                    inline: false
                },
                {
                    name: "Oppugno | $oppugno @Mention-User",
                    value: `Permet de lancer une attaque d'oiseaux sur une personne.`,
                    inline: false
                },
                {
                    name: "Protego | $protego",
                    value: `Permet de se protéger d'un sortilège.`,
                    inline: false
                },
                {
                    name: "Acidious Strium | $acidious @Mention-User",
                    value: `Permet de lancer une flèche d'acide sur la personne visée.`,
                    inline: false
                },
                {
                    name: "Stupefix | $stupefix @Mention-User",
                    value: `Permet de stupefixer une personne.`,
                    inline: false
                },
                {
                    name: "Bloclang | $bloclang @Mention-User",
                    value: `Permet de faire taire une personne.`,
                    inline: false
                },
                {
                    name: "Revigors | $revigors @Mention-User",
                    value: `Permet de redonner de l'énergie à une personne.`,
                    inline: false
                },
                {
                    name: "Incendio | $incendio",
                    value: `Permet de lancer un feu à l'endroit visé.`,
                    inline: false
                },
                {
                    name: "Confringo | $confringo @Mention-User",
                    value: `Permet lancer une explosion proche de la personne visée.`,
                    inline: false
                },
                {
                    name: "Alohomora | $alohomora",
                    value: `Permet d'ouvrir le loquet d'une porte.`,
                    inline: false
                },
                {
                    name: "Endoloris | $endoloris @Mention-User",
                    value: `Permet de torturer une personne, peut également la tuer si le sort est lancé trop longtemps.`,
                    inline: false
                },
                {
                    name: "Expelliarmus | $expelliarmus @Mention-User",
                    value: `Permet de désarmer la personne visée.`,
                    inline: false
                },
                {
                    name: "Rictus Sempra | $rictussempra @Mention-User",
                    value: `Permet de chatouiller la personne visée, ou la faire voltiger.`,
                    inline: false
                },
                {
                    name: "Avada Kedavra | $avadakedavra @Mention-User",
                    value: `Permet de tuer immédiatement la personne visée.`,
                    inline: false
                },
                {
                    name: "Expecto Patronum | $patronum",
                    value: `Permet de faire apparaitre une Patronus, qui protège le possedeur de la baguette d'attaque de créatures magiques.`,
                    inline: false
                },
                {
                    name: "Finite Incantatem | $finite @Mention-User",
                    value: `Permet d'annuler les maléfices utilisés sur une personne.`,
                    inline: false
                },
                {
                    name: "Petrificus Totalus | $petrificustotalus @Mention-User",
                    value: `Permet de pétrifier la personne visée.`,
                    inline: false
                },
                {
                    name: "Wingardium Leviosa | $wingardiumleviosa",
                    value: `Permet de faire léviter un objet.`,
                    inline: false
                }]
            }})
        }
    }
    
    if (message.content === prefix + "aideprofesseur") {
        message.delete(1500);
        if (message.member.roles.get('553249741979385878')) {
            message.author.send({embed:{
                title: "Aide Professeur(L'Augurey)",
                color: 0x0079FF,
                fields: [{
                    name: "!cours",
                    value: `Dans votre salle de classe | Permet de lancer un cours. | Voir !fcours.`,
                    inline: false
                },
                {
                    name: "!fcours",
                    value: `Dans votre salle de classe | Permet de terminer un cours. | Voir !cours.`,
                    inline: false
                },
                {
                    name: "!add|sorts",
                    value: "Permet d'apprendre un sortilège à un Utilisateur | Exemple : !addstupefix @Mention-User | Voir !sortslist.",
                    inline: true
                },
                {
                    name: "!10|maison",
                    value: "Permet de donner 10 Points à une Maison | Exemple : !10serpentard.",
                    inline: true
                },
                {
                    name: "!r10|maison",
                    value: "Permet de retirer 10 Points à une Maison | Exemple : !r10serpentard.",
                    inline: true
                },
                {
                    name: "!20|maison",
                    value: "Permet de donner 20 Points à une Maison | Exemple : !20serpentard.",
                    inline: true
                },
                {
                    name: "!r20|maison",
                    value: "Permet de retirer 20 Points à une Maison | Exemple : !r20serpentard.",
                    inline: true
                }]
            }})
        }
    }
    
    if (message.content === prefix + "aide") {
        message.delete(1500);
        if (message.channel.id === '554018788614471681') {
            message.author.send({embed:{
                title: "Aide (L'Augurey)",
                color: 0x0079FF,
                fields: [{
                    name: "$ + sortilège",
                    value: `Permet de lancer un sortilège | Exemple : $incendio (OU $stupefix @Mention-User).`,
                    inline: false
                },
                {
                    name: "!aide",
                    value: `Permet d'afficher l'aide pour les joueurs.`,
                    inline: false
                },
                {
                    name: "!compte",
                    value: "Permet de créer un compte à la Banque Gringotts.",
                    inline: true
                },
                {
                    name: "!balance",
                    value: "Permet de savoir l'argent déposé en banque..",
                    inline: true
                },
                {
                    name: "!argent",
                    value: "Permet de savoir l'argent de sa bourse.",
                    inline: true
                },
                {
                    name: "!deposer",
                    value: "Permet de déposer 50 Gallions dans votre compte à Gringotts.",
                    inline: true
                },
                {
                    name: "!retirer",
                    value: "Permet de déposer 50 Gallions dans votre compte à Gringotts.",
                    inline: true
                },
                {
                    name: "!aideprofesseur (Seulement pour les Professeurs)",
                    value: "Permet d'avoir accès à l'aide des professeurs.",
                    inline: true
                }]
            }})
        }
    }

    // Points des Maisons
    if(!housesData['Gryffondor']) housesData['Gryffondor'] = {}
    if(!housesData['Gryffondor'].points) housesData['Gryffondor'].points = 0.

    if(!housesData['Serpentard']) housesData['Serpentard'] = {}
    if(!housesData['Serpentard'].points) housesData['Serpentard'].points = 0.

    if(!housesData['Poufsouffle']) housesData['Poufsouffle'] = {}
    if(!housesData['Poufsouffle'].points) housesData['Poufsouffle'].points = 0.

    if(!housesData['Serdaigle']) housesData['Serdaigle'] = {}
    if(!housesData['Serdaigle'].points) housesData['Serdaigle'].points = 0.

    if (message.content === prefix + "10gryffondor") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Gryffondor'].points += 10
                message.channel.send({embed:{
                    title: "Points - Gryffondor",
                    color: 0x7a0000,
                    fields: [{
                        name: "Ajout",
                        value: `10 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Gryffondor'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "10serpentard") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Serpentard'].points += 10
                message.channel.send({embed:{
                    title: "Points - Serpentard",
                    color: 0x004d0f,
                    fields: [{
                        name: "Ajout",
                        value: `10 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Serpentard'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "10poufsouffle") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Poufsouffle'].points += 10
                message.channel.send({embed:{
                    title: "Points - Poufsouffle",
                    color: 0xd1b61e,
                    fields: [{
                        name: "Ajout",
                        value: `10 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Poufsouffle'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "10serdaigle") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Serdaigle'].points += 10
                message.channel.send({embed:{
                    title: "Points - Serdaigle",
                    color: 0x1b79d1,
                    fields: [{
                        name: "Ajout",
                        value: `10 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Serdaigle'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "20gryffondor") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Gryffondor'].points += 20
                message.channel.send({embed:{
                    title: "Points - Gryffondor",
                    color: 0x7a0000,
                    fields: [{
                        name: "Ajout",
                        value: `20 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Gryffondor'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "20serpentard") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Serpentard'].points += 20
                message.channel.send({embed:{
                    title: "Points - Serpentard",
                    color: 0x004d0f,
                    fields: [{
                        name: "Ajout",
                        value: `20 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Serpentard'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "20poufsouffle") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Poufsouffle'].points += 20
                message.channel.send({embed:{
                    title: "Points - Poufsouffle",
                    color: 0xd1b61e,
                    fields: [{
                        name: "Ajout",
                        value: `20 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Poufsouffle'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "20serdaigle") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Serdaigle'].points += 20
                message.channel.send({embed:{
                    title: "Points - Serdaigle",
                    color: 0x1b79d1,
                    fields: [{
                        name: "Ajout",
                        value: `20 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Serdaigle'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "r10gryffondor") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Gryffondor'].points -= 10
                message.channel.send({embed:{
                    title: "Points - Gryffondor",
                    color: 0x7a0000,
                    fields: [{
                        name: "Retrait",
                        value: `10 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Gryffondor'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "r10serpentard") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Serpentard'].points -= 10
                message.channel.send({embed:{
                    title: "Points - Serpentard",
                    color: 0x004d0f,
                    fields: [{
                        name: "Retrait",
                        value: `10 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Gryffondor'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "r10poufsouffle") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Poufsouffle'].points -= 10
                message.channel.send({embed:{
                    title: "Points - Poufsouffle",
                    color: 0xd1b61e,
                    fields: [{
                        name: "Retrait",
                        value: `10 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Poufsouffle'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "r10serdaigle") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Serdaigle'].points -= 10
                message.channel.send({embed:{
                    title: "Points - Serdaigle",
                    color: 0x1b79d1,
                    fields: [{
                        name: "Retrait",
                        value: `10 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Serdaigle'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "r20gryffondor") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Gryffondor'].points -= 20
                message.channel.send({embed:{
                    title: "Points - Gryffondor",
                    color: 0x7a0000,
                    fields: [{
                        name: "Retrait",
                        value: `20 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Gryffondor'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "r20serpentard") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Serpentard'].points -= 20
                message.channel.send({embed:{
                    title: "Points - Serpentard",
                    color: 0x004d0f,
                    fields: [{
                        name: "Retrait",
                        value: `20 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Serpentard'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "r20poufsouffle") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Poufsouffle'].points -= 20
                message.channel.send({embed:{
                    title: "Points - Poufsouffle",
                    color: 0xd1b61e,
                    fields: [{
                        name: "Retrait",
                        value: `20 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Poufsouffle'].points,
                        inline: true
                    }]
                }})
            }
        }
    }

    if (message.content === prefix + "r20serdaigle") {
        message.delete(1500);
        if (message.channel.id === ('554018788614471681')) {
            if (message.member.roles.get('553249741979385878')) {
                housesData['Serdaigle'].points -= 20
                message.channel.send({embed:{
                    title: "Points - Serdaigle",
                    color: 0x1b79d1,
                    fields: [{
                        name: "Retrait",
                        value: `20 points`,
                        inline: true
                    },
                    {
                        name: "Professeur",
                        value: message.author.username,
                        inline: true
                    },
                    {
                        name: "Points",
                        value: housesData['Serdaigle'].points,
                        inline: true
                    }]
                }})
            }
        }
    }
    
    if (message.content === prefix + "points") {
        if (message.channel.id === '554018788614471681') {
            message.channel.send({embed:{
                title: "Points - Maisons",
                color: 0x614700,
                fields: [{
                    name: "Gryffondor",
                    value: housesData['Gryffondor'].points,
                    inline: true
                },
                {
                    name: "Serpentard",
                    value: housesData['Serpentard'].points,
                    inline: true
                },
                {
                    name: "Poufsouffle",
                    value: housesData['Poufsouffle'].points,
                    inline: true
                },
                {
                    name: "Serdaigle",
                    value: housesData['Serdaigle'].points,
                    inline: true
                }]
            }})
        }
    }

    if (message.content === prefix + "givem") {
        message.delete(1500);
        let sUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!sUser) return message.author.send(`Vous n'avez pas mentionné de joueurs.`);

        if (message.channel.id === `554018788614471681`) {
            if (message.member.roles.get('554205242242236417')) {
                userData[sUser.id].banque += 500;
                message.channel.send('Done');
                console.log(`${message.author.username} a donné 500 Gallions à ${sUser}`);
            }
        }
    }

    fs.writeFile('JSON/housesData.json', JSON.stringify(housesData), (err) => {
        if (err) console.error(err);
    })

    fs.writeFile('JSON/coursData.json', JSON.stringify(coursData), (err) => {
        if (err) console.error(err);
    })

    fs.writeFile('JSON/userData.json', JSON.stringify(userData), (err) => {
        if (err) console.error(err);
    })

    fs.writeFile('JSON/spellData.json', JSON.stringify(spellData), (err) => {
    })

});

bot.login(process.env.TOKEN);
