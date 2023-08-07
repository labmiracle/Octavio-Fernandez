// En el juego de golf, cada hoyo tiene un par, cuyo significado es el número promedio de
// golpes que se espera que haga un golfista para meter la bola en un hoyo y así completar
// el juego. Dependiendo de qué tan por encima o por debajo del par estén tus golpes, existe
// un apodo diferente.

// Escribe una función que reciba los argumentos par y strokes y devuelve la cadena correcta de
// acuerdo a la siguiente tabla que enumera los golpes en orden de prioridad; de arriba (más alto)
// a abajo (más bajo):

// Cada hoyo cuenta con un par, es decir: 
// 1            "Hole-in-one!"
// <= par - 2   "Eagle"
// par - 1      "Birdie"
// par          "Par"
// par + 1      "Bogey"
// par + 2      "Double Bogey"
// >= par + 3   "Go Home!"



const names = [
    "Hole-in-one!",
    "Eagle",
    "Birdie",
    "Par",
    "Bogey",
    "Bouble Bogey",
    "Go Home!",
];

let strokes = "";

let par = "";

function golfScore(par, strokes){
    switch (strokes) {
        case 1:
            console.log("Hole-in-one!")
            break;
        case strokes <= par - 2:
            console.log("Eagle")
            break;
        case strokes = par - 1:
            console.log("Birdie")
            break;
        case strokes = par:
            console.log("Par")
            break;
        case strokes = par + 1:
            console.log("Bogey")
            break;
        case strokes = par + 2:
            console.log("Double Bogey")
            break;
        case strokes >= par + 3:
            console.log("Go Home!")
            break;
        default:
            break;
    }

}

golfScore(1,1);