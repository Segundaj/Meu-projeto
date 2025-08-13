// Pega referências dos elementos HTML

const form = document.getElementById("contact-form");

const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");
const emailInput = document.getElementById("email");
const contactList  = document.getElementById("contacto_list");


// Array que vai guardar os contatos

let contactos = JSON.parse(localStorage.getItem("contactos")) || [];

// Variável para controlar edição

let editIndex = null;

// Função para mostrar contatos na tela

function renderContactos(){
    contacto_list.innerHTML = "";
contactos.forEach((contactos,index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `<td>${contactos.nome}</td>
            <td>${contactos.telefone}</td>
            <td>${contactos.email}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editarContacto(${index})">Editar</button>
        <button class="action-btn delete-btn" onclick="deletarContactos(${index})">Excluir</button>
            </td>
        `;

        contactList.appendChild(tr);

});     
}

// Função para salvar no localStorage

function salvarLocalstorage(){
    localStorage.setItem("contactos", JSON.stringify(contactos));

}

// Função para adicionar/editar contato

form.addEventListener("submit",function(a){
    a.preventDefault();

    const novoContacto = {
        nome:nomeInput.value,
        telefone:telefoneInput.value,
        email:emailInput.value
    };

    if(editIndex === null){
               email: emailInput.value
    };

    if (editIndex === null) {
        // Adiciona novo contato
  contactos.push(novoContacto);
    } else{
              // Atualiza contato existente
              contactos[editIndex] = novoContacto;
              editIndex = null;  
    }
    salvarLocalstorage();
    renderContactos();
    form.reset();
});

// Função para editar contato
function editarContacto(index){
    const contato = contactos[index];
    nomeInput.value = contato.nome;
    telefoneInput.value = contato.telefone;
    emailInput.value = contato.email;
    editIndex = index;
}

// Função para deletar contato

function deletarContactos(endex){
    contactos.splice(endex,1);
    salvarLocalstorage();
    renderContactos();
}

// Carrega os contatos ao iniciar
renderContactos();




function renderContactos(){
    contactList.innerHTML = "";
    contactos.forEach((contato, index) => {
        const tr = document.createElement("tr");
        tr.classList.add("contact-row"); // adiciona classe de animação

        tr.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td>${contato.email}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editarContacto(${index})">Editar</button>
                <button class="action-btn delete-btn" onclick="deletarContactos(${index})">Excluir</button>
            </td>
        `;

        contactList.appendChild(tr);
    });
}

function renderContactos(){
    contactList.innerHTML = "";
    contactos.forEach((contato, index) => {
        const tr = document.createElement("tr");
        tr.classList.add("contact-row"); // animação de entrada

        tr.innerHTML = `
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td>${contato.email}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editarContacto(${index})">Editar</button>
                <button class="action-btn delete-btn" onclick="deletarContactos(${index})">Excluir</button>
            </td>
        `;

        contactList.appendChild(tr);
    });
}

function deletarContactos(index){
    const row = contactList.children[index];
    row.classList.add("fade-out");
    setTimeout(() => {
        contactos.splice(index, 1);
        salvarLocalstorage();
        renderContactos();
    }, 500); // tempo igual ao da animação
}document.addEventListener("DOMContentLoaded", function(){
    const titulo = document.getElementById("titulo");
    const texto = "Agenda de Contacto";
    let i = 0;

    function escrever() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(escrever, 100); // Velocidade (ms)
        }
    }

    escrever();
});

