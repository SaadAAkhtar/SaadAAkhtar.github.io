function check(){
	
	var question1 = document.polynomialequivalenceproblemspractice.PolynomialEquivalenceProblems1.value;
	var question2 = document.polynomialequivalenceproblemspractice.PolynomialEquivalenceProblems2.value;
	var question3 = document.polynomialequivalenceproblemspractice.PolynomialEquivalenceProblems3.value;
	var question4 = document.polynomialequivalenceproblemspractice.PolynomialEquivalenceProblems4.value;
	var correct = 0;
	var answers = " ";
	
	if (question1 == "D") {
		correct++;
	}else {
		answers += "1 ";
	}
	
	if (question2 == "19") {
		correct++;
	}else {
		answers += "2 ";
	}
	
	if (question3 == "B") {
		correct++;
	}else {
		answers += "3 ";
	}
	
	if (question4 == "32") {
		correct++;
	}else {
		answers += "4 ";
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
					document.getElementById("hint1result").innerHTML = "FOIL the left-hand side of the equation and manipulate it such that the left-hand terms are in the same order as the right-hand terms. Then, form your equations after comparing both sides.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "Expand the left-hand side until all left-hand terms are properly combined. Then, compare the middle terms of both equations sides.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "We make the left-hand side of the equation similar to the right-hand side by using polynomial division on the left-hand side.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "Add the polynomial equations to one another before comparing the result to the given form.";
					clearInterval(myTimer);
				}
			}
		}
	}