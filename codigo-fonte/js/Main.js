
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
        html += "<tr class='table-borderless'>";
        html += "<div class='card'>"
        html += "<td><img src="+ element.imagem_item +" width='216' height='270' alt='Descrição da imagem'>"
        html += "<td>" + element.titulo_item + "</td>";
        html += "<td>" + element.categoria_item + "</td>";
        html += '<td class="update_button"><button data-toggle="modal" data-target="#modalExemplo" onclick="update_item('+index+')">Editar</button> <button onclick="deletar_item('+index+')">Deletar</button></td>';
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

function update_item(index){
    var lista_itens;
    if(localStorage.getItem("lista_itens") == null){
        lista_itens = [];
    }
    else{
        lista_itens = JSON.parse(localStorage.getItem("lista_itens"))
    }

    document.getElementById("titulo_item").value = lista_itens[index].titulo_item;
    document.getElementById("categoria_item").value = lista_itens[index].categoria_item;

    document.querySelector("#update").onclick = function(){
        if(validar_campos() == true){
            lista_itens[index].titulo_item = document.getElementById("titulo_item").value;
            lista_itens[index].categoria_item = document.getElementById("categoria_item").value;
            lista_itens[index].imagem_item = document.getElementById("imagem_item").value;

            localStorage.setItem("lista_itens", JSON.stringify(lista_itens));
            atualizar_itens()

            document.getElementById("titulo_item").value = "";
            document.getElementById("categoria_item").value = "";
            document.getElementById("imagem_item").value = "";
        }
    }

}