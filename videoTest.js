
var videoPerrito = document.getElementById("videoPerrito");
var btnPlay = document.getElementById("btnPlay");

videoPerrito.play();
videoPerrito.pause();
videoPerrito.currentTime=0;


btnPlay.addEventListener("click",()=>{
    videoPerrito.play();
})