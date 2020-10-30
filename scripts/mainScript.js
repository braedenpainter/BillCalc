function Load() {
	context();
	interacting();
}

function context() {
	var holder = document.createElement("div");
	holder.setAttribute("id", "infoholder");
	
	var infoBar = document.createElement("div");
	infoBar.setAttribute("id", "infobar");
	infoBar.setAttribute("style", "border-bottom:dashed 2px;");
	
	var billNum = document.createElement("p")
	var billTxtNum = document.createTextNode("Bills: " + 0);
	billNum.setAttribute("id", "billnum");
	billNum.appendChild(billTxtNum);
	
	var billOutage = document.createElement("p")
	var billOutNum = document.createTextNode("Money Outage: $" + 0);
	billOutage.setAttribute("id", "billoutage");
	billOutage.appendChild(billOutNum);
	
	//add to Body
	document.getElementById("content").appendChild(infoBar);
	document.getElementById("content").appendChild(holder);
	
	document.getElementById("infobar").appendChild(billNum);
	document.getElementById("infobar").appendChild(billOutage);
}

function interacting() {
	var addBill = document.createElement("button");
	addBill.setAttribute("id", "billbtn");
	addBill.appendChild(document.createTextNode("Add Bill"));
	
	var billTxt = document.createElement("input");
	billTxt.setAttribute("id", "billtxt");
	billTxt.setAttribute("placeholder", "Enter Bill Here..");
	
	var billAmt = document.createElement("input");
	billAmt.setAttribute("id", "billamt");
	billAmt.setAttribute("type", "number");
	billAmt.setAttribute("placeholder", "$0");
	
	//add To body
	
	document.getElementById("interact").appendChild(addBill);
	document.getElementById("interact").appendChild(billTxt);
	document.getElementById("interact").appendChild(billAmt);
	
	//Event Listeners
	document.getElementById("billbtn").addEventListener("click", function() {
		createBill(billtxt.value, billAmt.value);
	});
}


var count = 0;
var total = 0;
function createBill(text1, text2) {
	var par = document.createElement("p");
	var comb = document.createTextNode(text1 + " " + text2);
	
	par.appendChild(comb);
	count++;
	total = total + parseFloat(document.getElementById("billamt").value);
	
	document.getElementById("infoholder").appendChild(par);
	
	document.getElementById("billnum").innerHTML = "Bills: " + count;
	document.getElementById("billoutage").innerHTML = "Money Outage: $" + total;
}