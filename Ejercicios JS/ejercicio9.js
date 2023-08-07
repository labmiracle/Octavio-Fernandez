function sum_args(...args){

    let sum = 0

    for (let index = 0; index < args.length; index++) {
        const argumento = args[index];
        if (typeof argumento === 'number'){
            sum+=argumento
        }
    } 

    return sum
    
}

ver_sum = sum_args(1,2,"Charango",3,4,"Pastas",7,"Rueda",7,9)
console.log("La suma de todos los argumentos es:",ver_sum)