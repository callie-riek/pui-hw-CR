//create roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice, calculatedPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.packSize = packSize;
        this.basePrice = rollPrice;
        this.calculatedPrice = calculatedPrice;
    }

    // function calculatePrice(basePrice,packSize) {
    //     console.log)"base price and pack size"
    //     let calculatedPrice = basePrice + packSize
    //     console.log("calculated price", calculatedPrice)
    //     return calculatedPrice 
    // }
}

//cartTwo =  cart on cart page
const cartTwo = new Set();

//I need to calculate the total p
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
let PriceAdaption = {
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

function calculatePrice(basePrice, glazingPrice, packPrice) {
    return((basePrice + glazingPrice) * packPrice)
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
        clone.querySelector(".roll-price").innerText = "$" + cartObject.basePrice;

        document.querySelector(".whole-cart").appendChild(clone);
    }

    

}

createCart(cartTwo);




//     const btnExpand = this.element.querySelector('.rollName');

    



// function calculatePrice(basePrice, glazePrice, packSize) {
//     return((basePrice + glazePrice) * packSize).toFixed(2);
// }








// // grab glaze
// let glaze = document.getElementById("glazingOptions");


// function glazingChange(element) {
//     for (let i=0; i < GlazeOptionsArray.length; i++){
//         if (element.value === GlazeOptionsArray[i].type) {
//             glazingPrice = GlazeOptionsArray[i].price; 
//         }        
// }
// changePrice();
// }














