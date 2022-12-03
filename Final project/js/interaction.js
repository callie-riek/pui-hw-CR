

var controller = new ScrollMagic.Controller(); //use scroller bar to trigger animation

// build a scene
var sceneOne = new ScrollMagic.Scene({
    triggerElement: '#bellsbeach' 

})
.setClassToggle('#bellsbeach', 'fade-in') //add CSS class
.addTo(controller);

//lorne controller
var sceneTwo = new ScrollMagic.Scene({
    triggerElement: '#lorne' 
})
.setClassToggle('#lorne', 'fade-in') //add CSS class
.addTo(controller);

//koala controller
var sceneThree = new ScrollMagic.Scene({
    triggerElement: '#koala' 
})
.setClassToggle('#koala', 'fade-in') //add CSS class
.addTo(controller);

//otway controller
var sceneFour = new ScrollMagic.Scene({
    triggerElement: '#otway' 
})
.setClassToggle('#otway', 'fade-in') //add CSS class
.addTo(controller);




