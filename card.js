
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
var welcome = document.getElementById("welcome");

btnReset.addEventListener("click", () => {
    welcome.classList.toggle("hide");
})




welcome.addEventListener("click", () => {
    perrito.classList.remove("imgPeq");
    perrito.classList.add("imgGra");
    perrito.classList.add("hide");
})

welcome.addEventListener("dblclick", () => {


})