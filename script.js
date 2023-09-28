const activacionBarra = document.getElementById("barra-lateral-activar");
const barraLateral = document.querySelector(".barra-lateral"); //Obtenemos la referencia al primer elemento que coincida con ".barra-lateral"
const spans = document.querySelectorAll("span"); //Obtenemos la referencia de todos los elementos que coincida con "span"
const palanca = document.querySelector(".switch");
const circulo = document.querySelector(".circulo");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const botonIngresar = document.querySelector(".boton-ingresar");
const formLogin = document.querySelector(".form-login");
const formRegister = document.querySelector(".form-register");
const cerrarFormBtn = document.getElementById("cerrarForm");
const fondoLogin = document.querySelector(".fondo-login");

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";  
    }
})

palanca.addEventListener("click",()=>{
    let body = document.body;
    body.classList.toggle("modo-oscuro-activado");
    circulo.classList.toggle("prendido");
})


activacionBarra.addEventListener("click",(event)=>{
    if (event.target.classList.contains("barra-lateral-activar")) {
    barraLateral.classList.toggle("mini-barra-lateral"); //Agrega clase si no la tiene
    main.classList.toggle("min-main");
    spans.forEach((span) => { //ForEach para recorrer todos los span
        span.classList.toggle("oculto"); //Agrega clase si no la tiene
    });
}})

let activado = false;

botonIngresar.addEventListener("click",()=>{
    if(activado){ 
        formLogin.style.opacity = '0';
        formLogin.style.left = "-99999px";
        fondoLogin.style.opacity = '0';
        fondoLogin.style.left = "-99999px";
        activado = false;
    }else{
        formLogin.style.opacity = '1';
        formLogin.style.left = "0";
        fondoLogin.style.opacity = '1';
        fondoLogin.style.left = "0";
        activado = true;
    }
})

cerrarFormBtn.addEventListener("click",()=>{
    if(activado){ 
        formLogin.style.opacity = '0';
        formLogin.style.left = "-99999px";
        fondoLogin.style.opacity = '0';
        fondoLogin.style.left = "-99999px";
        activado = false;
    }
})

fondoLogin.addEventListener("click",()=>{
    if(activado){ 
        formLogin.style.opacity = '0';
        formLogin.style.left = "-99999px";
        fondoLogin.style.opacity = '0';
        fondoLogin.style.left = "-99999px";

        formRegister.style.opacity = '0';
        formRegister.style.left = "-99999px";
        fondoRegister.style.opacity = '0';
        fondoRegister.style.left = "-99999px";
        activado = false;
    }
})