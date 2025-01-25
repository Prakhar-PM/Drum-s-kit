var numberofDrumbutton = document.querySelectorAll(".drum").length;
for(var i = 0 ; i < numberofDrumbutton ; i++){
document.querySelectorAll("button")[i].addEventListener("click",handleclick);// if we add handleclick() then this code will run like that alert will be shown as soon as we visit the rather than coming after a click
 
document.addEventListener("keypress", function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
})


function handleclick() {
    //alert("i have been clicked");
    this.style.color = "white";

    var buttoninnerHTML = this.innerHTML;
    
    makeSound(buttoninnerHTML);
    
    buttonAnimation(buttoninnerHTML);
    
}
}

function makeSound(key){
    switch(key){
        case "w":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;   
        
        case "s":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;   

        case "d":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;   

        case "j":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;   

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;   

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;   
        
        default:console.log(buttoninnerHTML)
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)
}