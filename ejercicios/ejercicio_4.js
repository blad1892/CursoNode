// Crea un archivo JS que contenga las siguientes líneas
// - Una cadena de texto con tu Nombre
// - Otra cadena de texto con tu Apellido
// - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
// - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
// - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
// - Una variable que contenga la primera letra del Nombre
// - Otra variable que contenga la última letra del Apellido
// - Una cadena de texto que elimine los espacios de la variable "estudiante"
// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
var nombre= 'Arismaldi';
var apellido= 'Rojas';
var estudiante= `Estudiante ${nombre} ${apellido}.`;
var estudianteMayus=estudiante.toUpperCase();
var estudianteMinus =estudiante.toLowerCase();
var tamaño = estudiante.length;
var primerLetraNombre= nombre.slice(0,1);
var primerLetraApellido=apellido.slice(apellido.length-1);
var eliminarEspacio=estudiante.replace(/ /g,'');
var buscarNombre =estudiante.includes(nombre);

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(tamaño);
console.log(primerLetraNombre);
console.log(primerLetraApellido);
console.log(eliminarEspacio);
console.log(buscarNombre);


