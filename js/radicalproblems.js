function check(){
	
	var question1 = document.radicalproblemspractice.RadicalProblems1.value;
	var question2 = document.radicalproblemspractice.RadicalProblems2.value;
	var question3 = document.radicalproblemspractice.RadicalProblems3.value;
	var question4 = document.radicalproblemspractice.RadicalProblems4.value;
	var question5 = document.radicalproblemspractice.RadicalProblems5.value;
	var question6 = document.radicalproblemspractice.RadicalProblems6.value;
	var correct = 0;
	var answers = " ";
	
	if (question1 == "100") {
		correct++;
	}else {
		answers += "1 ";
	}
	
	if (question2 == "C") {
		correct++;
	}else {
		answers += "2 ";
	}
	
	if (question3 == "D") {
		correct++;
	}else {
		answers += "3 ";
	}
	
	if (question4 == "D") {
		correct++;
	}else {
		answers += "4 ";
	}
	
	if (question5 == "C") {
		correct++;
	}else {
		answers += "5 ";
	}
	
	if (question6 == "B") {
		correct++;
	}else {
		answers += "6 ";
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
					document.getElementById("hint1result").innerHTML = "In order to get the '5' in '5√2' back under the root, we square the '5', multiply it by the '2' under the root, and put the result under the root.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "We get rid of a square root by squaring both sides of an equation (given that the square root is alone on one side).";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "We get rid of a square root by squaring both sides of an equation (given that the square root is alone on one side).";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "We get rid of a square root by squaring both sides of an equation (given that the square root is alone on one side).";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "Are there any numbers we can simplify before isolating the '√x' on onse side?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "We get rid of a square root by squaring both sides of an equation (given that the square root is alone on one side).";
					clearInterval(myTimer);
				}
			}
		}
	}