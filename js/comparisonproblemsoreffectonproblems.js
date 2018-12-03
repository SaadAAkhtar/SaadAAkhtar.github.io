function check(){
	
	var question1 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems1.value;
	var question2 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems2.value;
	var question3 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems3.value;
	var question4 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems4.value;
	var question5 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems5.value;
	var question6 = document.comparisonproblemsoreffectonproblemspractice.ComparisonProblemsOrEffectOnProblems6.value;
	var correct = 0;
	
	if (question1 == "A") {
		correct++;
	}
	
	if (question2 == "D") {
		correct++;
	}
	
	if (question3 == "D") {
		correct++;
	}
	
	if (question4 == "9/4" || question4 == "2.25") {
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