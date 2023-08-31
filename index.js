const {Telegraf} = require("telegraf");
const { message } = require('telegraf/filters');
const CONSTANTS = require("./constants");

const bot = new Telegraf(CONSTANTS.TELEGRAM_TOKEN);

bot.command('start', async (ctx) => {
    await ctx.telegram.sendMessage(ctx.message.chat.id, "Send a Message and i will foward it back!");
}); 

bot.on(message(), async (ctx) => {

    await ctx.telegram.copyMessage(ctx.message.chat.id, 
                                ctx.message.chat.id, 
                                ctx.message.message_id)
    });
  
bot.launch();
  
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));