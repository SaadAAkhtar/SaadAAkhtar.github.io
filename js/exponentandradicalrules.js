function check(){
	
	var question1 = document.exponentandradicalrulespractice.ExponentAndRadicalRules1.value;
	var question2 = document.exponentandradicalrulespractice.ExponentAndRadicalRules2.value;
	var question3 = document.exponentandradicalrulespractice.ExponentAndRadicalRules3.value;
	var question4 = document.exponentandradicalrulespractice.ExponentAndRadicalRules4.value;
	var question5 = document.exponentandradicalrulespractice.ExponentAndRadicalRules5.value;
	var question6 = document.exponentandradicalrulespractice.ExponentAndRadicalRules6.value;
	var question7 = document.exponentandradicalrulespractice.ExponentAndRadicalRules7.value;
	var correct = 0;
	
	if (question1 == "A") {
		correct++;
	}
	
	if (question2 == "A") {
		correct++;
	}
	
	if (question3 == "D") {
		correct++;
	}
	
	if (question4 == "D") {
		correct++;
	}
	
	if (question5 == "1" || question5 == "2" || question5 == "4" || question5 == "8" || question5 == "16") {
		correct++;
	}
	
	if (question6 == "D") {
		correct++;
	}
	
	if (question7 == "C") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}