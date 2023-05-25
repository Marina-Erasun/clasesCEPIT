//let palabras: string[]= ["hola","chau","goodbye","saludar", "negar","estornudar"]

//let palabra: string[]= palabras.find(element => element.length >6);

//console.log(palabra);

const num : number[]= [2,3,4,5,6,7];
let valorInicial=0;
const result =num.reduce((acumulador,currentValue)=> 
    acumulador + currentValue , valorInicial);
console.log(result)

let arr: number[]= [42,3,24,5,65,7];
arr.sort((a,b)=> a-b);
console.log(arr)