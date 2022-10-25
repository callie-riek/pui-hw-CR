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
let newBun1 = new Roll ("original", "Sugar Milk", 1, 2.49);
let newBun2 = new Roll ("walnut", "Vanilla Milk", 12, 3.49);
let newBun3 = new Roll ("raisin", "Sugar Milk", 3, 2.99);
let newBun4 = new Roll ("apple", "Keep Original", 3, 3.49);

//add roll objects to cart set
cartTwo.add(newBun1);
cartTwo.add(newBun2);
cartTwo.add(newBun3);
cartTwo.add(newBun4);

//arrays with values needed in price calculation
//price adapt
let priceAdaption = {
    1:1,
    3:3,
    6:5,
    12:10
};

//glaze
let glazingPrice = {
    "Keep Original":0,
    "Sugar Milk":0,
    "Vanilla Milk":0.5,
    "Double Chcolate":1.5
};

//calculate price for individual items
function calculatePrice(basePrice, glazing, packSize) {
    return((basePrice + glazing) * packSize);
}

//calculate cart total
function totalPrice() {
    let cartTotal = 0;
    for (let cartObject of cartTwo) {
        finalPrice = calculatePrice(cartObject.basePrice, glazingPrice[cartObject.glazing], priceAdaption[cartObject.packSize]);
        cartTotal = finalPrice + cartTotal;
    }
//update HTML with cart total
document.querySelector(".finalCartPrice").innerText = "$" + cartTotal.toFixed(2);
}


//clone objects into HTML template
function createCart(data) {
    for (let cartObject of cartTwo) {
        let cartElement = document.getElementById("ItemOne");
        let docFragment = cartElement.content.cloneNode(true);
        let clone = docFragment.querySelector('.cart-inner-row');

        //populate HTML with text/ images
        clone.querySelector(".smaller-image").src = "assets/products/" + cartObject.type + "-cinnamon-roll.jpg";
        clone.querySelector(".smaller-image").alt = cartObject.type + " " + "Cinnamon Roll";
        clone.querySelector(".rollName").innerText = cartObject.type + " " + "Cinnamon Roll";
        clone.querySelector(".glazeType").innerText = "Glazing:" + cartObject.glazing;
        clone.querySelector(".packSize").innerText = "Pack Size:" + cartObject.packSize;

        //calculate final price of each item
        finalPrice = calculatePrice(cartObject.basePrice, glazingPrice[cartObject.glazing], priceAdaption[cartObject.packSize]); //find value in each dictionary

        //add remove button
        clone.querySelector(".roll-price").innerText = "$" + finalPrice.toFixed(2);
        const btnDelete = clone.querySelector('.caption');
        btnDelete.addEventListener("click", () => { //add inline style
            clone.remove(); //remove HTML element
            cartTwo.delete(cartObject); //remove cart object from cart set
            totalPrice(); //call total price function here so it will run each time something is deleted   
        });

        totalPrice(); //call total price for each object
        document.querySelector(".whole-cart").appendChild(clone); //append everything to whole cart  
    }
}

createCart(cartTwo); //call create function




















