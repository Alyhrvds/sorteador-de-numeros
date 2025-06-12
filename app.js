function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numeroAleatorio;
    if(quantidade < ate){
    for (let i = 0; i < quantidade; i++){
        numeroAleatorio = gerarNumeroAleatorio(de, ate);

        while(sorteados.includes(numeroAleatorio)){
            if(quantidade > (ate - de)){
                alert("A quantidade não pode ser menor que o intervalo");
                quantidade = 0;
            }
            numeroAleatorio = gerarNumeroAleatorio(de, ate);
        }

        sorteados.push(numeroAleatorio);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao();

    }
    }else{
        if(quantidade = ate){
        alert("A quantidade não deve ser maior ou igual ao número máximo.")
    }else{
        alert("A quantidade não deve ser maior ou igual ao número máximo.")
    }
    }
}

function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random()*(max - min) + min);
}

function alterarStatusBotao(){
    let reiniciar = document.getElementById('btn-reiniciar');
    if(reiniciar.classList.contains('container__botao-desabilitado')){
        reiniciar.classList.remove('container__botao-desabilitado');
        reiniciar.classList.add('container__botao');
    }else{
        reiniciar.classList.remove('container__botao');
        reiniciar.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}