function check(){
	
	var question1 = document.absolutevaluespractice.AbsoluteValues1.value;
	var question2 = document.absolutevaluespractice.AbsoluteValues2.value;
	var question3 = document.absolutevaluespractice.AbsoluteValues3.value;
	var correct = 0;
	
	if (question1 == "D") {
		correct++;
	}
	
	if (question2 == "A") {
		correct++;
	}
	
	if (question3 == "A") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}