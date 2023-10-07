module.exports = {
    testAttestationStart: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Начать тест', callback_data: 'startTest'}]
            ]
        })
    },

    question_1: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '150гр', callback_data: 'question_1-false'}, {text: '140гр', callback_data: 'question_1-true'}, {text: '120гр', callback_data: 'question_1-false'}]
            ]
        })
    },

    question_2: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '10гр', callback_data: 'question_2-false'}, {text: '12гр', callback_data: 'question_2-false'}],
                [{text: '6гр', callback_data: 'question_2-false'}, {text: '7гр', callback_data: 'question_2-true'}]
            ]
        })
    },

    question_3: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '20гр, взбиваем все как раф', callback_data: 'question_3-true'}],
                [{text: '20гр, вливаем молоко с халвой техникой латте арт', callback_data: 'question_3-false'}],
                [{text: '15гр, взбиваем все как раф', callback_data: 'question_3-false'}],
                [{text: '15гр, вливаем молоко с халвой техникой латте арт', callback_data: 'question_3-false'}]
            ]
        })
    },

    question_4: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '200гр', callback_data: 'question_4-false'}, {text: '150гр', callback_data: 'question_4-false'}],
                [{text: '120гр', callback_data: 'question_4-true'}, {text: '130гр', callback_data: 'question_4-false'}]
            ]
        })
    },

    question_5: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '2000р', callback_data: 'question_5-false'}, {text: '3000р', callback_data: 'question_5-false'}],
                [{text: '3500р', callback_data: 'question_5-false'}, {text: '4000р', callback_data: 'question_5-true'}]
            ]
        })
    },

    question_6: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '210гр', callback_data: 'question_6-true'}, {text: '220гр', callback_data: 'question_6-false'}],
                [{text: '240гр', callback_data: 'question_6-false'}, {text: '250гр', callback_data: 'question_6-false'}]
            ]
        })
    },

    question_7: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Не менее 90°', callback_data: 'question_7-false'}, {text: 'Не более 85°', callback_data: 'question_7-true'}],
                [{text: 'Не менее 85°', callback_data: 'question_7-false'}, {text: 'Наливаем из тачки!', callback_data: 'question_7-false'}]
            ]
        })
    },

    question_8: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '200гр', callback_data: 'question_8-true'}, {text: '220гр', callback_data: 'question_8-false'}],
                [{text: '230гр', callback_data: 'question_8-false'}, {text: '240гр', callback_data: 'question_8-false'}]
            ]
        })
    },

    question_9: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '15гр', callback_data: 'question_9-false'}, {text: '20гр', callback_data: 'question_9-true'}],
                [{text: '25гр', callback_data: 'question_9-false'}, {text: '30гр', callback_data: 'question_9-false'}]
            ]
        })
    },

    question_10: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '15гр', callback_data: 'question_10-false'}, {text: '20гр', callback_data: 'question_10-true'}],
                [{text: '25гр', callback_data: 'question_10-false'}, {text: '30гр', callback_data: 'question_10-false'}]
            ]
        })
    },

    question_11: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '200гр', callback_data: 'question_11-false'}, {text: '210гр', callback_data: 'question_11-false'}],
                [{text: '220гр', callback_data: 'question_11-true'}, {text: '230гр', callback_data: 'question_11-false'}]
            ]
        })
    },

    question_12: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '6гр', callback_data: 'question_12-false'}, {text: '7гр', callback_data: 'question_12-true'}],
                [{text: '8гр', callback_data: 'question_12-false'}, {text: '9гр', callback_data: 'question_12-false'}]
            ]
        })
    },

    question_13: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '65°', callback_data: 'question_13-false'}, {text: '75°', callback_data: 'question_13-false'}],
                [{text: '85°', callback_data: 'question_13-false'}, {text: '95°', callback_data: 'question_13-true'}]
            ]
        })
    },

    question_14: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '5-7гр', callback_data: 'question_14-true'}, {text: '7-9гр', callback_data: 'question_14-false'}],
                [{text: '9-10гр', callback_data: 'question_14-false'}, {text: '10-12гр', callback_data: 'question_14-false'}]
            ]
        })
    },

    question_15: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Двойной эспрессо', callback_data: 'question_15-false'}, {text: 'Двойной + половина', callback_data: 'question_15-false'}],
                [{text: 'Два двойных', callback_data: 'question_15-true'}, {text: 'Наливаем фильтр', callback_data: 'question_15-false'}]
            ]
        })
    },

    question_16: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '120гр', callback_data: 'question_16-false'}, {text: '130гр', callback_data: 'question_16-false'}],
                [{text: '140гр', callback_data: 'question_16-false'}, {text: '150гр', callback_data: 'question_16-true'}]
            ]
        })
    },

    question_17: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '30гр', callback_data: 'question_17-false'}, {text: '25гр', callback_data: 'question_17-false'}],
                [{text: '20гр', callback_data: 'question_17-true'}, {text: '40гр', callback_data: 'question_17-false'}]
            ]
        })
    },

    question_18: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '220гр', callback_data: 'question_18-false'}, {text: '230гр', callback_data: 'question_18-true'}],
                [{text: '240гр', callback_data: 'question_18-false'}, {text: '250гр', callback_data: 'question_18-false'}]
            ]
        })
    },

    question_19: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '200гр', callback_data: 'question_19-true'}, {text: '220гр', callback_data: 'question_19-false'}],
                [{text: '240гр', callback_data: 'question_19-false'}, {text: '250гр', callback_data: 'question_19-false'}]
            ]
        })
    },

    question_20: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '200гр', callback_data: 'question_20-true'}, {text: '220гр', callback_data: 'question_20-false'}],
                [{text: '240гр', callback_data: 'question_20-false'}, {text: '250гр', callback_data: 'question_20-false'}]
            ]
        })
    },

    question_21: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '210гр', callback_data: 'question_21-true'}, {text: '220гр', callback_data: 'question_21-false'}],
                [{text: '240гр', callback_data: 'question_21-false'}, {text: '250гр', callback_data: 'question_21-false'}]
            ]
        })
    },

    question_22: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Кекс кокос/голубика', callback_data: 'question_22-false'}],
                [{text: 'Кекс вишня/шоколад', callback_data: 'question_22-false'}],
                [{text: 'Ягодный пирог', callback_data: 'question_22-false'}],
                [{text: 'Кокосовая картошка', callback_data: 'question_22-true'}]
            ]
        })
    },

    question_23: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Торт домашний', callback_data: 'question_23-false'}],
                [{text: 'Кекс кокос/голубика', callback_data: 'question_23-false'}],
                [{text: 'Ягодный пирог', callback_data: 'question_23-false'}],
                [{text: 'Вся продукция содержит глютен', callback_data: 'question_23-true'}]
            ]
        })
    },

    question_24: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '120гр', callback_data: 'question_24-false'}, {text: '130гр', callback_data: 'question_24-false'}],
                [{text: '140гр', callback_data: 'question_24-false'}, {text: '150гр', callback_data: 'question_24-true'}]
            ]
        })
    },
    
    question_25: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Да, до 12:00!', callback_data: 'question_25-true'}]
            ]
        })
    },

    question_26: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Профайл, сырники & круассаны, фильтр', callback_data: 'question_26-true'}],
                [{text: 'Профайл, сырники &круассаны', callback_data: 'question_26-false'}],
                [{text: 'Профайл, сырники & крусы, касса', callback_data: 'question_26-false'}],
                [{text: 'Фото вчерашнего закрытия', callback_data: 'question_26-false'}]
            ]
        })
    },

    question_27: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Кокос & миндаль', callback_data: 'question_27-true'}],
                [{text: 'Кокос & фундук', callback_data: 'question_27-false'}],
                [{text: 'Кокос & грецкий', callback_data: 'question_27-false'}],
                [{text: 'Кокос & миндаль & кешью', callback_data: 'question_27-false'}]
            ]
        })
    },

    question_28: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Спрашивать!', callback_data: 'question_28-true'}],
                [{text: 'Увольняться!', callback_data: 'question_28-true'}]
            ]
        })
    },

    question_29: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '200гр', callback_data: 'question_29-false'}, {text: '210гр', callback_data: 'question_29-true'}],
                [{text: '220гр', callback_data: 'question_29-false'}, {text: '230гр', callback_data: 'question_29-false'}]
            ]
        })
    },

    question_30: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '15гр', callback_data: 'question_30-true'}, {text: '20гр', callback_data: 'question_30-false'}],
                [{text: '25гр', callback_data: 'question_30-false'}, {text: '30гр', callback_data: 'question_30-false'}]
            ]
        })
    },

    question_31: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '5гр', callback_data: 'question_31-false'}, {text: '7гр', callback_data: 'question_31-false'}],
                [{text: '10гр', callback_data: 'question_31-true'}, {text: '20гр', callback_data: 'question_31-false'}]
            ]
        })
    },

    question_32: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '150гр', callback_data: 'question_32-false'}, {text: '200гр', callback_data: 'question_32-true'}],
                [{text: '210гр', callback_data: 'question_32-false'}, {text: '220гр', callback_data: 'question_32-false'}]
            ]
        })
    },

    question_33: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '0.1гр', callback_data: 'question_33-false'}, {text: '0.2гр', callback_data: 'question_33-true'}],
                [{text: '0.5гр', callback_data: 'question_33-false'}, {text: '1гр', callback_data: 'question_33-false'}]
            ]
        })
    },

    question_34: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '15гр', callback_data: 'question_34-false'}, {text: '20гр', callback_data: 'question_34-false'}],
                [{text: '25гр', callback_data: 'question_34-false'}, {text: '30гр', callback_data: 'question_34-true'}]
            ]
        })
    },

    question_35: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '15гр', callback_data: 'question_35-false'}, {text: '20гр', callback_data: 'question_35-false'}],
                [{text: '25гр', callback_data: 'question_35-false'}, {text: '30гр', callback_data: 'question_35-true'}]
            ]
        })
    },

    question_36: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Без добавок', callback_data: 'question_36-false'}, {text: 'Солёная карамель', callback_data: 'question_36-false'}],
                [{text: 'Ванильный сахар', callback_data: 'question_36-true'}, {text: 'Цитрусовый сахар', callback_data: 'question_36-false'}]
            ]
        })
    },

    question_37: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '20 - 30 минут', callback_data: 'question_37-false'}, {text: 'Час', callback_data: 'question_37-false'}],
                [{text: '40 - 45 минут', callback_data: 'question_37-true'}, {text: '45 - 50 минут', callback_data: 'question_37-false'}]
            ]
        })
    },

    question_38: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '15гр', callback_data: 'question_38-true'}, {text: '20гр', callback_data: 'question_38-false'}],
                [{text: '5гр', callback_data: 'question_38-false'}, {text: '10гр', callback_data: 'question_38-false'}]
            ]
        })
    },

    question_39: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '140гр', callback_data: 'question_39-false'}, {text: '150гр', callback_data: 'question_39-true'}],
                [{text: '200гр', callback_data: 'question_39-false'}, {text: '210гр', callback_data: 'question_39-false'}]
            ]
        })
    },
}