/*Qualtrics Javascript to randomize, within a block determined by a user-inputted answer to a survey question, 1 treatment condition from a large array of n options for condition and then set an embedded variable called "treatment" to that randomized condition. In this example, this code will block-randomize by eye color, which is a survey question earlier in the survey (before the Javascript and the treatment) NOTE: Qualtrics user must create the survey question for eye color (in this case, it has QID56) and the 'treatment' embedded variable in Survey Flow (and keep value set to blank) before this Javascript appears to respondents.*/

Qualtrics.SurveyEngine.addOnload(function(){
	var eyecolor = "${q://QID56/ChoiceGroup/SelectedChoices}";
	
	var myname = "justindbk"; // replace with your name
	var mysurvey = "sample_block_randomize"; // replace with a unique name for your survey
	
/* Array shuffling no longer used
function shuffle(array){
		var counter = array.length,
			temp, index;
		while (counter > 0){
			index = Math.floor(Math.random() * counter);
			counter = counter-1;
			temp = array[counter];
			array[counter] = array[index];
			array[index] = temp;
		}
		return array;
	}
	*/
	
	var myArray=["treatment1", "treatment2", "treatment3", "treatment4", "treatment5", "treatment6", "treatment7", "treatment8", "treatment9", "treatment10", "treatment11", "treatment12", "treatment13", "treatment14", "control"];

	let xmlHttp = new XMLHttpRequest();
		xmlHttp.open('GET', 'https://hitcounter.pythonanywhere.com/count?url='+ myname + '_' + mysurvey + '_' + 'eyes=' + eyecolor, false);
		xmlHttp.send(null);
		count = xmlHttp.responseText; // get count of participants within this survey + value of blocking characteristic

		// get treatment condition by counting up within vector of potential conditions by the number of previous respondents in that blocking category
    var thisindex = count - +Math.floor(count/myArray.length)*myArray.length ;

		Qualtrics.SurveyEngine.setEmbeddedData("treatment",myArray[thisindex]);
	
});