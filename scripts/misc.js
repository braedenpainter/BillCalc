function Load() {
	docuLoad();
}

function docuLoad() {
	//Content
	var file = document.createElement("input");
	file.setAttribute("type", "file");
	file.setAttribute("name", "inputFile");
	file.setAttribute("id", "inputFile");
	
	var br = document.createElement("br");
	var pre = document.createElement("pre");
	pre.setAttribute("id", "output");
	
	//Interact
	var addTxt = document.createElement("button");
	var node = document.createTextNode("Add Txt");
	addTxt.setAttribute("name", "addTxt");
	addTxt.setAttribute("id", "addTxt");
	addTxt.setAttribute("text", "Add Text");
	addTxt.appendChild(node);
	
	var txtBox = document.createElement("input");
	txtBox.setAttribute("type", "textbox");
	
	//Add Elements to body
	var element = document.getElementById("content");
	element.appendChild(file);
	element.appendChild(br);
	element.appendChild(pre);
	
	var interact = document.getElementById("interact");
	interact.appendChild(addTxt);
	interact.appendChild(txtBox);
	
	document.getElementById("addTxt").addEventListener("click", function() {
		addText(txtBox.value);
	});
	
	document.getElementById("inputFile").addEventListener("change", function() {
		var fr = new FileReader();
		fr.onload = function() {
			document.getElementById("output").textContent = fr.result;
		}
		
		fr.readAsText(this.files[0]);
	});
	
}

function addText(text) {
	
	
}

//F Jim
function compLoad() {
	var btn = document.createElement("button");
	btn.setAttribute("id", "myBtn");
	var node = document.createTextNode("I am a button");
	
	btn.appendChild(node);
	
	var element = document.getElementById("content");
	element.appendChild(btn);
	
	btn.addEventListener("click", function() {
		window.open("../fun.html", "_blank");
	});
}