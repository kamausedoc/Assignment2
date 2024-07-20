let player;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'https://www.youtube.com/watch?v=k7KQwlr4RNc&list=RDk7KQwlr4RNc&start_radio=1', 
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    player.addEventListener('click', togglePlay);
}

function togglePlay() {
    if (isPlaying) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
    isPlaying = !isPlaying;
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var service = document.getElementById("service").value;
    var details = document.getElementById("details").value;

    if (name == "" || email == "" || service == "" || details == "") {
        alert("All fields must be filled out");
        return false;
    }

    return true;
}





