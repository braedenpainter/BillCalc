function Load() {
	build();
}

function build() {
	
	
	var addBtn = document.createElement("button");
	addBtn.setAttribute("id", "addbtn");
	addBtn.appendChild(document.createTextNode("Add Text"));
	
	var txtBox = document.createElement("input");
	txtBox.setAttribute("type", "textbox");
	txtBox.setAttribute("id", "tb");
	txtBox.setAttribute("placeholder", "Enter Text Here..");
	
	//Add To body
	document.getElementById("content").appendChild(addBtn);
	document.getElementById("content").appendChild(txtBox);
	
	document.getElementById("addbtn").addEventListener("click", function() {
		//var addTxt = document.getElementById("tb").value;
		//var par = document.createElement("p");
		//par.appendChild(document.createTextNode(addTxt));
		
		//document.getElementById("interact").appendChild(par);
		
		writeFile();
	});
}

function writeFile() {
	var fs = require("fs");
	console.log("Going to write into existing file");
	
	fs.writeFile("blank.txt", "Simply Easy Learning", function(err) {
		if(err) {
			return console.error(err);
		}
		
		console.log("Data written sucessfully!");
		console.log("Let's read newly writen data");
		
		fs.readFile("blank.txt", function (err, data) {
			if(err) {
				return console.error(err);
			}
			
			console.log("Asychronous read: " + data.toString());
		});
	});
}