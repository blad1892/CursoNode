
// Crea los siguientes archivos JS:
// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break


//FACTORIAL FOR
var factorial=1;
var resul=0;
for (let i = 1; i <= 10; i++) {  
   factorial*=i;
   console.log(factorial);
}


//FACTORIAL WHILE
var factorial2=1;
let cont=1;
while(cont <= 10){    
      factorial2 *= cont;
      console.log(factorial2);
     cont++;
}


//FACTORIAL 10 WHILE2
var factorial3=1; 
var cont2=1;
while(true){
factorial3*=cont2;
cont2++; 
console.log(factorial3);
if(cont2==10){
break;
}
}
console.log("Factorial for: "+factorial);
console.log("Factorial While: "+factorial2);
console.log("Factorial Break: "+factorial3);

