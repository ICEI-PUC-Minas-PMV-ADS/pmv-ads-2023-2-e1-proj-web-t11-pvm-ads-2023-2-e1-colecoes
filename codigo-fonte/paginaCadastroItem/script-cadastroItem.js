function cadastrar() {
 
    if (categoria.value == "") {
      alert("Preencha o formulário corretamente!");
      categoria.focus();
      return;
    }
    
    if (descricao.value == "") {
        alert("Preencha o formulário corretamente!");
        descricao.focus();
        return;
      }
      
      
    if (dataAquisicao.value == "") {
        alert("Preencha o formulário corretamente!");
        dataAquisicao.focus();
        return;
      }
      
      
    if (historia.value == "") {
        alert("Preencha o formulário corretamente!");
        historia.focus();
        return;
      }
      
      
    if (avaliacao.value == "") {
        alert("Preencha o formulário corretamente!");
        avaliacao.focus();
        return;
      }
      
    if (origem.value == "") {
        alert("Preencha o formulário corretamente!");
        origem.focus();
        return;
      }  
      
    if (imagem.value == "") {
        alert("Preencha o formulário corretamente!");
        imagem.focus();
        return;
      }
  

    let listaItens = JSON.parse(localStorage.getItem('listaItens') || '[]')
  
    listaItens.push(
      {
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
      window.location.href='../paginaMinhasColecoes/minhaColecao.html';
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

