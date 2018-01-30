let cars = [];

//Aprasysi musu input fields ir migtukus
let formelement = document.getElementById("CarForm");

let txt_brand = document.getElementById("Brand");
let txt_model = document.getElementById("Model");
let txt_color = document.getElementById("Color");

let btn_submit = document.getElementById("Register");
let link_clear = document.getElementById("link_clear");
let link_clearCache = document.getElementById("link_clearCache");

btn_submit.addEventListener("click", addCar);
link_clear.addEventListener("click", clearForm);
link_clearCache.addEventListener("click", clearCache);

/*let carsJSON = localStorage.getItem("Cars");
let cars = JSON.parse(carsJSON);*/

/*if(cars === null){
	cars = [];
}*/

function addCar(){
	//surinkt informacija is formos
	
	let brand = txt_brand.value;
	let model = txt_model.value;
	let color = txt_color.value;
	
	let c = {
		brand: brand, 
		model: model,
		color: color,
		//color:"white"
		
		print: function () {
			return this.brand+" "+this.model;
		}
	};
	//turim sukurt nauja objekta ir ideti ji i masiva.
	cars.push(c);
	
	/*cars.push(c);
	let carsJSON = JSON.stringify(cars);
	localStorage.setItem("Cars",carsJSON);*/
	console.log(cars.length);	
	
	displayCar(c);
}

function clearForm(){
	formelement.reset();
}

function clearCache(){
	localStorage.setItem("Cars","");
}

//turim atvaizduot reultata.
function displayCar(car){
	
	let h = "<p>"+car.print() + " </p>";
	h = h + "<div style='display:inline-block;width:10px;height:10px;background:"+car.color+";'>Color</div>";
	document.getElementById("result").innerHTML = h;
}

