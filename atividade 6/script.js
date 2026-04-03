const cria = document.getElementById("mainImage");
const btn = document.getElementById("btnImage");
const fundoDia = "background.png";
const fundoNoite = "background_noite.png";


const estados = {
    normal:  "gojo_n.png",
    puto: "gojo_p.png",
    morto: "gojo_d.png",
    comendo: "gojo_eat.png",
    alimentado: "gojo_a.png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;
let horas = 0;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);
            
            if (contador == 30){
                cria.src = estados.puto;
            }

            if(contador == 60){
                cria.src = estados.morto;
            }
        }, 1000);
}

function alimentar() {

     cria.src = estados.comendo;
    contador = 0;

    console.log("Comendo");

    if (time_click) clearTimeout(time_click);

    time_click = setTimeout(() => {
        cria.src = estados.alimentado;

        time_out = setTimeout(() => {
            cria.src = estados.normal;
        }, 2000);

    }, 1000);
}

function atualizarFundo() {
    if (horas) clearInterval(horas);

    horas = setInterval(() => {
    horas++;
    
    if (horas >= 12) {
        document.body.style.backgroundImage = `url('${fundoNoite}')`;
    } else {
        document.body.style.backgroundImage = `url('${fundoDia}')`;
    }
    if(horas >=24) horas =0;

    }, 100);
}

controlador();
atualizarFundo();
