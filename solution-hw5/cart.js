//create roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, calculatedPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.packSize = packSize;
        this.basePrice = rollPrice;
        this.calculatedPrice = calculatedPrice;
    }
}

//cartTwo =  cart on cart page
const cartTwo = new Set();

//create new roll objects
let newBun1 = new Roll ("Original", "Sugar Milk", 1, 2.49);
let newBun2 = new Roll ("Walnut", "Vanilla Milk", 12, 3.49);
let newBun3 = new Roll ("Raisin", "Sugar Milk", 3, 2.99);
let newBun4 = new Roll ("Apple", "Keep Original", 3, 3.49);

//add roll objects to cart set
cartTwo.add(newBun1)
cartTwo.add(newBun2)
cartTwo.add(newBun3)
cartTwo.add(newBun4)

//arrays with values needed in price calculation
//price adapt
let priceAdaption = {
    1:1,
    3:3,
    6:5,
    12:10
}

//glaze
let glazingPrice = {
    "Keep Original":0,
    "Sugar Milk":0,
    "Vanilla Milk":0.5,
    "Double Chcolate":1.5
}

//calculate price for individual items
function calculatePrice(basePrice, glazing, packSize) {
    return((basePrice + glazing) * packSize);
}

//calculate cart total
function totalPrice() {
    let cartTotal = 0;
    for (let cartObject of cartTwo) {
        finalPrice = calculatePrice(cartObject.basePrice, glazingPrice[cartObject.glazing], priceAdaption[cartObject.packSize])
        cartTotal = finalPrice + cartTotal;
    }
console.log("total price", cartTotal)
document.querySelector(".finalCartPrice").innerText = "$" + cartTotal.toFixed(2);
}



function createCart(data) {
    for (let cartObject of cartTwo) {
        let cartElement = document.getElementById("ItemOne")
        let docFragment = cartElement.content.cloneNode(true);

        let clone = docFragment.querySelector('.cart-inner-row')
        
        clone.querySelector(".smaller-image").src = "assets/products/" + cartObject.type + "-cinnamon-roll.jpg"
        clone.querySelector(".rollName").innerText = cartObject + "Cinnamon Roll";
        clone.querySelector(".glazeType").innerText = "Glazing:" + cartObject.glazing;
        clone.querySelector(".packSize").innerText = "Pack Size:" + cartObject.packize;

        finalPrice = calculatePrice(cartObject.basePrice, glazingPrice[cartObject.glazing], priceAdaption[cartObject.packSize]); //find value in each dictionary

        clone.querySelector(".roll-price").innerText = "$" + finalPrice.toFixed(2);

        const btnDelete = clone.querySelector('.caption');
        btnDelete.addEventListener("click", () => {
            clone.remove(); //remove HTML element
            cartTwo.delete(cartObject); //remove cart object from cart set
            totalPrice();

            
        })
        totalPrice();

        

        document.querySelector(".whole-cart").appendChild(clone);

        
        
    }

     

}

createCart(cartTwo);


















