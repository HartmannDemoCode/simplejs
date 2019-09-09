var root = document.getElementById("root");
var innerOnes = document.getElementsByClassName("inner1"); //returns a HTMLCollection of all elements with class=inner1.

root.addEventListener("click", function(event){
    console.log("klikkede direkte på (target) ", event.target);
    console.log("eventhandler blev kaldt på (this)", this);
    console.log("eventhandler blev kaldt på (currentTarget == this)", event.currentTarget);
});

//loop all the blue boxes and attach an eventhandler to catch events bubling up from the red boxes.
for(element of innerOnes){
    element.addEventListener("click", function(){
        console.log("Dette event boplede up og ramte mig: ", this);
    });
}
   
