function check(){
	
	var question1 = document.geometrypractice.Geometry1.value;
	var question2 = document.geometrypractice.Geometry2.value;
	var question3 = document.geometrypractice.Geometry3.value;
	var question4 = document.geometrypractice.Geometry4.value;
	var question5 = document.geometrypractice.Geometry5.value;
	var question6 = document.geometrypractice.Geometry6.value;
	var question7 = document.geometrypractice.Geometry7.value;
	var question8 = document.geometrypractice.Geometry8.value;
	var question9 = document.geometrypractice.Geometry9.value;
	var question10 = document.geometrypractice.Geometry10.value;
	var question11 = document.geometrypractice.Geometry11.value;
	var question12 = document.geometrypractice.Geometry12.value;
	var question13 = document.geometrypractice.Geometry13.value;
	var question14 = document.geometrypractice.Geometry14.value;
	var question15 = document.geometrypractice.Geometry15.value;
	var question16 = document.geometrypractice.Geometry16.value;
	var question17 = document.geometrypractice.Geometry17.value;
	var correct = 0;
	
	if (question1 == "1600") {
		correct++;
	}
	
	if (question2 == "D") {
		correct++;
	}
	
	if (question3 == "12") {
		correct++;
	}
	
	if (question4 == "6") {
		correct++;
	}
	
	if (question5 == "A") {
		correct++;
	}
	
	if (question6 == "B") {
		correct++;
	}
	
	if (question7 == "105") {
		correct++;
	}
	
	if (question8 == "9") {
		correct++;
	}
	
	if (question9 == "97") {
		correct++;
	}
	
	if (question10 == "B") {
		correct++;
	}
	
	if (question11 == "B") {
		correct++;
	}
	
	if (question12 == "30") {
		correct++;
	}
	
	if (question13 == "B") {
		correct++;
	}
	
	if (question14 == "30") {
		correct++;
	}
	
	if (question15 == "D") {
		correct++;
	}
	
	if (question16 == "C") {
		correct++;
	}
	
	if (question17 == "B") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}