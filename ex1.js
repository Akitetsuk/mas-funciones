// Implementa una función, que dado un número de minutos, devuelva los segundos a los que corresponden dichos minutos

function minutosASegundos(minutos) {
minutos = minutos*60;
return minutos;
}

console.log(minutosASegundos(3)); // 180
console.log(minutosASegundos(5)); // 300
