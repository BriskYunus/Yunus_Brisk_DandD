(() => {
	// select the elements that you want to work with
	let theButton = document.querySelector("#buttonHolder img");
	//window.addEventListener("load", changeHeaderText);

	function changeHeaderText() {
		document.querySelector("h1").textContent = "Hey there big boi!"
		document.querySelector("p").textContent = "hello even bigger boi"
	}
	// event handling goes at the bottom
	theButton.addEventListener("click", changeHeaderText);

})();
