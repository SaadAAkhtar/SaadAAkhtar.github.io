function check(){
	
	var question1 = document.functionspractice.Functions1.value;
	var question2 = document.functionspractice.Functions2.value;
	var question3 = document.functionspractice.Functions3.value;
	var question4 = document.functionspractice.Functions4.value;
	var question5 = document.functionspractice.Functions5.value;
	var question6 = document.functionspractice.Functions6.value;
	var question7 = document.functionspractice.Functions7.value;
	var question8 = document.functionspractice.Functions8.value;
	var question9 = document.functionspractice.Functions9.value;
	var question10 = document.functionspractice.Functions10.value;
	var question11 = document.functionspractice.Functions11.value;
	var correct = 0;
	
	if (question1 == "A") {
		correct++;
	}
	
	if (question2 == "B") {
		correct++;
	}
	
	if (question3 == "B") {
		correct++;
	}
	
	if (question4 == "D") {
		correct++;
	}
	
	if (question5 == "B") {
		correct++;
	}
	
	if (question6 == "B") {
		correct++;
	}
	
	if (question7 == "9") {
		correct++;
	}
	
	if (question8 == "B") {
		correct++;
	}
	
	if (question9 == "A") {
		correct++;
	}
	
	if (question10 == "D") {
		correct++;
	}
	
	if (question11 == "B") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}