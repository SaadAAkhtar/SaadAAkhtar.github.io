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