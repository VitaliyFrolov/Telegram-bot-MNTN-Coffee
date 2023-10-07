const TelegramApi = require('node-telegram-bot-api');
const nodeSchedule = require('node-schedule');
const fs = require('fs');
const database = require('./database.json');
const { testAttestationStart, ...questions } = require('./interface');

const token = '';
const bot = new TelegramApi(token, {polling: true});
const MNTNChatId = '';

let counter = 0;

async function sendDataToDatabase(userData) {
    try {
        const data = fs.readFileSync('./database.json', 'utf8');
        const jsonData = JSON.parse(data);

        const existingUserIndex = jsonData.findIndex(user => user.name === userData.name);

        if (existingUserIndex !== -1) {
            const existingUser = jsonData[existingUserIndex];
            
            if (parseInt(existingUser.score) < parseInt(userData.score)) {
                jsonData[existingUserIndex] = userData;

                fs.writeFileSync('./database.json', JSON.stringify(jsonData, null, 2));
                console.log(`${userData.name} успешно обновлен в файле.`);
            } else {
                console.log(`${userData.name} уже существует в файле и имеет достаточно или больше очков.`);
            }
        } else {
            jsonData.push(userData);
    
            fs.writeFileSync('./database.json', JSON.stringify(jsonData, null, 2));
            console.log(`${userData.name} успешно добавлен в файл.`);
        }
    } catch (error) {
        console.error('Произошла ошибка при записи данных в файл:', error);
    }
}

async function sendMessages(data, chatId, questionNumber, question, interface, userName, final) {
    if (final === false) {
        if (data === `question_${questionNumber}-true` || data === `question_${questionNumber}-false`) {
            await bot.sendMessage(chatId, `${question}`, interface)
            if (data === `question_${questionNumber}-true`) {
                counter++;
            }
        }
    }

    if (final === true) { 
        const userData = {
            name: `${userName}`,
            score: `${counter}`
        };

        if (data === `question_${questionNumber}-true` || data === `question_${questionNumber}-false`) {
            await bot.sendMessage(chatId, `${userName}, ты набрали ${counter} правильных ответов!`)
            if (counter > 36) {
                await bot.sendMessage(chatId, `${userName}, поздравляю, ты прошел аттестацию!`)

                sendDataToDatabase(userData);
    
                return await bot.sendMessage(chatId, `${userData.name} Результаты вашего тестирования будут находится в общем доступе, для дальнейшего их анализа.`)
            } else {
               sendDataToDatabase(userData)
                await bot.sendMessage(chatId, `${userName}, ты набрал слишком мало правильных ответов, попробуй в другой раз. Необходимые материалы для повторения 'https://docs.google.com/spreadsheets/d/1Kkv_PoAZ17StXMCv4HhzSGrfAGCjPyVtO0946ktrMuw/edit#gid=0', 'https://docs.google.com/spreadsheets/d/1aY3wD3OPDwpWLFR88n3BKCrUdJAmQszp0ojA-XwxpGQ/edit'`)
                return await bot.sendMessage(chatId, `${userData.name} Результаты вашего тестирования будут находится в общем доступе, для дальнейшего их анализа.`)
            }
        }
    }
};

const testResult = database.map((user) => (
    `${user.name} = ${user.score} баллов ` 
)).toString();

nodeSchedule.scheduleJob('30 20 * * 1', async () => {
    await bot.sendMessage(MNTNChatId, 'Добрый вечер, напоминаю про чистку кофемолки!');
});

nodeSchedule.scheduleJob('30 20 * * 5', async () => {
    await bot.sendMessage(MNTNChatId, 'Добрый вечер, напоминаю про чистку кофемолки!');
});

nodeSchedule.scheduleJob('0 10 * * 1', async () => {
    await bot.sendMessage(MNTNChatId, 'Доброе утро, напоминаю про проведение инвентаризации (до 14:00)!');
});

nodeSchedule.scheduleJob('0 10 * * 4', async () => {
    await bot.sendMessage(MNTNChatId, 'Доброе утро, напоминаю про проведение инвентаризации (до 14:00)!');
});

nodeSchedule.scheduleJob('50 20 * * 0', async () => {
    await bot.sendMessage(MNTNChatId, 'Добрый вечер, напоминаю про проведение инвентаризации (молоко и сиропы)!');
})

bot.setMyCommands([
    {command: '/start', description: 'Запустить бота'},
    {command: '/info', description: 'Получить информацию по боту'},
    {command: '/drinks', description: 'Техкарты напитков'},
    {command: '/desserts', description: 'Составы десертов'}, 
    {command: '/chat', description: 'Чат с напоминаниями'},
    {command: '/security', description: 'Скачать охранное приложение'},
    {command: '/attestation', description: 'Начать аттестацию'},
    {command: '/results', description: 'Результаты аттестации'},
]);

bot.on('message', async msg => {
    const textMessage = msg.text;
    const chatId = msg.chat.id;
    const userName = msg.from.first_name;

    switch (textMessage) {
        case '/start':
            return await bot.sendMessage(chatId, `Привет ${userName}, я создан для упращения рабочих процессов!`);

        case '/info':
            return await bot.sendMessage(chatId, 'Исходный код проекта можно найти по ссылке => https://github.com/VitaliyFrolov/MNTNCoffeeBot');

        case '/drinks':
            return await bot.sendMessage(chatId, 'https://docs.google.com/spreadsheets/d/1Kkv_PoAZ17StXMCv4HhzSGrfAGCjPyVtO0946ktrMuw/edit#gid=0');

        case '/desserts':
            return await bot.sendMessage(chatId, 'https://docs.google.com/spreadsheets/d/1aY3wD3OPDwpWLFR88n3BKCrUdJAmQszp0ojA-XwxpGQ/edit');

        case '/chat':
            return await bot.sendMessage(chatId, 'В этом чате я напоминаю о важных вещах! https://t.me/+t361-2g7zog4YzJi');

        case '/security':
            return await bot.sendMessage(chatId, 'Охранное приложение можно скачать по ссылке => https://play.google.com/store/apps/details?id=public.shub&hl=ru&pli=1');

        case '/attestation':
            return await bot.sendMessage(chatId, `Начнем аттестацию! Для корректной работы бота, отвечайте на один вопрос один раз, не возвращайтесь к уже отвеченным вопросам. Желаем удачи!`, testAttestationStart);
    
        case '/results':
            return await bot.sendMessage(chatId, testResult);
        
        default:
            if (chatId === -1001921502236) {
                break
            }
            return await bot.sendMessage(chatId, 'Давай ближе к делу!')
    };
});

bot.on('callback_query', async msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    const userName = msg.from.first_name;

    if (data === 'startTest') {
        counter = 0;
        await bot.sendMessage(chatId, 'Начнем! Результаты вашего тестирования будут находится в общем доступе, для дальнейшего их анализа.')
        return await bot.sendMessage(chatId, 'Сколько мл молока уходит на приготовление флет вайта?', questions.question_1)
    }

    sendMessages(
        data, 
        chatId, 
        1, 
        'Сколько гр ванильного сахара идет в ванильный раф?', 
        questions.question_2,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        2, 
        'Сколько халвы добавляется в халвичный латте?', 
        questions.question_3,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        3, 
        'Сколько воды идет на маленький американо?', 
        questions.question_4,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        4, 
        'Какая минимальная сумма для заказа кейк-шоп?', 
        questions.question_5,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        5, 
        'Cколько молока идет в большой капучино?', 
        questions.question_6,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        6, 
        'Какая температура воды используется для американо?', 
        questions.question_7,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        7, 
        'Сколько сливок идет в ванильный раф?', 
        questions.question_8,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        8, 
        'Сколько какао идет на банановый какао?', 
        questions.question_9,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        9, 
        'Сколько какао идет на большой какао?', 
        questions.question_10,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        10, 
        'Сколько фреша идет на теплый бамбл?', 
        questions.question_11,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        11, 
        'Сколько лаванды идет в лавандовый раф?', 
        questions.question_12,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        12, 
        'Какая температура заваривания гречишного чая?', 
        questions.question_13,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        13, 
        'Сколько гр лаванды идет на 100гр сахара в заготовку лавандогого сахара?', 
        questions.question_14,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        14, 
        'Сколько эспрессо идет в большой американо?', 
        questions.question_15,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        15, 
        'Сколько молока идет в маленький капучино?', 
        questions.question_16,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        16, 
        'Сколько основы идет на чай облепиха/клюква?', 
        questions.question_17,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        17, 
        'Сколько молока идет в латте?', 
        questions.question_18,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        18, 
        'Сколько молока идет большой какао?', 
        questions.question_19,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        19, 
        'Сколько бананового молока идет в банановый какао?', 
        questions.question_20,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        20, 
        'Сколько молока идет в халвичный латте?', 
        questions.question_21,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        21, 
        'Какая позиция не явяются веганской?', 
        questions.question_22,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        22, 
        'Какая позиция является продуктом без глютена?', 
        questions.question_23,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        23, 
        'Сколько молока идет на матча латте 0.2?', 
        questions.question_24,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        24, 
        'Есть ли временные рамки на заказ продукции кейк-шоп?', 
        questions.question_25,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        25, 
        'Какие фотографии необходимо отправить в чат при открытии смены до 10:01?', 
        questions.question_26,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        26, 
        'Какой орех есть в кексе кокос/голубика?', 
        questions.question_27,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        27, 
        'Что делать если чего-то не знаешь на рабочем месте?', 
        questions.question_28,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        28, 
        'Сколько молока идет в матча латте 0.3?', 
        questions.question_29,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        29, 
        'Сколько какао идет в мятный какао?', 
        questions.question_30,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        30, 
        'Сколько цитрусовой заготовки идет в цитрусовый раф?', 
        questions.question_31,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        31, 
        'Сколько кокосового молока идет в мятный какао?', 
        questions.question_32,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        32, 
        'Сколько гр имбиря идет на приготовление 100гр цитрусовой заготовки?', 
        questions.question_33,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        33, 
        'Сколько манго идет на чай манго-чилли?', 
        questions.question_34,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        34, 
        'Сколько какао идет на какао bean-to-bar?', 
        questions.question_35,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        35, 
        'Что идет в состав веганского рафа?', 
        questions.question_36,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        36, 
        'Сколько по времени запекаются апельсиновые корки на цитрусовый сахар', 
        questions.question_37,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        37, 
        'Сколько какао идет на мятный какао?', 
        questions.question_38,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        38, 
        'Сколько молока идет на маленький какао?', 
        questions.question_39,
        userName,
        false
    );

    sendMessages(
        data, 
        chatId, 
        39, 
        'Сколько молока идет в матча латте 0.3?', 
        questions.question_40,
        userName,
        true
    );
 });