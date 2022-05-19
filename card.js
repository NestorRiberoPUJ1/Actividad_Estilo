
var perrito = document.getElementById("perrito");

perrito.addEventListener("mouseenter",()=>{
    perrito.classList.remove("imgPeq");
    perrito.classList.add("imgGra");
})

perrito.addEventListener("mouseleave",()=>{
    perrito.classList.add("imgPeq");
    perrito.classList.remove("imgGra");
})

var btnReset= document.getElementById("btnReset");

btnReset.addEventListener("click",()=>{
    var password= document.getElementById("password");
    password.value="";
})