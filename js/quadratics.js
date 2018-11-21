function check(){
	
	var question1 = document.quadraticspractice.Quadratics1.value;
	var question2 = document.quadraticspractice.Quadratics2.value;
	var question3 = document.quadraticspractice.Quadratics3.value;
	var question4 = document.quadraticspractice.Quadratics4.value;
	var question5 = document.quadraticspractice.Quadratics5.value;
	var question6 = document.quadraticspractice.Quadratics6.value;
	var question7 = document.quadraticspractice.Quadratics7.value;
	var question8 = document.quadraticspractice.Quadratics8.value;
	var question9 = document.quadraticspractice.Quadratics9.value;
	var question10 = document.quadraticspractice.Quadratics10.value;
	var question11 = document.quadraticspractice.Quadratics11.value;
	var question12 = document.quadraticspractice.Quadratics12.value;
	var question13 = document.quadraticspractice.Quadratics13.value;
	var question14 = document.quadraticspractice.Quadratics14.value;
	var question15 = document.quadraticspractice.Quadratics15.value;
	var question16 = document.quadraticspractice.Quadratics16.value;
	var question17 = document.quadraticspractice.Quadratics17.value;
	var question18 = document.quadraticspractice.Quadratics18.value;
	var question19 = document.quadraticspractice.Quadratics19.value;
	var question20 = document.quadraticspractice.Quadratics20.value;
	var question21 = document.quadraticspractice.Quadratics21.value;
	var question22 = document.quadraticspractice.Quadratics22.value;
	var question23 = document.quadraticspractice.Quadratics23.value;
	var question24 = document.quadraticspractice.Quadratics24.value;
	var question25 = document.quadraticspractice.Quadratics25.value;
	var question26 = document.quadraticspractice.Quadratics26.value;
	var question27 = document.quadraticspractice.Quadratics27.value;
	var question28 = document.quadraticspractice.Quadratics28.value;
	var question29 = document.quadraticspractice.Quadratics29.value;
	var question30 = document.quadraticspractice.Quadratics30.value;
	var question31 = document.quadraticspractice.Quadratics31.value;
	var question32 = document.quadraticspractice.Quadratics32.value;
	var question33 = document.quadraticspractice.Quadratics33.value;
	var question34 = document.quadraticspractice.Quadratics34.value;
	var question35 = document.quadraticspractice.Quadratics35.value;
	var question36 = document.quadraticspractice.Quadratics36.value;
	var question37 = document.quadraticspractice.Quadratics37.value;
	var question38 = document.quadraticspractice.Quadratics38.value;
	var correct = 0;
	
	if (question1 == "2") {
		correct++;
	}
	
	if (question2 == "D") {
		correct++;
	}
	
	if (question3 == "D") {
		correct++;
	}
	
	if (question4 == "D") {
		correct++;
	}
	
	if (question5 == "D") {
		correct++;
	}
	
	if (question6 == "D") {
		correct++;
	}
	
	if (question7 == "B") {
		correct++;
	}
	
	if (question8 == "C") {
		correct++;
	}
	
	if (question9 == "A") {
		correct++;
	}
	
	if (question10 == "A") {
		correct++;
	}
	
	if (question11 == "D") {
		correct++;
	}
	
	if (question12 == "C") {
		correct++;
	}
	
	if (question13 == "B") {
		correct++;
	}
	
	if (question14 == "B") {
		correct++;
	}
	
	if (question15 == "C") {
		correct++;
	}
	
	if (question16 == "D") {
		correct++;
	}
	
	if (question17 == "B") {
		correct++;
	}
	
	if (question18 == "C") {
		correct++;
	}
	
	if (question19 == "A") {
		correct++;
	}
	
	if (question20 == "B") {
		correct++;
	}
	
	if (question21 == "A") {
		correct++;
	}
	
	if (question22 == "C") {
		correct++;
	}
	
	if (question23 == "D") {
		correct++;
	}
	
	if (question24 == "5") {
		correct++;
	}
	
	if (question25 == "B") {
		correct++;
	}
	
	if (question26 == "B") {
		correct++;
	}
	
	if (question27 == "B") {
		correct++;
	}
	
	if (question28 == "D") {
		correct++;
	}
	
	if (question29 == "C") {
		correct++;
	}
	
	if (question30 == "A") {
		correct++;
	}
	
	if (question31 == "0" || question31 == "3") {
		correct++;
	}
	
	if (question32 == "B") {
		correct++;
	}
	
	if (question33 == "C") {
		correct++;
	}
	
	if (question34 == "3") {
		correct++;
	}
	
	if (question35 == "B") {
		correct++;
	}
	
	if (question36 == "D") {
		correct++;
	}
	
	if (question37 == "A") {
		correct++;
	}
	
	if (question38 == "2" || question38 == "8") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}