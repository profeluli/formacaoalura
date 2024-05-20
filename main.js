let nomeUsuário = "Luana";
let elemento = document.querySelector("#Luana");

while(nomeUsuário == "Luana"){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = 'seja muito bem-vindo.';
}else{
    elemento.textContent = nomeUsuário;
}