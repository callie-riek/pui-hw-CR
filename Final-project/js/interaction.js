

var controller = new ScrollMagic.Controller(); //use scroller bar to trigger animation



// bells beach controller
var sceneOne = new ScrollMagic.Scene({
    triggerElement: '#bellsbeach img',
    duration: '100%',
    triggerHook: 0.90,
})
.setClassToggle('#bellsbeach', 'fade-in') //add CSS class
.addTo(controller);

//lorne controller
var sceneTwo = new ScrollMagic.Scene({
    triggerElement: '#lorne img',
    duration: '100%',
    triggerHook: 0.90,
})
.setClassToggle('#lorne', 'fade-in') //add CSS class
.addTo(controller);

//koala controller
var sceneThree = new ScrollMagic.Scene({
    triggerElement: '#koala img',
    duration: '100%',
    triggerHook: 0.90, 
})
.setClassToggle('#koala', 'fade-in') //add CSS class
.addTo(controller);

//otway controller
var sceneFour = new ScrollMagic.Scene({
    triggerElement: '#otway img',
    duration: '100%',
    triggerHook: 0.90, 
})
.setClassToggle('#otway', 'fade-in') //add CSS class
.addTo(controller);

//apostles controller
var sceneFive = new ScrollMagic.Scene({
    triggerElement: '#apostles img',
    duration: '100%',
    triggerHook: 0.90, 
})
.setClassToggle('#apostles', 'fade-in') //add CSS class
.addTo(controller);

//loch controller
var sceneSix = new ScrollMagic.Scene({
    triggerElement: '#loch img',
    duration: '100%',
    triggerHook: 0.90, 
})
.setClassToggle('#loch', 'fade-in') //add CSS class
.addTo(controller);




///////////////////////

// document.getElementById('items').style.display = "none";

const toggleButton = document.getElementById('toggle-button');

toggleButton.addEventListener("click", toggle);

function toggle() {
    // document.getElementById('items').style.display = "flex";

    
    var toggle = document.getElementById('items');

    if (toggle.style.display == "none") {
        toggle.style.display = "flex";
    }

    else {

    } toggle.style.display = "none";

}
//     
// })

  
