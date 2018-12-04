//Зробіть, щоб в чисел з'явився метод sum(), який отримує інше
// число і на виході дає їх суму, наприклад x.sum(y) === x + y


var x = 1;

Number.prototype.sum = function(y) {
    return this + y;
};
console.log(x.sum(1));


