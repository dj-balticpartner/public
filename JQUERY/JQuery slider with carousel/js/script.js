$( document ).ready(function() {
	$("#btn_filter").click(function () {
		//reikia isiaiskint pagal koki branda filtruot
		let brand = $("#brandSelect").val();
		//console.log(brand);
		
		//Filtruoti su .filter() funkcija
		getAllByBrand(brand);
		//getAllByBrand2(brand);
	});

    
 
    
});
  
function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }

// Filtravimo budas su array.filter()
function getAllByBrand2(brand){	
	let brandArray = [];
	for(var i = 0;i < CARS.length;i++){
		//console.log(CARS[i].brand +" ir "+brand);
		if(CARS[i].brand.toLowerCase() == brand.toLowerCase()){
			brandArray.push(CARS[i]);
		}
	}
	//Atvaizduoti brandArray
	displayArray(brandArray);
}

//Filtravimo buads naudojant .filter() funkcija
function getAllByBrand(brand){	
	let brandArray = CARS.filter(function (car) {
		//console.log(car.brand +" ir "+brand);
		return car.brand.toLowerCase() == brand.toLowerCase();
	});
	//Atvaizduoti brandArray
	displayArray(brandArray);
}

// Filtravimo su for() ciklo pagalba.
function getAllByBrand2(brand){	
	let brandArray = [];
	for(var i = 0;i < CARS.length;i++){
		if(CARS[i].brand == brand){
			brandArray.push(CARS[i]);
		}
	}
	//Atvaizduoti brandArray
	displayArray(brandArray);
}



function displayArray(a){
	let h = "";
	
	for(var i = 0;i<a.length;i++){
		h = h + displayCar(a[i]);
	}
	$("#filteredCars").html(h);	
	
	//atvaizduoti naujausia masina
	showNewest(a);
}

//Atvaizduoja naujausia masina
function showNewest(a){
	let newestCar = a[0];
	for(var i = 0;i<a.length;i++){
		if(newestCar.date < a[i].date ){
			newestCar = a[i];
		}
	}
	
	$("#newest").html(displayCar(newestCar));
}

function displayCar(c){

	let h = "<h5>"+c.brand+" "+c.model+"</h3>";
	h = h + "<div class='brandImg'><img src='img/"+c.brand+".png' alt='"+c.brand+" "+c.model+"' /></div>";
	h = h + "<table class='car_table'>";
	h = h + "<tr><th>Seats:</th><td>"+c.seats+"</td></tr>";
	h = h + "<tr><th>HP:</th><td>"+c.power+"</td></tr>";
	h = h + "<tr><th>Mileage:</th><td>"+c.mileage+"</td></tr>";
	h = h + "<tr><th>Date:</th><td>"+c.date+"</td></tr>";
	h = h + "</table>";
	h = h + "<div class='separator'></div>";
	return h;	
}

