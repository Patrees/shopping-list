import {
    initializeShoppingList


} from "./database.js";

window.addEventListener("load", function () {
    const button = document.querySelector("button[type='submit']");
    const form = document.querySelector("form");
    const buyingList = document.getElementById("to-buy");
    const cartList = document.querySelector("in-cart");
    const purchaseList = document.getElementById("purchased")


    /**
     * Vytvor nový odstavec v buying liste
     * @param {string} item - nová položka v buying liste
     */
function createBuyingListElement(item) {
    const newBuyingItem = document.createElement("p");
    newBuyingItem.textContent = item;

    buyingList.appendChild(newBuyingItem);
}

    /**
     * Odošle formulaire a vytvorí nový prvok v sekcii "Kúpiť"
     * @param {Event} event - udalosť klávesnice
     */
function submitForm(event) {
    event.preventDefault();
    let itemNameValue = document.getElementById("item-name").value.trim();
    console.log(itemNameValue);

    createBuyingListElement(itemNameValue);
    form.reset();
}

button.addEventListener("click", submitForm);

initializeShoppingList()


});