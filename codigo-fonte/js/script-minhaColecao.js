document.addEventListener('DOMContentLoaded', function() {
    let listaItens = JSON.parse(localStorage.getItem('listaItens') || '[]');

    let listagemItensAtual = document.getElementById("listagemItens").innerHTML

    for (const objeto of listaItens) {
        let itemHtml = `<div class='itensColecao'>
        <img src='${objeto.imagem}' width='93' height='84' alt='Descrição da imagem'>
        <h4 class='text-white'>${objeto.tituloDoItem}</h4>
        <p>${objeto.categoria}</p>
        <div class="adjust-buttons">
        <button><i class='bx bx-edit'></i></button>
        <button><i class='bx bx-trash'></i></button>
        </div>
        </div>`
            listagemItensAtual += itemHtml
    }

    document.getElementById("listagemItens").innerHTML = listagemItensAtual
      
});
