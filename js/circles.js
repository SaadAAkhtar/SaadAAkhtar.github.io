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
	
	if (question1 == "A") {
		correct++;
	}
	
	if (question2 == "A") {
		correct++;
	}
	
	if (question3 == "32") {
		correct++;
	}
	
	if (question4 == "5/8" || question4 == ".625" || question4 == "0.625") {
		correct++;
	}
	
	if (question5 == "C") {
		correct++;
	}
	
	if (question6 == "29" || question6 == "30" || question6 == "31" || question6 == "32" || question6 == "33" || question6 == "34") {
		correct++;
	}
	
	if (question7 == "A") {
		correct++;
	}
	
	if (question8 == "B") {
		correct++;
	}
	
	if (question9 == "80") {
		correct++;
	}
	
	if (question10 == "1/6" || question10 == ".166" || question10 == ".167" || question10 == "0.166" || question10 == "0.167") {
		correct++;
	}
	
	if (question11 == "A") {
		correct++;
	}
	
	if (question12 == "D") {
		correct++;
	}
	
	if (question13 == "5/18" || question13 == ".277" || question13 == ".278" || question13 == "0.277" || question13 == "0.278") {
		correct++;
	}
	
	if (question14 == "A") {
		correct++;
	}
	
	if (question15 == "144") {
		correct++;
	}
	
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}

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
					document.getElementById("hint1").style.visibility = "visible";
					document.getElementById("hint1result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton7") == 0 && c > 0) {
				document.getElementById("hintbutton7").disabled = true;
				document.getElementById("countdown7").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint7").style.visibility = "visible";
					document.getElementById("hint7result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton8") == 0 && c > 0) {
				document.getElementById("hintbutton8").disabled = true;
				document.getElementById("countdown8").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint8").style.visibility = "visible";
					document.getElementById("hint8result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton9") == 0 && c > 0) {
				document.getElementById("hintbutton9").disabled = true;
				document.getElementById("countdown9").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint9").style.visibility = "visible";
					document.getElementById("hint9result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton10") == 0 && c > 0) {
				document.getElementById("hintbutton10").disabled = true;
				document.getElementById("countdown10").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint10").style.visibility = "visible";
					document.getElementById("hint10result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton11") == 0 && c > 0) {
				document.getElementById("hintbutton11").disabled = true;
				document.getElementById("countdown11").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint11").style.visibility = "visible";
					document.getElementById("hint11result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton12") == 0 && c > 0) {
				document.getElementById("hintbutton12").disabled = true;
				document.getElementById("countdown12").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint12").style.visibility = "visible";
					document.getElementById("hint12result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton13") == 0 && c > 0) {
				document.getElementById("hintbutton13").disabled = true;
				document.getElementById("countdown13").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint13").style.visibility = "visible";
					document.getElementById("hint13result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton14") == 0 && c > 0) {
				document.getElementById("hintbutton14").disabled = true;
				document.getElementById("countdown14").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint14").style.visibility = "visible";
					document.getElementById("hint14result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton15") == 0 && c > 0) {
				document.getElementById("hintbutton15").disabled = true;
				document.getElementById("countdown15").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint15").style.visibility = "visible";
					document.getElementById("hint15result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
		}
	}