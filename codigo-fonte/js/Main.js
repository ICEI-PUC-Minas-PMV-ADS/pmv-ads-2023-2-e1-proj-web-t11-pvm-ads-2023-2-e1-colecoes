
function signup(e){
    event.preventDefault();
    console.log('Funcionando');

    var username = document.getElementById('Signup_user').value;
    var email = document.getElementById('Signup_email').value;
    var password = document.getElementById('Signup_password').value;

    var user = {
        username: username,
        email: email,
        password: password,
    }

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('User cadastrado')

    setTimeout(function() {
        window.location.href='../pages/login.html';
    }, 1000);
}

function login(e){
    event.preventDefault();

    var username = document.getElementById('Login_user').value;
    var password = document.getElementById('Login_password').value;

    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
        alert("Usuário Inválido");
        console.log("1")
    }else if(username == data.username && password == data.password){
        alert("Logado com sucesso");
        setTimeout(function() {
            window.location.href='../pages/minhacolecao.html';
        }, 1000);
        }else{
            alert("Senha Inválidos");
        }


}

function validar_campos(){
    var titulo_item = document.getElementById("titulo_item").value;
    var categoria_item = document.getElementById("categoria_item").value;
    var imagem_item = document.getElementById("imagem_item").value;
    var size_imagem_item = document.getElementById("imagem_item").size;

    if(titulo_item == ""){
        alert("O Titulo do seu item é obrigatório");
        return false;
    }

    if(categoria_item == ""){
        alert("A categoria do seu item é obrigatório");
        return false;
    }

    if(imagem_item == ""){
        alert("A imagem do seu item é obrigatório");
        return false;
    }

    if(size_imagem_item > 512){
        alert("O arquivo é muito grande");
        return false;
    }

    return true
}

function atualizar_itens(){
    var lista_itens;
    if(localStorage.getItem("lista_itens") == null){
        lista_itens = [];
    }
    else{
        lista_itens = JSON.parse(localStorage.getItem("lista_itens"))
    }

    var html = "";

    lista_itens.forEach(function (element, index){
        html += "<tr class='border border-0'>";
        html += "<div>"
        html += "<td><img src="+ element.imagem_item +" width='150' height='200' alt='Descrição da imagem'>"
        html += "<td class='title_item'>" + element.titulo_item + "</td>";
        html += "<td class='cat_item'>" + element.categoria_item + "</td>";
        html += '<td><button data-toggle="modal" data-target="#modal_info" onclick="info_item('+index+')"><i class="bx bxs-info-circle"></i></button> <button data-toggle="modal" data-target="#modal_cadastro" onclick="update_item('+index+')"><i class="bx bxs-edit-alt"></i></button> <button onclick="deletar_item('+index+')"><i class="bx bxs-trash-alt" ></i></button></td>';
        html += "</div>"
        html += "</tr>"
    });

    document.querySelector("#crudtable tbody").innerHTML = html;
}

document.onload = atualizar_itens();

function add_itens(){
    if(validar_campos() == true){
        var titulo_item = document.getElementById("titulo_item").value;
        var categoria_item = document.getElementById("categoria_item").value;
        var imagem_item = document.getElementById("imagem_item").value;

        var lista_itens;
        if(localStorage.getItem("lista_itens") == null){
            lista_itens = [];
        }
        else{
            lista_itens = JSON.parse(localStorage.getItem("lista_itens"))
        }

        lista_itens.push({
            titulo_item: titulo_item,
            categoria_item: categoria_item,
            imagem_item: selectedImageBase64,
        });

        localStorage.setItem("lista_itens", JSON.stringify(lista_itens));
        atualizar_itens();

        document.getElementById("titulo_item").value = "";
        document.getElementById("categoria_item").value = "";
        document.getElementById("imagem_item").value = "";
    }
}

const imageInput = document.getElementById("imagem_item");

imageInput.addEventListener("change", handleImageSelection);

let selectedImageBase64 = null;

function handleImageSelection() {
    const selectedFile = imageInput.files[0];
    if (selectedFile) {
        const reader = new FileReader();

        reader.onload = function (event) {
            selectedImageBase64 = event.target.result;

            const imgElement = document.getElementById("imagem_item");
            imgElement.src = selectedImageBase64;
          };

        reader.readAsDataURL(selectedFile);
    }
}

function deletar_item(index){
    var lista_itens;
    if(localStorage.getItem("lista_itens") == null){
        lista_itens = [];
    }
    else{
        lista_itens = JSON.parse(localStorage.getItem("lista_itens"))
    }

    lista_itens.splice(index, 1);
    localStorage.setItem("lista_itens", JSON.stringify(lista_itens));
    atualizar_itens(); 
} 

function info_item(index){
    var lista_itens;
    if(localStorage.getItem("lista_itens") == null){
        lista_itens = [];
    }
    else{
        lista_itens = JSON.parse(localStorage.getItem("lista_itens"))
    }

    document.getElementById("info_imagem_item").src = lista_itens[index].imagem_item;
    document.getElementById("info_titulo_item").value = lista_itens[index].titulo_item;
    document.getElementById("info_categoria_item").value = lista_itens[index].categoria_item;
}

function update_item(index){
    const button = document.getElementById("update");
    button.disabled = false;
    var lista_itens;
    if(localStorage.getItem("lista_itens") == null){
        lista_itens = [];
    }
    else{
        lista_itens = JSON.parse(localStorage.getItem("lista_itens"))
    }

    document.getElementById("titulo_item").value = lista_itens[index].titulo_item;
    document.getElementById("categoria_item").value = lista_itens[index].categoria_item;


    document.querySelector("#close_button").onclick = function(){
        document.getElementById("titulo_item").value = "";
        document.getElementById("categoria_item").value = "";
        document.getElementById("imagem_item").value = "";
        button.disabled = true;

    }

    document.querySelector("#fechar_button").onclick = function(){
        document.getElementById("titulo_item").value = "";
        document.getElementById("categoria_item").value = "";
        document.getElementById("imagem_item").value = "";
        button.disabled = true;

    }

    document.querySelector("#update").onclick = function(){
        if(validar_campos() == true){
            lista_itens[index].titulo_item = document.getElementById("titulo_item").value;
            lista_itens[index].categoria_item = document.getElementById("categoria_item").value;
            lista_itens[index].imagem_item = selectedImageBase64;

            localStorage.setItem("lista_itens", JSON.stringify(lista_itens));
            atualizar_itens()

            document.getElementById("titulo_item").value = "";
            document.getElementById("categoria_item").value = "";
            document.getElementById("imagem_item").value = "";
            button.disabled = true;
        }
    }

}