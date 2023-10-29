document.addEventListener('DOMContentLoaded', function() {
    let listaItens = JSON.parse(localStorage.getItem('listaItens') || '[]');

    let listagemItensAtual = document.getElementById("listagemItens").innerHTML

    for (const objeto of listaItens) {
        let itemHtml = `<div class='itensColecao'>
        <img src='${objeto.imagem}' width='93' height='84' alt='Descrição da imagem'>
        <h4 class='text-white'>${objeto.descricao}</h4>
        <p>${objeto.categoria}</p>
     </div>   `
            listagemItensAtual += itemHtml
    }

    document.getElementById("listagemItens").innerHTML = listagemItensAtual
      
});
