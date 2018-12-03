function check(){
	
	var question1 = document.complexfractionspractice.ComplexFractions1.value;
	var correct = 0;
	
	if (question1 == "B") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}