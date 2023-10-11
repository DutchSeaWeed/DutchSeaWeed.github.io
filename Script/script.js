let console = document.getElementById("console2")
let cartridge3 = document.getElementById("cartridge3Img")
let cartridge4 = document.getElementById("cartridge3Img")
let cartridge5 = document.getElementById("cartridge5Img")

let testNumber = 10;

let LastPickup = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(NewIndexToLoad) {
    LastPickup = NewIndexToLoad;
}

function drop() {
    window.location.href = 'index' + LastPickup + '.html';
}

function checkIfOnMobile()
{
    if(navigator.maxTouchPoints <= 10)
    {
        testNumber = 15;
        console.log(testNumber);
    }
}