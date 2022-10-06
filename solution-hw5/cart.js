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

let newBun1 = new Roll ("Original", "Sugar Milk", 1, 2.49);
let newBun2 = new Roll ("Walnut", "Vanilla Milk", 12, 3.49);
let newBun3 = new Roll ("Raisin", "Sugar Milk", 3, 2.99);
let newBun4 = new Roll ("Apple", "Keep Original", 3, 3.49);

cartTwo.add(newBun1)
cartTwo.add(newBun2)
cartTwo.add(newBun3)
cartTwo.add(newBun4)

console.log("cart 2, try 2", cartTwo)

//key:value

//arrays with values needed in price calculation
let priceAdaption = {
    1:1,
    3:3,
    6:5,
    12:10
}

let glazingPrice = {
    "Keep Original":0,
    "Sugar Milk":0,
    "Vanilla Milk":0.5,
    "Double Chcolate":1.5
}

function calculatePrice(basePrice, glazing, packSize) {
    return((basePrice + glazing) * packSize);
}

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



        document.querySelector(".whole-cart").appendChild(clone);
        totalPrice();
    }

}

createCart(cartTwo);


















