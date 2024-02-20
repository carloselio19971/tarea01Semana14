// ARRAY METHODS

console.log(`Los Array Methods son funciones que  nos permite realizar operaciones con arreglo de una manera mas rapida.`)
const alumnos = [
    { id: 1, nombre: 'Juan', edad: 25 },
    { id: 2, nombre: 'María', edad: 30 },
    { id: 3, nombre: 'Pedro', edad: 20 }
];

// 1. find
console.log(`Este metodo nos permite econtrar el PRIMER ELEMENTO que cumpla una condicion`) 
//Queremos saber el alumnos que tiene 30 años de edad
const edad30= alumnos.find(alumno=>alumno.edad===30);
//Nos retorna el alumno con edad 30 
console.log(edad30);
// 2. some
console.log(`Nos permite comprobar si al menos hay un elementos en el arreglo que cumplan esa condicion`);
const numero=[10,20,30,40,50];
//Nos retorna un arreglo de tipo boolean en el caso encuentre un elementos con la condicion el bolean sera true, caso contrario false.
const algunNumeroMayor25=numero.some(numero=>numero>25);
console.log(algunNumeroMayor25);
//Every
console.log(`Nos permite comprobar si todos los elementos en el arreglo cumplen esa condicion`);
const mayoresDeEdad=[10,20,30,40,50];
const todosMayoresDeEdad= mayoresDeEdad.every(edad => edad > 18);
//Para este ejemplo nos permite validad si todos los elementos del arrreglo edades son mayores de 18 años.
//Retorna un true o false
console.log(todosMayoresDeEdad);
// 4. includes
console.log(`Nos permite verificar si hay algun determinado elemento en el arreglo, retorna un boleano true en caso lo encuentre y un false en caso no lo encuentre`);
const nombres = ['Diego', 'María', 'Pedro', 'Ana'];
const incluyeDiego = nombres.includes('Diego');
console.log(incluyeDiego);
// 5. map
console.log(`Nos permite crear una nuevo arreglo en base al arreglo ya existente, en base al criterio definido en el recorrido`);
//Arreglo de numero
const numeros = [1, 2, 3, 4, 5];
const numerosalCuadrado=numero.map(numero=>numero*numero);
console.log(numerosalCuadrado);
//A diferencia de forach el map si lo almacena el resultado del recorrido en otro arreglo.

// 6. filter
console.log(`Nos permite crear un nuevo arreglo que contenga solo los elementos que cumplan una condicion, el metodo devuelve una matriz con todos los elementos filtrados en un nuevo arreglo`);

const numerosfilter = [10, 20, 30, 40, 50];

const mayoresde25=numero.filter(numero=>numero>25);
//En esta caso devuelve un nuevo arreglo filtrando los numeros mayores a  25
console.log(mayoresde25);

// 7. reduce
console.log(`Se utiliza para reducir un arreglo a una solo valor, aplicando una funcion acumuladora en cada elemeto del arreglo`);

const numerosReduce = [1, 2, 3, 4, 5];
//Se desea sumar todos los numeros del arreglo
const suma=numeros.reduce((acumulador,numero)=>{
                                           return acumulador+numero
                                        },0);
console.log(`La funcion reduce toma 2 argumentos, (la funcion de reduccion) y (el valor inicial de acumulador), en la funcion de reduccion recibe 2 parametros el acumulador y el elemento actual, en cada iteraccion, la funcion suma el elemento actual al acumulador`);
console.log(suma);
