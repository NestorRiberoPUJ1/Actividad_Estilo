

var boton2 = document.getElementById("btn2");
var veces = 0;
boton2.addEventListener("click",()=>{
    console.log("CLIKED THE BTN "+veces);
    veces++;
})


var boton1 = document.getElementById("btn1");
boton1.addEventListener("mouseenter",()=>{
    console.log("MOUSE ENTER");
})