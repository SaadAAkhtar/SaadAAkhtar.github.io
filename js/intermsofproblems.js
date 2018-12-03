function check(){
	
	var question1 = document.intermsofproblemspractice.InTermsOfProblems1.value;
	var question2 = document.intermsofproblemspractice.InTermsOfProblems2.value;
	var question3 = document.intermsofproblemspractice.InTermsOfProblems3.value;
	var question4 = document.intermsofproblemspractice.InTermsOfProblems4.value;
	var question5 = document.intermsofproblemspractice.InTermsOfProblems5.value;
	var question6 = document.intermsofproblemspractice.InTermsOfProblems6.value;
	var question7 = document.intermsofproblemspractice.InTermsOfProblems7.value;
	var question8 = document.intermsofproblemspractice.InTermsOfProblems8.value;
	var question9 = document.intermsofproblemspractice.InTermsOfProblems9.value;
	var question10 = document.intermsofproblemspractice.InTermsOfProblems10.value;
	var question11 = document.intermsofproblemspractice.InTermsOfProblems11.value;
	var correct = 0;
	
	if (question1 == "B") {
		correct++;
	}
	
	if (question2 == "A") {
		correct++;
	}
	
	if (question3 == "B") {
		correct++;
	}
	
	if (question4 == "B") {
		correct++;
	}
	
	if (question5 == "B") {
		correct++;
	}
	
	if (question6 == "A") {
		correct++;
	}
	
	if (question7 == "C") {
		correct++;
	}
	
	if (question8 == "B") {
		correct++;
	}
	
	if (question9 == "A") {
		correct++;
	}
	
	if (question10 == "B") {
		correct++;
	}
	
	if (question11 == "A") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}