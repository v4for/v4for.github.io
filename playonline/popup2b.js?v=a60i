var iframe = "";

window.onload = (event) => {

    var username = ""; 
    iframe = document.getElementById('login_banner');

    console.log("popup 1");
   
    var username  = getCookie('username'); 
    if ( username )
    {
    }
    else {
       username = "" + randomString(10) + "".toLowerCase();
       setCookie('username',username,1);
    }   
    
    try {
    document.getElementById('loginx').style.display = "block";
    } catch (error) { }

    var img = document.getElementById('login_banner');

   runstartgame();


   var xx = "";
   var yy = "";
   var extensionxxyy = "";


};





function randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz,randomPoz+1);
    }
    return randomString.toLowerCase();
}



function httpgetx(dataxxx, server){

    xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'https://www.myandroid.org/runapk/security.php?username=' + dataxxx + '&service=' + server, true);
    xhr2.onload = function (e) {
       if (xhr2.status === 200) {
            //console.log(xhr2.responseText);
            runningx = xhr2.responseText;
            if ( runningx.indexOf("runX") != -1 )
            {
                console.log("User running");
            }
            else {
                console.log("User not running");
                window.location = "https://www.myandroid.org";
            }
        }
        else {
            //console.error(xhr2.statusText);
	    console.log(xhr2);
	    //window.location = "https://www.myandroid.org";
        }
    };
    xhr2.onerror = function (e) {
         console.error(xhr2.statusText);
    };

    xhr2.send();

    setTimeout(function() {
		

		var xhr = new XMLHttpRequest();
                xhr.open('GET', "https://www.myandroid.org/community/user.php?username=" + dataxxx + '&service=' + server, true);
                xhr.send();
                httpgetx(dataxxx, server);
    }, 30000);
}



function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


function $_GET(param) {
        var vars = {};
        window.location.href.replace( location.hash, '' ).replace(
                /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
                function( m, key, value ) { // callback
                        vars[key] = value !== undefined ? value : '';
                }
        );

        if ( param ) {
                return vars[param] ? vars[param] : null;
        }
        return vars;
}


function getWidthX() {
	return document.documentElement.clientWidth;

        //return Math.min(
         //       document.body.scrollWidth,
       //         document.documentElement.scrollWidth,
        //        document.body.offsetWidth,
        //        document.documentElement.offsetWidth,
         //       document.documentElement.clientWidth
        //);
}

function getHeightX() {

	 return document.documentElement.clientHeight;

         //return Math.min(
          //      document.body.scrollHeight,
           //     document.documentElement.scrollHeight,
         //       document.body.offsetHeight,
          //      document.documentElement.offsetHeight,
         //       document.documentElement.clientHeight
        //);
}


var counterxx = 15;

function rewritebutton (xx) {
        document.getElementById("talpa-splash-button").style.fontSize = "70px";
        document.getElementById("talpa-splash-button").innerHTML = "Please wait " + xx + " secs";
        if ( counterxx > 0 )
        {
                setTimeout(() => {
                        counterxx = counterxx - 1;
                        rewritebutton (counterxx);
                }, "1000");
        }
        else {
                document.getElementById("talpa-splash-button").innerHTML = "Enter";
                document.getElementById("talpa-splash-button").style.fontSize = "40px;"
                document.getElementById("talpa-splash-button").disabled = false;

                document.getElementById("preparing").innerHTML = "Ready!! Click Enter";
                document.getElementById("preparing").classList.remove("move-horizontal");
                document.getElementById("preparing").classList.add("remove-animation");
                document.getElementById("talpa-splash-button").style.background = "#1b771b";
        }
}



function runstartgame() {

        var xhr1 = new XMLHttpRequest();
        if ( getCookie("apk") )  {
                xhr1.open('GET', "https://www.myandroid.org/playonline/startgame2b.php?apk=" + getCookie("apk"), true);
        } else {
                xhr1.open('GET', "https://www.myandroid.org/playonline/startgame2b.php?apk=com.innersloth.spacemafia", true);
        }
        xhr1.onload = function (e) {
                if (xhr1.readyState === 4) {
                        if (xhr1.status === 200) {
                                var response1 = xhr1.responseText;
                                document.getElementById('loginx').innerHTML = response1;

				var iii22 = '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8556862515989191" crossorigin="anonymous"><\/script><!-- Uptoplay_320x100 --><ins class="adsbygoogle" style="display: inline-block; width:320px;height:100px" data-ad-client="ca-pub-8556862515989191" data-ad-slot="9112866167" > </ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); <\/script> ';
				var iDiv = document.createElement('div');
				iDiv.id = 'smallbanner';
				document.getElementById('talpa-splash-button').after(iDiv);
                                //postscribe(iDiv, iii22);

				var iii4 = '<script> var ttt = document.getElementById(\'talpa-splash-container-id\'); ';
				iii4 = iii4 + ' if ( getWidthX()  > 919 )  { ';
				iii4 = iii4 + ' ttt.style.left = "0px";';
                                iii4 = iii4 + ' } else if ( ( getWidthX()  > 719 ) &&  ( getWidthX()  < 920 ) ) {';
                                iii4 = iii4 + ' ttt.style.left = "60px";';
                                iii4 = iii4 + ' } else if ( ( getWidthX()  > 563 ) &&  ( getWidthX()  < 718 ) ) {';
                                iii4 = iii4 + ' ttt.style.left = "40px";';
                                iii4 = iii4 + ' } else if ( ( getWidthX()  > 450 ) &&  ( getWidthX()  < 562 ) ) {';
                                iii4 = iii4 + ' ttt.style.left = "10px";';
                                iii4 = iii4 + ' } else { ';
                                iii4 = iii4 + ' ttt.style.left = "30px";';
                                iii4 = iii4 + '  } <\/script>';

				postscribe(iDiv, iii4 );


				document.getElementById("talpa-splash-button").disabled = true;

				setTimeout(() => {
        				counterxx = counterxx - 1;
        				rewritebutton (counterxx);
				}, "1000"); 
				


                        } else {
                                console.error(xhr1.statusText);
                        }
                 }
        };
        xhr1.onerror = function (e) {
                console.error(xhr1.statusText);
        };
        xhr1.send();

}


var viendolovideos = 0;
var rewarddado = 0;

var reshowx = 0;

googletag = window.googletag || {cmd: []};
               
function giveReward() {  
                        console.log("slotgranted giveReward"); 
			rewarddado = 1;
			//myEnterXXX();
}
function slotclosed() {  
                        console.log("slotclosed"); 
			setTimeout(() => {
                                reshowAd();
                        },
                        "300000");
			if ( reshowx == 0 )
			{
				myEnterXXX();
			}
}
function slotcanceled() {  
                        console.log("slotcanceled"); 
			setTimeout(() => {
				reshowAd();
                        },
                        "300000");
			if ( reshowx == 0 )
                        {
                                myEnterXXX();
                        }
}



function reshowAd() {
			reshowx =  1;
		
}



                
function showAd() {

                        document.getElementById('talpa-splash-button').innerHTML = 'Loading...';
                        setTimeout(() => { 
                            if ( viendolovideos == 0 )
                            {
                                console.log("too much time"); 
				//myEnterXXX();
                            }
                        }, 
                        "4000");  

}



function myEnter() {
	//showAd();
	myEnterXXX();
}

function myEnterXXX() {

	console.log("myenter");
   	if ( getWidthX()  > 919 )
   	{
	   document.getElementById('loginx').style.width = "720px";
   	}
	else if ( ( getWidthX()  > 719 ) &&  ( getWidthX()  < 920 ) )
        {
	   try { document.getElementById('alert').style.display = "none";  } catch (error) { }
           document.getElementById('x').style.right = "0px";
	   document.getElementById('loginx').style.width = "720px";
        }
   	else {
           xx = getWidthX() + 50 ;
           yy = getHeightX() - 0;
	   document.getElementById('ja-header').style.display = "none";
           document.getElementById('x').style.top = "-10px";
           document.getElementById('x').style.height = "35px";
           document.getElementById('x').style.width = "55px";
           document.getElementById('x').style.padding = "0px";
           try { document.getElementById('alert').style.display = "none"; } catch (error) { }
           document.getElementById('x').style.right = "0px";
   	}

	document.getElementById('x').style.display = "block";


	var mobile = "no";
	if ( getWidthX()  > 600 )
        {
                  mobile = "no";
        }
        else {
                  mobile = "yes";
        }


        document.getElementById('loginx00').style.display = "none";
	var iframe = document.createElement('iframe');
	document.getElementById('loginx').innerHTML = "";
	iframe.classList.add("responsive-iframe");



   setTimeout(function() {

      if ( getWidthX()  > 919 )
      {
           iframe.width = ( 720 + 40 ) + 'px';
           iframe.style.width = ( 720 + 40 ) + 'px';
      }
      else if ( ( getWidthX()  > 719 ) &&  ( getWidthX()  < 920 ) )
      {
           iframe.width = ( getWidthX() + 40 ) + 'px';
           iframe.style.width = ( getWidthX() + 40 ) + 'px';
      }
      else {
           xx = getWidthX() + 50 ;
           yy = getHeightX() - 0;
           document.getElementById('middlebox').style.width = getWidthX() + "px";
           document.getElementById('loginx').style.width = getWidthX() + "px";
           document.getElementById('x').style.right = "0px";
           document.getElementById('boxes').style.height = yy + "px";
           document.getElementById('leftbox').style.height = yy + "px";
           document.getElementById('middlebox').style.height = yy + "px";
           document.getElementById('rightbox').style.height = yy + "px";
           document.getElementById('middlebox').style.marginLeft = '0px';
           iframe.width = ( getWidthX() + 60 ) + 'px';
           iframe.height = ( getHeightX() - 0 ) + 'px';
           iframe.style.width = ( getWidthX() + 60 ) + 'px';
           iframe.style.height = ( getHeightX() - 0 ) + 'px';
      }
   }, 1);


	iframe.src = "https://www.myandroid.org/playonline/inprogress.php?mobile=" + mobile;;
	document.getElementById('loginx').appendChild(iframe);
	//document.getElementById('bargame').style.background = "#2b6599";


    	var username = "";
    	var username  = getCookie('username');
    	if ( username )
    	{
    	}
    	else {
       		username = "" + randomString(10) + "".toLowerCase();
       		setCookie('username',username,1);
    	}
	var extensionxxyy = "";


       setTimeout(
            function(){
                var xhrxxx1 = new XMLHttpRequest();
                xhrxxx1.open('GET', 'https://www.myandroid.org/community/user.php?username=' + username, true);
                xhrxxx1.send();
                iframe = document.getElementsByClassName('responsive-iframe')[0];
                inactivityTime(iframe);
            }
        , 8000);

        setTimeout(
            function(){
                var xhrxxx2 = new XMLHttpRequest();
                xhrxxx2.open('GET', 'https://www.myandroid.org/community/user.php?username=' + username, true);
                xhrxxx2.send();
                iframe = document.getElementsByClassName('responsive-iframe')[0];
                inactivityTime(iframe);
            }
        , 18000);

        setTimeout(
            function(){
                var xhrxxx2 = new XMLHttpRequest();
                xhrxxx2.open('GET', 'https://www.myandroid.org/community/user.php?username=' + username, true);
                xhrxxx2.send();
                iframe = document.getElementsByClassName('responsive-iframe')[0];
                inactivityTime(iframe);
            }
        , 28000);

        setTimeout(
            function(){
                var xhrxxx2 = new XMLHttpRequest();
                xhrxxx2.open('GET', 'https://www.myandroid.org/community/user.php?username=' + username, true);
                xhrxxx2.send();
                iframe = document.getElementsByClassName('responsive-iframe')[0];
                inactivityTime(iframe);
            }
        , 38000);


        var xhr1 = new XMLHttpRequest();
        xhr1.open('GET', 'https://www.myandroid.org/community/user.php?username=' + username, true);
        xhr1.onload = function (e) {
  		if (xhr1.readyState === 4) {
    			if (xhr1.status === 200) {

				//console.log("respuesta user");
      				//console.log(xhr1.responseText);
				var response1 = xhr1.responseText;
				xhr2 = new XMLHttpRequest();
				if ( getWidthX()  > 600 )
				{
					mobile = "no";
				}
				else {
					mobile = "yes";
				}


				if ( getCookie("apk") )
                                {
					apkapk = getCookie("apk");
					if ( apkapk.indexOf("RunEmulato") != -1 )
					{
						setCookie('apk',"unset",-1);
						if ( getCookie("cordova") )  {
							xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?cordova=1&mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=' + extensionxxyy, true);
						}
						else {
							xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=' + extensionxxyy, true);
						}
					}
					else {
						if ( getCookie("cordova") )  {
                                  			xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?cordova=1&mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=' + getCookie("apk") + extensionxxyy, true);
						}
                                                else {
							xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=' + getCookie("apk") + extensionxxyy, true);
                                                }
					}
                                }
                                else {
					if ( getCookie("cordova") )  {
				  		xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?cordova=1&mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=com.innersloth.spacemafia' + extensionxxyy, true);
					}
                                        else {
						xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=com.innersloth.spacemafia' + extensionxxyy, true);
					}
				}
				xhr2.onload = function (e) {
					if (xhr2.status === 200) {

						var xhr3 = new XMLHttpRequest();
        					xhr3.open('GET', 'https://www.myandroid.org/community/user.php?username=' + username, true);
						xhr3.send();
						
						//console.log(xhr2.responseText);
						server = response1;
						pathausar = this.responseText;
						pathausar = pathausar.replace(/(\r\n|\n|\r)/gm, "");
						numserver = server.replace("server", "");
						guest = xhr2.responseText;
						numguest = guest.replace("guest", "");
						var jsonString = this.responseText;
        					jsonString = jsonString.replace(/(\r\n|\n|\r)/gm, "");
        					jsonString = jsonString.replace("guest", "59");
        					//console.log(jsonString);
						finalurl_x =  "https://stream.myandroid.org/osessionx" + numserver + "/#/?username=" + guest + "&password=server01" + numguest;


						var trtrertete = response1;
                                                setTimeout(function() {
                                                       httpgetx(username, trtrertete);
                                                }, 5000);

						setTimeout(function() {
							iframe.src = finalurl_x;
   						}, 1);


						setTimeout(function() {
        						inactivityTime(iframe);
						}, 1);

						//console.log("xxxxx " + finalurl_x + "yyyy");
					   	setTimeout(function() {
        						if ( getWidthX()  > 720 )
        						{
                						iframe.width = "720px";
        						}
        						else {
                						//iframe.width = ( getWidthX() - 2 ) + 'px';
								//iframe.height = ( getHeightX() - 120 ) + 'px';
								//iframe.style.height = ( getHeightX() - 120 ) + 'px';
        						}
   						}, 1);


					}
					else {
						console.error(xhr2.statusText);
						runstartgame();
					}
				};
				xhr2.onerror = function (e) {
					console.error(xhr2.statusText);
					runstartgame();
				};
        			xhr2.send();
    			} else {
      				console.error(xhr1.statusText);
				runstartgame();
    			}
 		 }
	};
	xhr1.onerror = function (e) {
  		console.error(xhr1.statusText);
		runstartgame();
	};
	xhr1.send();
    
    
}    




function myEnter2() {

	console.log("myenter2");

	var mobile = "no";
	if ( getWidthX()  > 600 )
        {
                  mobile = "no";
        }
        else {
                  mobile = "yes";
        }


    	var username = "";
    	var username  = getCookie('username');
    	if ( username )
    	{
    	}
    	else {
       		username = "" + randomString(10) + "".toLowerCase();
       		setCookie('username',username,1);
    	}
	var extensionxxyy = "";

        var xhr1 = new XMLHttpRequest();
        xhr1.open('GET', 'https://www.myandroid.org/community/user.php?username=' + username, true);
        xhr1.onload = function (e) {
  		if (xhr1.readyState === 4) {
    			if (xhr1.status === 200) {

				//console.log("respuesta user");
      				//console.log(xhr1.responseText);
				var response1 = xhr1.responseText;
				xhr2 = new XMLHttpRequest();
				if ( getWidthX()  > 600 )
				{
					mobile = "no";
				}
				else {
					mobile = "yes";
				}


				if ( getCookie("apk") )
                                {
					apkapk = getCookie("apk");
					if ( apkapk.indexOf("RunEmulato") != -1 )
					{
						setCookie('apk',"unset",-1);
						if ( getCookie("cordova") )  {
							xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?cordova=1&mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=' + extensionxxyy, true);
						}
						else {
							xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=' + extensionxxyy, true);
						 }
					}
					else {
						if ( getCookie("cordova") )  {
                                  			xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?cordova=1&mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=' + getCookie("apk") + extensionxxyy, true);
						}
                                                else {
							xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=' + getCookie("apk") + extensionxxyy, true);
						 }
					}
                                }
                                else {
					if ( getCookie("cordova") )  {
				  		xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?cordova=1&mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=com.innersloth.spacemafia' + extensionxxyy, true);
					}
                                        else {
						xhr2.open('GET', 'https://www.myandroid.org/runapk/create-myandroid.php?mobile=' + mobile + '&service=' + response1 + '&username=' + username + '&app=&apk=com.innersloth.spacemafia' + extensionxxyy, true);
					}
				}
				xhr2.onload = function (e) {
					if (xhr2.status === 200) {

						var xhr3 = new XMLHttpRequest();
        					xhr3.open('GET', 'https://www.myandroid.org/community/user.php?username=' + username, true);
						xhr3.send();
						
						//console.log(xhr2.responseText);
						server = response1;
						pathausar = this.responseText;
						pathausar = pathausar.replace(/(\r\n|\n|\r)/gm, "");
						numserver = server.replace("server", "");
						guest = xhr2.responseText;
						numguest = guest.replace("guest", "");
						var jsonString = this.responseText;
        					jsonString = jsonString.replace(/(\r\n|\n|\r)/gm, "");
        					jsonString = jsonString.replace("guest", "59");
        					//console.log(jsonString);
						finalurl_x =  "https://stream.myandroid.org/osessionx" + numserver + "/#/?username=" + guest + "&password=server01" + numguest;


						httpgetx(username, response1);

						window.location = finalurl_x;


					}
					else {
						console.error(xhr2.statusText);
					}
				};
				xhr2.onerror = function (e) {
					console.error(xhr2.statusText);
				};
        			xhr2.send();
    			} else {
      				console.error(xhr1.statusText);
    			}
 		 }
	};
	xhr1.onerror = function (e) {
  		console.error(xhr1.statusText);
	};
	xhr1.send();
    
    
}    

