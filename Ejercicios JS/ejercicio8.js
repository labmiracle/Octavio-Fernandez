function sum_args(...args){

    sum = 0

    for (let index = 0; index < args.length; index++) {
        const argumento = args[index];
        sum += argumento
    }

    return sum
    
}

ver_sum = sum_args(1,2,3,4,7,7,8)
console.log("La suma de todos los argumentos es:",ver_sum)