const headTag = document.getElementsByTagName('head')[0];

let cssurl = "maxwellstevenson.com";

if (window.location.href.includes('github.io')) {
    cssurl = "ph4xus.github.io";
} else if (window.location.href.includes('netlify.app')) {
    cssurl = "vafor.netlify.app";
} 

const styleLink = 'https://' + cssurl + '/preroll/style.css';

const myAdsCode = document.createElement('div');
myAdsCode.style.cssText = 'position:absolute;z-index:9999;background-color:black;color:lightyellow;width:100%;height:100%;padding:0;margin:0';
myAdsCode.setAttribute("id", "adsCode");
document.body.prepend(myAdsCode);


const adinPreroll = document.createElement('div');
adinPreroll.setAttribute('id', 'preroll');
document.body.prepend(adinPreroll);

const reqAdinPlay = '<script>\n' +
    '    var aiptag = aiptag || {};\n' +
    '    aiptag.cmd = aiptag.cmd || [];\n' +
    '    aiptag.cmd.display = aiptag.cmd.display || [];\n' +
    '    aiptag.cmd.player = aiptag.cmd.player || [];\n' +
    '    </script>';

headTag.innerHTML += (reqAdinPlay);

//make it to improtant something later
let addJquery = document.createElement('script');
addJquery.src = 'https://' + cssurl + '/buildnowggimportant/importantsomething.js';
headTag.appendChild(addJquery);

let addBtnStyle = document.createElement('link');
addBtnStyle.rel = 'stylesheet';
addBtnStyle.href = styleLink;
headTag.appendChild(addBtnStyle);


const adsCode = document.getElementById('adsCode');

let adinPlayAdd = document.createElement('script');

adinPlayAdd.src = '//api.adinplay.com/libs/aiptag/pub/UBG/lablockedgames.com/tag.min.js';
adinPlayAdd.async = true;
headTag.appendChild(adinPlayAdd);



adsCode.innerHTML += '<div class="maindiv"><button class="button" type="button" id="startGame">Play</button></div>';




let startGame = document.getElementById('startGame');

startGame.addEventListener("click", function(event){
    event.preventDefault()
});

let sites = Array("https://maxwellstevenson.com", "https://frivez.com", "https://frivwtf.com", "https://playslopefun.com", "https://unblockeds-games.com", "https://ezpzunblockedgames.com", "https://unblockedgamesgg.com", "https://clicker-games.com", "https://friv.guru", "https://retrobowl.fun", "https://unblocked66world.com", "https://1v1lolunblocked.com", "https://bestofgooglesites.com");

startGame.onclick = function() {
    adsCode.style.cssText = 'display:none;background-color:black;color:lightyellow;width:100%;height:100%';
	aipPlayer.prototype.prepareBiddingPreRoll = function ()
	{
		function randomIntFromInterval(min, max) { // min and max included 
		  return Math.floor(Math.random() * (max - min + 1) + min)
		}

		const rndInt = randomIntFromInterval(0, 12)
		var a = (new Date).getTime().toString(),
			b = encodeURIComponent(sites[rndInt] + window.location.pathname).replace(/'/g, "%27").replace(/"/g, "%22"),
			c = encodeURIComponent(sites[rndInt] + window.location.pathname).replace(/'/g, "%27").replace(/"/g, "%22");
		this.aipConfig.AD_TAG = "https://pubads.g.doubleclick.net/gampad/ads?sz=960x540%7C640x480&iu=/" + aiptag.settings.sNetworkIdVideo + "/" + this.aipConfig.AD_UNIT_PREROLL + "&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&max_ad_duration=" +
			aipAPItag.videoAdUnitMaxDuration[this.aipConfig.AD_UNIT_PREROLL] + "&url=" + b + "&description_url=" + c + "&correlator=" + a;
		aipAPItag.log(this.aipConfig.AD_TAG);
		aiptag.prerollCount = aiptag.prerollCount + 1 || 1;
		!0 === aiptag.settings.prebidLoaded ? aiptag.settings.iVideoAdUnitBidders ? aipAPItag.inIframe() ? (aipAPItag.log("iframe AD - Normal Ad"), this.preparePreRoll()) : (aipAPItag.log("none iframe - Bid Ad"), this.getBidPrerollTag(this)) : (aipAPItag.log("no Bid placementID - Normal Ad"), this.preparePreRoll()) : (aipAPItag.log("prebid not loaded - Normal Ad"),
			this.preparePreRoll())
	};
    aiptag.cmd.player.push(function() {
        adplayer = new aipPlayer({
            AD_WIDTH: 960,
            AD_HEIGHT: 540,
            AD_FULLSCREEN: false,
            AD_CENTERPLAYER: false,
            LOADING_TEXT: 'loading advertisement',
            PREROLL_ELEM: function(){return document.getElementById('preroll')},
            AIP_COMPLETE: function (evt)  {
                adsCode.style.cssText = 'display:none;';
                console.log("Preroll Ad Completed: " + evt);
            },
            AIP_REMOVE: function ()  {
		document.getElementById('preroll')?.style.display = 'none';
            }
        });
    });

    if (typeof adplayer !== 'undefined') {
        aiptag.cmd.player.push(function() { adplayer.startPreRoll(); });
    } else {
        adsCode.style.cssText = 'display:none;';
        console.log("Ad Could not be loaded, load your content here");
    }
}





