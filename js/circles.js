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
	
	if (question1 == "") {
		correct++;
	}
	
	if (question2 == "") {
		correct++;
	}
	
	if (question3 == "") {
		correct++;
	}
	
	if (question4 == "") {
		correct++;
	}
	
	if (question5 == "") {
		correct++;
	}
	
	if (question6 == "") {
		correct++;
	}
	
	if (question7 == "") {
		correct++;
	}
	
	if (question8 == "") {
		correct++;
	}
	
	if (question9 == "") {
		correct++;
	}
	
	if (question10 == "") {
		correct++;
	}
	
	if (question11 == "") {
		correct++;
	}
	
	if (question12 == "") {
		correct++;
	}
	
	if (question13 == "") {
		correct++;
	}
	
	if (question14 == "") {
		correct++;
	}
	
	if (question15 == "") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}