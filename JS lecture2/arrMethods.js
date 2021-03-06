// 1 Створити об'єкт який схожий на масив. Реалізувати методи
// push,
// pop,
// join,
// filter,
// find,
// map,
// sort,
// toString,
// геттер length

var objectCar = {
    0: "Peogeot",
    1: "Volvo",
    2: "Lada",
    3: "Chevrolet",
    4: "Daewoo",
    5: "Nissan",
    length: 6
};
console.table(objectCar);


var carBrands = Array.prototype.slice.call(objectCar);
console.table(carBrands);


// 1. push
let pushCar = Array.prototype.push.apply(carBrands, ["Ford", " ZAZ"]);
console.log(pushCar, "Add car  to array - ", "Ford,", "ZAZ");
console.log(carBrands);


// 2. pop
let popCar = Array.prototype.pop.apply(carBrands);
console.log(popCar, "-  Remove the car in the array");
console.log("Remaining cars  - ", carBrands);


// 3. join
let sumString = Array.prototype.join.call(carBrands, " + ");
console.log("Combined array cars: + ", sumString);


// 4. filter
let lastCar = Array.prototype.filter.call(carBrands, findCarsWithLongNames());
console.log("Cars whose brand length is more than six characters - " + lastCar);


// 5. find
let findCar = Array.prototype.find.call(carBrands, findCarsWithLongNames());
console.log("Found the first car brand name which is more than six characters  - " + findCar);


// 6. map (output array of cars in reverse order)
let carBrandsReverse = Array.prototype.slice.call(carBrands);
[].map.call(carBrandsReverse, function(x) {
    return x;
}).reverse( ).join(' ');
console.log(carBrandsReverse);


// 7. sort (alphabetical sorting)
let carBrandsABCSorting  = carBrands;
carBrandsABCSorting.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(carBrandsABCSorting);


// 8. toString
let arr = Array.prototype.toString.call(carBrands, convertCarArr(carBrands));
console.log(arr.toString());


// 9. геттер length
var array = {0:"123",1:45, 2:"3",4:"Overrrideeeee"};
Object.defineProperty(array, 'length', {
    get: function() {
    //     var value = 15;
    //     while (array.length < value) {
    //         array.splice(array.length, 0, "car is not added");
    //     }
        return array.length;
    }});

console.log(array.length);
console.table(array);





function convertCarArr(array) {
    console.log("String car brands - " + array);
}


function findCarsWithLongNames() {
    return w => w.length > 6;
}
