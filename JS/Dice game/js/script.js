var arr = [];

var btn = document.getElementById("butt");
btn.addEventListener("click", roll);

var dice1 = document.getElementById("dice1");
var dice2 = document.getElementById("dice2");

//btn.addEventListener("mouseover", sayhi);
//btn.addEventListener("click", sayclick);

retrieveLocalStorage();

function roll() {

	var x = Math.floor((Math.random() * 6) + 1);
	var y = Math.floor((Math.random() * 6) + 1);
	var guess = document.getElementById("ieskoti").value;
	var pair = x + ' and ' + y;
	
	displaydice(x,y);
	
	//output a random number and push it to array

	document.getElementById("rez").innerHTML = pair;

	arr.push(pair);
	
	//text display
	if (guess == x + y){
		document.getElementById("tekstas").innerHTML = "Win";
	}
	else{
		document.getElementById("tekstas").innerHTML = "Lose";
	}
	
	//atvaizduoja rezultata
	//document.getElementById("array").innerHTML = display(arr);
	display(arr);
	//console.log(arr);
	
	//Prideti rezultatus i masiva.
	localStorage.setItem("ScoreBoard", arr);
	console.log("arr type:"+typeof arr);
}
//array display
function display(a){
	var rez='';
	for (var i = 0; i < a.length; i++ )
		rez += "<p>" + a[i] + "</p>";
	
	document.getElementById("array").innerHTML = rez;
	//return rez;
			
}    

function retrieveLocalStorage(){
	//paroditi resultatus is issaugoto masivo
	var saved_data_string = localStorage.getItem("ScoreBoard");
	//console.log("_arr type:"+typeof saved_data);
	
	//Jeigu pirma karta perkrovus puslapi, saved_data_array gali but null
	var saved_data_array = [];
	if(saved_data_string != null){
		saved_data_array = saved_data_string.split(',');
	}
	
	//console.log("saved_data_array type:"+typeof saved_data_array);
	display(saved_data_array);
}

function displaydice(x, y) {
	dice1.src = "img/dice "+x+".png";
	dice2.src = "img/dice "+y+".png";
}
// Store
//localStorage.setItem("lastname", "Smith");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");