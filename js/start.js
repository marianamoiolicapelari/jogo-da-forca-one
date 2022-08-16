var entrada = document.querySelector(".entrada");
entrada.disabled = true; 
var tabuleiro1 = document.querySelector(".tabuleiro1");
var tabuleiro2 = document.querySelector(".tabuleiro2");

function start(){
   
    entrada.disabled = false;
    erros = 0;
    acertos = 0;
    i = Math.floor(Math.random() * palavras.length);
    caracteres = [];
    linhas = document.querySelector(".linhas");
    
    tabuleiro1.innerHTML = "";
    tabuleiro2.innerHTML = "";
    mostraErros.innerHTML = "";
    mensagem.innerHTML = "";
    novo.innerHTML = "";
    tabuleiro1.innerHTML = `<canvas class="forca" width="400" height="400"></canvas>`;
    
    tabuleiro2.innerHTML += `<p class="linhas"></p>`
    novo.innerHTML = '<button class="botao botao1" onclick="start()">Novo jogo</button>';
    novo.innerHTML += '<button class="botao botao2" onclick="cancelar()">Desistir</button>';
    
    sorteia();
    desenhaForca();

}