'use strict';

window.addEventListener('load', ()=> {
    renderPage();
    document.querySelector('body').addEventListener('click', bodyClick);
});

function renderPage() {
    let table = document.querySelector('table');
    let counter = 1;

    for(let rad = 1; rad <=10; rad++) {

        let tr = document.createElement('tr');

        for(let kol=1; kol<=10; kol++) {
            let td = document.createElement('td');
            td.classList.add('p-3');
            let text = document.createTextNode(counter);
            counter++;

            td.appendChild(text);
            tr.appendChild(td);
        }

        table.appendChild(tr);

    }

}

function bodyClick(oEvt) {

    console.log(oEvt.target.tagName);
    oEvt.target.style.backgroundColor='red';

}
