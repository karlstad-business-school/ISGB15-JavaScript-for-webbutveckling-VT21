'use strict';

window.addEventListener('load', ()=>{
    //renderPage();
    //renderPage2();
    renderPage3();
});

function renderPage() {

    document.writeln('<main>');
    document.writeln('<h1>');
    document.writeln('En rubrik...');
    document.writeln('</h1>');
    document.writeln('<button class="btn btn-primary">Push!</button>');
    document.writeln('</main>');
}

function renderPage2() {
    let body = document.querySelector('body');
    body.innerHTML = "<main><h1>En rubrik</h1><button class='btn btn-primary'>Push!</button></main>";
  
}

function renderPage3() {
    let body = document.querySelector('body');
    let mainElement = document.createElement('main');
    let rubrik = document.createElement('h1');
    let textNode = document.createTextNode('En rubrik...');
    let knapp = document.createElement('button');
    knapp.classList.add('btn','btn-primary');

    body.appendChild(mainElement);
    mainElement.appendChild(rubrik);
    rubrik.appendChild(textNode);
    textNode = document.createTextNode('Push!');
    mainElement.appendChild(knapp);
    knapp.appendChild(textNode);

    knapp.addEventListener('click', btnClick);
}

function btnClick(oEvt) {

    let slmp = Math.floor((Math.random() * 5) +1);
    console.log(slmp);
    switch(slmp) {
        case 1:
            this.setAttribute('class','btn btn-primary');
            break;
        case 2: 
            this.setAttribute('class', 'btn btn-danger');
            break;
        case 3:
            this.setAttribute('class', 'btn btn-warning');
            break;
        case 4:
            this.setAttribute('class', 'btn btn-secondary');
            break;
        case 5:
            let newButton = document.createElement('button');
            let text = document.createTextNode('Push!');
            newButton.appendChild(text);
            newButton.addEventListener('click', btnClick);
            document.querySelector('main').insertBefore(newButton, this);
    }
}