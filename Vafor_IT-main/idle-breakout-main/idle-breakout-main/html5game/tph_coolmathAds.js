/* version 0.1

	made by Kodiqi
	
*/

function cmgAdStarted() {
        console.log("adStart gone and did it");
		gml_Script_gmcallback_cmgAdStart();
    }

function cmgAdEnded() {
        console.log("adEnd went and occured, yo");
		gml_Script_gmcallback_cmgAdEnd();
    }
