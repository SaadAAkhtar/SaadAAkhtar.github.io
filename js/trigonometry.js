function check(){
	
	var question1 = document.trigonometrypractice.Trigonometry1.value;
	var question2 = document.trigonometrypractice.Trigonometry2.value;
	var question3 = document.trigonometrypractice.Trigonometry3.value;
	var question4 = document.trigonometrypractice.Trigonometry4.value;
	var question5 = document.trigonometrypractice.Trigonometry5.value;
	var question6 = document.trigonometrypractice.Trigonometry6.value;
	var question7 = document.trigonometrypractice.Trigonometry7.value;
	var correct = 0;
	
	if (question1 == "4/5" || question1 == "0.8") {
		correct++;
	}
	
	if (question2 == "3/5" || question1 == "0.6") {
		correct++;
	}
	
	if (question3 == "C") {
		correct++;
	}
	
	if (question4 == "3/5" || question4 == "0.6") {
		correct++;
	}
	
	if (question5 == "4") {
		correct++;
	}
	
	if (question6 == "6") {
		correct++;
	}
	
	if (question7 == "0") {
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
			var c = 5;
		}
		
		function myClock() {
			if (elem.id.localeCompare("hintbutton1") == 0 && c > 0) {
				document.getElementById("hintbutton1").disabled = true;
				document.getElementById("countdown1").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint1").style.visibility = "visible";
					document.getElementById("hint1result").innerHTML = "The complementary angle theorem is applicable here.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "As vertex F corresponds to vertex C, the two angle measures are equal.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "The complementary angle theorem is applicable here.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "The complementary angle theorem is applicable here.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "There are π radians in a 180° angle.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "ΔABC and ΔDBE are both 3-4-5 triangles";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton7") == 0 && c > 0) {
				document.getElementById("hintbutton7").disabled = true;
				document.getElementById("countdown7").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint7").style.visibility = "visible";
					document.getElementById("hint7result").innerHTML = "The complementary angle theorem is applicable here as the sum of the measures of ∠RSW and ∠WST is equal to the measure of ∠RST";
					clearInterval(myTimer);
				}
			}
		}
	}