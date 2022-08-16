
function criaCampo() {

    tabuleiro1.innerHTML = "";
    tabuleiro2.innerHTML = "";

    tabuleiro1.innerHTML = '<textarea maxlength="10" name="" id="campo" placeholder="Digite uma palavra"></textarea>';
    tabuleiro2.innerHTML += '<div class="aviso"><img src="img/aviso.png" alt="icone de informação" width="20px" height="15px"><p>Máx. de 10 letras.</p></div>';
    tabuleiro2.innerHTML += '<div class="opcoes"><button class="botao botao1" onclick="adicionaPalavra()">Salvar e começar</button><button class="botao botao2" onclick="cancelar()">Cancelar</button></div>';
    
}

function cancelar() {
    location.reload();
}

function adicionaPalavra() {
    
    var campo = document.querySelector("#campo");
    
    if(campo.value.length == 0) {
        alert("Adicione uma palavra ou clique em cancelar");
        campo.focus();
    } else {
        
        palavras.push(campo.value.toLowerCase());
        start();
    }
        
}