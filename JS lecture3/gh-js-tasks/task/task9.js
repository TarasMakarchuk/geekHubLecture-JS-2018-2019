'use strict';

/**
 * Средство от бессонницы
 *
 * «Раз дракон. Два дракон. Три дракон», — считала принцесса.
 * У нее была бессонница, а считать барашков ей надоело еще в девять лет.
 * Впрочем, считать драконов просто так тоже было скучно, поэтому она развлекалась как могла.
 * Этой ночью она представляла, что все посчитанные драконы явились сюда, чтобы ее украсть,
 * а она отбивается от них, как может. Каждого k-ого дракона она била сковородкой по морде.
 * Каждому l-ому — прищемляла хвост балконной дверью. Каждому m-ому — наступала на лапу острым каблучком.
 * Наконец, каждому n-ому она грозила позвать мамочку, и он в ужасе ретировался.
 *
 * Скольким воображаемым драконам успела нанести моральный или физический ущерб принцесса,
 * если всего она насчитала d драконов?
 *
 * Входные данные содержат целые числа k, l, m, n и d (1 ≤ k, l, m, n ≤ 10, 1 ≤ d ≤ 105).
 * Выведите количество пострадавших драконов.
 */

var dragonCountTests = [
    {
        parameters: [1, 2, 3, 4, 12],
        expectedResult: 12
    },
    {
        parameters: [2, 3, 4, 5, 24],
        expectedResult: 17
    }
];

function dragonCount(k, l, m, n, d) {
    //TODO
    if(verifyDragons(k, l, m, n) && verifyDragonsLastElement(d) === true) {
        return act(k, l, m, n, d);
    }
}

function verifyDragons(k, l, m, n) {
    var dragons = [k, l, m, n];
    for (let i = 0; i < dragons.length; i++) {
        if ((dragons[i] >= 1) && (dragons[i] <= 10)){
            continue;
        }
        return false;
    }
    return true;
}

function verifyDragonsLastElement(d) {
    return d >= 1 && d <= 105;
}

function act(k, l, m, n, d){
    var count = [];
    for (let i = 1; i <= d; i++) {
        if(i % k === 0){
            console.log("pan on the face");
            count.push(k);
        } else if(i % l === 0){
            console.log("pinch the tail ");
            count.push(l);
        } else if(i % m === 0){
            console.log("step on paw ");
            count.push(m);
        } else if(i % n === 0){
            console.log("call mommy ");
            count.push(n);
        }
    }
    return count.length;
}


tasks.push({
    title: "Средство от бессонницы",
    solution: dragonCount,
    tests: dragonCountTests
});
