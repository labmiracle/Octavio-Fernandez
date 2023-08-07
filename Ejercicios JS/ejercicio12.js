
    let num_random = Math.floor(Math.random() * 11)
    let num = prompt("Ingrese un numero: ");

    while (num != num_random) {
        num = prompt("Casi...Ingresa otro numero:")
    }

    let mensaje=("Lo lograste!")
    return mensaje

