/*Qualtrics Javascript to choose 1 treatment conditions from a large array of n options for condition and then set an embedded variable called "treatment" to that randomized condition*/

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
	var myArray=["treatment1", "treatment2", "treatment3", "treatment4", "treatment5", "treatment6", "treatment7", "treatment8", "treatment9", "treatment10", "treatment11", "treatment12", "treatment13", "treatment14", "control"];
	shuffle(myArray);
	Qualtrics.SurveyEngine.setEmbeddedData("treatment",myArray[0]);

});