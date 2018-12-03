function check(){
	
	var question1 = document.polynomialequivalenceproblemspractice.PolynomialEquivalenceProblems1.value;
	var question2 = document.polynomialequivalenceproblemspractice.PolynomialEquivalenceProblems2.value;
	var question3 = document.polynomialequivalenceproblemspractice.PolynomialEquivalenceProblems3.value;
	var question4 = document.polynomialequivalenceproblemspractice.PolynomialEquivalenceProblems4.value;
	var correct = 0;
	
	if (question1 == "D") {
		correct++;
	}
	
	if (question2 == "19") {
		correct++;
	}
	
	if (question3 == "B") {
		correct++;
	}
	
	if (question4 == "32") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}