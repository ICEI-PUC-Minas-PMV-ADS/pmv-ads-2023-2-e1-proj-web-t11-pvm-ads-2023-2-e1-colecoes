function cadastrar() {
  if (tituloDoItem.value == "") {
      alert("Preencha o título do item corretamente!");
      tituloDoItem.focus();
      return;
    }
    
 
    if (categoria.value == "") {
      alert("Preencha a categoria corretamente!");
      categoria.focus();
      return;
    }
    
     
  

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
const imageInput = document.getElementById("imagem");

imageInput.addEventListener("change", handleImageSelection);

let selectedImageBase64 = null;

function handleImageSelection() {
    const selectedFile = imageInput.files[0];
    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function (event) {
            selectedImageBase64 = event.target.result;

            const imgElement = document.getElementById("imagemSelecionada");
            imgElement.src = selectedImageBase64;
          };
          
        reader.readAsDataURL(selectedFile);
    }
}

