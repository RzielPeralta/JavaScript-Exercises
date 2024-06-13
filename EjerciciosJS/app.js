/*EJERCICIOS SOBRE ARRAYS*/


//EJERCICIO 01

var weekDays = new Array(6);
weekDays = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', 'Domingo'];
console.table(`Días de la semana:`, weekDays);


//EJERCICIO 02

const daysWork = []
    daysWork.push("lunes","martes","miercoles","jueves","viernes");

    for (let i =0; i<daysWork.length; i++)
    console.log(daysWork[i].toUpperCase());


//EJERCICIO 03
var numsAll = new Array(10);
numsAll = [2,4,6,10,35,23,11,8,12,5];

let par = numsAll.filter((val) =>val%2 ==0);
let noPar = numsAll.filter((val) =>val%2 !=0);

console.log(`Array de numeros pares:`,par);
console.log(`Array de numeros impares:`,noPar);


//EJERCICIO 04
//pendiente de revisar
var numsAl = new Array(10);
numsAl = [2,4,6,10,99,23,11,32,12,5];

var pair = numsAl.reduce((sum, val) => val%2 ==0? val+sum:sum, 0)
var noPair = numsAl.reduce((sum, val) => val%2 !=0? val+sum:sum)
console.log(`Suma de numeros pares:`,pair);
console.log(`Suma de numeros impares:`,noPair);


//EJERCICIO 05

//Definiendo arreglos
const asistentesHTML = ["Pedro", "Juan", "Ana"];
const asistentesCSS = ["Luis", "Juan", "Ana", "Maria"];

// Función para encontrar asistentes que asisten a ambos cursos: pasando como parametros las listas

function encontrarAsistentesAmbosCursos(asistentesHTML, asistentesCSS) {
  // Filtrar el array de asistentesHTML para encontrar aquellos que también están en el array de asistentesCSS:
  const asistentesAmbos = asistentesHTML.filter(asistente => asistentesCSS.includes(asistente));

  // Ordenar la lista de asistentes,usando el metodo sort
  asistentesAmbos.sort();

  // Devolver la lista de asistentes a ambos cursos:
  return asistentesAmbos;
}

//mostrando la funcion en consola

console.log(encontrarAsistentesAmbosCursos(asistentesHTML, asistentesCSS));



//EJERCICIO 06

//se crea lista de objetos
let integrantes = [
    {nombre:"Juan", edad:34},
    {nombre:"Pepa", edad:40},
    {nombre:"Ana", edad:12},
    {nombre:"Luis", edad:14}
]

    let old = integrantes[0];
    let young = integrantes[0];

    for(let i=0; i<integrantes.length; i++){
        if(integrantes[i].edad > old.edad){
            old = integrantes[i];
        }
        if(integrantes[i].edad < young.edad){
            young = integrantes[i];
        }
    }

    console.log("Miembro mayor: "+old.nombre+" de "+old.edad+" años");
    console.log("Miembro más joven: "+young.nombre+" de "+young.edad+" años");




//EJERCICIO 07
//se declara el array
const colores = ["Rojo","Verde","Azul","Negro","Purpura","Magenta","Cafe","Blanco","Gris"]

//se crea la funcion, pasando como parametro el array
function arrayGuion(){
    
        //accedemos a la primera posicion del array
        let cadena = colores[0];
        //se recorre la cadena a partir de la pos 1
        for(let i=1; i<colores.length; i++){
            cadena += "-/-" + colores[i]; //concatenado de elementos del array con un "-", esto añade un guion antes de cada elemento del array a partir de la pos 1, ej "rojo(pos 0)-verde(pos1)"
            
            }
            return cadena; //retornar cadena de elementos con "-"
            
            }//imprimiendo funcion en consola
            console.log(arrayGuion(colores));




 //EJERCICIO 08

function sumaLista(listaNum){

    let suma = 0;

    for(let numero of listaNum){
        suma +=numero;
    }
    return suma;
}

const nums =[1, 5, 44, 10];
console.log(nums);
const resultadoSuma = sumaLista(nums);
console.log('La suma total del arreglo es:', resultadoSuma);

//EJERCICIO 09

const paresServicios = [
   {dia:"lunes",nombre:"Maria"},
   {dia:"martes",nombre:"Luis"},
   {dia:"miercoles",nombre:"Antonia"},
   {dia:"jueves",nombre:"Pedro"},
   {dia:"viernes",nombre:"Marisa"},
]
console.log(paresServicios);

//se crea la funcion la cual recibe como parametro "dia" del objeto de arriba
function nomAtender(dia){
    //convertimos los caracteres de "dia" a minusculas
    const diaMinuscula = dia.toLowerCase();

    //accedemos al arreglo con un ciclo for, si entrada en las pos[0,1,2,3..] es igual a lo que hay en diaMinuscula
    //se imprime en consola el día y el nombre del operador
    for(const entrada of paresServicios){
        if(entrada[0]===diaMinuscula){
            return 'El servicio para el día ${dia} está a cargo de ${entrada[1]}';
        //en caso de escribir un dia fuera de los declarados, se muestra el siguiente msj
        }return 'No hay servicio de atencion para el día ${dia}';
        }
        
        //uso de funcion, pasando como parametros los días del arreglo antes definido
    console.log(nomAtender("martes"));
    console.log(nomAtender("sabado"));
    console.log(nomAtender("miercoles"));
    console.log(nomAtender("Jueves"));
        }


/*EJERCICIOS SOBRE OBJETOS*/

//EJERCICIO 01
/*
const alumnoDatos ={
    nombre: "Jose Gutierrez",
    notasMaterias = {
        ingles:8,
        programacion:8,
        html:8.8
    }
}

function mediaSuma(notasMaterias){
    let suma = 0;
    for(const materia in notasMaterias){
        suma += notasMaterias[materia];
    }return suma/Object.keys(notasMaterias).length;

}
console.log('Nombre:${alumnoDatos.nombre}´); 
console.log('Media:${mediaSuma(alumnoDatos.notasMateria´)*/

//EJERCICIO 02)
//EJERCICIO 03
//EJERCICIO 04


