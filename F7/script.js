'use strict';

window.addEventListener('load', prepareColorPicker);

function prepareColorPicker() {
   
    let fields = document.querySelectorAll('.field');

    for(let i = 0; i < fields.length; i++) {

        let input = fields[i].querySelector('input');
        let span = fields[i].querySelector('span');

        input.value = Math.floor(Math.random()*256);
        span.textContent = input.value;

        fields[i].addEventListener('input', handleValueChange);

    }

    updateBackground();

}

function updateBackground() {

    let red = document.querySelector('#red').value;
    let green = document.querySelector('#green').value;
    let blue = document.querySelector('#blue').value;

    let newColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    //document.querySelector('body').style.backgroundColor = newColor;
    document.querySelector('body').setAttribute('style','background-color: ' + newColor);
}

function handleValueChange(oEvt) {

    let span = oEvt.currentTarget.querySelector('.value');
    span.textContent = oEvt.target.value;
    
    updateBackground();

}