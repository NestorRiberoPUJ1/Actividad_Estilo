
var perrito = document.getElementById("perrito");

perrito.addEventListener("mouseenter", () => {
    perrito.classList.remove("imgPeq");
    perrito.classList.add("imgGra");
})

perrito.addEventListener("mouseleave", () => {
    perrito.classList.add("imgPeq");
    perrito.classList.remove("imgGra");
})

var btnReset = document.getElementById("btnReset");

btnReset.addEventListener("click", () => {
    var password = document.getElementById("password");
    password.value = "";
})


var welcome = document.getElementById("welcome");

welcome.addEventListener("click", () => {
    perrito.classList.remove("imgPeq");
    perrito.classList.add("imgGra");
    perrito.classList.add("hide");
})

welcome.addEventListener("dblclick", () => {
    perrito.classList.remove("imgGra");
    perrito.classList.add("imgPeq");
    perrito.classList.remove("hide");

})