var _firebaseConfig = {
    apiKey: "AIzaSyDnyt9g4UopR-DPRUi-WQCRp8RmNAktWSA",
    authDomain: "slayerz2.firebaseapp.com",
    databaseURL: "https://slayerz2-default-rtdb.firebaseio.com",
    projectId: "slayerz2",
    storageBucket: "slayerz2.appspot.com",
    messagingSenderId: "948771214445",
    appId: "1:948771214445:web:31dd5748c083668101db64",
    measurementId: "G-R47BX7BRTW"
};
firebase.initializeApp(_firebaseConfig);
function GoogleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(res => {
        console.log("Google Login Success!");
        console.log(res.user);
        showUserDetails(res.user);
    }).catch(e => {
        console.log("Google Login Error:");
        console.log(e);
    })
}
function EmailPasswordLogin(emailPassword) {
    var [email, password] = emailPassword.split(':');
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        console.log("Email and Password Login Success!");
        console.log(res.user);
        showUserDetails(res.user);
    }).catch(e => {
        if (e.code === 'auth/user-not-found') {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
                console.log("Email and Password Registration Success!");
                console.log(res.user);
                showUserDetails(res.user);
            }).catch(e => {
                console.log("Email and Password Registration Error:");
                console.log(e);
            });
        } else {
            console.log("Email and Password Login Error:");
            console.log(e);
        }
    });
}


function FacebookLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(res => {
        console.log("Facebook Login Success!");
        console.log(res.user);
        showUserDetails(res.user);
        // Link Facebook provider to existing account
        var user = firebase.auth().currentUser;
        var credential = firebase.auth.FacebookAuthProvider.credential(res.credential.accessToken);
        user.linkWithCredential(credential).then(function () {
            console.log("Facebook account linked successfully");
        }).catch(function (error) {
            console.log("Error linking Facebook account:", error);
        });
    }).catch(e => {
        console.log("Facebook Login Error:");
        console.log(e);
    });
}
function setLeaderboardRecordNew(where, username, valueToAdd) {
    let db = firebase.database();

    let recordRef = db.ref(where + username);

    // Fetch the current value from the database
    recordRef.once('value').then(snapshot => {
        let currentValue = snapshot.val();
        let parsedValueToAdd = parseInt(valueToAdd);

        if (!isNaN(parsedValueToAdd)) {
            let newValue = currentValue ? parseInt(currentValue) + parsedValueToAdd : parsedValueToAdd;

            // Save the updated value as a string
            recordRef.set(newValue.toString(), (error) => {
                if (error) {
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddedPoints', "Failed2");
                } else {
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddedPoints', "Success");
                }
            });
        } else {
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddedPoints', "Failed3");
        }
    }).catch(error => {
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddedPoints', "Failed1");
    });
}



function getCustomLeaderboard(where) {
    let db = firebase.database();
    let ARef = db.ref(where);
    ARef.on('value', (snapshot) => {
        let value = JSON.stringify(snapshot.val());
        if (value === null) {
            value = "null";
        } else {
            value = value.toString();
        }
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGotLeaderboard', value);
    }, (error) => {
        console.log("Error getting data: " + error);
    });
}


// Set the render scale cookie with a given value
function SetRenderScaleCookie(scaleValue) {
    document.cookie = "render_scale=" + scaleValue + "; path=/";
}
function TwitterLogin() {
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).then(res => {
        console.log("Twitter Login Success!");
        console.log(res.user);
        showUserDetails(res.user);
    }).catch(e => {
        console.log("Twitter Login Error:");
        console.log(e);
    });
}
function Start() {
    if (window.blockedAds) {
        unityInstance.SendMessage('GameManager', 'OnAdsBlocked');
    }
}
function requestUserData() {
    if (window.blockedAds) {
        unityInstance.SendMessage('GameManager', 'OnAdsBlocked');
    }
    if (typeof unityInstance !== 'undefined' && typeof window.loginData !== 'undefined') {
        unityInstance.SendMessage('GameManager', 'OnLoggedInGoogle', window.loginData);
    }
    else {
        console.log("data undefined");
    }
}
function showUserDetails(user) {
    console.log("Showing User details");

    var shouldUpdateProfile = false;
    var profileUpdates = {};
    var newDisplayName;
    var newPhotoURL;
    if (!user.displayName) {
        var randomGuestNumber = Math.floor(Math.random() * (999 - 99 + 1)) + 99;
        var displayName = "Guest" + randomGuestNumber;
        profileUpdates.displayName = displayName;
        shouldUpdateProfile = true;
        newDisplayName = displayName;
    }

    if (!user.photoURL) {
        var defaultProfileURL = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
        profileUpdates.photoURL = defaultProfileURL;
        shouldUpdateProfile = true;
        newPhotoURL = defaultProfileURL;
    }

    var loginData;
    if (shouldUpdateProfile) {
        user.updateProfile(profileUpdates).then(function () {
            console.log("Profile updated:", profileUpdates);
        }).catch(function (error) {
            console.log("Error updating profile:", error);
        });
        loginData = newDisplayName + "|" + user.email + "|" + newPhotoURL + "|" + user.uid;
    }
    else {
        loginData = user.displayName + "|" + user.email + "|" + user.photoURL + "|" + user.uid;
    }
    window.loginData = loginData;
    if (typeof unityInstance !== 'undefined' && typeof window.loginData !== 'undefined') {
        unityInstance.SendMessage('GameManager', 'OnLoggedInGoogle', window.loginData);
    }
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("onAuthStateChanged: logged IN!");
        showUserDetails(user);
    }
    else {
        console.log("onAuthStateChanged: logged OUT!");
    }
})
/*---------FIREBASE PLAYERPREFS 2023 START---------*/
function adminSetUserData(uid, parameterName, parameterValue) {
    // Get a reference to the user's data
    const userRef = firebase.database().ref("users/" + uid);

    // Set the parameter value for the specified parameter name
    userRef.update({ [parameterName]: parameterValue }, (error) => {
        if (error) {
            console.error("Admin: Update failed:", error);
        } else {
            console.log("Admin: Update succeeded.");
        }
    });
}

function getPromoCode(promoCode) {
    let db = firebase.database();
    let promoRef = db.ref("codes/" + promoCode);
    promoRef.once("value").then(function (snapshot) {
        let promoValue = snapshot.val();
        let promoValueJson = JSON.stringify(promoValue);
        console.log("Promo value: " + promoValueJson);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGetPromoCode', promoValueJson);
    }).catch(err => {
        console.log("Error getting promo code for promo: " + promoCode + ". error: " + err);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGetPromoCode', "Error");
    });
}
function getUsername(uid) {
    let db = firebase.database();
    let userRef = db.ref("users/" + uid + "/myUsername");
    userRef.once("value").then(function (snapshot) {
        let username = snapshot.val();
        let usernameJson = JSON.stringify(username);
        console.log("Username: " + usernameJson);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGetUsername', uid + "|" + usernameJson);
    }).catch(err => {
        console.log("Error getting username for user with UID: " + uid + ". error: " + err);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGetUsername', "Error");
    });
}
/*---------SET DATA---------*/
function setData(userpath, varName, value, reqID) {
    let db = firebase.database();
    db.ref(userpath).update({
        [varName]: value,
    }, (err) => {
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetData', JSON.stringify({ err }) + "&" + reqID);
    });
}
/*function setDataForLeaderboard(path, varName, value, reqID) {
    const db = firebase.database();
    const now = Date.now();
    db.ref(path).update({
        [varName]: value,
        timestamp: now
    }, (err) => {
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetData', JSON.stringify({ err }) + "&" + reqID);
    });
}*/
/*function setDataForLeaderboard(path, varName, value, reqID) {
    const db = firebase.database();
    const now = Date.now();
    const data = {
        [varName]: {
            value,
            timestamp: now
        }
    };
    db.ref(path).update(data, (err) => {
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetData', JSON.stringify({ err }) + "&" + reqID);
    });
}*/
function setZombiesAllTimeData(path, varName, zombiesalltime, reqID) {
    const db = firebase.database();
    const now = Date.now();
    const zombiesAllTimeData = {
        [varName]: {
            value: zombiesalltime,
            timestamp: now
        }
    };
    db.ref(path + "zombiesalltime/").update(zombiesAllTimeData, (err) => {
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetData', JSON.stringify({ err }) + "&" + reqID);
    });
}

function setDataForLeaderboard(path, varName, alltime, daily, weekly, monthly, reqID) {
    const db = firebase.database();
    const now = Date.now();
    const alltimeData = {
        [varName]: {
            value: alltime,
            timestamp: now
        }
    };
    const dailyData = {
        [varName]: {
            value: daily,
            timestamp: now
        }
    };
    const weeklyData = {
        [varName]: {
            value: weekly,
            timestamp: now
        }
    };
    const monthlyData = {
        [varName]: {
            value: monthly,
            timestamp: now
        }
    };
    db.ref(path + "alltime/").update(alltimeData, (err1) => {
        db.ref(path + "daily/").update(dailyData, (err2) => {
            db.ref(path + "weekly/").update(weeklyData, (err3) => {
                db.ref(path + "monthly/").update(monthlyData, (err4) => {
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetData', JSON.stringify({ err1 }) + "&" + reqID);
                });
            });
        });
    });
}
/*---------GET ALL USER DATA---------*/
function getUserData(uid, reqID) {
    let db = firebase.database();
    let ref = db.ref("users");
    let userRef = ref.child(uid);
    userRef.on('value', (snapshot) => {
        let value = JSON.stringify(snapshot.val());
        if (value === null) {
            value = "null";
        } else {
            value = value.toString();
        }
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGotData', value + "&" + reqID);
    });
}
function getAllOnRef(where) {
    let db = firebase.database();
    let ARef = db.ref(where);
    ARef.on('value', (snapshot) => {
        let value = JSON.stringify(snapshot.val());
        if (value === null) {
            value = "null";
        } else {
            value = value.toString();
        }
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGotData', value);
    }, (error) => {
        console.log("Error getting data: " + error);
    });
}

function onBanned() {
    fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => getIPDetailsAndAddToDatabase(data.ip))
        .catch(error => console.error(error));
}
// Function to get IP details and add them to Firebase Realtime Database
function getIPDetailsAndAddToDatabase(ip) {
    fetch(`https://ipapi.co/${ip}/json/`)
        .then(response => response.json())
        .then(data => {
            const details = {
                location: `${data.city}, ${data.region}, ${data.country_name}`,
                hostname: data.hostname,
                country: data.country_name,
                state: data.region
            };
            addIPDetailsToDatabase(ip, details);
        })
        .catch(error => console.error(error));
}
// Function to add IP information to Firebase Realtime Database
function addIPDetailsToDatabase(ip, details) {
    firebase.database().ref(`Cheaters/${ip}`).set(details)
        .then(() => console.log(`IP details for ${ip} added to database`))
        .catch(error => console.error(error));
}
/*function getDailyLeaderboard(where) {
    const db = firebase.database();
    const leaderboardRef = db.ref(where);
    const today = new Date().toLocaleDateString(); // get today's date
    leaderboardRef.orderByChild("timestamp").startAt(today).on("value", (snapshot) => {
        const leaderboard = snapshot.val();
        let value = JSON.stringify(leaderboard);
        if (value === null) {
            value = "null";
        } else {
            value = value.toString();
        }
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGotData', value);
    }, (error) => {
        console.log("Error getting data: " + error);
    });
}

function getWeeklyLeaderboard(where) {
    const db = firebase.database();
    const leaderboardRef = db.ref(where);
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString(); // get date from one week ago
    leaderboardRef.orderByChild("timestamp").startAt(oneWeekAgo).on("value", (snapshot) => {
        const leaderboard = snapshot.val();
        let value = JSON.stringify(leaderboard);
        if (value === null) {
            value = "null";
        } else {
            value = value.toString();
        }
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGotData', value);
    }, (error) => {
        console.log("Error getting data: " + error);
    });
}

function getMonthlyLeaderboard(where) {
    const db = firebase.database();
    const leaderboardRef = db.ref(where);
    const thisMonth = new Date().toLocaleString('default', { month: 'long' }); // get the current month
    leaderboardRef.orderByChild("timestamp").startAt(thisMonth).on("value", (snapshot) => {
        const leaderboard = snapshot.val();
        let value = JSON.stringify(leaderboard);
        if (value === null) {
            value = "null";
        } else {
            value = value.toString();
        }
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGotData', value);
    }, (error) => {
        console.log("Error getting data: " + error);
    });
}*/
/*---------SET ALL USER DATA---------*/
function setUserData(uid, jsonString, reqID) {
    let db = firebase.database();
    let jsonObject = JSON.parse(jsonString);
    db.ref("users/" + uid).set(jsonObject, (err) => {
        console.log(JSON.stringify({ err }));
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetData', JSON.stringify({ err }) + "&" + reqID);
    });
}
function tipUser(path, uid, amount) {
    let db = firebase.database();


    db.ref("tips/").once("value", (snapshot) => {
        const data = snapshot.val();
        if (data && data[uid]) {
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnTipped', "This user already has a pending Tip!");
            return;
        }
    }, (error) => {

        if (err) {
            console.log(JSON.stringify({ err }));
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnTipped', "Failed");
        } else {
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnTipped', "Success");
        }

    });


    db.ref(path).update({
        [uid]: amount
    }, (err) => {
        console.log(JSON.stringify({ err }));
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnTipped', "Success");
    });
}
function getTipAmountForUID(uid) {
    let db = firebase.database();
    db.ref("tips/").once("value", (snapshot) => {
        const data = snapshot.val();
        if (data && data[uid]) {
            const amount = data[uid];
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGetTipAmount', amount.toString());
            db.ref("tips/" + uid).remove((error) => {
                if (error) {
                    console.log("Error deleting data:", error);
                } else {
                    console.log("Data deleted successfully");
                }
            });
        } else {
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGetTipAmount', "0");
        }
    }, (error) => {
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGetTipAmount', "0");
        console.log("Error retrieving data:", error);
    });
}




function setRecordForDailyWeeklyMonthly(username, recordDailyAsString, recordWeeklyAsString, recordMonthlyAsString, recordAlltimeAsString, recordAlltimeZombiesAsString, recordAlltimeParkourAsString ) {

    if (!username || username.trim() === "") {
        return; // returns if the username is null, empty or only white spaces
    }

    let date = new Date();

    // Calculate the current day, week, and month in UTC
    let day = date.getUTCFullYear() + String(date.getUTCMonth() + 1).padStart(2, '0') + String(date.getUTCDate()).padStart(2, '0');

    let firstDayOfWeek = new Date(date.getTime() - ((date.getUTCDay() || 7) * 24 * 60 * 60 * 1000)); // last Sunday
    let week = firstDayOfWeek.getUTCFullYear() + String(firstDayOfWeek.getUTCMonth() + 1).padStart(2, '0') + String(firstDayOfWeek.getUTCDate()).padStart(2, '0');

    let month = date.getUTCFullYear() + String(date.getUTCMonth() + 1).padStart(2, '0');

    if (recordDailyAsString && recordDailyAsString.trim() !== "") {
        setRecordForPath("newleaderboard/daily/" + day + "/", username, recordDailyAsString);
    }
    if (recordWeeklyAsString && recordWeeklyAsString.trim() !== "") {
        setRecordForPath("newleaderboard/weekly/" + week + "/", username, recordWeeklyAsString);
    }
    if (recordMonthlyAsString && recordMonthlyAsString.trim() !== "") {
        setRecordForPath("newleaderboard/monthly/" + month + "/", username, recordMonthlyAsString);
    }
    if (recordAlltimeAsString && recordAlltimeAsString.trim() !== "") {
        setRecordForPath("newleaderboard/alltime/", username, recordAlltimeAsString);
    }
    if (recordAlltimeZombiesAsString && recordAlltimeZombiesAsString.trim() !== "") {
        setRecordForPath("newleaderboard/zombiesalltime/", username, recordAlltimeZombiesAsString);
    }
    if (recordAlltimeParkourAsString && recordAlltimeParkourAsString.trim() !== "") {
        setRecordForPath("newleaderboard/parkouralltime/", username, recordAlltimeParkourAsString);
    }
}

function setRecordForPath(where, username, recordAsString) {
    let db = firebase.database();

    let recordRef = db.ref(where + username);
    recordRef.set(recordAsString, (error) => {
        if (error) {
            console.log("Data could not be saved." + error);
        } else {
            console.log("Data saved successfully.");
        }
    });
}








function kickUserFromClan(clanName, userId) {
    let db = firebase.database();
    let clanRef = db.ref("clans/" + clanName + "/members");
    clanRef.once("value").then(function (snapshot) {
        let members = snapshot.val();
        if (members) {
            let memberArray = members.split("-");
            let index = memberArray.indexOf(userId);
            if (index !== -1) {
                memberArray.splice(index, 1);
                let newMembers = memberArray.join("-");
                clanRef.set(newMembers)
                    .then(() => {
                        console.log("Successfully removed user " + userId + " from clan " + clanName + ".");
                        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnKickUserFromClan', "Success");
                    })
                    .catch(err => {
                        console.log("Error removing user " + userId + " from clan " + clanName + ": " + err);
                        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnKickUserFromClan', "Failed");
                    });
            } else {
                console.log("User " + userId + " not found in clan " + clanName + ".");
                unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnKickUserFromClan', "Failed");
            }
        } else {
            console.log("Clan " + clanName + " not found in database.");
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnKickUserFromClan', "Failed");
        }
    }).catch(err => {
        console.log("Error getting members for clan " + clanName + ": " + err);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnKickUserFromClan', "Failed");
    });
}
function setClanIcon(clanName, iconUrl) {
    let db = firebase.database();
    let clanRef = db.ref("clans/" + clanName + "/icon");
    clanRef.once("value").then(function (snapshot) {
        let existingIcon = snapshot.val();
        if (existingIcon) {
            // Update the existing icon URL
            clanRef.set(iconUrl)
                .then(() => {
                    console.log("Successfully updated the icon for clan " + clanName);
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetClanIcon', "Success");
                })
                .catch(err => {
                    console.log("Error updating the icon for clan " + clanName + ": " + err);
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetClanIcon', "Failed");
                });
        } else {
            // Set the icon URL if no existing icon is found
            clanRef.set(iconUrl)
                .then(() => {
                    console.log("Successfully set the icon for clan " + clanName);
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetClanIcon', "Success");
                })
                .catch(err => {
                    console.log("Error setting the icon for clan " + clanName + ": " + err);
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetClanIcon', "Failed");
                });
        }
    }).catch(err => {
        console.log("Error getting the icon for clan " + clanName + ": " + err);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnSetClanIcon', "Failed");
    });
}


function addRequestToClan(clanName, userId, reqID) {
    let db = firebase.database();
    let clanRef = db.ref("clans/" + clanName + "/requests");
    clanRef.once("value").then(function (snapshot) {
        let requests = snapshot.val();
        if (requests) {
            requests = requests + "|" + userId;
        } else {
            requests = userId;
        }
        clanRef.set(requests)
            .then(() => {
                console.log("Successfully added user " + userId + " to clan " + clanName + " requests.");
                unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddRequestToClan', "Success");

            })
            .catch(err => {
                console.log("Error adding user " + userId + " to clan " + clanName + " requests: " + err);
                unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddRequestToClan', "Failed");

            });
    }).catch(err => {
        console.log("Error getting clan " + clanName + " requests: " + err);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddRequestToClan', "Failed");
    });
}
function addTrophiesToClan(clanName, amountToAdd) {
    let db = firebase.database();
    let clanRef = db.ref("clans/" + clanName + "/trophies");
    clanRef.once("value").then(function (snapshot) {
        let trophies = snapshot.val();
        if (trophies) {
            trophies += amountToAdd;
        } else {
            trophies = amountToAdd;
        }
        clanRef.set(trophies)
            .then(() => {
                console.log("Successfully added " + amountToAdd + " trophies to clan " + clanName + ".");
                unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddTrophiesToClan', "Success");

            })
            .catch(err => {
                console.log("Error adding " + amountToAdd + " trophies to clan " + clanName + ": " + err);
                unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddTrophiesToClan', "Failed");

            });
    }).catch(err => {
        console.log("Error getting clan " + clanName + " trophies: " + err);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddTrophiesToClan', "Failed");
    });
}

function removeRequestFromClan(clanName, userId) {
    let db = firebase.database();
    let clanRef = db.ref("clans/" + clanName + "/requests");
    clanRef.once("value").then(function (snapshot) {
        let requests = snapshot.val();
        if (requests) {
            let updatedRequests = requests.split("|").filter(function (req) {
                return req.split("&")[0] !== userId;
            }).join("|");
            clanRef.set(updatedRequests)
                .then(() => {
                    console.log("Successfully removed user " + userId + " from clan " + clanName + " requests.");
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnRemoveRequestFromClan', "Success");

                })
                .catch(err => {
                    console.log("Error removing user " + userId + " from clan " + clanName + " requests: " + err);
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnRemoveRequestFromClan', "Failed");

                });
        }
    }).catch(err => {
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnRemoveRequestFromClan', "Failed");
        console.log("Error getting clan " + clanName + " requests: " + err);
    });
}
function acceptRequest(clanName, userId) {
    let db = firebase.database();
    let clanRef = db.ref("clans/" + clanName);
    clanRef.once("value").then(function (snapshot) {
        let clanData = snapshot.val();
        let members = clanData.members ? clanData.members.split("-") : [];
        let requests = clanData.requests ? clanData.requests.split("|") : [];
        requests = requests.filter(request => !request.includes(userId));
        members.push(userId);
        clanRef.update({
            requests: requests.join("|"),
            members: members.join("-")
        })
            .then(() => {
                console.log("Successfully accepted request from user " + userId + " in clan " + clanName + ".");
                unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAcceptRequest', "Success");
            })
            .catch(err => {
                console.log("Error accepting request from user " + userId + " in clan " + clanName + ": " + err);
                unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAcceptRequest', "Failed");
            });
    })
        .catch(err => {
            console.log("Error getting clan data for " + clanName + ": " + err);
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAcceptRequest', "Failed");
        });
}
function createClan(clanJson) {
    console.log("js createClan called");
    let db = firebase.database();
    let clan = JSON.parse(clanJson);
    let clanName = Object.keys(clan)[0];
    let clanData = clan[clanName];
    let clanRef = db.ref("clans/" + clanName);
    clanRef.once("value").then(function (snapshot) {
        if (snapshot.exists()) {
            console.log("Error: A clan with the name " + clanName + " already exists.");
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnCreatedClan', "Failed");
        } else {
            db.ref("clans/" + clanName).set(clanData, (err) => {
                console.log(JSON.stringify({ err }));
                if (err) {
                    console.log("Error creating clan: " + err);
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnCreatedClan', "Failed");
                } else {
                    console.log("Successfully created clan: " + clanName);
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnCreatedClan', "Success");
                }
            });
        }
    }).catch(err => {
        console.log("Error checking if clan exists: " + err);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnCreatedClan', "Failed");
    });
}
function getClanMessages(clanName) {
    let db = firebase.database();
    let clanRef = db.ref("clans/" + clanName + "/messages");
    clanRef.once("value").then(function (snapshot) {
        let messages = snapshot.val();
        let messagesJson = JSON.stringify(messages);
        //console.log("Clan messages: " + messagesJson);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGetClanMessages', messagesJson);
    }).catch(err => {
        console.log("Error getting clan messages: " + err);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGetClanMessages', "Failed");
    });
}
function addClanMessage(clanName, sender, message) {
    let db = firebase.database();
    let clanRef = db.ref("clans/" + clanName + "/messages");
    clanRef.update({
        [sender]: message
    }).then(() => {
        console.log("Clan message added successfully!");
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddClanMessage', "Success");
    }).catch(err => {
        console.log("Error adding clan message: " + err);
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnAddClanMessage', "Failed");
    });
}
function getClipboard() {
    navigator.clipboard.readText()
        .then(clipboardContents => {
            console.log("clipboard: " + clipboardContents);
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGotClipboard', clipboardContents);
        })
        .catch(error => {
            console.error("Failed to read clipboard:", error);
        });
}


/*---------GET DATA---------*/
function getData(path, reqID) {
    let db = firebase.database();
    let ref = db.ref(path);
    ref.on('value', (snapshot) => {
        let value = snapshot.val();
        if (value === null) {
            value = "null";
        } else {
            value = value.toString();
        }
        unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGotData', value + "&" + reqID);

    });
}

function getBattlepassEndTime() {
    firebase.database().ref('battlepass/endtime').once('value')
        .then((snapshot) => {
            const endtime = snapshot.val();
            unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnGotBattlePassEndTime', endtime);

        })
        .catch((error) => {
            console.error(error);
        });
}


/*---------FIREBASE STORAGE START---------*/
function uploadImage() {
    // Create a file select window
    var fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("accept", "image/jpeg, image/jpg, image/png");
    fileSelector.setAttribute("max-size", "8000000");


    // Listen for when the user selects an image
    fileSelector.addEventListener("change", function () {
        // Get the selected file
        var file = fileSelector.files[0];

        // Reference to Firebase Storage
        var storageRef = firebase.storage().ref();

        // Create a new child reference
        var uploadTask = storageRef.child("images/" + file.name).put(file);

        // Listen for state changes, errors, and completion of the upload
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //console.log("Upload is " + progress + "% done");
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        //console.log("Upload is paused");
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        //console.log("Upload is running");
                        break;
                }
            }, function (error) {
                // Handle unsuccessful uploads
                unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnUploadedImage', "Failed");
                console.log(error.message);
            }, function () {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                    console.log("File available at", downloadURL);
                    unityInstance.SendMessage('FirebasePlayerPrefs2023', 'OnUploadedImage', downloadURL);

                });
            });
    });

    // Open the file select window
    fileSelector.click();
}

/*---------FIREBASE STORAGE END---------*/
/*---------FIREBASE PLAYERPREFS 2023 END---------*/

function LogoutUser() {
    console.log("LogoutUser called from JS");
    firebase.auth().signOut().then(() => {
        console.log("sending to GameManager");
        unityInstance.SendMessage('GameManager', 'OnLoggedOutGoogle');
        //ReloadGame();

    }).catch((error) => {
        // An error happened.
        console.log("An error happened : " + error);

    });
}
