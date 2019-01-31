/**
 b) Написати функціонал для перебору через for .. of об'єкта з декількома рівнями вкладеності.
 */

//#######################################################

let multidimensionalObject = {
    word: "work",
    phrase: {
        phrase1: {
            phrase2: {
                phrase3: 'hello world !',
            }
        }
    },
    array: {
        array1: [1, 2, 3, 'bye world', '!']
    },
};

//#######################################################

multidimensionalObject[Symbol.iterator] = function* () {
    let obj = Object.keys(this);
    for (let key of obj) {
        yield this [key];
    }
};

for (let value of multidimensionalObject) {
    console.log(value);
}

//#######################################################