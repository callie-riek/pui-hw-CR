var basePrice = 2.49;
var glazingPrice = 0;
var packSize = 1; //setting packSize to 1 because if I set it to 0 it will calculate
//new price as 0 when pack option is not selected

//calculate new price
function changePrice() {
    var newPrice = ((basePrice + glazingPrice) * packSize).toFixed(2);
    document.getElementById("price").innerHTML = "$" + newPrice;
}

///////////////GLAZE OPTIONS////////////////////
//array contains all the elements needed in the dropdown
const GlazeOptionsArray = [
    {type: "Keep original", price: 0},
    {type:"Sugar Milk", price: 0},
    {type: "Vanilla Milk", price: 0.5},
    {type: "Double Chocolate", price: 1.5}
];

let glaze = document.getElementById("glazingOptions");

for (let i=0; i < GlazeOptionsArray.length; i++){
    let glazeOption = document.createElement("option");
    glazeOption.innerHTML = GlazeOptionsArray[i].type;
    glaze.appendChild(glazeOption);
}

//////////////////PACK SIZE ///////////////////////

const PackOptionsArray = [
    {size: "1", adapt: 1},
    {size:"3", adapt: 3},
    {size: "6", adapt: 5},
    {size: "12", adapt: 10}
];

let packSizeOptions = document.getElementById("packSizeOptions");

//this function loops through the array to create new objects and add them to the inner HTML
for (let i=0; i < PackOptionsArray.length; i++){
    let packOption = document.createElement("option");
    packOption.innerHTML = PackOptionsArray[i].size;
    packSizeOptions.appendChild(packOption);
}

//if the value of the element the dropdown selected matches something in the glaze options Array,the variable glazingPrice should be reset to the price paired with that type in the array 
function glazingChange(element) {
    for (let i=0; i < GlazeOptionsArray.length; i++){
        if (element.value === GlazeOptionsArray[i].type) {
            glazingPrice = GlazeOptionsArray[i].price; 
        }        
}
changePrice();
}

//Grabs the pack size and corresponds that to a multipler
function packChange(element) {
    for (let i=0; i < PackOptionsArray.length; i++){
        if (element.value === PackOptionsArray[i].size) {
            packSize = PackOptionsArray[i].adapt; 
        } 
}
changePrice();
}


// START HW 4 
let cart = [];

//grab URL parameter and store roll type as a variable
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll'); //the variable roll type will be the value "roll" from the dictionary


// assign variables
const rollBasePrice = rolls[rollType].basePrice;
//grab the path to assets folder of reach image
const rollImagePath = "assets/products/" + rolls[rollType].imageFile; 
//add "cinnamon roll" to roll type
const rollName = rollType + " " + "Cinnamon Roll"; //correct name

//reset base price variable to whatever the roll price is
basePrice = rollBasePrice; 

document.querySelector(".menu-intro").innerText = rollName; //reassign header in html to roll name
document.querySelector("#price").innerText = "$" + rollBasePrice; //update price
document.querySelector(".product-detail").src = rollImagePath;


class Roll {
    constructor(rollType, glaze, packSize, basePrice) {
        this.type = rollType;
        this.glazing = glaze;
        this.packSize = packSize;
        this.basePrice = basePrice;
    }
}

function addToCart() {
    let newBun = new Roll(rollType, glaze.value, packSizeOptions.value, basePrice);
    cart.push(newBun);
    console.log("cart", cart);
}
