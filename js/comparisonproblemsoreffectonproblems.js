function check(){
	
	var question1 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems1.value;
	var question2 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems2.value;
	var question3 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems3.value;
	var question4 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems4.value;
	var question5 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems5.value;
	var question6 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems6.value;
	var correct = 0;
	var answers = " ";
	
	if (question1 == "A") {
		correct++;
	}else {
		answers += "1 ";
	}
	
	if (question2 == "D") {
		correct++;
	}else {
		answers += "2 ";
	}
	
	if (question3 == "D") {
		correct++;
	}else {
		answers += "3 ";
	}
	
	if (question4 == "9/4" || question4 == "2.25") {
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
					document.getElementById("hint1result").innerHTML = "Perform the first step of the four steps except isolate r as that variable is the point of comparison. Next, the intensity is 16 times stronger, so where does the '16' fit into the equation?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "You could either do carry out the four steps for each option or you could graph the function. According to the graph, how much does C rise for every one unit increase in F?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "If we're looking for how much additional money was generated, how do we compare the equation when r = 5 and the equation when r = 3 ?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "Perform the first step of the four steps as variable q is the point of comparison. Next, the velocity is 1.5 times faster, so where does the '1.5' fit into the equation?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "Refer to the formula sheet for the correct volume formula. Volume is the point of comparison where the radius is twice as long, so where does the '2' fit into the equation?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "When n is increased by 1, by how much does t increase?";
					clearInterval(myTimer);
				}
			}
		}
	}