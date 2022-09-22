var basePrice = 2.49;
var glazingPrice = 0;
var packAdapt = 1; //setting packAdapt to 1 because if I set it to 0 it will calculate
//new price as 0 when pack option is not selected

//calculate new price
function changePrice() {
    var newPrice = ((basePrice + glazingPrice) * packAdapt).toFixed(2);
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
    {size: "5", adapt: 5},
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
            packAdapt = PackOptionsArray[i].adapt; 
        } 
}
changePrice();
}


