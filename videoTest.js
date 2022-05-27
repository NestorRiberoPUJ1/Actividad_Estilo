
var videoPerrito = document.getElementById("videoPerrito");
var btnPlay = document.getElementById("btnPlay");

videoPerrito.play();
videoPerrito.pause();
videoPerrito.currentTime = 0;

var isPlaying = false;

btnPlay.addEventListener("click", () => {
    videoPerrito.play();
})

videoPerrito.addEventListener("click", () => {
    if (!isPlaying) {
        videoPerrito.play();
        isPlaying=!isPlaying;
    }
    else if (isPlaying) {
        videoPerrito.pause();
        isPlaying=!isPlaying;
    }
})