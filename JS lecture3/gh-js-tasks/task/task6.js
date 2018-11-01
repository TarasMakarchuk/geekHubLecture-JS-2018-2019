'use strict';

/**
 * Красивый год
 *
 * А знали ли Вы забавный факт о том, что 2013 год является первым годом после далекого 1987 года,
 * в котором все цифры различны?
 *
 * Теперь же Вам предлагается решить следующую задачу: задан номер года, найдите наименьший номер года,
 * который строго больше заданного и в котором все цифры различны.
 *
 * Входные данные
 * В единственной строке задано целое число y (1000 ≤ y ≤ 9000) — номер года.
 *
 * Выходные данные
 * Выведите единственное целое число — минимальный номер года, который строго больше y, в котором все цифры различны.
 * Гарантируется, что ответ существует.
 */

var prettyYearTests = [
    {
        parameters: ["1987"],
        expectedResult: 2013
    },
    {
        parameters: ["2013"],
        expectedResult: 2014
    },
    {
        parameters: ["8796"],
        expectedResult: 8901
    }
];


function prettyYear(y) {
    if (y >= 1000 && y <= 9000) {
        var nextYear = parseInt(y) + 1;
        var yearPortions = nextYear.toString().split(", ");
        var yearArr = [];

        yearPortions.forEach(function (num) {
            if (yearArr.indexOf(num) === -1) {
                yearArr.push(num);
            }
        });

        if (yearArr.length === yearPortions.length) {
            return nextYear;
        } else {
            prettyYear(nextYear);
        }
    } else {
        return "input year in interval 1000-9000";
    }
}

console.log(prettyYear("1987"));
// console.log(prettyYear("2013"));
// console.log(prettyYear("8796"));

// tasks.push({
//     title: "Красивый год",
//     solution: prettyYear,
//     tests: prettyYearTests
// });
