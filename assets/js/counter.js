let count = 0;
let dynamicContainer = document.querySelector('#dynamic_container');    // The document element that contains the button elements
let elemCount = document.querySelector('.count>span');      //The document element that contain the count value.

document.querySelector('.btn.reset').style.visibility = "hidden";       //It starts with the hidden reset button

dynamicContainer.addEventListener('pointerdown', (event)=>{
    event.preventDefault();
    let elem = event.target;
    let action = elem.dataset.action.toLowerCase();

    if(!(action == 'up' ||action == 'down' || action == 'reset')) return;   //if the mouse point a different element from a button, nothing happen and return

    elemCount.style.color =  "rgb(204, 255, 0)";        //When event occurs count changes color...
    elemCount.closest('.count').style.boxShadow = "10px 5px 5px rgb(248, 238, 238), -10px -5px 5px rgb(248, 238, 238)";     //...and its container get a shadow
    
    if(action == 'up') {
        changeCount(++count);
    }

    if(action == 'down') {
        changeCount(--count);
    }

    if(action == 'reset') {
        count = 0;
        changeCount();
    }

    document.querySelector('.btn.reset').style.visibility = count == 0 ? "hidden" : "visible";      // The reset button become invisible if count is equal to 0
});

//Models the count element, the small delay is to allow for the color change
//that would otherwise be imperceptible.
function changeCount(count = 0) {
    setTimeout(()=>{
        elemCount.closest('.count').style.boxShadow = "";
        elemCount.style.color = "rgb(69, 69, 250)";
        elemCount.textContent = count;
    }, 100);

}

