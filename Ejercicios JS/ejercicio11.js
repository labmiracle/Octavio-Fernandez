function onlyUniques(...args){

    let new_set_elements = new Set(args);
    let unique_elements =[]

    for (const element of new_set_elements) {
        unique_elements.push(element)   
    }
    return unique_elements
   
}

let ver_unicos = onlyUniques(1,2,2,2,"Hola","Chau","Hola")

console.log(ver_unicos)