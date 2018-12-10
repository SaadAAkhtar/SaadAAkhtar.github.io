function check(){
	
	var question1 = document.circlespractice.Circles1.value;
	var question2 = document.circlespractice.Circles2.value;
	var question3 = document.circlespractice.Circles3.value;
	var question4 = document.circlespractice.Circles4.value;
	var question5 = document.circlespractice.Circles5.value;
	var question6 = document.circlespractice.Circles6.value;
	var question7 = document.circlespractice.Circles7.value;
	var question8 = document.circlespractice.Circles8.value;
	var question9 = document.circlespractice.Circles9.value;
	var question10 = document.circlespractice.Circles10.value;
	var question11 = document.circlespractice.Circles11.value;
	var question12 = document.circlespractice.Circles12.value;
	var question13 = document.circlespractice.Circles13.value;
	var question14 = document.circlespractice.Circles14.value;
	var question15 = document.circlespractice.Circles15.value;
	var correct = 0;
	var answers = " ";
	
	if (question1 == "A") {
		correct++;
	}else {
		answers += "1 ";
	}
	
	if (question2 == "A") {
		correct++;
	}else {
		answers += "2 ";
	}
	
	if (question3 == "32") {
		correct++;
	}else {
		answers += "3 ";
	}
	
	if (question4 == "5/8" || question4 == ".625" || question4 == "0.625") {
		correct++;
	}else {
		answers += "4 ";
	}
	
	if (question5 == "C") {
		correct++;
	}else {
		answers += "5 ";
	}
	
	if (question6 == "29" || question6 == "30" || question6 == "31" || question6 == "32" || question6 == "33" || question6 == "34") {
		correct++;
	}else {
		answers += "6 ";
	}
	
	if (question7 == "A") {
		correct++;
	}else {
		answers += "7 ";
	}
	
	if (question8 == "B") {
		correct++;
	}else {
		answers += "8 ";
	}
	
	if (question9 == "80") {
		correct++;
	}else {
		answers += "9 ";
	}
	
	if (question10 == "1/6" || question10 == ".166" || question10 == ".167" || question10 == "0.166" || question10 == "0.167") {
		correct++;
	}else {
		answers += "10 ";
	}
	
	if (question11 == "A") {
		correct++;
	}else {
		answers += "11 ";
	}
	
	if (question12 == "D") {
		correct++;
	}else {
		answers += "12 ";
	}
	
	if (question13 == "5/18" || question13 == ".277" || question13 == ".278" || question13 == "0.277" || question13 == "0.278") {
		correct++;
	}else {
		answers += "13 ";
	}
	
	if (question14 == "A") {
		correct++;
	}else {
		answers += "14 ";
	}
	
	if (question15 == "144") {
		correct++;
	}else {
		answers += "15 ";
	}
	
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct! These are the questions you missed:" + answers + ".";
	
}

var hintClicks = 0;

var myTimer;

	function submitcheck(elem){		
		if (elem <= 1) {
			document.getElementById("after_submit").style.visibility = "visible";
		}else {
			alert("You have submitted " + (elem + 1) + " times. Review your answers thoroughly and try again once the 'Submit Countdown!' has finished.");
			document.getElementById("submitbutton").disabled = true;
			
			myTimer = setInterval(myClock, 1000)
			var c = (60 + 10 * (elem - 2)) + 1;
			
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
			var c = 91 + (10 * elem2);
		}else if (elem2 > 10 && elem2 <= 20) {
			var c = 91 + (15 * elem2);
		}else if (elem2 > 20) {
			var c = 91 + (20 * elem2);
		}else {
			var c = 121;
		}
		
		function myClock() {
			if (elem.id.localeCompare("hintbutton1") == 0 && c > 0) {
				document.getElementById("hintbutton1").disabled = true;
				document.getElementById("countdown1").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint1").style.visibility = "visible";
					document.getElementById("hint1result").innerHTML = "What is the general graphing form of a circle (a.k.a standard form)?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "You must 'complete the square' twice in order to get the equation into standard form.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "LONM can be split into two triangles such that the measure of angle O could be calculated.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "The central angle measure over 360 degrees is equivalent to the area of the sector over the area of the circle.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "Since AB is a diameter, it passes through the center of the circle and, essentially, cuts it in half.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "You can use the radius to calculate the circle's circumfrence as well as the perimeter of sector BOA.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton7") == 0 && c > 0) {
				document.getElementById("hintbutton7").disabled = true;
				document.getElementById("countdown7").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint7").style.visibility = "visible";
					document.getElementById("hint7result").innerHTML = "You have a central angle measure, 360 degrees, and a circumfrence. What equation can you use to find the length of arc AC?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton8") == 0 && c > 0) {
				document.getElementById("hintbutton8").disabled = true;
				document.getElementById("countdown8").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint8").style.visibility = "visible";
					document.getElementById("hint8result").innerHTML = "You must 'complete the square' twice in order to get the equation into standard form.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton9") == 0 && c > 0) {
				document.getElementById("hintbutton9").disabled = true;
				document.getElementById("countdown9").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint9").style.visibility = "visible";
					document.getElementById("hint9result").innerHTML = "A line drawn from P to A would be a radius.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton10") == 0 && c > 0) {
				document.getElementById("hintbutton10").disabled = true;
				document.getElementById("countdown10").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint10").style.visibility = "visible";
					document.getElementById("hint10result").innerHTML = "The arc length over the circle's circumfrence is equivalent to the area of the sector over the area of the circle.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton11") == 0 && c > 0) {
				document.getElementById("hintbutton11").disabled = true;
				document.getElementById("countdown11").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint11").style.visibility = "visible";
					document.getElementById("hint11result").innerHTML = "You must 'complete the square' twice in order to get the equation into standard form.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton12") == 0 && c > 0) {
				document.getElementById("hintbutton12").disabled = true;
				document.getElementById("countdown12").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint12").style.visibility = "visible";
					document.getElementById("hint12result").innerHTML = "For a point to be inside of the circle, the distance from that point to the center must be less than the radius.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton13") == 0 && c > 0) {
				document.getElementById("hintbutton13").disabled = true;
				document.getElementById("countdown13").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint13").style.visibility = "visible";
					document.getElementById("hint13result").innerHTML = "The central angle measure over 360 degrees is equivalent to the area of the sector over the area of the circle.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton14") == 0 && c > 0) {
				document.getElementById("hintbutton14").disabled = true;
				document.getElementById("countdown14").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint14").style.visibility = "visible";
					document.getElementById("hint14result").innerHTML = "What is the length of the diameter of the circle as represented by the given equation?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton15") == 0 && c > 0) {
				document.getElementById("hintbutton15").disabled = true;
				document.getElementById("countdown15").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint15").style.visibility = "visible";
					document.getElementById("hint15result").innerHTML = "The central angle measure over 360 degrees is equivalent to the arc length over the circle's circumfrence.";
					clearInterval(myTimer);
				}
			}
		}
	}