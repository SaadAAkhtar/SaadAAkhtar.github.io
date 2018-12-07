function check(){
	
	var question1 = document.proportionspractice.Proportions1.value;
	var question2 = document.proportionspractice.Proportions2.value;
	var question3 = document.proportionspractice.Proportions3.value;
	var question4 = document.proportionspractice.Proportions4.value;
	var question5 = document.proportionspractice.Proportions5.value;
	var question6 = document.proportionspractice.Proportions6.value;
	var question7 = document.proportionspractice.Proportions7.value;
	var question8 = document.proportionspractice.Proportions8.value;
	var question9 = document.proportionspractice.Proportions9.value;
	var question10 = document.proportionspractice.Proportions10.value;
	var question11 = document.proportionspractice.Proportions11.value;
	var question12 = document.proportionspractice.Proportions12.value;
	var correct = 0;
	var answers = " ";
	
	if (question1 == "D") {
		correct++;
	}else {
		answers += "1 ";
	}
	
	if (question2 == "B") {
		correct++;
	}else {
		answers += "2 ";
	}
	
	if (question3 == "B") {
		correct++;
	}else {
		answers += "3 ";
	}
	
	if (question4 == "B") {
		correct++;
	}else {
		answers += "4 ";
	}
	
	if (question5 == "C") {
		correct++;
	}else {
		answers += "5 ";
	}
	
	if (question6 == "25") {
		correct++;
	}else {
		answers += "6 ";
	}
	
	if (question7 == "A") {
		correct++;
	}else {
		answers += "7 ";
	}
	
	if (question8 == "1492") {
		correct++;
	}else {
		answers += "8 ";
	}
	
	if (question9 == "29/3" || question9 == "9.66" || question9 == "9.67") {
		correct++;
	}else {
		answers += "9 ";
	}
	
	if (question10 == "B") {
		correct++;
	}else {
		answers += "10 ";
	}
	
	if (question11 == "B") {
		correct++;
	}else {
		answers += "11 ";
	}
	
	if (question12 == "102") {
		correct++;
	}else {
		answers += "12 ";
	}
	
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct! These are the questions you missed:" + answers + ".";
	
}

var hintClicks = 0;

var myTimer;

	function submitcheck(elem){		
		if (elem <= 8) {
			document.getElementById("after_submit").style.visibility = "visible";
		}else {
			alert("You have submitted " + (elem + 1) + " times. Review your answers thoroughly and try again once the 'Submit Countdown!' has finished.");
			document.getElementById("submitbutton").disabled = true;
			
			myTimer = setInterval(myClock, 1000)
			var c = (60 + 10 * (elem - 9)) + 1;
			
			function myClock() {
				document.getElementById("submitcountdown").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("submitbutton").disabled = false;
					clearInterval(myTimer);
				}
			}
		}
	}

	function clock(elem, elem2) {
		myTimer = setInterval(myClock, 1000);
		
		if (hintClicks > 0) {
			alert("Only one hint countdown can be active at any given time.");
			return;
		}
		
		hintClicks += 1;
		
		if (elem2 > 5 && elem2 <= 10) {
			var c = 61 + (10 * elem2);
		}else if (elem2 > 10 && elem2 <= 20) {
			var c = 61 + (15 * elem2);
		}else if (elem2 > 20) {
			var c = 61 + (20 * elem2);
		}else {
			var c = 91;
		}
		
		function myClock() {
			if (elem.id.localeCompare("hintbutton1") == 0 && c > 0) {
				document.getElementById("hintbutton1").disabled = true;
				document.getElementById("countdown1").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint1").style.visibility = "visible";
					document.getElementById("hint1result").innerHTML = "How many grams are in a 2-decagram container?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "We have a proportion of 7 bulbs selected for every 400 bulbs produced.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "We have a proportion of 25 meters walked for every 13.7 seconds.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "Since Earth's g and the W of the object on Earth are both known, we can calculate the object's mass.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "We have a proportion of 1 ounce for every (28 / 3) acres.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "We have a proportion of 30 kilometers for every 75° Celsius decrease.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton7") == 0 && c > 0) {
				document.getElementById("hintbutton7").disabled = true;
				document.getElementById("countdown7").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint7").style.visibility = "visible";
					document.getElementById("hint7result").innerHTML = "We have a proportion of (2.5 / 16) pounds for every muffin.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton8") == 0 && c > 0) {
				document.getElementById("hintbutton8").disabled = true;
				document.getElementById("countdown8").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint8").style.visibility = "visible";
					document.getElementById("hint8result").innerHTML = "We have a proportion of 5 horsepower for every 3730 watts.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton9") == 0 && c > 0) {
				document.getElementById("hintbutton9").disabled = true;
				document.getElementById("countdown9").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint9").style.visibility = "visible";
					document.getElementById("hint9result").innerHTML = "The proportion ratio is (1 / 3), so one side of the proportion equation is already solved.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton10") == 0 && c > 0) {
				document.getElementById("hintbutton10").disabled = true;
				document.getElementById("countdown10").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint10").style.visibility = "visible";
					document.getElementById("hint10result").innerHTML = "We have a proportion of 50 coins for every (31 / 8) inches.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton11") == 0 && c > 0) {
				document.getElementById("hintbutton11").disabled = true;
				document.getElementById("countdown11").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint11").style.visibility = "visible";
					document.getElementById("hint11result").innerHTML = "We are trying to find the proportion ratio between x and k. How does the table help us calculate this ratio?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton12") == 0 && c > 0) {
				document.getElementById("hintbutton12").disabled = true;
				document.getElementById("countdown12").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint12").style.visibility = "visible";
					document.getElementById("hint12result").innerHTML = "we have a proportion of two atoms of hydrogen for every one molecule of water.";
					clearInterval(myTimer);
				}
			}
		}
	}