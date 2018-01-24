console.log('Hi');



function printNumber(){
	
	var x = 0;
	x = increment(x); // this adds +1 to our number
	
	
	
	
	if(isEven(x)){
		let y = 0;
		
		console.log(x + " is even");
	}else{
		console.log(y);
		console.log(x + " is not even");
	}
	
	
	
	
}

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function increment(value) {
	return value +1;
}

