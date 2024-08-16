import { Grupo, Materia } from "../data/class.js";
// import { formValues, onChangeInput } from "./controllers/controllers.js";

let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

let principalButton = document.getElementById("principal");
let logoutButton = document.getElementById("logout");
let agregarGrupoP = document.getElementById("agregarGrupoP");
let inputNomGrupo = document.getElementById("inputNomGrupo");
let agregarGrupoButton = document.getElementById("agregarMaterias");
//FORM PARA MATERIAS
let inputNomMat = document.getElementById("inputNomMat");
let inputNomDoc = document.getElementById("inputNomDoc");
let inputHorario = document.getElementById("inputHorario");
let adicionarMatButton = document.getElementById("adicionarMat");
let terminarButton = document.getElementById("terminar");

// let grupos = JSON.parse(localStorage.getItem("grupos")) || [];
let grupos = [];

let materias = [];

// CREA EL NUEVO EL OBJETO GRUPO
const createNewGrupo = (grupo) => {
  // console.log(alumno);
  // console.log(alumno.first_name);
  let newGrupo = new Grupo(grupo.inputNomGrupo, materias);
  grupos.push(newGrupo);
  // console.log(grupos);
  // showStudents(alumnos);
};
// CREA EL NUEVO EL OBJETO MATERIA
const createNewMateria = (materia) => {
  let newMateria = new Materia(
    materia.inputNomMat,
    materia.inputNomDoc,
    materia.inputHorario
  );
  materias.push(newMateria);
  // console.log(materias);
};

// funciones header
principalButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../home.html";
});
logoutButton.addEventListener("click", function () {
  localStorage.removeItem("usuarioRegistrado");
  window.location = "../../index.html";
});

// funciones agregar grupo
let nom_grupo = "";
inputNomGrupo.addEventListener("change", (event) => {
  // onChangeInput(event);
  console.log(inputNomGrupo.value);
  nom_grupo = inputNomGrupo.value;
});
agregarGrupoButton.addEventListener("click", (event) => {
  event.preventDefault();
  // cambiar createNewStudent por otro para guardas cursos
  // createNewGrupo(formValues);
});
// funciones agregar materia
inputNomMat.addEventListener("change", (event) => {
  onChangeInput(event);
});
inputNomDoc.addEventListener("change", (event) => {
  onChangeInput(event);
});
inputHorario.addEventListener("change", (event) => {
  onChangeInput(event);
});
adicionarMatButton.addEventListener("click", (event) => {
  event.preventDefault();
  createNewMateria(formValues);
});
terminarButton.addEventListener("click", (event) => {
  event.preventDefault();
  createNewGrupo(nom_grupo, materias);
  console.log(grupos);
});

let formValues = {};

function onChangeInput(event) {
  formValues = { ...formValues, [event.target.id]: event.target.value };
  console.log(formValues);
}
