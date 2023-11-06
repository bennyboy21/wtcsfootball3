const firebaseConfig = {
    apiKey: "AIzaSyCzs0fVAp3yr7sFeJwIk7RoiomZ5Ojkf_I",
    authDomain: "western-tech.firebaseapp.com",
    databaseURL: "https://western-tech-default-rtdb.firebaseio.com",
    projectId: "western-tech",
    storageBucket: "western-tech.appspot.com",
    messagingSenderId: "410795294570",
    appId: "1:410795294570:web:bcdb99863845666de7af13",
    measurementId: "G-W1YCJF20YP"
};

firebase.initializeApp(firebaseConfig);

var liveGame = false

firebase.database().ref("info-Games/").once('value', function(snapshot) {
    snapshot.forEach(function(child) {
        console.log(child.val())
        var element = document.createElement("div")
        element.classList.add("past-Game-Post-Container")
        element.innerHTML = '<div class="past-Game-Date">' + child.val().dateInfo + '</div><div class="past-Game-Our-Profile-Container"><img class="past-Game-Img" src="Media/Logo.png"></div><div class="past-Game-Their-Profile-Container"><img class="past-Game-Img" src="Media/' + child.val().opponent + '.png"></div><div class="vs-Text">VS</div><div class="final-Text">-</div><div class="our-Final-Score">' + child.val().ourScore + '</div><div class="their-Final-Score">' + child.val().opponentScore + '</div>'
        document.getElementById("past-Games-Container").prepend(element)
        var element = document.createElement("div")
        element.innerHTML = '<div class="line-Game-Break"></div>'
        document.getElementById("past-Games-Container").prepend(element)
    })
    // var element = document.createElement("div")
    // element.innerHTML = '<div class="line-Game-Break"></div>'
    // document.getElementById("past-Games-Container").appendChild(element)
    // var element = document.createElement("div")
    // element.innerHTML = '<div class="see-More-Button">See More</div>'
    // document.getElementById("past-Games-Container").appendChild(element)
})

firebase.database().ref("live-Game").once("value", function(snapshot) {
    if(snapshot.val() != undefined) {
        var element = document.createElement("div")
        element.classList.add("past-Game-Post-Container")
        element.innerHTML = '<div class="red-Flash">Live</div><div class="past-Game-Post-Container" style="background:rgb(255, 255, 255, 0.02);backdrop-filter: blur(1rem);-webkit-backdrop-filter: blur(1rem); border-radius: 15px;position:relative;height:200px;margin-top: -25px;"><div id="quarter-Container"><div class="quarter-1">' + snapshot.val().quarter + '</div><div class="quarter-2">' + snapshot.val().quarter + '</div></div><div class="past-Game-Our-Profile-Container" style="top:75px;"><img class="past-Game-Img" src="Media/Logo.png"></div><div class="past-Game-Their-Profile-Container" style="top:75px;"><img class="past-Game-Img" src="Media/' + snapshot.val().opponent + '.png"></div><div class="vs-Text" style="top:80px;">VS</div><div class="final-Text">-</div><div class="our-Final-Score-Container"><div class="our-Final-Score-1">' + snapshot.val().ourScore + '</div><div class="our-Final-Score-2">' + snapshot.val().ourScore + '</div></div><div class="their-Final-Score-Container"><div class="their-Final-Score-1">' + snapshot.val().theirScore + '</div><div class="their-Final-Score-2">' + snapshot.val().theirScore + '</div></div></div>'
        document.getElementById("real-Live-Section").appendChild(element)
        liveGame = true
    } else {
        document.getElementById("real-Live-Section").style.display = "none"
    }
})

firebase.database().ref("live-Game").on("child_changed", function(snapshot) {
    const changedChildKey = snapshot.key;
    const changedChildValue = snapshot.val();

    if(changedChildKey == "theirScore") {
        setTimeout(function() {
            document.querySelector(".their-Final-Score-2").innerText = changedChildValue
            document.querySelector(".their-Final-Score-1").style.transition = ".5s"
            document.querySelector(".their-Final-Score-1").style.top = "-50px"
            document.querySelector(".their-Final-Score-2").style.transition = ".5s"
            document.querySelector(".their-Final-Score-2").style.top = "0px"
            setTimeout(function() {
                document.querySelector(".their-Final-Score-1").style.transition = "0s"
                document.querySelector(".their-Final-Score-1").style.top = "-50px"
                document.querySelector(".their-Final-Score-1").innerText = changedChildValue

                setTimeout(function() {
                    document.querySelector(".their-Final-Score-1").style.transition = "0s"
                    document.querySelector(".their-Final-Score-1").style.top = "0px"
                    document.querySelector(".their-Final-Score-1").innerText = changedChildValue
                    document.querySelector(".their-Final-Score-2").style.transition = "0s"
                    document.querySelector(".their-Final-Score-2").style.top = "50px"
                    document.querySelector(".their-Final-Score-2").innerText = changedChildValue
                }, 500)
            }, 500)   
        }, 1000)
    } else if(changedChildKey == "ourScore") {
        setTimeout(function() {
            document.querySelector(".our-Final-Score-2").innerText = changedChildValue
            document.querySelector(".our-Final-Score-1").style.transition = ".5s"
            document.querySelector(".our-Final-Score-1").style.top = "-50px"
            document.querySelector(".our-Final-Score-2").style.transition = ".5s"
            document.querySelector(".our-Final-Score-2").style.top = "0px"
            setTimeout(function() {
                document.querySelector(".our-Final-Score-1").style.transition = "0s"
                document.querySelector(".our-Final-Score-1").style.top = "-50px"
                document.querySelector(".our-Final-Score-1").innerText = changedChildValue

                setTimeout(function() {
                    document.querySelector(".our-Final-Score-1").style.transition = "0s"
                    document.querySelector(".our-Final-Score-1").style.top = "0px"
                    document.querySelector(".our-Final-Score-1").innerText = changedChildValue
                    document.querySelector(".our-Final-Score-2").style.transition = "0s"
                    document.querySelector(".our-Final-Score-2").style.top = "50px"
                    document.querySelector(".our-Final-Score-2").innerText = changedChildValue
                }, 500)
            }, 500)   
        }, 1000)
    } else if(changedChildKey == "quarter") {
        setTimeout(function() {
            document.querySelector(".quarter-2").innerText = changedChildValue
            document.querySelector(".quarter-1").style.transition = ".5s"
            document.querySelector(".quarter-1").style.marginTop = "-50px"
            document.querySelector(".quarter-2").style.transition = ".5s"
            document.querySelector(".quarter-2").style.marginTop = "0px"
            setTimeout(function() {
                document.querySelector(".quarter-1").style.transition = "0s"
                document.querySelector(".quarter-1").style.marginTop = "-50px"
                document.querySelector(".quarter-1").innerText = changedChildValue
        
                setTimeout(function() {
                    document.querySelector(".quarter-1").style.transition = "0s"
                    document.querySelector(".quarter-1").style.marginTop = "0px"
                    document.querySelector(".quarter-1").innerText = changedChildValue
                    document.querySelector(".quarter-2").style.transition = "0s"
                    document.querySelector(".quarter-2").style.marginTop = "50px"
                    document.querySelector(".quarter-2").innerText = changedChildValue
                }, 500)
            }, 500)   
        }, 1000)
    }
    console.log("Child Key:", changedChildKey);
    console.log("Child Value:", changedChildValue);
});

firebase.database().ref("next-Game/").once("value", function(snapshot) {
    if(snapshot.val() != undefined && !liveGame) {
        // console.log(snapshot.val())
        snapshot.forEach(function(child) {
            console.log(child.val())
            var element = document.createElement("div")
            element.classList.add("past-Game-Post-Container")
            element.innerHTML = '<div class="past-Game-Post-Container" style="background:rgb(255, 255, 255, 0.02);backdrop-filter: blur(1rem);-webkit-backdrop-filter: blur(1rem); border-radius: 15px;position:relative;height:200px;margin-top: -25px;"><div class="quarter">' + child.val().dateInfo + ' At ' + child.val().time + '</div><div class="past-Game-Our-Profile-Container" style="top:75px;"><img class="past-Game-Img" src="Media/Logo.png"></div><div class="past-Game-Their-Profile-Container" style="top:75px;"><img class="past-Game-Img" src="Media/' + child.val().opponent + '.png"></div><div class="vs-Text" style="top:80px;">VS</div><div class="final-Text">-</div><div class="our-Final-Score">-</div><div class="their-Final-Score">-</div></div>'
            document.getElementById("live-Section").appendChild(element)
        })
    } else {
        document.getElementById('live-Section').style.display = "none"
    }
})

firebase.database().ref("notification").once("value", function(snapshot) {
    if(snapshot.val() != undefined) {
        document.getElementById("notification-Header").innerText = snapshot.val().Header
        document.getElementById("view-More-Notification").innerText = snapshot.val().info
        document.getElementById("notification-Container").style.transition = ".5s"
        document.getElementById("notification-Container").style.top = "0px"
        document.getElementById("top-Bar").style.transition = ".5s"
        document.getElementById("top-Bar").style.top = "var(--height-Amount)"
    } else {
        document.getElementById("notification-Container").style.top = "calc(var(--height-Amount) * -1)"
        document.getElementById("top-Bar").style.top = "0px"
    }
})

var video = document.querySelector('.videoPlayer');
video.volume = 1
video.playbackRate = 1

var watchAgain = false

var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Change this threshold as needed
};

var observer = new IntersectionObserver(handleIntersection, options);

function handleIntersection(entries, observer) {
    entries.forEach(function(entry) {
    if (entry.isIntersecting && !watchAgain) {
        video.play();
    } else {
        video.pause();
    }
    });
}

observer.observe(video);

video.addEventListener('ended', function() {
    // This function will run when the video ends
    document.querySelectorAll(".watch-Again")[0].style.zIndex = "5"
    setTimeout(function() {
        document.querySelectorAll(".watch-Again")[0].style.opacity = "0"
        document.querySelectorAll(".watch-Again")[0].style.transition = ".5s"
        document.querySelectorAll(".watch-Again")[0].style.opacity = "1"
    }, 100)

    setTimeout(function() {
        document.querySelectorAll(".watch-Again")[0].style.transition = "0s"
    }, 500)

    watchAgain = true

});

function restartVideo() {
    document.querySelectorAll(".watch-Again")[0].style.opacity = "1"
    document.querySelectorAll(".watch-Again")[0].style.transition = ".5s"
    document.querySelectorAll(".watch-Again")[0].style.opacity = "0"

    setTimeout(function() {    
        video.play()
    }, 250)

    setTimeout(function() {
        document.querySelectorAll(".watch-Again")[0].style.transition = "0s"
        document.querySelectorAll(".watch-Again")[0].style.zIndex = "-1"
    }, 500)

    watchAgain = false
}

function muteUnmute() {
    if(video.muted) {
        video.muted = false
        document.getElementById("un-Mute").style.display = "none"
        document.getElementById("mute").style.display = "flex"
    } else {
        video.muted = true
        document.getElementById("un-Mute").style.display = "flex"
        document.getElementById("mute").style.display = "none"
    }
}

function loadBody() {
    document.getElementById("loading-Container").style.transitionDelay = "1.5s"
    document.getElementById("loading-Container").style.transition = ".5s"
    document.getElementById("loading-Container").style.background = "radial-gradient(rgba(5, 5, 5, 0) 0%, transparent 0%)"
    setTimeout(function() {
        document.querySelector("body").style.transition = ".5s"
        document.querySelector("body").style.opacity = "1"

        setTimeout(function() {
            document.querySelector("body").style.transition = "0s"
            document.getElementById("loading-Container").style.zIndex = "-1"
        }, 500)
    }, 1000)
}

function closeNotification() {
    document.getElementById("notification-Container").style.transition = ".5s"
    document.getElementById("notification-Container").style.top = "calc(var(--height-Amount) * -1)"
    document.getElementById("top-Bar").style.transition = ".5s"
    document.getElementById("top-Bar").style.top = "0px"
}