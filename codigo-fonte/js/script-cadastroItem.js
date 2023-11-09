function cadastrar() {
    let listaItens = JSON.parse(localStorage.getItem('listaItens') || '[]')
  
    listaItens.push(
      {
        tituloDoItem: tituloDoItem.value,
        descricao: descricao.value,
        dataAquisicao: dataAquisicao.value,
        historia: historia.value,
        avaliacao: avaliacao.value,
        origem: origem.value,
        imagem: selectedImageBase64,
        categoria: categoria.value 
      });
  
    localStorage.setItem("listaItens", JSON.stringify(listaItens))
  
    alert("Item Cadastrado com Sucesso!");    

    setTimeout(function() {
      window.location.href='../pages/minhacolecao.html';
    }, 1000);
}
