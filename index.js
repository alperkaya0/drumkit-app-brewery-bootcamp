let numOfDrums = document.querySelectorAll("button.drum").length;

function buttonAnimation(key) {
    let btn = document.querySelector("."+key);
    btn.classList.add("pressed");
    setTimeout(() => {
        btn.classList.remove("pressed");
    }, 100);
}

function drumFunc() {
    this.style.color = "white";
    let key = this.textContent;
    let obj = "default sound";
    switch (key) {
        case "w":
            obj = new Audio("sounds/crash.mp3");
            obj.play();
            break;
        case "a":
            obj = new Audio("sounds/kick-bass.mp3");
            obj.play();
            break;
        case "s":
            obj = new Audio("sounds/snare.mp3");
            obj.play();
            break;
        case "d":
            obj = new Audio("sounds/tom-1.mp3");
            obj.play();
            break;
        case "j":
            obj = new Audio("sounds/tom-2.mp3");
            obj.play();
            break;
        case "k":
            obj = new Audio("sounds/tom-3.mp3");
            obj.play();
            break;
        case "l":
            obj = new Audio("sounds/tom-4.mp3");
            obj.play();
            break;
        default:
            console.log("I didn't expect this...");
            break;
    }
    buttonAnimation(key);
}

function drumFuncKey(e) {
    let key = e.code;
    let obj = "default sound";
    switch (key) {
        case "KeyW":
            obj = new Audio("sounds/crash.mp3");
            obj.play();
            break;
        case "KeyA":
            obj = new Audio("sounds/kick-bass.mp3");
            obj.play();
            break;
        case "KeyS":
            obj = new Audio("sounds/snare.mp3");
            obj.play();
            break;
        case "KeyD":
            obj = new Audio("sounds/tom-1.mp3");
            obj.play();
            break;
        case "KeyJ":
            obj = new Audio("sounds/tom-2.mp3");
            obj.play();
            break;
        case "KeyK":
            obj = new Audio("sounds/tom-3.mp3");
            obj.play();
            break;
        case "KeyL":
            obj = new Audio("sounds/tom-4.mp3");
            obj.play();
            break;
        default:
            console.log("I didn't expect this...");
            break;
    }
    buttonAnimation(key.slice(3).toLowerCase());
}

for (let i = 0; i < numOfDrums; ++i) {
    document.querySelectorAll("button.drum")[i].addEventListener("click", drumFunc);   
}
document.addEventListener("keydown",drumFuncKey)