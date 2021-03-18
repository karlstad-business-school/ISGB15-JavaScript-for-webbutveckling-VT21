'use strict';

/*
    onload="setFocusOnForm();"
    onsubmit="return checkForm();" 
    onreset="resetForm();"
    oninput="countNumberOfChars(this);"

*/

window.addEventListener("load", function() { //onload

    let formRef = document.querySelector('#theForm'); //nytt

    formRef.addEventListener("submit", function( event ) { //onsubmit formRef

        try {

            let textRefs = document.querySelectorAll('input[type=text], textarea');
            let currentTextRef = null;
    
            for(let counter = 0; counter < textRefs.length; counter++) {
    
                currentTextRef = textRefs.item(counter);
    
                if(currentTextRef.value.length === 0) {
    
                    throw { elementRef : currentTextRef };
    
                }
    
                //3.
                if(currentTextRef.getAttribute("id") === "txtPostNummer") {
    
                    if(currentTextRef.value.length !== 5) {
                        throw { "object" : currentTextRef };
                    }
    
                    if(isNaN(currentTextRef.value)) {
                        throw { "object" : currentTextRef };
                    }
    
                }
    
            }
    
            //1.
            //return true;
    
    
        } catch(oError) {
            
            //Här tar emot och fångar undantaget + visar felmeddelande
            document.querySelector('#errorMsg').textContent = 'Ange ' + oError.elementRef.getAttribute('title') + '!';
            oError.elementRef.focus();
    
            //2.
            //return false;
            event.preventDefault();
    
        }

    })

    formRef.addEventListener("reset", function() { //onreset formRef
        document.querySelector('#nbrOfChars').textContent = '0';
        document.querySelector('#errorMsg').textContent = "";
    });

    formRef.querySelector('textarea').addEventListener('input', function() { //oninput formRef
        console.log("input");
        document.querySelector('#nbrOfChars').textContent = this.value.length;
    });

    document.querySelector('#txtNamn').focus();

});

/*

function setFocusOnForm() {
    console.log('setFocusOnForm()');
    //console.log( document.querySelector('#txtNamn') );
    document.querySelector('#txtNamn').focus();
}

function checkForm() {
    console.log('checkForm()');

    try {

        //Här vill kontrollera innehållet i alla formulärkomponenter...
        let textRefs = document.querySelectorAll('input[type=text], textarea');
        let currentTextRef = null;

        for(let counter = 0; counter < textRefs.length; counter++) {

            currentTextRef = textRefs.item(counter);

            if(currentTextRef.value.length === 0) {

                throw { elementRef : currentTextRef };

            }

            //3.
            if(currentTextRef.getAttribute("id") === "txtPostNummer") {

                //Stränglängde = 5
                //Värdet = siffror

                if(currentTextRef.value.length !== 5) {
                    throw { "object" : currentTextRef };
                }

                if(isNaN(currentTextRef.value)) {
                    throw { "object" : currentTextRef };
                }

            }

        }

        //1.
        return true;


    } catch(oError) {
        
        //Här tar emot och fångar undantaget + visar felmeddelande
        document.querySelector('#errorMsg').textContent = 'Ange ' + oError.elementRef.getAttribute('title') + '!';
        oError.elementRef.focus();

        //2.
        return false;

    }
}

function resetForm() {
    console.log('resetForm()');
    document.querySelector('#nbrOfChars').textContent = '0';
    document.querySelector('#errorMsg').textContent = "";

}

function countNumberOfChars(textAreaRef) {
    console.log('countNumberOfChars()');
    document.querySelector('#nbrOfChars').textContent = textAreaRef.value.length;
}

*/