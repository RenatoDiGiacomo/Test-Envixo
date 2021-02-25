const cadastro = document.getElementById("cadastro");
const login = document.getElementById("login");
const linkCadastro = document.getElementById("linkCadastro");
const linkLogin = document.getElementById("linkLogin");
function ativar1() {
  if (login.classList == "ativo") {
    login.classList.remove("ativo");
    cadastro.classList.add("ativo");
    linkLogin.classList.remove("ativoLink");
    linkCadastro.classList.add("ativoLink");
    
  }
}
function ativar2() {
  if (login.classList !== "ativo") {
    login.classList.add("ativo");
    cadastro.classList.remove("ativo");
    linkLogin.classList.add("ativoLink");
    linkCadastro.classList.remove("ativoLink");
  }
}
