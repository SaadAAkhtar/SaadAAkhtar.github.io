function check(){
	
	var question1 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics1.value;
	var question2 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics2.value;
	var question3 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics3.value;
	var question4 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics4.value;
	var question5 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics5.value;
	var question6 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics6.value;
	var question7 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics7.value;
	var question8 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics8.value;
	var question9 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics9.value;
	var question10 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics10.value;
	var question11 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics11.value;
	var question12 = document.factoringandrelatedtopicspractice.FactoringandRelatedTopics12.value;
	var correct = 0;
	
	if (question1 == "3") {
		correct++;
	}
	
	if (question2 == "A") {
		correct++;
	}
	
	if (question3 == "D") {
		correct++;
	}
	
	if (question4 == "B") {
		correct++;
	}
	
	if (question5 == "1" || question5 == "2") {
		correct++;
	}
	
	if (question6 == "5") {
		correct++;
	}
	
	if (question7 == "B") {
		correct++;
	}
	
	if (question8 == "B") {
		correct++;
	}
	
	if (question9 == "B") {
		correct++;
	}
	
	if (question10 == "D") {
		correct++;
	}
	
	if (question11 == "D") {
		correct++;
	}
	
	if (question12 == "D") {
		correct++;
	}
	
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}