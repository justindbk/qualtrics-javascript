/*Qualtrics Javascript to randomly choose 5 treatments from a large array of 15 and then set 5 embedded variables called "first_article", "second_article", etc. to those randomized options. NOTE: Qualtrics user must create the 'first_article', 'second_article', etc. embedded variables in Survey Flow (and keep values set to blank) before this Javascript appears to respondents.*/

Qualtrics.SurveyEngine.addOnload(function(){
	function shuffle(array){
		var counter = array.length,
			temp, index;
		while (counter > 0){
			index = Math.floor(Math.random() * counter);
			counter = counter-1
			temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}
		return array;
	}
	var myArray=["treatment1", "treatment2", "treatment3", "treatment4", "treatment5", "treatment6", "treatment7", "treatment8", "treatment9", "treatment10", "treatment11", "treatment12", "treatment13", "treatment14", "treatment15"];
	shuffle(myArray);
	Qualtrics.SurveyEngine.setEmbeddedData("first_article",myArray[0]);
	Qualtrics.SurveyEngine.setEmbeddedData("second_article",myArray[1]);
	Qualtrics.SurveyEngine.setEmbeddedData("third_article",myArray[2]);
	Qualtrics.SurveyEngine.setEmbeddedData("fourth_article",myArray[3]);
	Qualtrics.SurveyEngine.setEmbeddedData("fifth_article",myArray[4]);

});