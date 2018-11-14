'use strict';

/**
 * cAPS lOCK
 *
 * зАЧЕМ НУЖНА КЛАВИША cAPS lOCK?
 * Caps Lock — клавиша компьютерной клавиатуры, предназначенная для автоматической (постоянной) смены регистра
 * букв со строчных на прописные. Будучи случайно нажатой, она приводит к последствиям вроде первого абзаца в
 * условии этой задачи.
 *
 * Будем считать, что слово набрано с ошибочно нажатой клавишей Caps Lock, если:
 * - либо оно полностью состоит из прописных букв;
 * - либо прописными являются все его буквы, кроме первой.
 *
 * В таком случае, нужно автоматически поменять регистр всех букв на противоположный. Например,
 * регистр букв слов «hELLO», «HTTP», «z» должен быть изменен.
 * Напишите программу, которая применяет описанное выше правило или оставляет слово без изменения, если оно не применимо.
 *
 * Входные данные
 * записано слово, состоящее из прописных или строчных букв латинского алфавита. Длина слова — от 1 до 100 символов включительно.
 *
 * Выходные данные
 * Выведите результат обработки данного слова.
 */

var capsLockTests = [
    {
        parameters: ["cAPS"],
        expectedResult: "Caps"
    },
    {
        parameters: ["Lock"],
        expectedResult: "Lock"
    },
    {
        parameters: ["wHY DO wE NEED cAPS lOCK?"],
        expectedResult: "Why do We need Caps Lock?"
    },
    {
        parameters: ["FuNkY iS nOt CaPs!"],
        expectedResult: "FuNkY Is nOt CaPs!"
    }
];


function capsLock(str) {
    var words = [];
    if (validate() === true) {
        var arrString = arrLetters();

        arrString.forEach((word) => {
            var selection = letterSelector(word);
            words.push(selection);
        });
    }
    return words.join(" ");


    function letterSelector(word) {
        var firstLetter = word.substring(0, 1);
        var lastLetters = word.substring(1);
        if (firstLetter === firstLetter.toLowerCase() && lastLetters === lastLetters.toUpperCase()) {
            return firstLetter.toUpperCase() + lastLetters.toLowerCase();
        } else if (word === word.toUpperCase()) {
            return word.toLowerCase();
        }
        return word;
    }


    function arrLetters() {
        return str.split(" ");
    }


    function validate() {
        if (str.length < 100 && str.length > 1) {
            return true;
        } else {
            return "length of string is > 100";
        }

    }
}

// console.log(capsLock("cAPS"));
// console.log(capsLock("Lock"));
// console.log(capsLock("wHY DO wE NEED cAPS lOCK?"));
// console.log(capsLock("FuNkY iS nOt CaPs!"));


tasks.push({
    title: "cAPS lOCK",
    solution: capsLock,
    tests: capsLockTests
});
