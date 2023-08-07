const carrito = {
    products: [{
        name: 'mouse',
        unit: 2,
        price_unit: 5
    },{
        name: 'keyboard',
        unit: 1,
        price_unit: 15
    },{
        name: 'memory_ram',
        unit: 2,
        price_unit: 35
    }],

    get TotalPrice(){
        
        final_price = [];
        total_price_prod = 0

        for (let index = 0; index < this.products.length; index++) {
            const element = this.products[index];

            total_price_prod = element.unit * element.price_unit
            final_price.push(total_price_prod)
        }

        return final_price
        
    }
}

mostrar_precios = carrito.TotalPrice

console.log(mostrar_precios)