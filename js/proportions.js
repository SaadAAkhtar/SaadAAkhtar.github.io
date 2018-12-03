function check(){
	
	var question1 = document.proportionspractice.Proportions1.value;
	var question2 = document.proportionspractice.Proportions2.value;
	var question3 = document.proportionspractice.Proportions3.value;
	var question4 = document.proportionspractice.Proportions4.value;
	var question5 = document.proportionspractice.Proportions5.value;
	var question6 = document.proportionspractice.Proportions6.value;
	var question7 = document.proportionspractice.Proportions7.value;
	var question8 = document.proportionspractice.Proportions8.value;
	var question9 = document.proportionspractice.Proportions9.value;
	var question10 = document.proportionspractice.Proportions10.value;
	var question11 = document.proportionspractice.Proportions11.value;
	var question12 = document.proportionspractice.Proportions12.value;
	var correct = 0;
	
	if (question1 == "D") {
		correct++;
	}
	
	if (question2 == "B") {
		correct++;
	}
	
	if (question3 == "B") {
		correct++;
	}
	
	if (question4 == "B") {
		correct++;
	}
	
	if (question5 == "C") {
		correct++;
	}
	
	if (question6 == "25") {
		correct++;
	}
	
	if (question7 == "A") {
		correct++;
	}
	
	if (question8 == "1492") {
		correct++;
	}
	
	if (question9 == "29/3" || question9 == "9.66" || question9 == "9.67") {
		correct++;
	}
	
	if (question10 == "B") {
		correct++;
	}
	
	if (question11 == "B") {
		correct++;
	}
	
	if (question12 == "102") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}