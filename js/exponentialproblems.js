function check(){
	
	var question1 = document.exponentialproblemspractice.ExponentialProblems1.value;
	var question2 = document.exponentialproblemspractice.ExponentialProblems2.value;
	var question3 = document.exponentialproblemspractice.ExponentialProblems3.value;
	var question4 = document.exponentialproblemspractice.ExponentialProblems4.value;
	var question5 = document.exponentialproblemspractice.ExponentialProblems5.value;
	var correct = 0;
	
	if (question1 == "C") {
		correct++;
	}
	
	if (question2 == "B") {
		correct++;
	}
	
	if (question3 == "C") {
		correct++;
	}
	
	if (question4 == "C") {
		correct++;
	}
	
	if (question5 == "30") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}