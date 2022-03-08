// Implementa una función que recorre toda la 'palabra', y cuenta todas las letras 'letra' que contiene. 
//Deve devolver el número de veces que aparece 'letra' en 'palabra'

function contarLetras(palabra, letra) {
  let res=0;
    for (i = 0;  i < palabra.length;i++) {
       if(palabra[i]==letra){
           res++;
       }      
     
    }
    return res;

}

console.log(contarLetras("pato", "p")); // 1
console.log(contarLetras("pato", "k")); // 0
console.log(contarLetras("perreque", "r")); // 2







