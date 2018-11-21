function check(){
	
	var question1 = document.complexnumberspractice.ComplexNumbers1.value;
	var question2 = document.complexnumberspractice.ComplexNumbers2.value;
	var question3 = document.complexnumberspractice.ComplexNumbers3.value;
	var question4 = document.complexnumberspractice.ComplexNumbers4.value;
	var question5 = document.complexnumberspractice.ComplexNumbers5.value;
	var correct = 0;
	
	if (question1 == "A") {
		correct++;
	}
	
	if (question2 == "C") {
		correct++;
	}
	
	if (question3 == "A") {
		correct++;
	}
	
	if (question4 == "C") {
		correct++;
	}
	
	if (question5 == "D") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}