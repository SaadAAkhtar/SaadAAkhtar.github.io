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
	var answers = " ";
	
	if (question1 == "D") {
		correct++;
	}else {
		answers += "1 ";
	}
	
	if (question2 == "B") {
		correct++;
	}else {
		answers += "2 ";
	}
	
	if (question3 == "1.02") {
		correct++;
	}else {
		answers += "3 ";
	}
	
	if (question4 == "6.11") {
		correct++;
	}else {
		answers += "4 ";
	}
	
	if (question5 == "A") {
		correct++;
	}else {
		answers += "5 ";
	}
	
	if (question6 == "C") {
		correct++;
	}else {
		answers += "6 ";
	}
	
	if (question7 == "C") {
		correct++;
	}else {
		answers += "7 ";
	}
	
	if (question8 == "B") {
		correct++;
	}else {
		answers += "8 ";
	}
	
	if (question9 == "C") {
		correct++;
	}else {
		answers += "9 ";
	}
	
	if (question10 == "C") {
		correct++;
	}else {
		answers += "10 ";
	}
	
	if (question11 == "D") {
		correct++;
	}else {
		answers += "11 ";
	}
	
	if (question12 == "60") {
		correct++;
	}else {
		answers += "12 ";
	}
	
	if (question13 == "C") {
		correct++;
	}else {
		answers += "13 ";
	}
	
	if (question14 == "B") {
		correct++;
	}else {
		answers += "14 ";
	}
	
	if (question15 == "B") {
		correct++;
	}else {
		answers += "15 ";
	}
	
	if (question16 == "0.72") {
		correct++;
	}else {
		answers += "16 ";
	}
	
	if (question17 == "134") {
		correct++;
	}else {
		answers += "17 ";
	}
	
	if (question18 == "B") {
		correct++;
	}else {
		answers += "18 ";
	}
	
	if (question19 == "6") {
		correct++;
	}else {
		answers += "19 ";
	}
	
	if (question20 == "B") {
		correct++;
	}else {
		answers += "20 ";
	}
	
	if (question21 == "1.5" || question21 == "3/2") {
		correct++;
	}else {
		answers += "21 ";
	}
	
	if (question22 == "C") {
		correct++;
	}else {
		answers += "22 ";
	}
	
	if (question23 == "D") {
		correct++;
	}else {
		answers += "23 ";
	}
	
	if (question24 == "8") {
		correct++;
	}else {
		answers += "24 ";
	}
	
	if (question25 == "C") {
		correct++;
	}else {
		answers += "25 ";
	}
	
	if (question26 == "D") {
		correct++;
	}else {
		answers += "26 ";
	}
	
	if (question27 == "B") {
		correct++;
	}else {
		answers += "27 ";
	}
	
	if (question28 == "A") {
		correct++;
	}else {
		answers += "28 ";
	}
	
	if (question29 == "B") {
		correct++;
	}else {
		answers += "29 ";
	}
	
	if (question30 == "A") {
		correct++;
	}else {
		answers += "30 ";
	}
	
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct! These are the questions you missed:" + answers + ".";
	
}

var hintClicks = 0;

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
		
		if (hintClicks > 0) {
			alert("Only one hint countdown can be active at any given time.");
			return;
		}
		
		hintClicks += 1;
		
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
					hintClicks -= 1;
					document.getElementById("hint1").style.visibility = "visible";
					document.getElementById("hint1result").innerHTML = "The sales tax is 8% of the discounted price on top of the discounted price.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton2") == 0 && c > 0) {
				document.getElementById("hintbutton2").disabled = true;
				document.getElementById("countdown2").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint2").style.visibility = "visible";
					document.getElementById("hint2result").innerHTML = "If Type B trees produce x pears, a 20% increase of x pears will not necessarily equal the pears produced by Type A trees.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton3") == 0 && c > 0) {
				document.getElementById("hintbutton3").disabled = true;
				document.getElementById("countdown3").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint3").style.visibility = "visible";
					document.getElementById("hint3result").innerHTML = "At the end of 1 year, the new value of the account is $100 plus 2% of the initial deposit as the interest is compounded annually.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton4") == 0 && c > 0) {
				document.getElementById("hintbutton4").disabled = true;
				document.getElementById("countdown4").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint4").style.visibility = "visible";
					document.getElementById("hint4result").innerHTML = "The two equations you need to form are similar to one another aside from the interest rates.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton5") == 0 && c > 0) {
				document.getElementById("hintbutton5").disabled = true;
				document.getElementById("countdown5").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint5").style.visibility = "visible";
					document.getElementById("hint5result").innerHTML = "Each year, 87% of the previous year's amount remains (essentially, a 13% decrease every year).";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton6") == 0 && c > 0) {
				document.getElementById("hintbutton6").disabled = true;
				document.getElementById("countdown6").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint6").style.visibility = "visible";
					document.getElementById("hint6result").innerHTML = "If 43% of the money earned is used to pay for costs, the remaining 57% is profit.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton7") == 0 && c > 0) {
				document.getElementById("hintbutton7").disabled = true;
				document.getElementById("countdown7").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint7").style.visibility = "visible";
					document.getElementById("hint7result").innerHTML = "The atomic weight of the unknown element is 20% less than the atomic weight of calcium.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton8") == 0 && c > 0) {
				document.getElementById("hintbutton8").disabled = true;
				document.getElementById("countdown8").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint8").style.visibility = "visible";
					document.getElementById("hint8result").innerHTML = "The total number of students inducted can be calculated by adding 7% of the juniors and 5% of the seniors.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton9") == 0 && c > 0) {
				document.getElementById("hintbutton9").disabled = true;
				document.getElementById("countdown9").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint9").style.visibility = "visible";
					document.getElementById("hint9result").innerHTML = "Linear growth is characterized by an increase of a quantity at a constant rate. Exponential growth is characterized by an increase of a quantity at a relative rate; that is, an increase by the same factor over equal increments of time.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton10") == 0 && c > 0) {
				document.getElementById("hintbutton10").disabled = true;
				document.getElementById("countdown10").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint10").style.visibility = "visible";
					document.getElementById("hint10result").innerHTML = "The rectangle is altered by increasing its length L by 10% and decreasing its width W by p% such that the altered length L is 1.1L and the altered width w is (1 - (p / 100)(W) .";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton11") == 0 && c > 0) {
				document.getElementById("hintbutton11").disabled = true;
				document.getElementById("countdown11").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint11").style.visibility = "visible";
					document.getElementById("hint11result").innerHTML = "For the present population to decrease by 10%, it must be multiplied by the factor 0.9 .";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton12") == 0 && c > 0) {
				document.getElementById("hintbutton12").disabled = true;
				document.getElementById("countdown12").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint12").style.visibility = "visible";
					document.getElementById("hint12result").innerHTML = "The original store has 3 shoppers enter per minute, so how many shoppers enter the new store per minute?";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton13") == 0 && c > 0) {
				document.getElementById("hintbutton13").disabled = true;
				document.getElementById("countdown13").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint13").style.visibility = "visible";
					document.getElementById("hint13result").innerHTML = "If Ken's sandwich was x dollars and Paul's sandwich was $1 more, the total price of the sandwiches is 2x + 1.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton14") == 0 && c > 0) {
				document.getElementById("hintbutton14").disabled = true;
				document.getElementById("countdown14").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint14").style.visibility = "visible";
					document.getElementById("hint14result").innerHTML = "Nick's random sample is representative of the entire freshman class.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton15") == 0 && c > 0) {
				document.getElementById("hintbutton15").disabled = true;
				document.getElementById("countdown15").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint15").style.visibility = "visible";
					document.getElementById("hint15result").innerHTML = "To find percent decrease, find the positive difference between two amounts (as in, the result should be positive), divide by the earlier amount (from 2000), and then multiply by 100.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton16") == 0 && c > 0) {
				document.getElementById("hintbutton16").disabled = true;
				document.getElementById("countdown16").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint16").style.visibility = "visible";
					document.getElementById("hint16result").innerHTML = "The equation is an example of exponential decay.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton17") == 0 && c > 0) {
				document.getElementById("hintbutton17").disabled = true;
				document.getElementById("countdown17").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint17").style.visibility = "visible";
					document.getElementById("hint17result").innerHTML = "The stock loses 28% of its value every week.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton18") == 0 && c > 0) {
				document.getElementById("hintbutton18").disabled = true;
				document.getElementById("countdown18").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint18").style.visibility = "visible";
					document.getElementById("hint18result").innerHTML = "The final price of the property occurs after first a 40% discount, then an addition 20% discount off the already discounted price.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton19") == 0 && c > 0) {
				document.getElementById("hintbutton19").disabled = true;
				document.getElementById("countdown19").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint19").style.visibility = "visible";
					document.getElementById("hint19result").innerHTML = "Calculate the time Ms. Simon spends driving from freeway entrance to freeway exit using the formula v = (d / t). The result includes the 33% increase in time.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton20") == 0 && c > 0) {
				document.getElementById("hintbutton20").disabled = true;
				document.getElementById("countdown20").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint20").style.visibility = "visible";
					document.getElementById("hint20result").innerHTML = "Fertilizer A contains 60% filler materials by weight, so it follows that x pounds of Fertilizer A consists of 0.6x pounds of filler materials. This is similarly true for Fertilizer B.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton21") == 0 && c > 0) {
				document.getElementById("hintbutton21").disabled = true;
				document.getElementById("countdown21").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint21").style.visibility = "visible";
					document.getElementById("hint21result").innerHTML = "The total amount, in liters, of a saline solution can be expressed as the liters of each type of saline solution multiplied by the percent of the saline solution.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton22") == 0 && c > 0) {
				document.getElementById("hintbutton22").disabled = true;
				document.getElementById("countdown22").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint22").style.visibility = "visible";
					document.getElementById("hint22result").innerHTML = "According to the table, 63% of survey respondents get most of their medical information from a doctor and 13% get most of their medical information from the Internet.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton23") == 0 && c > 0) {
				document.getElementById("hintbutton23").disabled = true;
				document.getElementById("countdown23").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint23").style.visibility = "visible";
					document.getElementById("hint23result").innerHTML = "To find the percent increase of the customer’s water bill, the absolute increase of the bill, in dollars, is divided by the original amount of the bill.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton24") == 0 && c > 0) {
				document.getElementById("hintbutton24").disabled = true;
				document.getElementById("countdown24").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint24").style.visibility = "visible";
					document.getElementById("hint24result").innerHTML = " The 6 students represent (100 − 15 − 45 − 25)% = 15% of those invited to join the committee.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton25") == 0 && c > 0) {
				document.getElementById("hintbutton25").disabled = true;
				document.getElementById("countdown25").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint25").style.visibility = "visible";
					document.getElementById("hint25result").innerHTML = "The total of Ken’s earnings, in dollars, for the week will be 10x + 80.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton26") == 0 && c > 0) {
				document.getElementById("hintbutton26").disabled = true;
				document.getElementById("countdown26").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint26").style.visibility = "visible";
					document.getElementById("hint26result").innerHTML = "You must calculate 15% of an 8-hour workday in terms of minutes, so you must first convert hours into minutes before you can apply the percentage.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton27") == 0 && c > 0) {
				document.getElementById("hintbutton27").disabled = true;
				document.getElementById("countdown27").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint27").style.visibility = "visible";
					document.getElementById("hint27result").innerHTML = "We don't know the price of the original jacket, but we do know that it's price, in addition to a 6% sales tax, equals $53 .";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton28") == 0 && c > 0) {
				document.getElementById("hintbutton28").disabled = true;
				document.getElementById("countdown28").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint28").style.visibility = "visible";
					document.getElementById("hint28result").innerHTML = "Because the world’s population has grown at an average rate of 1.9% per year since 1945, it follows that the world’s population has been growing by a constant factor of 1.019 since 1945.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton29") == 0 && c > 0) {
				document.getElementById("hintbutton29").disabled = true;
				document.getElementById("countdown29").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint29").style.visibility = "visible";
					document.getElementById("hint29result").innerHTML = "After calculating the percent increase from 2012 to 2013, you can find out the percent increase from 2013 to 2014 via the information provided.";
					clearInterval(myTimer);
				}
			}
			
			if (elem.id.localeCompare("hintbutton30") == 0 && c > 0) {
				document.getElementById("hintbutton30").disabled = true;
				document.getElementById("countdown30").innerHTML = --c;
				
				if (c == 0) {
					hintClicks -= 1;
					document.getElementById("hint30").style.visibility = "visible";
					document.getElementById("hint30result").innerHTML = "Since x is the number of years since 1985, the year 2000 corresponds to x = 15 and the year 2003 corresponds to x = 18. The corresponding points on the line of best fit are approximately (15, 98) and (18, 107).";
					clearInterval(myTimer);
				}
			}
		}
	}