// Один з алгоритмів

// Знайти всі “гірські піки”: тобто елемент масиву, сусідній до якого елементи
// будуть менші (не рівні) за нього. Можна зберегти індекси цих елементів в окремий масив.
//     var peaks = [],
//     intervals = [], waterAmount = 0;
// for (var i=0; i< array.length; i++) {
//
//     if (((i===0) && (array[i]>=array[i+1])) //0й елемент
//         || ((i===array.length-1) && (array[i]>=array[i-1])) // останній елемент
//         || (i!==0 && i < array.length-1) &&((array[i] >=array[i-1]) && (array[i]>=array[i+1])) //пік
//     )
//     {
//         peaks.push(i); // індекс піку в окремий масив
//     }
// }
//
// Розбити масив на підмасиви (включаючи ці “піки”) (якщо ми зберегли індекси наших “піків” в окремий масив,
// то можем використати метод slice)
// peaks.forEach(function(item, index){
//     if (index > 0)  intervals.push(array.slice(peaks[index-1], peaks[index]+1)); // розбиваємо наш масив
// на підмасиви - ямки з водою))
// });
// Для кожного підмасиву тепер можемо обрахувати об’єм води (відняти від висоти меншого з двох піків висоту
// кожного елемента, і просумувати ці різниці.
// intervals.forEach(function(interval){
//
//     interval[0] = interval[interval.length-1] = Math.min(interval[0], interval[interval.length-1]);
//     interval.forEach(function(item){
//         waterAmount+=interval[0] - item;
//     });
// });


А тепер спробуй завернути це все в методи масивів))