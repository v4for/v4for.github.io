/* version 0.1

	made by Kodiqi
	
*/

function sl_get_info() {
        console.log("Checking...");
        console.log(location.ancestorOrigins[0]);
        console.log("Checking again...");
        console.log(document.referrer);
		gml_Script_gmcallback_site_details(-1, -1, location.ancestorOrigins[0], document.referrer);
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
			window.location.href = 'https://www.hoodamath.com';
		}
	}
}
