import { Alumno, Grupo } from "../data/class.js";

let usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

const logoutButton = document.getElementById("logout");
const cursosButton = document.getElementById("cursos");
const alumnosButton = document.getElementById("alumnos");
const principalButton = document.getElementById("principal");
function logoutFun() {
  localStorage.removeItem("usuarioRegistrado");
  window.location = "../../index.html";
}
logoutButton.addEventListener("click", logoutFun);

cursosButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioRegistrado));
  window.location = "../../cursos.html";
});

alumnosButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioRegistrado));
  window.location = "../../alumnos.html";
});

principalButton.addEventListener("click", function () {
  window.location.reload();
});

export { logoutFun };
