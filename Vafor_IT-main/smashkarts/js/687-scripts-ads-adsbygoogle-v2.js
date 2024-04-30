'use strict';function requestMainMenuBanner()
{if(!isMobile())
{aiptag.cmd.display.push(function(){aipDisplayTag.display('smashkarts-io_300x250')});}}
function requestWinCeremonyBanner(interstialRequested)
{if(!isMobile())
{aiptag.cmd.display.push(function(){aipDisplayTag.display('smashkarts-io_300x250_2')});}}
function requestLongBanner()
{if(!isMobile())
{aiptag.cmd.display.push(function(){aipDisplayTag.display('smashkarts-io_970x250')});}
else
{}}
function showInterstitial(unusedParam,interstitialType,interstitialName)
{if(adBreak!=null)
{adBreak({type:interstitialType,name:interstitialName,beforeBreak:interstitialStart,afterBreak:interstitialComplete});}}
var onShowRewardedVideoClicked=null;function tryInitRewardedInterstitial(unusedParam)
{if(adBreak!=null)
{adBreak({type:'reward',name:'rewardedxpboost',beforeAd:()=>{interstitialStart();},afterAd:()=>{console.log("tryInitRewardedInterstitials afterAd");},beforeReward:(showAdFn)=>{console.log("set onShowRewardedVideoClicked");rewardedInterstitialAvailable();onShowRewardedVideoClicked=showAdFn},adDismissed:()=>{interstitialSkipped();},adViewed:()=>{interstitialComplete();},adBreakDone:(placementInfo)=>{console.log("tryInitRewardedInterstitials adBreakDone");},});}}
function tryShowRewardedInterstitial(unusedParam)
{if(onShowRewardedVideoClicked!=null)
{onShowRewardedVideoClicked();}}
function rewardedInterstitialAvailable()
{window.unityGame.SendMessage(unityFirebaseGameOjbectName,"RewardedInterstitialAvailable");}