function check(){
	
	var question1 = document.radicalproblemspractice.RadicalProblems1.value;
	var question2 = document.radicalproblemspractice.RadicalProblems2.value;
	var question3 = document.radicalproblemspractice.RadicalProblems3.value;
	var question4 = document.radicalproblemspractice.RadicalProblems4.value;
	var question5 = document.radicalproblemspractice.RadicalProblems5.value;
	var question6 = document.radicalproblemspractice.RadicalProblems6.value;
	var correct = 0;
	
	if (question1 == "100") {
		correct++;
	}
	
	if (question2 == "C") {
		correct++;
	}
	
	if (question3 == "D") {
		correct++;
	}
	
	if (question4 == "D") {
		correct++;
	}
	
	if (question5 == "C") {
		correct++;
	}
	
	if (question6 == "B") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}