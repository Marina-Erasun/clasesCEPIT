//let palabras: string[]= ["hola","chau","goodbye","saludar", "negar","estornudar"]
//let palabra: string[]= palabras.find(element => element.length >6);
//console.log(palabra);
var num = [2, 3, 4, 5, 6, 7];
var valorInicial = 0;
var result = num.reduce(function (acumulador, currentValue) {
    return acumulador + currentValue;
}, valorInicial);
console.log(result);
var arr = [42, 3, 24, 5, 65, 7];
arr.sort(function (a, b) { return a - b; });
console.log(arr);
