
var videoPerrito = document.getElementById("videoPerrito");
var btnPlay = document.getElementById("btnPlay");



btnPlay.addEventListener("click", () => {
    videoPerrito.play();
})

videoPerrito.addEventListener("click", () => {
    if (videoPerrito.paused == true) {
        videoPerrito.play();
    }
    else if (videoPerrito.paused == false) {
        videoPerrito.pause();
    }
})


var audioPrueba = document.getElementById("audioPrueba");

var btnPlayAudio = document.getElementById("btnPlayAudio");

btnPlayAudio.addEventListener("click", () => {
    if (audioPrueba.paused === true) {
        audioPrueba.play();
    }
    else if (audioPrueba.paused == false) {
        audioPrueba.pause();
    }
})