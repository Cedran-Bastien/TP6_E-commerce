import cart from "./cart.js";

// Display on product
function displayProduct(product) {
    // Set img
    let sp = document.createElement("span")
    sp.className = "mdi mdi-cart"

    const a = document.createElement("a")
    a.className = "product-add2cart"
    a.appendChild(sp)

    // Add event to add to cart
    a.addEventListener('click', (e) => {
        cart.addToCart(product)
        displayCart()
    })

    sp = document.createElement("SPAN")
    sp.className = "mdi mdi-camera"

    const imgDiv = document.createElement("div")
    imgDiv.className = "photo"
    imgDiv.appendChild(sp)
    imgDiv.appendChild(a)


    const divTop = document.createElement("div")
    divTop.className = "details-top"


    let strong = document.createElement("strong")
    strong.className = "bigger"
    strong.innerText = product.ref


    divTop.appendChild(strong)

    strong = document.createElement("strong")
    strong.className = "bigger"
    strong.innerText = product.price + " €"


    divTop.appendChild(strong)

    // Set description details
    const divDesc = document.createElement("div")
    divDesc.className = "details-description"
    divDesc.innerText = product.description

    // Set Product element
    const productDiv = document.createElement("div")
    productDiv.className = "product"
    productDiv.appendChild(imgDiv)
    productDiv.appendChild(divTop)
    productDiv.appendChild(divDesc)

    return productDiv
}

//Display the cart
function displayCart(){
    const sum = ( acc, elem ) => acc + elem ;

    const cartHTML = document.getElementById("cart-content")
    cartHTML.innerHTML = cart.cart.map(item => {
        const ref = item.product.ref
        const desc = item.product.description
        const price =item.product.price
        return  "<tr>\n" +
            `\t<td data-type=\"ref\">${ref}</td>\n` +
            `\t<td data-type=\"qte\">${desc}</td>\n` +
            `\t<td data-type=\"amount\">${price}€</td>\n` +
            "</tr>"
    }).reduce(sum, "")


    const cartTotal = document.getElementById("cart-footer")
    cartTotal.innerHTML = `<strong class="bigger">Total :&nbsp;</strong>` +
                            `<span  class="bigger" id="cart-total">${cart.genericCalc(( acc, elem ) => acc + (elem.product.price * elem.quantite))}€</span>`
}

export default {
    buildProductsList: listProduct => {
        // Cleaning product
        const listProd = document.getElementById("product-list")
        listProd.innerHTML = ""

        // Set products in DOM
        listProduct.forEach(product => {
            const div = displayProduct(product)
            listProd.appendChild(div)
        })

        // Display cart
        displayCart()
    }
}