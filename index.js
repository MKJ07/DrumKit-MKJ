
// method1..
// const but=document.querySelectorAll("button");
// but[0].addEventListener("click", clicked0);
// but[1].addEventListener("click", clicked1);
// but[2].addEventListener("click", clicked2);
// but[3].addEventListener("click", clicked3);
// but[4].addEventListener("click", clicked4);
// but[5].addEventListener("click", clicked5);
// but[6].addEventListener("click", clicked6);
// function clicked0(){
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
// }
// function clicked1(){
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
// }
// function clicked2(){
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
// }
// function clicked3(){
//     var audio = new Audio('sounds/tom-4.mp3');
//     audio.play();
// }
// function clicked4(){
//     var audio = new Audio('sounds/crash.mp3');
//     audio.play();
// }
// function clicked5(){
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
// }
// function clicked6(){
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
// }

// method2...  

document.addEventListener("keypress", function keyW(event) {
    makesound(event.key);
    
});
var noofbutton=document.querySelectorAll("button").length;
for(var i=0;i<noofbutton;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInner=this.innerHTML;
        makesound(buttonInner);
        
    });
}
function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            
        break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            
        break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            
        break;
        case "d":
            var tom3 = new Audio('sounds/tom-4.mp3');
            tom3.play();
            
        break;
        case "j":
            var tom3 = new Audio('sounds/crash.mp3');
            tom3.play();
            
        break;
        case "k":
            var tom3 = new Audio('sounds/kick-bass.mp3');
            tom3.play();
            
        break;
        case "l":
            var tom3 = new Audio('sounds/snare.mp3');
            tom3.play();
            
        break;
    
        default:
            console.log("invalid key");
            break;
    }
}
