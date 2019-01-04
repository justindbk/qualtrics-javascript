/*Qualtrics Javascript to choose lookup respondents based on an embedded panel vairable (MID) and find other information about them (in this case, a block number). This code then sets another embedded variable to called 'block' to the matched value. NOTE: Qualtrics user must create the embedded variable in Survey Flow (and keep value set to blank) before this Javascript appears to respondents.*/

Qualtrics.SurveyEngine.addOnload(function()
{
	var ID_block_table = {
  ID: ['1', '2', '3', '4', '5'],
  block: ['a', 'b', 'c', 'd', 'e']
};

function getLookupTableByID(mytable, IDfield, ID, returnfield) {
  matchindex = null;
  try {
    var matchindex = mytable[IDfield].indexOf(ID);
		var matchreturn = mytable[returnfield][matchindex];
  } catch (ex) {
    console.log(ex);
  }
  return matchreturn;
}

var MID = Qualtrics.SurveyEngine.getEmbeddedData("MID");

var blockmatch = getLookupTableByID(ID_block_table, "ID", MID, "block");

	Qualtrics.SurveyEngine.setEmbeddedData('block',blockmatch);

});