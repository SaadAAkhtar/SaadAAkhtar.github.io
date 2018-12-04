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
	
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!";
	
}

var myTimer;

	function submitcheck(elem){		
		if (elem <= 8) {
			document.getElementById("after_submit").style.visibility = "visible";
		}else {
			alert("You have submitted " + (elem + 1) + " times. Review your answers thoroughly and try again once the 'Submit Countdown!' has finished.");
			document.getElementById("submitbutton").disabled = true;
			
			myTimer = setInterval(myClock, 1000)
			var c = (60 + 10 * (elem - 9)) + 1;
			
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
		
		if (elem2 > 5 && elem2 <= 10) {
			var c = 61 + (10 * elem2);
		}else if (elem2 > 10 && elem2 <= 20) {
			var c = 61 + (15 * elem2);
		}else if (elem2 > 20) {
			var c = 61 + (20 * elem2);
		}else {
			var c = 91;
		}
		
		function myClock() {
			if (elem.id.localeCompare("hintbutton1") == 0 && c > 0) {
				document.getElementById("hintbutton1").disabled = true;
				document.getElementById("countdown1").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint1").style.visibility = "visible";
					document.getElementById("hint1result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton7") == 0 && c > 0) {
				document.getElementById("hintbutton7").disabled = true;
				document.getElementById("countdown7").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint7").style.visibility = "visible";
					document.getElementById("hint7result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton8") == 0 && c > 0) {
				document.getElementById("hintbutton8").disabled = true;
				document.getElementById("countdown8").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint8").style.visibility = "visible";
					document.getElementById("hint8result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton9") == 0 && c > 0) {
				document.getElementById("hintbutton9").disabled = true;
				document.getElementById("countdown9").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint9").style.visibility = "visible";
					document.getElementById("hint9result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton10") == 0 && c > 0) {
				document.getElementById("hintbutton10").disabled = true;
				document.getElementById("countdown10").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint10").style.visibility = "visible";
					document.getElementById("hint10result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton11") == 0 && c > 0) {
				document.getElementById("hintbutton11").disabled = true;
				document.getElementById("countdown11").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint11").style.visibility = "visible";
					document.getElementById("hint11result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton12") == 0 && c > 0) {
				document.getElementById("hintbutton12").disabled = true;
				document.getElementById("countdown12").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint12").style.visibility = "visible";
					document.getElementById("hint12result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton13") == 0 && c > 0) {
				document.getElementById("hintbutton13").disabled = true;
				document.getElementById("countdown13").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint13").style.visibility = "visible";
					document.getElementById("hint13result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton14") == 0 && c > 0) {
				document.getElementById("hintbutton14").disabled = true;
				document.getElementById("countdown14").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint14").style.visibility = "visible";
					document.getElementById("hint14result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton15") == 0 && c > 0) {
				document.getElementById("hintbutton15").disabled = true;
				document.getElementById("countdown15").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint15").style.visibility = "visible";
					document.getElementById("hint15result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton16") == 0 && c > 0) {
				document.getElementById("hintbutton16").disabled = true;
				document.getElementById("countdown16").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint16").style.visibility = "visible";
					document.getElementById("hint16result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton17") == 0 && c > 0) {
				document.getElementById("hintbutton17").disabled = true;
				document.getElementById("countdown17").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint17").style.visibility = "visible";
					document.getElementById("hint17result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton18") == 0 && c > 0) {
				document.getElementById("hintbutton18").disabled = true;
				document.getElementById("countdown18").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint18").style.visibility = "visible";
					document.getElementById("hint18result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton19") == 0 && c > 0) {
				document.getElementById("hintbutton19").disabled = true;
				document.getElementById("countdown19").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint19").style.visibility = "visible";
					document.getElementById("hint19result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton20") == 0 && c > 0) {
				document.getElementById("hintbutton20").disabled = true;
				document.getElementById("countdown20").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint20").style.visibility = "visible";
					document.getElementById("hint20result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton21") == 0 && c > 0) {
				document.getElementById("hintbutton21").disabled = true;
				document.getElementById("countdown21").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint21").style.visibility = "visible";
					document.getElementById("hint21result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton22") == 0 && c > 0) {
				document.getElementById("hintbutton22").disabled = true;
				document.getElementById("countdown22").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint22").style.visibility = "visible";
					document.getElementById("hint22result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton23") == 0 && c > 0) {
				document.getElementById("hintbutton23").disabled = true;
				document.getElementById("countdown23").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint23").style.visibility = "visible";
					document.getElementById("hint23result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton24") == 0 && c > 0) {
				document.getElementById("hintbutton24").disabled = true;
				document.getElementById("countdown24").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint24").style.visibility = "visible";
					document.getElementById("hint24result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton25") == 0 && c > 0) {
				document.getElementById("hintbutton25").disabled = true;
				document.getElementById("countdown25").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint25").style.visibility = "visible";
					document.getElementById("hint25result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton26") == 0 && c > 0) {
				document.getElementById("hintbutton26").disabled = true;
				document.getElementById("countdown26").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint26").style.visibility = "visible";
					document.getElementById("hint26result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton27") == 0 && c > 0) {
				document.getElementById("hintbutton27").disabled = true;
				document.getElementById("countdown27").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint27").style.visibility = "visible";
					document.getElementById("hint27result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton28") == 0 && c > 0) {
				document.getElementById("hintbutton28").disabled = true;
				document.getElementById("countdown28").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint28").style.visibility = "visible";
					document.getElementById("hint28result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton29") == 0 && c > 0) {
				document.getElementById("hintbutton29").disabled = true;
				document.getElementById("countdown29").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint29").style.visibility = "visible";
					document.getElementById("hint29result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton30") == 0 && c > 0) {
				document.getElementById("hintbutton30").disabled = true;
				document.getElementById("countdown30").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint30").style.visibility = "visible";
					document.getElementById("hint30result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton31") == 0 && c > 0) {
				document.getElementById("hintbutton31").disabled = true;
				document.getElementById("countdown31").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint31").style.visibility = "visible";
					document.getElementById("hint31result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton32") == 0 && c > 0) {
				document.getElementById("hintbutton32").disabled = true;
				document.getElementById("countdown32").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint32").style.visibility = "visible";
					document.getElementById("hint32result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton33") == 0 && c > 0) {
				document.getElementById("hintbutton33").disabled = true;
				document.getElementById("countdown33").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint33").style.visibility = "visible";
					document.getElementById("hint33result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton34") == 0 && c > 0) {
				document.getElementById("hintbutton34").disabled = true;
				document.getElementById("countdown34").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint34").style.visibility = "visible";
					document.getElementById("hint34result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton35") == 0 && c > 0) {
				document.getElementById("hintbutton35").disabled = true;
				document.getElementById("countdown35").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint35").style.visibility = "visible";
					document.getElementById("hint35result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton36") == 0 && c > 0) {
				document.getElementById("hintbutton36").disabled = true;
				document.getElementById("countdown36").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint36").style.visibility = "visible";
					document.getElementById("hint36result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton37") == 0 && c > 0) {
				document.getElementById("hintbutton37").disabled = true;
				document.getElementById("countdown37").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint37").style.visibility = "visible";
					document.getElementById("hint37result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton38") == 0 && c > 0) {
				document.getElementById("hintbutton38").disabled = true;
				document.getElementById("countdown38").innerHTML = --c;
				
				if (c == 0) {
					document.getElementById("hint38").style.visibility = "visible";
					document.getElementById("hint38result").innerHTML = "Hello!";
					clearInterval(myTimer);
				}
			}
		}
	}