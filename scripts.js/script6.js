//7 задание
let S = 2000000;
let p = 10;
let years = 5;

let k = 0.83*Math.pow((1+0.83),60);
let l = Math.pow((1+0.83),60)-1;
let z = S*(k/l);
let Pereplata = +z;

console.log('7 Задание  ' + 'Сумма переплаты состовляет ' + +z.toFixed(0) +' рублей');