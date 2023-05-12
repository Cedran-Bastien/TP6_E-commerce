

class InCart{
    constructor(product, qte) {
        this.product = product
        this.quantite = qte
    }
}

const cart = []
export default {
    addToCart: (prod) => {
        let exist = false
        cart.forEach(item => {
            if (item.product === prod){
                item.quantite++
                exist = true
            }
        })

        if (!exist){
            const item = new InCart(prod, 1)
            cart.push(item)
        }
    }
}