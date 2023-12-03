let nomeDoHeroi = "Kanashirooo";
let xpDoHeroi = 0;
let nivel;

for (let xpDoHeroi = 0; xpDoHeroi <=12000; xpDoHeroi += 1000){

if (xpDoHeroi <= 1000) {
    nivel = "Ferro";
} else if(xpDoHeroi <= 2000){
    nivel = "Bronze";
} else if(xpDoHeroi <=5000){
    nivel = "Prata";
} else if(xpDoHeroi <= 7000){
    nivel = "Ouro";
} else if ( xpDoHeroi <= 8000){
    nivel="Platina";
} else if(xpDoHeroi<= 9000){
    nivel="Asendente";
} else if(xpDoHeroi<=10000){
    nivel="Imortal";
} else {
    nivel="Radiante";
}

console.log("O Heroi de nome " + nomeDoHeroi + " está no nível de " + nivel);
}