'use strict';

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

        }


    } catch(oError) {
        
        //Här tar emot och fångar undantaget + visar felmeddelande
        document.querySelector('#errorMsg').textContent = 'Ange ' + oError.elementRef.getAttribute('title') + '!';

        oError.elementRef.focus();

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