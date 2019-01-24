/*Qualtrics Javascript to randomize, within a block determined by a user-inputted answer to a survey question, 1 treatment condition from an array of n options for condition and then set an embedded variable called "treatment" to that randomized condition. In this example, this code will block-randomize by a survey question earlier in the survey (before the Javascript and the treatment).

NOTE: Qualtrics user must create the survey question to be blocked on (in this case, it has QID56) and the 'treatment' embedded variable in Survey Flow (and keep value set to blank) before this Javascript appears to respondents.

This Javascript makes use of a customizable shiny app that I host on shinyapps.io and can be easily forked for other users from my GitHub.

NOTE: If a user wants to reset a given randomizer for their surveyid, simply go to the following url, replacing "[surveyid]" with the surveyid you want to reset:
https://jdbk.shinyapps.io/blockrandomize/?surveyid=[surveyid]&reset=1
*/

Qualtrics.SurveyEngine.addOnload(function(){
    // replace the QID below here with the ID of variable you want to block on:
    var blockvar = "${q://QID56/ChoiceGroup/SelectedChoices}"; 
    // replace with your name + a unique name for your survey:
    var surveyid = "jdbk-sample_block_randomize"; 
    // replace with number of experimental conditions to randomize among:
    var nconditions = "15"; 
	
	var myArray=["treatment1", "treatment2", "treatment3",
	"treatment4", "treatment5", "treatment6", "treatment7", 
	"treatment8", "treatment9", "treatment10", "treatment11",
	"treatment12", "treatment13", "treatment14", "control"];

	let xmlHttp = new XMLHttpRequest();
	// the url below hits a shiny app customizable with arguments set above to randomize within blocks
		xmlHttp.open('GET', 'https://jdbk.shinyapps.io/blockrandomize/?surveyid='+ surveyid + '&blockvalue=' + blockvar + '&nconditions=' + nconditions, false);
		xmlHttp.send(null);
		condition_assigned = xmlHttp.responseText; // get condition from randomizer

		Qualtrics.SurveyEngine.setEmbeddedData("treatment",myArray[condition_assigned]);
	
});