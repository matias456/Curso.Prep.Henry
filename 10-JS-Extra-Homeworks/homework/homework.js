// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //                                           //return Object.entries(objeto);
  var nuevoArray= [];
  for(const key in objeto) {
    nuevoArray.push([ key, objeto[key]])
  }
  return nuevoArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //  objeto= {}
  // for(var i=0 ; i<string.length ; i++) {
  //   if(!objeto.hasOwnProperty(string[i])) {                   // si existe la propiedad, sumo i+1
  //     Object.defineProperty(objeto, string[i], {value:1})     // si no existe la propiedad la defino y le doy un valor                       
  //   }
  //   if(objeto.hasOwnProperty(string[i])) {
  //     Object.entries(objeto)
  //   }

  // }
  // return objeto;/// el objeto tendria el formato clave-valor
  var objeto= {}

  for( var i=0 ; i<string.length ; i++) {
    if( !objeto[string[i]]) {
      objeto[string[i]] =0
    }
    objeto[string[i]] ++
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
var mayusculas= []
var minusculas= []

var s = s.split("")

  for(var i=0 ; i<s.length ; i++) {
    if(s[i]!== s[i].toUpperCase()) {
      minusculas.push(s[i])
    }
    if(s[i]=== s[i].toUpperCase()) {
      mayusculas.push(s[i]) 
    } 
  }
  return mayusculas.join("") + minusculas.join("")
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  // var fraseInvertida = ''
  // var frase = str.split(" ")                            //separamos el string en varios elementos

  // for(var i=0 ; i<frase.length ;i++) {                  // recorremos todos los elementos
  //   for(var j=frase[i].length-1 ; j>=0 ; j--) {         // recorremos cada elemento en forma inversa
  //     fraseInvertida += frase[i][j]                     // le sumamos cada letra del elemento de forma in verssa por el segundo for
  //   }
  //   if( i!==frase.length-1) {                           //
  //     fraseInvertida += " "
  //   }
  // }
  // return fraseInvertida
  var fraseInvertida = []
  var frase = str.split(" ")
  
  for(var i=0 ; i<frase.length ; i++) {
    fraseInvertida.push(frase[i].split("").reverse().join(""))
  }
  return fraseInvertida.join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero = numero.toString()
  if( numero === numero.split('').reverse().join('')) {                              // xxxxxxx
    return "Es capicua"
  }
  return "No es capicua"
  
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  cadena= cadena.replace("a","")
  cadena= cadena.replace("b","")
  cadena= cadena.replace("c","")
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a,b){
    if( a.length < b.length) return -1
    if( a-length > b.length) return 1
    return 0
  })
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
  var interseccion=[]                                  //nuevo array con numeros en comun
                                                                              
  
  for(var i=0 ; i<arreglo1.length ; i++) {             //recorremos el arreglo1             //xxxxx
    for(var j=0 ; j<arreglo2.length ; j++) {           //recorremos el arreglo2
      if( arreglo1[i] === arreglo2[j]) {               //si en caso de que los dos areglos tengan el mismo numero
        interseccion[interseccion.length]=arreglo1[i]  //se suman al nuevo array. 
      }
    }  
  }
  return interseccion                                  //devolvemos el nuevo array
} 



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

