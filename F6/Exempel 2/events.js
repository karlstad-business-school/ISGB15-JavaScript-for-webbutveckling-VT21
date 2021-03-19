//html -> body -> div -> p -> b

//Ändra från bubble till capture

window.addEventListener("load", prepareGUI, false);

function prepareGUI() {
	
	//b
	window.document.querySelector("b").addEventListener("click", function(oEvent) {
		
		window.console.log("Target: " + oEvent.target.tagName);
		window.console.log("CurrentTarget: " + oEvent.currentTarget.tagName);
		
		if(oEvent.target === oEvent.currentTarget) {
			window.console.log("Yes");
		}
		
	}, false); 

	//p
	window.document.querySelector("p").addEventListener("click", function(oEvent) {
		
		window.console.log("Target: " + oEvent.target.tagName);
		window.console.log("CurrentTarget: " + oEvent.currentTarget.tagName);
		
	}, false);

	//div
	window.document.querySelector(".container-fluid").addEventListener("click", function(oEvent) {
		
		window.console.log("Target: " + oEvent.target.tagName);
		window.console.log("CurrentTarget: " + oEvent.currentTarget.tagName);
		
	}, false);

	//body
	window.document.querySelector("body").addEventListener("click", function(oEvent) {
		
		window.console.log("Target: " + oEvent.target.tagName);
		window.console.log("CurrentTarget: " + oEvent.currentTarget.tagName);
		
	}, false);

	//html
	window.document.querySelector("html").addEventListener("click", function(oEvent) {
		
		window.console.log("Target: " + oEvent.target.tagName);
		window.console.log("CurrentTarget: " + oEvent.currentTarget.tagName);
		
	}, false); 
}
