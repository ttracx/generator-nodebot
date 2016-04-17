'use strict';
var builder = require('botbuilder');

var bot = new builder.TextBot();
bot.add('/', function (session) {
   session.send('Hello World'); 
});

bot.listenStdin();
