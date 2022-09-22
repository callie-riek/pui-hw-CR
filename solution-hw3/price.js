console.log("howdy")

var basePrice = 2.49;
var glazingPrice = 0;
var packAdapt = 1; //setting packAdapt to 1 because if I set it to 0 it will calculate
//new price as 0 when pack option is not selected

//calculate new price
function changePrice() {
    var newPrice = ((basePrice + glazingPrice) * packAdapt).toFixed(2)
    console.log("new price", newPrice)
    document.getElementById("price").innerHTML = "$" + newPrice
    console.log("price in changed price function",newPrice)
}


///////////////GLAZE OPTIONS////////////////////

function Glaze(type, price) {
    this.type = type;
    this.price = price;
}

const original = new Glaze('Keep original', 0);
const SugarMilk = new Glaze('Sugar Milk', 0);
const VanillaMilk = new Glaze('Vanilla Milk', 0.5);
const DoubleChocolate = new Glaze('Double Chocolate', 1.5);

const GlazeOptionsArray = [ original, SugarMilk, VanillaMilk, DoubleChocolate];
console.log("glaze array",GlazeOptionsArray);

let glaze = document.getElementById("glazingOptions");

for (let i=0; i < GlazeOptionsArray.length; i++){
    let glazeOption = document.createElement("option");
    glazeOption.innerHTML = GlazeOptionsArray[i].type;
    glaze.appendChild(glazeOption);
}

//////////////////PACK SIZE ///////////////////////

function PackSize(size, adapt) {
    this.size = size;
    this.adapt = adapt;
}

const One = new PackSize("1", 1);
const Three = new PackSize("3", 3);
const Six = new PackSize("6", 5);
const Twelve = new PackSize("12", 10);

const PackOptionsArray = [ One, Three, Six, Twelve];
console.log("pack array",PackOptionsArray);

let packSizeOptions = document.getElementById("packSizeOptions");

//this function loops through the array to create new objects and add them
// to the inner HTML
for (let i=0; i < PackOptionsArray.length; i++){
    let packOption = document.createElement("option");
    packOption.innerHTML = PackOptionsArray[i].size;
    packSizeOptions.appendChild(packOption);
}

//if the value of the element the dropdown selected matches something in the glaze
//glaze options Array,the variable glazingPrice should be reset to the price paired with that type in the array 
function glazingChange(element) {
    for (let i=0; i < GlazeOptionsArray.length; i++){
        if (element.value === GlazeOptionsArray[i].type) {
            glazingPrice = GlazeOptionsArray[i].price; 
        } 
        console.log("glaze price", glazingPrice)        
}
changePrice()
}

//TO DO write a function that fetches the pack size and corresponds that to a multipler
function packChange(element) {
    for (let i=0; i < PackOptionsArray.length; i++){
        if (element.value === PackOptionsArray[i].size) {
            packAdapt = PackOptionsArray[i].adapt; 
        } 
        console.log("pack adapt", packAdapt)  
}
changePrice()
}

//TO ASK: is it ok to have change price function within glazeChange/ packChange?



