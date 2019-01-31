/**
 a) Написати нескінченний генератор випадкових чисел на основі ітераторів.
 * */

//#######################################################################

setInterval(function () {
    let array = [];
    let start = 1;
    let end = 5;
    let bitDepth = 1000000000000000000;
    let generator = generateSequence();
    let next = generator.next();

//#######################################################################

    function* generateSequence() {
        for (let i = start; i <= end; i++)
            yield array.push(Math.random() * bitDepth) / (end - start);
    }

    console.log('generated id: ' + array);
    console.log(JSON.stringify(next));
}, 800);

//#######################################################################