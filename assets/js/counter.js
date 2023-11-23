let count = 0;
let dynamicContainer = document.querySelector('#dynamic_container');    // The document element that contains the button elements
let elemCount = document.querySelector('.count>span');      //The document element that contain the count value.

document.querySelector('.btn.reset').style.visibility = "hidden";       //It starts with the hidden reset button

dynamicContainer.addEventListener('click', (event)=>{
    let elem = event.target;
    let action = elem.dataset.action.toLowerCase();

    if(!(action == 'up' ||action == 'down' || action == 'reset')) return;   //if the mouse point a different element from a button, nothing happen and return

    elemCount.style.color =  "rgb(204, 255, 0)";        //When event occurs count changes color...
    elemCount.closest('.count').style.boxShadow = "10px 5px 5px rgb(248, 238, 238), -10px -5px 5px rgb(248, 238, 238)";     //...and its container get a shadow
    
    if(action == 'up') {
        playSoundEffect("assets/audio/cartoon-jump.mp3");
        changeCount(++count);
    }

    else if(action == 'down') {
        playSoundEffect("assets/audio/strings_ofg6Kxg.mp3");
        changeCount(--count);
    }

    else {
        playSoundEffect("assets/audio/zapsplat_cartoon_climb_down_descend_fast_steps_ladder_cute_001_38466.mp3");
        count = 0;
        changeCount();
    }

    document.querySelector('.btn.reset').style.visibility = count == 0 ? "hidden" : "visible";      // The reset button become invisible if count is equal to 0
});

content.addEventListener('pointerdown', (event)=>{      //To avoid mouse selection in whole page when mousedown events occurs.
    event.preventDefault();
})

//Models the count element, the small delay is to allow for the color change
//that would otherwise be imperceptible.
function changeCount(count = 0) {
    setTimeout(()=>{
        elemCount.closest('.count').style.boxShadow = "";
        elemCount.style.color = "rgb(69, 69, 250)";
        elemCount.textContent = count;
    }, 100);

}


function playSoundEffect(soundEffect) {
    let sound = new Audio(soundEffect);
    sound.play();
}

