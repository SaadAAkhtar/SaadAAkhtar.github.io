function check(){
	
	var question1 = document.inequalitiespractice.Inequalities1.value;
	var question2 = document.inequalitiespractice.Inequalities2.value;
	var question3 = document.inequalitiespractice.Inequalities3.value;
	var question4 = document.inequalitiespractice.Inequalities4.value;
	var question5 = document.inequalitiespractice.Inequalities5.value;
	var question6 = document.inequalitiespractice.Inequalities6.value;
	var question7 = document.inequalitiespractice.Inequalities7.value;
	var question8 = document.inequalitiespractice.Inequalities8.value;
	var question9 = document.inequalitiespractice.Inequalities9.value;
	var question10 = document.inequalitiespractice.Inequalities10.value;
	var question11 = document.inequalitiespractice.Inequalities11.value;
	var question12 = document.inequalitiespractice.Inequalities12.value;
	var question13 = document.inequalitiespractice.Inequalities13.value;
	var correct = 0;
	
	if (question1 == "A") {
		correct++;
	}
	
	if (question2 == "A") {
		correct++;
	}
	
	if (question3 == "C") {
		correct++;
	}
	
	if (question4 >= "4" && question4 <= "6") {
		correct++;
	}
	
	if (question5 == "D") {
		correct++;
	}
	
	if (question6 == "4" || question6 == "5") {
		correct++;
	}
	
	if (question7 == "A") {
		correct++;
	}
	
	if (question8 == "C") {
		correct++;
	}
	
	if (question9 == "D") {
		correct++;
	}
	
	if (question10 == "C") {
		correct++;
	}
	
	if (question11 == "A") {
		correct++;
	}
	
	if (question12 == "C") {
		correct++;
	}
	
	if (question13 == "B") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}