$(function() {
	$("#btn_search").click(function () {
		var errors = []; // String masyvas pvz, "warning1","warning2","warning3"
		
		/*// patikrinam ar laukelis turi reiksme, ir ar reiksme yra Numeris
		if($("#hp_from").val()){
			var hp_from = $("#hp_from").val(); // cia privalo but numeris
			if(typeof hp_from != number){
				errors.push("hp_from turi but numeris.");
			}
		}else{
			errors.push("hp_from yra privalomas.");
		}*/
		
		//TODO Patiktinti ar informacija yra teisinga.
		//VALIDATION
		/*if(!$("#Brand").val()){
			errors.push("Brand yra privalomas.");
			$("#Brand").addClass("is-invalid");
		}else{
			$("#Brand").removeClass("is-invalid");
		}*/
		
		$(".numeric").each(function () {
			$(this).removeClass("is-invalid");
			let field_rel = $(this).attr("rel");
			let _val = $(this).val();
			//console.log("["+_val+"] "+$(this).attr("rel"));
			if(_val){
				//console.log(field_rel);			
				if(isNaN(_val)){
					errors.push(field_rel +" turi but numeris.");
					$(this).addClass("is-invalid");
				}				
			}else{
				$(this).addClass("is-invalid");
				errors.push(field_rel+" yra privalomas.");
			}
		});
		
		// atvaizduoti errorus jeigu tokiu yra
		if(errors.length > 0){
			showErrors(errors);
		}
		
		let cars_list = CARS;
		
		//Ieskoti masinas.	
		//FIND CARS by Brand
		if($("#Brand").val()){			
			let brand = $("#Brand").val();
			cars_list = findCarsByBrand(cars_list, brand);
		}
		
		if($("#Models").val()){			
			let model = $("#Model").val();
			cars_list = findCarsByModel(cars_list, model);
		}
		
		cars_list = findCarsByHP(cars_list);
		
		showCars(cars_list);
		
	});
});


function showErrors(errors){
	var h = "";
	for(var i = 0;i<errors.length;i++){
		h = h + "<p class='error_msg'>"+errors[i]+"</p>";
	}
	$("#result").html(h);
}

function findCarsByBrand(array, brand){	
	let brandArray = array.filter(function (car) {
		return car.brand.toLowerCase() == brand.toLowerCase();
	});
	return brandArray;
}

function findCarsByModel(array, model){	
	let modelArray = array.filter(function (car) {
		return car.model.toLowerCase() == model.toLowerCase();
	});
	return modelArray;
}

function findCarsByHP(array){
	let hp_from = 0;
	let hp_to = 9999999;
	
	if($("#hp_from").val()){
		let hp_from_string = $("#hp_from").val();
		hp_from = parseInt(hp_from_string);		
	}
	
	if($("#hp_to").val()){
		let hp_to_string = $("#hp_to").val();
		hp_to = parseInt(hp_to_string);		
	}
	
	let cararray = array.filter(function (car) {
		return car.power >= hp_from && car.power <= hp_to;
	});	
	return cararray;
}

function findCarsByDate(){
	
}

function showCars(array){
	let h = "";
	for(var i = 0;i<array.length;i++){
		h = h + "<h2>"+array[i].brand+" "+array[i].model+"</h2>";
		h = h + "<img class='carImg' src='img/"+array[i].brand+".png'  alt='"+array[i].brand+"' />";
		h = h + "<table>";
		h = h + "<tr><th>HP:</th><td>"+array[i].power+"</td></tr>";
		h = h + "<tr><th>Seats:</th><td>"+array[i].seats+"</td></tr>";
		h = h + "<tr><th>Mileage:</th><td>"+array[i].mileage+"</td></tr>";
		h = h + "<tr><th>Date:</th><td>"+array[i].date+"</td></tr>";
		h = h + "<tr><th>Region:</th><td>---</td></tr>";
		h = h + "</table>";
		h = h + "<div class='separator'></div>";
	}
	$("#searchResults").html(h);
}

