/*Qualtrics Javascript to choose 5 cities from a large array of more than 5 and then set 5 embedded variables called "first_city", "second_city", etc. to those randomized city values*/

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
	var myArray=["Oakland", "Boston", "New Orleans", "Minneapolis", "Chicago", "Austin", "Dallas", "Jacksonville", "Phoenix", "Missoula"];
	shuffle(myArray);
	Qualtrics.SurveyEngine.setEmbeddedData("first_city",myArray[0]);
	Qualtrics.SurveyEngine.setEmbeddedData("second_city",myArray[1]);
	Qualtrics.SurveyEngine.setEmbeddedData("third_city",myArray[2]);
	Qualtrics.SurveyEngine.setEmbeddedData("fourth_city",myArray[3]);
	Qualtrics.SurveyEngine.setEmbeddedData("fifth_city",myArray[4]);
	Qualtrics.SurveyEngine.setEmbeddedData("sixth_city",myArray[5]);

});