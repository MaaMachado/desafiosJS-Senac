function irPage() {
  window.location.href="inicio.html";
}
function voltarPage() {
  window.location.href="conteudo.html";
}

// Código para todas as páginas para funcionalidade do MENU
function toggleMenu() {
  var menu = document.getElementById("menu");
    var menuBtn = document.querySelector(".menu-btn");

    menu.classList.toggle("open");
    menuBtn.classList.toggle("open");
}

// Código para todas as páginas para "index" do projeto
function voltarInicio() {
    window.location.href = "../inicio.html";
}
