//ex1_F9.js

/*

	I följande räknestuga/workshop/F9 skall vi med JavaScript modifiera tabellen i ex1_F9.html.
	Om användaren har JavaScript aktiverat i sin webbläsare skall vi när sidan är
    laddad och Document Object Model (DOM) finns byggd exekvera en anonyma funktionen i vilken vi
    skall anropa funktionen createColumns(). I createColumns() skall vi lägga till en ny kolumn 
    till varje rad och dess värde skall vara summan av alla talen för aktuell rad där den nya kolumnen finns.

    Observera att ibland saknas text i en kolumn, ibland innehåller den ett mellanslag,
    ibland innehåller den vanligt text men oftast text som kan göras om till ett numeriskt värde.
    Observera också att i första uppgiften tillåter vi oss inte att använda egenskaperna:
    innehHTML, outerHTML, textContent eller innerText. Den enda globala variabeln som tillåts är oData!

	Därefter skall vi (allt beror på hur mycket tid vi har över och här tillåter vi oss använda textContent) 
    lägga till lyssnare för tabellen: click (inklusive timer-metoderna setInterval() och clearInterval()), 
    mouseover och mouseout samt fundera lite kring användadet av this.
	
*/
"use strict";

let oData = {
    counter : 0,
    timerId : null,
    h1Ref : document.querySelector("div h1")
};
