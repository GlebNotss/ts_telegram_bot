const config = require('./config.json')

const TelegramApi = require('node-telegram-bot-api')
const token: string = config.token

const bot = new TelegramApi(token, {polling: true})
let result: number = 0

bot.on('message', function(msg): void {
    const text: string = msg.text
    const chatId: number | string = msg.chat.id
    const stopWord: string = 'сложить'

    console.log(isNaN(+text), result)

    if (isNaN(+text) && text !== 'сложить') {
        bot.sendMessage(chatId, 'Строку с числом нельзя сложить!')
        result = 0
    }

    if (text.toLowerCase() !== 'сложить' && isNaN(+text) !== true) {
        result += Number(text)
    } 
    
    if (text.toLowerCase() === 'сложить') {
        bot.sendMessage(chatId, result)
    }
})
