let peso = prompt("ingrese su peso");
let altura =  prompt ("ingrese su altura");
let resultado = parseFloat(peso)/parseFloat(altura**2);
let mensaje = "TU IMC ES: ";
let final = mensaje +" "+resultado;
console.log (final);
document.write (final)
