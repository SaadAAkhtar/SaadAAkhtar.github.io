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
	var answers = " ";
	
	if (question1 == "1600") {
		correct++;
	}else {
		answers += "1 ";
	}
	
	if (question2 == "D") {
		correct++;
	}else {
		answers += "2 ";
	}
	
	if (question3 == "12") {
		correct++;
	}else {
		answers += "3 ";
	}
	
	if (question4 == "6") {
		correct++;
	}else {
		answers += "4 ";
	}
	
	if (question5 == "A") {
		correct++;
	}else {
		answers += "5 ";
	}
	
	if (question6 == "B") {
		correct++;
	}else {
		answers += "6 ";
	}
	
	if (question7 == "105") {
		correct++;
	}else {
		answers += "7 ";
	}
	
	if (question8 == "9") {
		correct++;
	}else {
		answers += "8 ";
	}
	
	if (question9 == "97") {
		correct++;
	}else {
		answers += "9 ";
	}
	
	if (question10 == "B") {
		correct++;
	}else {
		answers += "10 ";
	}
	
	if (question11 == "B") {
		correct++;
	}else {
		answers += "11 ";
	}
	
	if (question12 == "30") {
		correct++;
	}else {
		answers += "12 ";
	}
	
	if (question13 == "B") {
		correct++;
	}else {
		answers += "13 ";
	}
	
	if (question14 == "30") {
		correct++;
	}else {
		answers += "14 ";
	}
	
	if (question15 == "D") {
		correct++;
	}else {
		answers += "15 ";
	}
	
	if (question16 == "C") {
		correct++;
	}else {
		answers += "16 ";
	}
	
	if (question17 == "B") {
		correct++;
	}else {
		answers += "17 ";
	}
	
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct! These are the questions you missed:" + answers + ".";
	
}

var hintClicks = 0;

var myTimer;

	function submitcheck(elem){		
		if (elem <= 1) {
			document.getElementById("after_submit").style.visibility = "visible";
		}else {
			alert("You have submitted " + (elem + 1) + " times. Review your answers thoroughly and try again once the 'Submit Countdown!' has finished.");
			document.getElementById("submitbutton").disabled = true;
			
			myTimer = setInterval(myClock, 1000)
			var c = (60 + 10 * (elem - 2)) + 1;
			
			function myClock() {
				document.getElementById("submitcountdown").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("submitbutton").disabled = false;
					clearInterval(myTimer);
				}
			}
		}
	}

	function clock(elem, elem2) {
		myTimer = setInterval(myClock, 1000);
		
		if (hintClicks > 0) {
			alert("Only one hint countdown can be active at any given time.");
			return;
		}
		
		hintClicks += 1;
		
		if (elem2 > 5 && elem2 <= 10) {
			var c = 91 + (10 * elem2);
		}else if (elem2 > 10 && elem2 <= 20) {
			var c = 91 + (15 * elem2);
		}else if (elem2 > 20) {
			var c = 91 + (20 * elem2);
		}else {
			var c = 121;
		}
		
		function myClock() {
			if (elem.id.localeCompare("hintbutton1") == 0 && c > 0) {
				document.getElementById("hintbutton1").disabled = true;
				document.getElementById("countdown1").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint1").style.visibility = "visible";
					document.getElementById("hint1result").innerHTML = "∠ABE equals ∠DBC as they are vertical angles.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "Using alternate interior angles and vertical angles, several angles can be related to each other.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "Are there any alternate interior angles in this figure?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "There is a special right triangle in this figure that can inform us of the measure of ∠AOB.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "If you don't know the area formula for some unusual shape, split up the unusual shape into shapes you can figure out the area of such as triangles, squares, and retangles.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "Apply the properties of vertical angles to the figure.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton7") == 0 && c > 0) {
				document.getElementById("hintbutton7").disabled = true;
				document.getElementById("countdown7").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint7").style.visibility = "visible";
					document.getElementById("hint7result").innerHTML = "If two sides of a single triangle are equal to one another, that means their corresponding angles are equal to one another.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton8") == 0 && c > 0) {
				document.getElementById("hintbutton8").disabled = true;
				document.getElementById("countdown8").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint8").style.visibility = "visible";
					document.getElementById("hint8result").innerHTML = "Since the three shelves of the triangular shelf system are parallel, the three triangles in the figure are similar.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton9") == 0 && c > 0) {
				document.getElementById("hintbutton9").disabled = true;
				document.getElementById("countdown9").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint9").style.visibility = "visible";
					document.getElementById("hint9result").innerHTML = "Apply your knowledge of triangle angles and supplementary angles.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton10") == 0 && c > 0) {
				document.getElementById("hintbutton10").disabled = true;
				document.getElementById("countdown10").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint10").style.visibility = "visible";
					document.getElementById("hint10result").innerHTML = "There is at least one special right traingle in this figure.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton11") == 0 && c > 0) {
				document.getElementById("hintbutton11").disabled = true;
				document.getElementById("countdown11").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint11").style.visibility = "visible";
					document.getElementById("hint11result").innerHTML = "A cube has 6 square surfaces that compose the surface area.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton12") == 0 && c > 0) {
				document.getElementById("hintbutton12").disabled = true;
				document.getElementById("countdown12").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint12").style.visibility = "visible";
					document.getElementById("hint12result").innerHTML = "The two triangles shown have corresponding angles.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton13") == 0 && c > 0) {
				document.getElementById("hintbutton13").disabled = true;
				document.getElementById("countdown13").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint13").style.visibility = "visible";
					document.getElementById("hint13result").innerHTML = "Which angle is equal to angle A?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton14") == 0 && c > 0) {
				document.getElementById("hintbutton14").disabled = true;
				document.getElementById("countdown14").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint14").style.visibility = "visible";
					document.getElementById("hint14result").innerHTML = "Apply your knowledge of triangle angles, supplementary angles, and isosceles triangles.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton15") == 0 && c > 0) {
				document.getElementById("hintbutton15").disabled = true;
				document.getElementById("countdown15").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint15").style.visibility = "visible";
					document.getElementById("hint15result").innerHTML = "What formula do you use to find the number of degrees in a polygon with n sides?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton16") == 0 && c > 0) {
				document.getElementById("hintbutton16").disabled = true;
				document.getElementById("countdown16").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint16").style.visibility = "visible";
					document.getElementById("hint16result").innerHTML = "Apply your knowledge of triangle angles, supplementary angles, and isosceles triangles.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton17") == 0 && c > 0) {
				document.getElementById("hintbutton17").disabled = true;
				document.getElementById("countdown17").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint17").style.visibility = "visible";
					document.getElementById("hint17result").innerHTML = "Apply your knowledge of interior angles, triangles angles, and supplementary angles.";
					clearInterval(myTimer);
				}
			}
		}
	}