function check(){
	
	var question1 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics1.value;
	var question2 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics2.value;
	var question3 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics3.value;
	var question4 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics4.value;
	var question5 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics5.value;
	var question6 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics6.value;
	var question7 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics7.value;
	var question8 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics8.value;
	var question9 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics9.value;
	var question10 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics10.value;
	var question11 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics11.value;
	var question12 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics12.value;
	var correct = 0;
	var answers = " ";
	
	if (question1 == "3") {
		correct++;
	}else {
		answers += "1 ";
	}
	
	if (question2 == "A") {
		correct++;
	}else {
		answers += "2 ";
	}
	
	if (question3 == "D") {
		correct++;
	}else {
		answers += "3 ";
	}
	
	if (question4 == "B") {
		correct++;
	}else {
		answers += "4 ";
	}
	
	if (question5 == "1" || question5 == "2") {
		correct++;
	}else {
		answers += "5 ";
	}
	
	if (question6 == "5") {
		correct++;
	}else {
		answers += "6 ";
	}
	
	if (question7 == "B") {
		correct++;
	}else {
		answers += "7 ";
	}
	
	if (question8 == "B") {
		correct++;
	}else {
		answers += "8 ";
	}
	
	if (question9 == "B") {
		correct++;
	}else {
		answers += "9 ";
	}
	
	if (question10 == "D") {
		correct++;
	}else {
		answers += "10 ";
	}
	
	if (question11 == "D") {
		correct++;
	}else {
		answers += "11 ";
	}
	
	if (question12 == "D") {
		correct++;
	}else {
		answers += "12 ";
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
					document.getElementById("hint1result").innerHTML = "A fraction is undefined when the denominator is equal to 0 as you cannot divide by 0.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "You can perform ordinary factoring on this expression.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "Carry out polynomial division. Remember to include the remainder in your answer.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "You don't have to divide to completion. When divided by a, 24 becomes -8, so what is a?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "Get all numbers and variables on one side before performing 'pull out' factoring followed by ordinary factoring.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "Perform factoring by grouping.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton7") == 0 && c > 0) {
				document.getElementById("hintbutton7").disabled = true;
				document.getElementById("countdown7").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint7").style.visibility = "visible";
					document.getElementById("hint7result").innerHTML = "Factor f(x) via 'pull out' to obtain an equation of the form f(x) = 2x * g(x) . Substitute f(x) with 2x * g(x) for each answer choice.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton8") == 0 && c > 0) {
				document.getElementById("hintbutton8").disabled = true;
				document.getElementById("countdown8").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint8").style.visibility = "visible";
					document.getElementById("hint8result").innerHTML = "Substitute z and y before performing 'pull out' factoring and ordinary factoring.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton9") == 0 && c > 0) {
				document.getElementById("hintbutton9").disabled = true;
				document.getElementById("countdown9").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint9").style.visibility = "visible";
					document.getElementById("hint9result").innerHTML = "Which answer choice can be 'multiplied out' (a.k.a FOIL) such that we obtain the given equation?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton10") == 0 && c > 0) {
				document.getElementById("hintbutton10").disabled = true;
				document.getElementById("countdown10").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint10").style.visibility = "visible";
					document.getElementById("hint10result").innerHTML = "Carry out polynomial division. Remember to include the remainder in your answer.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton11") == 0 && c > 0) {
				document.getElementById("hintbutton11").disabled = true;
				document.getElementById("countdown11").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint11").style.visibility = "visible";
					document.getElementById("hint11result").innerHTML = "Carry out polynomial division. Remember to include the remainder in your answer.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton12") == 0 && c > 0) {
				document.getElementById("hintbutton12").disabled = true;
				document.getElementById("countdown12").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint12").style.visibility = "visible";
					document.getElementById("hint12result").innerHTML = "Put f(x) over g(x) in a fraction. Is there anything you can cancel out once you've factored the resulting expression?";
					clearInterval(myTimer);
				}
			}
		}
	}