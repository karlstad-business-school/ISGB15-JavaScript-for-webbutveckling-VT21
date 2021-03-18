'use strict';


//https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
//https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event


//load vs. DOMContentLoaded

/*window.onload = function() {
    console.log('onload');

    let tableRef = document.querySelector('table');

    tableRef.onmouseover = function() {
        console.log('omouseover');
    };

    tableRef.onmousedown = function( event ) {
        console.log('onmousedown', event.which );
    };

    document.querySelector('body').onkeydown = function( event ) {
        console.log('onkeydown', event.code );
    };
    
};*/

window.addEventListener('load', function() {

    let tdRefs = document.querySelectorAll('td');
    console.log( tdRefs );

    for(let i = 0; i < tdRefs.length; i++) {
        tdRefs.item(i).addEventListener('click', function(event) {
            console.log( event.target, event.currentTarget );
            event.stopPropagation();
        });
    };

    document.querySelector('tbody').addEventListener('click', function( event ) {
        console.log( event.target, event.currentTarget );
    });

    document.querySelector('table').addEventListener('click', function( event ) {
        console.log( event.target, event.currentTarget );
    });

    document.querySelector('.container-fluid').addEventListener('click', function( event ) {
        console.log( event.target, event.currentTarget );
    });

    document.querySelector('body').addEventListener('click', function( event ) {
        console.log( event.target, event.currentTarget );
    });

    document.querySelector('html').addEventListener('click', function( event ) {
        console.log( event.target, event.currentTarget );
    });
});

