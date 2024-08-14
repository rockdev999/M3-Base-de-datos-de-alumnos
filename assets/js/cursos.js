import { formValues, onChangeInput } from "./controllers/controllers";
let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

let principalButton = document.getElementById("principal");
let logoutButton = document.getElementById("logout");
let agregarCursoP = document.getElementById("agregarCursoP");
let inputNomCurso = document.getElementById("inputNomCurso");
let inputNroMat = document.getElementById("inputNroMat");
let agregarCursoButton = document.getElementById("agregarCurso");

let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

// funciones header
principalButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../home.html";
});
logoutButton.addEventListener("click", function () {
  localStorage.removeItem("usuarioRegistrado");
  window.location = "../../index.html";
});

// funciones agregar curso
inputNomCurso.addEventListener("change", (event) => {
  onChangeInput(event);
});
inputNroMat.addEventListener("change", (event) => {
  onChangeInput(event);
});
agregarCursoButton.addEventListener("click", (event) => {
  event.preventDefault();
  // cambiar createNewStudent por otro para guardas cursos
  createNewStudent(formValues);
  clearForm();
});
