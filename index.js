// alert("He,he,he");
var noofbutton=document.querySelectorAll(".drum").length;
for( var i=0;i<noofbutton; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // console.log(this);
        // console.log(this.innnerHTML+"***");
        // this.style.color="white";
        // console.log(this.textContent+"&&&");
        var buttonInnerHTML=this.textContent;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    } );
}


// var audio= new Audio('sounds/tom-1.mp3').play();
document.addEventListener("keypress", myfunction );
function myfunction(event){
    // console.log(event.key);
    var keypressed_character=event.key;
    playSound(keypressed_character);
    buttonAnimation(keypressed_character);
}



function playSound( keypressed_character ){
    switch(keypressed_character){
        case "w":
            var tom1= new Audio('sounds/tom-1.mp3').play();
            break;
            
            case "a":
            var tom2= new Audio('sounds/tom-2.mp3').play();
            break;
            
            case "s":
                var audio= new Audio('sounds/tom-3.mp3').play();
            break;

            case "d":
                var audio= new Audio('sounds/tom-4.mp3').play();
            break;

            case "j":
                var audio= new Audio('sounds/snare.mp3').play();
            break;

            case "k":
                var audio= new Audio('sounds/crash.mp3').play();
            break;

            case "l":
                var audio= new Audio('sounds/kick-bass.mp3').play();
            break;

            default:
                console.log(keypressed_character);
    }
}

function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout( function(){
        activeButton.classList.remove("pressed");
    },100 );
}





