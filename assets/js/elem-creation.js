/*Creation of the element that displays the count value... */
let elem  = document.createElement('div');
elem.className = 'count';
let spanElem = document.createElement('span');
spanElem.textContent = '0';
elem.append(spanElem);
document.querySelector('.count-container').append(elem);

/*Creation button elements */
let buttonContainer = document.querySelector('.btn-container');
let btnUp = document.createElement('button');
buttonContainer.append(btnUp)
btnUp.className = "btn";
btnUp.setAttribute('data-action', 'up');
btnUp.innerHTML = "UP";
let btnReset = document.createElement('button');
buttonContainer.append(btnReset);
btnReset.className = "btn";
btnReset.classList.add('reset');
btnReset.setAttribute('data-action', 'reset');
btnReset.innerHTML = "RESET";
let btnDown = document.createElement('button');
buttonContainer.append(btnDown)
btnDown.className = "btn";
btnDown.setAttribute('data-action', 'down');
btnDown.innerHTML = "DOWN";