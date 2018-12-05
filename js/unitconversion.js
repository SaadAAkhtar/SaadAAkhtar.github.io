function check(){
	
	var question1 = document.unitconversionpractice.UnitConversion1.value;
	var question2 = document.unitconversionpractice.UnitConversion2.value;
	var question3 = document.unitconversionpractice.UnitConversion3.value;
	var question4 = document.unitconversionpractice.UnitConversion4.value;
	var question5 = document.unitconversionpractice.UnitConversion5.value;
	var question6 = document.unitconversionpractice.UnitConversion6.value;
	var question7 = document.unitconversionpractice.UnitConversion7.value;
	var question8 = document.unitconversionpractice.UnitConversion8.value;
	var question9 = document.unitconversionpractice.UnitConversion9.value;
	var question10 = document.unitconversionpractice.UnitConversion10.value;
	var question11 = document.unitconversionpractice.UnitConversion11.value;
	var question12 = document.unitconversionpractice.UnitConversion12.value;
	var question13 = document.unitconversionpractice.UnitConversion13.value;
	var question14 = document.unitconversionpractice.UnitConversion14.value;
	var question15 = document.unitconversionpractice.UnitConversion15.value;
	var question16 = document.unitconversionpractice.UnitConversion16.value;
	var correct = 0;
	var answers = " ";
	
	if (question1 == "D") {
		correct++;
	}else {
		answers += "1 ";
	}
	
	if (question2 == "96") {
		correct++;
	}else {
		answers += "2 ";
	}
	
	if (question3 == "B") {
		correct++;
	}else {
		answers += "3 ";
	}
	
	if (question4 == "A") {
		correct++;
	}else {
		answers += "4 ";
	}
	
	if (question5 == "14") {
		correct++;
	}else {
		answers += "5 ";
	}
	
	if (question6 == "A") {
		correct++;
	}else {
		answers += "6 ";
	}
	
	if (question7 == "C") {
		correct++;
	}else {
		answers += "7 ";
	}
	
	if (question8 == "C") {
		correct++;
	}else {
		answers += "8 ";
	}
	
	if (question9 == "4.55") {
		correct++;
	}else {
		answers += "9 ";
	}
	
	if (question10 == "B") {
		correct++;
	}else {
		answers += "10 ";
	}
	
	if (question11 == "C") {
		correct++;
	}else {
		answers += "11 ";
	}
	
	if (question12 == "195") {
		correct++;
	}else {
		answers += "12 ";
	}
	
	if (question13 == "B") {
		correct++;
	}else {
		answers += "13 ";
	}
	
	if (question14 == "D") {
		correct++;
	}else {
		answers += "14 ";
	}
	
	if (question15 == "25.4" || question15 == "127/5") {
		correct++;
	}else {
		answers += "15 ";
	}
	
	if (question16 == "576") {
		correct++;
	}else {
		answers += "16 ";
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
					document.getElementById("hint1result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton7") == 0 && c > 0) {
				document.getElementById("hintbutton7").disabled = true;
				document.getElementById("countdown7").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint7").style.visibility = "visible";
					document.getElementById("hint7result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton8") == 0 && c > 0) {
				document.getElementById("hintbutton8").disabled = true;
				document.getElementById("countdown8").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint8").style.visibility = "visible";
					document.getElementById("hint8result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton9") == 0 && c > 0) {
				document.getElementById("hintbutton9").disabled = true;
				document.getElementById("countdown9").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint9").style.visibility = "visible";
					document.getElementById("hint9result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton10") == 0 && c > 0) {
				document.getElementById("hintbutton10").disabled = true;
				document.getElementById("countdown10").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint10").style.visibility = "visible";
					document.getElementById("hint10result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton11") == 0 && c > 0) {
				document.getElementById("hintbutton11").disabled = true;
				document.getElementById("countdown11").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint11").style.visibility = "visible";
					document.getElementById("hint11result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton12") == 0 && c > 0) {
				document.getElementById("hintbutton12").disabled = true;
				document.getElementById("countdown12").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint12").style.visibility = "visible";
					document.getElementById("hint12result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton13") == 0 && c > 0) {
				document.getElementById("hintbutton13").disabled = true;
				document.getElementById("countdown13").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint13").style.visibility = "visible";
					document.getElementById("hint13result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton14") == 0 && c > 0) {
				document.getElementById("hintbutton14").disabled = true;
				document.getElementById("countdown14").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint14").style.visibility = "visible";
					document.getElementById("hint14result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton15") == 0 && c > 0) {
				document.getElementById("hintbutton15").disabled = true;
				document.getElementById("countdown15").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint15").style.visibility = "visible";
					document.getElementById("hint15result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton16") == 0 && c > 0) {
				document.getElementById("hintbutton16").disabled = true;
				document.getElementById("countdown16").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint16").style.visibility = "visible";
					document.getElementById("hint16result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
		}
	}