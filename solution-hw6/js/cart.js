//bring cartArray into this JS page
let cartArray;

//if there is anyhting in the cart, retrieve cart from local storage
if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
}

function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    cartArray = JSON.parse(cartArrayString);
    return cartArray;
  }

  console.log("cart array", cartArray);

//arrays with values needed in price calculation
// price adapt
let priceAdaption = {
    "1":1,
    "3":3,
    "6":5,
    "12":10
};

//glaze
let glazingPrice = {
    "Keep original":0,
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
    for (let cartObject of cartArray) {
        finalPrice = calculatePrice(cartObject.basePrice, glazingPrice[cartObject.glazing], priceAdaption[cartObject.packSize]);
        cartTotal = finalPrice + cartTotal;
    }
//update HTML with cart total
document.querySelector(".finalCartPrice").innerText = "$" + cartTotal.toFixed(2);
}




//clone objects into HTML template
function createCart(data) {
    for (let cartObject of cartArray) {
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
        btnDelete.addEventListener("click", () => {
            removeFromCart(clone, cartObject);
        })

        totalPrice(); //call total price for each object
        document.querySelector(".whole-cart").appendChild(clone); //append everything to whole cart  
    }
}


//remove from cart when event is triggered
function removeFromCart(clone, cartObject) {
    let updatedCart = retrieveFromLocalStorage();

    //loop through the new cart, if the clone matches anything in the cart, remove it from the array
    for (let i=0; i < updatedCart.length; i++){
        if (JSON.stringify(cartObject) === JSON.stringify(updatedCart[i])) {
            updatedCart.splice(i,1);
    }
    let updatedCartJson = JSON.stringify(updatedCart)
    localStorage.setItem('storedCart', updatedCartJson)

    clone.remove(); //remove HTML element
}            
    totalPrice(); //call total price function here so it will run each time something is deleted   
}



















