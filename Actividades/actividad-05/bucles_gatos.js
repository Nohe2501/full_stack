//intercambia la cara del gato cada 3 números.

alert("Por favor verifica la consola en (inspeccionar) para ver lo ejercicios");

console.log('Ejercicio 1 \n \n');

let cantidadDeGatos = 10;
let cant = 0;

for(let i=1; i<=cantidadDeGatos; i++){

    if(cant == 0){

        console.log('Gato #'+ i + ': ' + "😺");
        cant++;
    }
    else if(cant == 1){

        console.log('Gato #'+ i + ': ' + "😸");
        cant++;

    }
    else if(cant == 2){

        console.log('Gato #'+ i + ': ' + "😹");
        cant = 0;

    }
};

//Suma la cantidad de gatos y la cantidad de pasos.

console.log('\n Ejercicio 2 \n \n');

let cantidadDeGatos2 = 5;
let cantidadDePasos = 2;

for (let i=1; i<=cantidadDeGatos; i++){

    resultado = 'Gato #'+ i + ': 🐈';

    for(let x=1; x<=cantidadDePasos; x++){

    resultado += '🐾';
}

console.log(resultado);
}

//Hace lo mismo que el ejercicio 2 pero alternando imprimiendo dos gatos. 

console.log('\n Ejercicio 3 \n \n');
let cantidadDeGatos3 = 10;
let cantidadDePasos2 = 2;


for (let i=1; i<=cantidadDeGatos; i++){

    resultado = 'Gato #'+ i + ': 🐈';

    if(i % 2 == 0){

        resultado+='🐈';
    }

    for(let x=1; x<=cantidadDePasos; x++){

    resultado += '🐾';
}

console.log(resultado);
}

