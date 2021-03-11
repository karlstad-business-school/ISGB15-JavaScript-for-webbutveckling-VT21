//Null utanför onload
//Null om script i header körs utan onload
//Fungerar i slutet av body-taggen
console.log(document.getElementById("content")); //Vi går igenom detta nästa föreläsning

window.onload = function(){
	console.log("DOM loaded");
	let username = "Alexander";

	
	function write(username, text){
		console.log("Function write");
		document.write("<b>" + username + " wrote: </b>" + text + "<br>");
	}


	function calc(tal1, tal2){
		return tal1 + tal2;
	}

	write(username, "Hello World");
	write(username, calc(10, 20));
}