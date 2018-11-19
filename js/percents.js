function check(){
	
	var question1 = document.percentspractice.Percents1.value;
	var question2 = document.percentspractice.Percents2.value;
	var question3 = document.percentspractice.Percents3.value;
	var question4 = document.percentspractice.Percents4.value;
	var question5 = document.percentspractice.Percents5.value;
	var question6 = document.percentspractice.Percents6.value;
	var question7 = document.percentspractice.Percents7.value;
	var question8 = document.percentspractice.Percents8.value;
	var question9 = document.percentspractice.Percents9.value;
	var question10 = document.percentspractice.Percents10.value;
	var question11 = document.percentspractice.Percents11.value;
	var question12 = document.percentspractice.Percents12.value;
	var question13 = document.percentspractice.Percents13.value;
	var question14 = document.percentspractice.Percents14.value;
	var question15 = document.percentspractice.Percents15.value;
	var question16 = document.percentspractice.Percents16.value;
	var question17 = document.percentspractice.Percents17.value;
	var question18 = document.percentspractice.Percents18.value;
	var question19 = document.percentspractice.Percents19.value;
	var question20 = document.percentspractice.Percents20.value;
	var question21 = document.percentspractice.Percents21.value;
	var question22 = document.percentspractice.Percents22.value;
	var question23 = document.percentspractice.Percents23.value;
	var question24 = document.percentspractice.Percents24.value;
	var question25 = document.percentspractice.Percents25.value;
	var question26 = document.percentspractice.Percents26.value;
	var question27 = document.percentspractice.Percents27.value;
	var question28 = document.percentspractice.Percents28.value;
	var question29 = document.percentspractice.Percents29.value;
	var question30 = document.percentspractice.Percents30.value;
	var correct = 0;
	
	if (question1 == "D") {
		correct++;
	}
	
	if (question2 == "B") {
		correct++;
	}
	
	if (question3 == "1.02") {
		correct++;
	}
	
	if (question4 == "6.11") {
		correct++;
	}
	
	if (question5 == "A") {
		correct++;
	}
	
	if (question6 == "C") {
		correct++;
	}
	
	if (question7 == "C") {
		correct++;
	}
	
	if (question8 == "B") {
		correct++;
	}
	
	if (question9 == "C") {
		correct++;
	}
	
	if (question10 == "C") {
		correct++;
	}
	
	if (question11 == "D") {
		correct++;
	}
	
	if (question12 == "60") {
		correct++;
	}
	
	if (question13 == "C") {
		correct++;
	}
	
	if (question14 == "B") {
		correct++;
	}
	
	if (question15 == "B") {
		correct++;
	}
	
	if (question16 == "0.72") {
		correct++;
	}
	
	if (question17 == "134") {
		correct++;
	}
	
	if (question18 == "B") {
		correct++;
	}
	
	if (question19 == "6") {
		correct++;
	}
	
	if (question20 == "B") {
		correct++;
	}
	
	if (question21 == "1.5" || question21 == "3/2") {
		correct++;
	}
	
	if (question22 == "C") {
		correct++;
	}
	
	if (question23 == "D") {
		correct++;
	}
	
	if (question24 == "8") {
		correct++;
	}
	
	if (question25 == "C") {
		correct++;
	}
	
	if (question26 == "D") {
		correct++;
	}
	
	if (question27 == "B") {
		correct++;
	}
	
	if (question28 == "A") {
		correct++;
	}
	
	if (question29 == "B") {
		correct++;
	}
	
	if (question30 == "A") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}