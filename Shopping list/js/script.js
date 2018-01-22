var array = [];



function addToList(){
	var product = document.getElementById("product").value;	
	console.log('pridedam:' + product);	
				
	//irasit nauja produkta i masiva
	array.push(product);
	//console.log(array);
	//atvaizduot rezultata.	
	//printArray(productList);
	renderArray(array);
}

function renderArray(x){
	//console.log(x);
	var h = "";
	h = "<ul>";
	for(var i = 0;i < x.length;i++){
		console.log(x[i]);
		h = h + "<li>" +x[i]+"</li>";
	}
	h = h + "</ul>";
	document.getElementById("result").innerHTML = h;
}