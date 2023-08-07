
const velocidadCrecimiento = "";

const velocidadDecrecimiento = "";

const alturaDeseada = "";

let dia = 0;


function calcularDiasCrecimiento(velocidadCrecimiento,velocidadDecrecimiento,alturaDeseada) {

 if(alturaDeseada > plantaInicial){
    for (let i = 0; i < alturaDeseada; i++) {
       let crecimientoDia = velocidadCrecimiento * 13
       let decrecimientoNoche = velocidadDecrecimiento * 11

      let plantaInicial = crecimientoDia - decrecimientoNoche

        let dia = dia +1

       if(plantaInicial = alturaDeseada){
        return console.log("se tardo", dia ,"dias en crecer")
       } break
    }
 }

}

calcularDiasCrecimiento(2,1,6);
