function sl_get_info() {
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