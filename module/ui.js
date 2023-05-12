import cart from "./cart.js";

function displayProduct(product) {
    // Set img
    let sp = document.createElement("span")
    sp.className = "mdi mdi-cart"

    const a = document.createElement("a")
    a.className = "product-add2cart"
    a.appendChild(sp)

    // Add event to add to cart
    a.addEventListener('click', (e) => {
        const ref = e.target.parentNode.parentNode.lastElementChildChild.firstElementChildChild.firstElementChildChild.innerText
        const desc = e.target.parentNode.parentNode.lastElementChildChild.lastElementChild.innerText

        cart.addToCart(e.target.parentNode.parentNode)
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
    }
}