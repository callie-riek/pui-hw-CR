let cartArray;


if (localStorage.getItem('storedCart') != null) {
    retrieveFromLocalStorage();
}


function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedCart');
    cartArray = JSON.parse(cartArrayString);
    // console.log("running retrieve cart function now")
    console.log("here is the cart", cartArray)
  }


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
    "Keep Original":0,
    "Sugar Milk":0,
    "Vanilla Milk":0.5,
    "Double Chcolate":1.5
};

//calculate price for individual items
function calculatePrice(basePrice, glazing, packSize) {
    console.log("calculating price for individual item")
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
    console.log("running create cart function")
    for (let cartObject of cartArray) {
        let cartElement = document.getElementById("ItemOne");
        let docFragment = cartElement.content.cloneNode(true);
        let clone = docFragment.querySelector('.cart-inner-row');
        // console.log("running create cart function")

        //populate HTML with text/ images
        clone.querySelector(".smaller-image").src = "assets/products/" + cartObject.type + "-cinnamon-roll.jpg";
        clone.querySelector(".smaller-image").alt = cartObject.type + " " + "Cinnamon Roll";
        clone.querySelector(".rollName").innerText = cartObject.type + " " + "Cinnamon Roll";
        clone.querySelector(".glazeType").innerText = "Glazing:" + cartObject.glazing;
        clone.querySelector(".packSize").innerText = "Pack Size:" + cartObject.packSize;

        //calculate final price of each item
        finalPrice = calculatePrice(cartObject.basePrice, glazingPrice[cartObject.glazing], priceAdaption[cartObject.packSize]); //find value in each dictionary
        console.log("final price", finalPrice)

        //add remove button
        clone.querySelector(".roll-price").innerText = "$" + finalPrice.toFixed(2);
        const btnDelete = clone.querySelector('.caption');
        btnDelete.addEventListener("click", () => { //add inline style
            clone.remove(); //remove HTML element
            console.log("cart object is", cartObject)

        
            // cartArray.slice(cartObject); //remove cart object from cart array
            cartArray.splice(i, 1);



            retrieveFromLocalStorage()
            console.log("retrieve from local storage")
            console.log("new cart after removal", cartArray)
            
            totalPrice(); //call total price function here so it will run each time something is deleted   
        });

        totalPrice(); //call total price for each object
        document.querySelector(".whole-cart").appendChild(clone); //append everything to whole cart  
    }
}

// createCart(cartArray); //call create function


















