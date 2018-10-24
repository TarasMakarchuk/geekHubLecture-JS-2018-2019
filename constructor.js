// 2. Завдання з зірочкою ⭐
// Реалізувати конструктор схожий на new Array(........)
// В цей контруктор можна буде передавати будь-яку кількість елементів,
// які стануть елементами нашого "масиву"

var cars = [];
class MyCar {

    constructor(...values) {

        for (let i = 0; i < values.length; i++) {
            this.cars = [].push.call(cars, values[i]);
        }
    }

    toString(){
        for (var i = 0; i < cars.length; i++) {
            console.log(cars[i]);
        }
    }
}
var myCar = new MyCar(1, "qwe", 155, "rty", 1555);
myCar.toString();
