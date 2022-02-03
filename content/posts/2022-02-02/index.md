---
slug: learning-to-write-discord-bots
date: 2022-02-02
title: "Learning to Write Discord Bots"
description: 'I learned how to create a node.js discord bot from scratch'
categories: ['code']
keywords: ['test']
author: 'Lucas Minter'
published: true
redirects:
  - '/invisible-post-423123'
---

# Discord

I spend at least a small part every day on Discord. I'm apart of several communities from gaming to programming and have helped create some as well. One of the biggest reasons a community does well is it's use of bots. 

Discord bots come in all sorts of shapes and sizes. They can do something as simple as reply "pong!" when you type the command "!ping". Then there are the ones that completely control your onboarding process like adding users to your email list and assigning roles. 

I've always been fascinated with bots finally decided to learn how to create one myself. 

## The Starting Ideas

One of the communities I'm apart of is an Old School RuneScape Clan called Tea Stain. It's an MMO RPG game and we hold different fun competitions and group bossing. 

I came to the clan leader and told him that I wanted to create a bot and if he had any suggestions for the things it could do. 

He words were, "So the goal would be to have a bot that has a timer for the 90 minutes that I'm available and can keep track of the number of people that react to say that they're interested. And then maybe as an extra challenge, send a message notifying people when there has been enough interest to start a trip."

I said, "Hmmm I think I can do that. I'll work on it the next week and see what I can come up with."

So I started digging. 

## Initial Setup. 

Starting off creating a discord bot wasn't too difficult. There are plenty of tutorials out there to do it. I just wanted a basic bot but didn't know where to get started. You first start with an Application. [discordpy](https://discordpy.readthedocs.io/en/stable/discord.html) is where I learned about getting started with that. 

Next I got my bot added to a personal discord where I could do my testing. Now after getting my application finished, I can take the bot's token, and assigned it to an environmental variable in my `.env` file with the name of `BOT_TOKEN`. 

## Hello World!

Now that my application is finished and I have my bot token saved, I needed to get my code up and running. I created my bot on a Node.js module called [Discord.js](https://discord.js.org/#/). 


I created a new client instance in my main file: 
```js
import { Client, Intents } from "discord.js"

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
```

To prefix all of my actions, I needed `client.` in front of all of them. I figured a great place to start was making sure my bot was running. The suggestion on the Discord.js guide was logging out to the console `once` that your bot is `Ready!`. 

```js
client.once('ready', () => {
	console.log('Ready!');
});
```

Lastly, I needed my bot to log into Discord so it knew which bot was accessing it. 

```js
client.login(process.env.BOT_TOKEN);
```

And there ya go! I ran `node main.js` and I got a beautiful message in my terminal `"Ready!"`. 

## Time for some JavaScript!

Before I do anything, I needed a prefix to determine if what a user is typing out is a command. I chose `!` since I'm used to using that. I made sure the bot couldn't respond to other bots to avoid accidentally creating a loop and ignoring messaged that don't start with that prefix.

```js
const prefix = "!"
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
```

Then I needed to setup commands. The bot needed to recognize the word that came after the prefix as the command and all the other parts of the message as arguments. 

```js
const commandBody = message.content.slice(prefix.length);
const args = commandBody.split(' ');
const command = args.shift().toLowerCase();
```

Now since that is all setup, I can create some commands!

## My First Command

The four main goals I needed were, who wanted to hold the one off event, how many people they wanted to join in the event, what the event is, and how long until they want to do the event. (I changed them a little bit through the process of creating this bot but this was the end goal.)

Discord.js has a fairly extensive api. To get who wanted to hold the event, is just a simple `message.author`. To get the three remaining goals, I can use the `args` that we set earlier. 

`args` sets everything that was typed after the command in an array. So if I typed  out `!command 1 2 3`, and I logged out the args, it would return `[1, 2, 3]`. So I can take each of those and set them to a variable to create what I needed. 

So I setup the command like this: `!event {event-name} {number-of-people} {time-until-event}`. So to break up this command, the command name is `!event`. I can use `args.pop()` to grab the minutes off of the end of the array. (I'll explain in a minute why I did it this way.) If I use `args.pop()` again, that will give me the number of people the author wants for the event. 

That leaves everything else as the event name. Going back to why I used `args.pop()` is because I wanted to have the event name able to have multiple words. By using `args.pop()` twice, I am left with an `args` array with just words that we want to use for our event name. Then using `args.join(" ")` will give us a string of our event name! 

The last thing that I needed to work out was `time-until-event`. Discord uses what is called unix timestamp which is how many seconds it has been since January 1st, 1970. To get the `time-till-event`, first I needed the current time in unix timestamp. `const currentTime = Math.round((new Date()).getTime() / 1000)`. Then I needed when the event was going to happen. I used the `currentTime` plus how many minutes the user put in multiplied by 60 to get the seconds. `const remainingTime = <t:${currentTime + (minutes * 60)}:R>`. The reason that is in between `<t: :R>` is because that is how Discord knows how to change the seconds to a timer. Discord will automatically count down until the date and time that you specified in `<t: :R>`.

Now I have everything that I need! I set all of those to an array adn I can use that in the bot's message. I use `message.reply` to reply to the user's command with the bot's own message. Using string interpolation I can add in those variables to the bot's message that other users can reply to. 

The name of the user is the `message.author`. How many people the message author want's is `numberOfPeople`. The event name is `event`. And `remainingTime` is how long until the event is supposed to happen. 

To determine if people are interested, I can set the bot's response to a variable and call `.react('{emoji}')` and users can reply to the message if they are interested in the event. 

So if the author filled out everything correctly, the bot should respond with: `${message.author} is looking for a group of ${numberOfPeople} to do ${event} ${remainingTime}! Reply to this message with 👆 if you are interested.`

## Conclusion

That is how I created my first Discord bot! It's pretty simple in the grand scheme of things but I've had fun with this and plan on working more on this bot. (In fact I've already completely overhauled the !event command to ask the user questions about their event and store the user's responses, then have it delete all the messages except for the final bot message to help keep the channel clean. I've even added a couple more commands to fetch data from my clan's competition api, wiseoldman, and returns different user's stats as well as the top three users in the current competition!)

If you want to take a look at my code: [here it is](https://github.com/lsminter/lsm-discord-bot)!