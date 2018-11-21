function check(){
	
	var question1 = document.circlespractice.Circles1.value;
	var question2 = document.circlespractice.Circles2.value;
	var question3 = document.circlespractice.Circles3.value;
	var question4 = document.circlespractice.Circles4.value;
	var question5 = document.circlespractice.Circles5.value;
	var question6 = document.circlespractice.Circles6.value;
	var question7 = document.circlespractice.Circles7.value;
	var question8 = document.circlespractice.Circles8.value;
	var question9 = document.circlespractice.Circles9.value;
	var question10 = document.circlespractice.Circles10.value;
	var question11 = document.circlespractice.Circles11.value;
	var question12 = document.circlespractice.Circles12.value;
	var question13 = document.circlespractice.Circles13.value;
	var question14 = document.circlespractice.Circles14.value;
	var question15 = document.circlespractice.Circles15.value;
	var correct = 0;
	
	if (question1 == "A") {
		correct++;
	}
	
	if (question2 == "A") {
		correct++;
	}
	
	if (question3 == "32") {
		correct++;
	}
	
	if (question4 == "5/8" || question4 == ".625" || question4 == "0.625") {
		correct++;
	}
	
	if (question5 == "C") {
		correct++;
	}
	
	if (question6 == "29" || question6 == "30" || question6 == "31" || question6 == "32" || question6 == "33" || question6 == "34") {
		correct++;
	}
	
	if (question7 == "A") {
		correct++;
	}
	
	if (question8 == "B") {
		correct++;
	}
	
	if (question9 == "80") {
		correct++;
	}
	
	if (question10 == "1/6" || question10 == ".166" || question10 == ".167" || question10 == "0.166" || question10 == "0.167") {
		correct++;
	}
	
	if (question11 == "A") {
		correct++;
	}
	
	if (question12 == "D") {
		correct++;
	}
	
	if (question13 == "5/18" || question13 == ".277" || question13 == ".278" || question13 == "0.277" || question13 == "0.278") {
		correct++;
	}
	
	if (question14 == "A") {
		correct++;
	}
	
	if (question15 == "144") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}