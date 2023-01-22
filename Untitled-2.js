

console.log("Saludo!");


if(1){
    console.log("Cumple");
}else{
    console.log("No Cumple");
}

var arr =['manuel', 'jordan', 'robert', 'junior','ivette'];
var arr2=new Array(arr.length);
let cont=0;
for (const item in arr) {
    //arr2.add(arr[item]);
    console.log(arr2[cont]);
    cont++;
}


//CRENDO OJECTOS Y AGREGANDO ATRIBUTOS

const vehiculo ={
modelo: 'Honda',
trascion: '2WD',
motor: 3.0,
color: "white"

};

//Asignando mas entidades al objecto
console.log(vehiculo.motor);
veiculo.add(Transmission = "Automatica");

console.log(vehiculo.Transmission);