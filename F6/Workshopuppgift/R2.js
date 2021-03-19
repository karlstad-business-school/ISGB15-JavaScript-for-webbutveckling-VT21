"use strict";

//ADD
window.addEventListener("load", function() {
	
	setFocusOnForm();
	toggleTextArea();
	window.document.querySelector("#theForm").addEventListener("submit", checkForm, false);
	window.document.querySelector("#txtFritext").addEventListener("input", countNbrOfChars, false);
	window.document.querySelector("input[type=reset]").addEventListener("click", resetForm, false);
	window.document.querySelector("input[type=checkbox]").addEventListener("click", toggleTextArea, false);
	
}, false);

function toggleTextArea() {
	
	var textAreaRef = window.document.querySelector("#txtFritext");
	var chkTextArea = window.document.querySelector("#chkFritext");
	
	if(chkTextArea.checked) {
		textAreaRef.removeAttribute("disabled");
		textAreaRef.focus();
	}
	else {
		textAreaRef.setAttribute("disabled", "disabled");
	}
}

function setFocusOnForm() {
	document.querySelector("#txtNamn").focus();
}

//DELETE inTextAreaRef
function countNbrOfChars(){
	//DELETE & ADD
	document.querySelector("#nbrOfChars").innerHTML = window.document.querySelector("#txtFritext").value.length;
}

function resetForm() {
	document.querySelector("#nbrOfChars").innerHTML = 0;
	document.querySelector("#errorMsg").innerHTML = "";
	document.querySelector("#txtNamn").focus();
	//ADD
	document.querySelector("#errorMsg").removeAttribute("class");
}

//ADD oEvent
function checkForm(oEvent) {

	//Kontrollera att alla input type=text + textarean har värden om inte kasta undantag!
	
	try {
	
		var textRefs = document.querySelectorAll("input[type=text]");
		var textAreaRef = document.querySelector("textarea");
		var divRef = document.querySelector("#errorMsg");
		//ADD
		var chkTextArea = window.document.querySelector("#chkFritext");
		
		var counter = 0;
		var currentTextRef = null;
		//var debugString = "";
	
		for(; counter < textRefs.length; counter++) {
		
			currentTextRef = textRefs.item(counter);
		
			if(currentTextRef.value === "" || currentTextRef.value === null) {
			
				currentTextRef.focus();
				throw new Error(currentTextRef.getAttribute("title"));
			
			}
		
			//Bara för test och debug!!!!!!!
			//debugString += currentTextRef.getAttribute("title") + ": " + currentTextRef.value + "\n";
		}
		
		//Kontrollera textarean...
		//ADD
		if(chkTextArea.checked && (textAreaRef.value === "" || textAreaRef.value === null)) {
			textAreaRef.focus();
			throw new Error(textAreaRef.getAttribute("title"));
		}
		
		//debugString += textAreaRef.getAttribute("title") + ": " + textAreaRef.value + "\n";
		//alert(debugString);
	
	}
	catch(oError) {
		
		//DELETE & ADD
		divRef.innerHTML = "Ange " + oError.message + "!";
		divRef.setAttribute("class", "alert alert-danger");
		
		//ADD 
		oEvent.preventDefault();
		oEvent.stopPropagation();
		
		//DELETE
		//return false;
	
	}
	//DELETE
	//return true	

}
