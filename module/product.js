
class Product {
    constructor(ref, desc, price) {
        this.ref = ref
        this.description = desc
        this.price = price
    }
}

const productList = []

productList.push(new Product("#1", "lorem ", 12))
productList.push(new Product("#2", "lorem ipusum", 788))
productList.push(new Product("#3", "bonjour", 1255))


function search(string) {
    const res = []
    productList
}
export default {
    list: productList,
    search: (string) => {
        const res = []
        productList.forEach(item => {
            console.log((item.ref).indexOf(string))
            if (item.ref.indexOf(string) !== -1 || item.description.indexOf(string) !== -1 ){
                res.push(item)
            }
        })
        return res
    }
}