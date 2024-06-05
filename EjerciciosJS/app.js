//EJERCICIOS DE ARRAYS


//EJERCICIO 1

var weekDays = new Array(6);
weekDays = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', 'Domingo'];
console.table(`Días de la semana:`, weekDays);


//EJERCICIO 2

const daysWork = []
    daysWork.push("lunes","martes","miercoles","jueves","viernes");

    for (let i =0; i<daysWork.length; i++)
    console.log(daysWork[i].toUpperCase());


//EJERCICIO 3
//pendiente de revisar
var numsAll = new Array(10);
numsAll = [2,4,6,10,35,23,11,8,12,5];

let par = numsAll.filter((val) =>val%2 ==0);
let noPar = numsAll.filter((val) =>val%2 !=0);

console.log(`Array de numeros pares:`,par);
console.log(`Array de numeros impares:`,noPar);


//EJERCICIO 4
//pendiente de revisar
var numsAl = new Array(10);
numsAl = [2,4,6,10,99,23,11,32,12,5];

var pair = numsAl.reduce((sum, val) => val%2 ==0? val+sum:sum, 0)
var noPair = numsAl.reduce((sum, val) => val%2 !=0? val+sum:sum)
console.log(`Suma de numeros pares:`,pair);
console.log(`Suma de numeros impares:`,noPair);


//EJERCICIO 5








