
// Gauname albumus iš localStorage ir sukuriame objektą
let carsJSON = localStorage.getItem("Cars");
let cars = JSON.parse(carsJSON);

if (cars === null) {
    cars = [];
}

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
		color: color
	};
	//turim sukurt nauja objekta ir ideti ji i masiva.
	cars.push(c);
	
	//Issaugom i atminti local storage
	let carsJSON = JSON.stringify(cars);
	localStorage.setItem("Cars",carsJSON);
	
	console.log(cars.length);
	
	//displayCar(c);
	displayCars(cars);
}

function clearForm(){
	formelement.reset();
}

function clearCache(){
	//localStorage.setItem("Cars","");
	//localStorage.clear();
	localStorage.removeItem("Cars");
	document.getElementById("result").innerHTML = "";
}

//turim atvaizduot reultata.
function displayCar(car){
	
	let h = "<p>"+car.print() + " </p>";
	h = h + "<div style='display:inline-block;width:10px;height:10px;background:"+car.color+";'>Color</div>";
	document.getElementById("result").innerHTML = h;
}

function printCar(car){
	var r = "";
		r = r + "<h3>" + car.brand+" " + car.model + "</h3>";
		r = r + "<p class='.additional_info'>" + car.brand + " " + car.model + "</p>";
		r = r + "<div style='width:100%;height:50px;background:" + car.color + "'></div>";
	return r; 
}

function displayCars(cars){
	if(!cars) return;
	
	var res = "";
	
	for(var i =0;i<cars.length;i++){
		//res = res + cars[i].print();
		res = res + printCar(cars[i]);
	}
	document.getElementById("result").innerHTML = res;
}

displayCars(cars);

