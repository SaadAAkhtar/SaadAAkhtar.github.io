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
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}

var myTimer;
	function clock(elem, elem2) {
		myTimer = setInterval(myClock, 1000);
		
		if (elem2 > 5 && elem2 <= 10) {
			var c = 61 + (10 * elem2);
		}else if (elem2 > 10 && elem2 <= 25) {
			var c = 61 + (15 * elem2);
		}else if (elem2 > 25) {
			var c = 61 + (20 * elem2);
		}else {
			var c = 91;
		}
		
		function myClock() {
			if (elem.id == "hintbutton1") {
				document.getElementById("hintbutton1").disabled = true;
				document.getElementById("countdown1").innerHTML = --c;
				if (c == 0) {
					document.getElementById("hint1").style.visibility = "visible";
					document.getElementById("hint1result").innerHTML = "The complementary angle theorem is applicable here.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id == "hintbutton2") {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				if (c == 0) {
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "As vertex F corresponds to vertex C, the two angle measures are equal.";
					clearInterval(myTimer);
				}
			}
		}
	}