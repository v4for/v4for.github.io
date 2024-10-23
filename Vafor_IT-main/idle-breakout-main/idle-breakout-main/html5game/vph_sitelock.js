function sl_get_info() {
        console.log("Checking...");
        console.log(location.ancestorOrigins[0]);
        console.log("Checking again...");
        console.log(document.referrer);
		gml_Script_gmcallback_site_details(-1, -1, 'https://www.hoodamath.com/mobile/games/idle-breakout/game.html?nocheckorient=1', 'https://www.hoodamath.com/games/idlebreakout.html#gsc.tab=0');
    }


function unblockedGetParentUrl()
{
	var isInIframe = (parent!==window),parentUrl=null;if(isInIframe){parentUrl=document.referrer}
			
	if (parentUrl != null && !parentUrl.includes("http"))
	{
		return null;
	}
			
	return parentUrl;
}

function sl_fn() {

	const xr = "hoodamath.com";
	const xr2 = "www.hoodamath.com";
			
	const currentIframeHref = unblockedGetParentUrl();
	if (currentIframeHref != null)
	{
		var referrer = new URL(currentIframeHref).hostname;
		if (referrer !== xr && referrer !== xr2)
		{
			//frixk off hooda
			//window.location.href = 'https://www.hoodamath.com';
		}
	}
}