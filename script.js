const cadastro = document.getElementById("cadastro");
const login = document.getElementById("login");
function ativar1() {
  if (cadastro.classList == "ativo") {
    cadastro.classList.remove("ativo");
    login.classList.add("ativo");
  }
}
function ativar2() {
  if (cadastro.classList !== "ativo") {
    cadastro.classList.add("ativo");
    login.classList.remove("ativo");
  }
}
