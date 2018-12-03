function check(){
	
	var question1 = document.unitconversionpractice.UnitConversion1.value;
	var question2 = document.unitconversionpractice.UnitConversion2.value;
	var question3 = document.unitconversionpractice.UnitConversion3.value;
	var question4 = document.unitconversionpractice.UnitConversion4.value;
	var question5 = document.unitconversionpractice.UnitConversion5.value;
	var question6 = document.unitconversionpractice.UnitConversion6.value;
	var question7 = document.unitconversionpractice.UnitConversion7.value;
	var question8 = document.unitconversionpractice.UnitConversion8.value;
	var question9 = document.unitconversionpractice.UnitConversion9.value;
	var question10 = document.unitconversionpractice.UnitConversion10.value;
	var question11 = document.unitconversionpractice.UnitConversion11.value;
	var question12 = document.unitconversionpractice.UnitConversion12.value;
	var question13 = document.unitconversionpractice.UnitConversion13.value;
	var question14 = document.unitconversionpractice.UnitConversion14.value;
	var question15 = document.unitconversionpractice.UnitConversion15.value;
	var question16 = document.unitconversionpractice.UnitConversion16.value;
	var correct = 0;
	
	if (question1 == "D") {
		correct++;
	}
	
	if (question2 == "96") {
		correct++;
	}
	
	if (question3 == "B") {
		correct++;
	}
	
	if (question4 == "A") {
		correct++;
	}
	
	if (question5 == "14") {
		correct++;
	}
	
	if (question6 == "A") {
		correct++;
	}
	
	if (question7 == "C") {
		correct++;
	}
	
	if (question8 == "C") {
		correct++;
	}
	
	if (question9 == "4.55") {
		correct++;
	}
	
	if (question10 == "B") {
		correct++;
	}
	
	if (question11 == "C") {
		correct++;
	}
	
	if (question12 == "195") {
		correct++;
	}
	
	if (question13 == "B") {
		correct++;
	}
	
	if (question14 == "D") {
		correct++;
	}
	
	if (question15 == "25.4" || question15 == "127/5") {
		correct++;
	}
	
	if (question16 == "576") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}