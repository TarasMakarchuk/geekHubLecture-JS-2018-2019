/**Скопівати собі код https://gist.github.com/kikill95/14e5bf101c1b77babc8b431c8e498d9d?fbclid=IwAR03YV2jKvCp9cul-2t3aauV9d5H_nv8pF3QB1Ybw2jfatmPcHEz2b8YB9M
 Замість рядка "//TODO implement" написати тіло функції, щоб код виконувався без помилок,
 і ланцюжок then можна було продовжувати й надалі.

 by Denys Pysmennyi
 */

//#################################################

function perform() {
    //TODO implement
    let parameter = arguments[0];
    if (parameter === null) {
        parameter = arguments[1]();
    }
    return new Promise(function (resolve) {
        resolve(parameter);
    });
}

//#################################################

perform(null, function (value) { // value === null
    var param = 1;
    console.log(param); // 1
    return param;
})
    .then(function (param) { // param === 1
        console.log(++param); // 2
        return param;
    })
    .then(function (param) { // param === 2
        console.log(++param); // 3
        return param;
    });

//#################################################
