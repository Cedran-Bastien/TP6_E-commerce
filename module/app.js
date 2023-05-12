// Import
import ui from "./ui.js"
import product from "./product.js";

export default {
    initApp: () => {
        ui.buildProductsList(product.list)

        // Set search event
        const searchLine = document.getElementById("product-search")
        searchLine.innerText = ""
        searchLine.addEventListener('keyup', (event) => {
            const resTab =  product.search(event.target.value)
            ui.buildProductsList(resTab)
        })
    }
}