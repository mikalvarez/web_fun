var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

if(MINUTE < 30 && PERIOD == "AM") {
	console.log("It's just after " + HOUR + " in the morning")
} 
else if (MINUTE > 30 && PERIOD = "AM") {
	HOUR = HOUR + 1
	console.log("It's almost " + HOUR + " in the morning")
}


if(MINUTE < 30 && PERIOD == "PM"){
	console.log("It's just after " + HOUR + " in the evening" )
} 
else if (MINUTE > 30 && PERIOD == "PM") {
	HOUR = HOUR + 1
	console.log("It's almost " + HOUR + " in the evening")
}


// combo conditonals

if(PERIOD == "AM") {
	if(MINUTE > 30) {
		HOUR = HOUR + 1
	    console.log("It's almost " + HOUR + " in the morning")

	}
	else if (MINUTE < 30){
		console.log("It's just after " + HOUR + " in the morning")
	}
} else if (PERIOD == "PM"){
	if(MINUTE > 30) {
		HOUR = HOUR + 1
	    console.log("It's almost " + HOUR + " in the evening")

	}
	else if (MINUTE < 30){
		console.log("It's just after " + HOUR + " in the evening")
	}
}
