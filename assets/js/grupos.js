import { Grupo, Materia } from "../data/class.js";
// import { formValues, onChangeInput } from "./controllers/controllers.js";

let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

let principalButton = document.getElementById("principal");
let logoutButton = document.getElementById("logout");
let agregarGrupoP = document.getElementById("agregarGrupoP");
let inputNomGrupo = document.getElementById("inputNomGrupo");
let agregarGrupoButton = document.getElementById("agregarMaterias");
let listaGrupButton = document.getElementById("listaGrupButton");
//FORM PARA MATERIAS
let inputNomMat = document.getElementById("inputNomMat");
let inputNomDoc = document.getElementById("inputNomDoc");
let inputHorario = document.getElementById("inputHorario");
let adicionarMatButton = document.getElementById("adicionarMat");
let terminarButton = document.getElementById("terminar");
//MOSTRANDO LOS GRUPOS
let listGrup = document.getElementById("listGrup");
// MOSTRANDO AULA
let mostrarAulaButton = document.getElementById("mostrarAula");

let grupos = JSON.parse(localStorage.getItem("grupos")) || [];
// let grupos = [];

let materias = [];

// CREA EL NUEVO EL OBJETO GRUPO
const createNewGrupo = (grupo) => {
  // console.log(alumno);
  // console.log(alumno.first_name);
  let newGrupo = new Grupo(grupo.inputNomGrupo, materias);
  grupos.push(newGrupo);
  // console.log(grupos);
  showGrupos(grupos);
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
//MOSTRANDO GRUPOS EN PANTALLA
const showGrupos = (grupos) => {
  let listGruposHTML = "";
  let recibiendoMaterias = "";
  grupos.forEach((grupo) => {
    listGruposHTML += `
        <div>
          <!-- NOMBRE GRUPO -->
          <h2
            class="m-3 p-2 rounded text-white d-flex justify-content-center bg-success bg-gradient"
          >
            Grupo: ${grupo.name_group}
          </h2>
          <!-- MATERIAS -->
          <div id="viewMat" class="d-flex flex-row justify-content-evenly">`;
    recibiendoMaterias = mostrandoMaterias(grupo.materias);
    listGruposHTML += recibiendoMaterias;
    listGruposHTML += `</div>
        </div>`;
  });
  listGrup.innerHTML = listGruposHTML;
  materias = [];
  localStorage.setItem("grupos", JSON.stringify(grupos));
};
// Mostrando Materias
function mostrandoMaterias(materias) {
  let listGruposHTML2 = "";
  materias.forEach((materia) => {
    listGruposHTML2 += `
  <div class="card" style="width: 15rem; padding: 17px">
    <div class="card-body d-flex flex-column justify-content-center">
      <h5 class="mb-2 card-title d-flex justify-content-center">
        ${materia.nom_materia}
      </h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">
        Docente: ${materia.docente}
      </h6>
      <p class="card-text">Horario: ${materia.horario}</p>
      <button id="mostrarAula" type="button" class="btn btn-success">INGRESAR</button>
    </div>
  </div>`;
  });
  return listGruposHTML2;
}

// funciones header
principalButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../home.html";
});
logoutButton.addEventListener("click", function () {
  localStorage.removeItem("usuarioRegistrado");
  window.location = "../../index.html";
});

//MUESTRA LOS GRUPOS
listaGrupButton.addEventListener("click", function () {
  showGrupos(grupos);
});
// funciones agregar grupo
// let nom_grupo = "";
inputNomGrupo.addEventListener("change", (event) => {
  onChangeInput(event);
});
inputNomMat.addEventListener("change", (event) => {
  onChangeInput2(event);
});
inputNomDoc.addEventListener("change", (event) => {
  onChangeInput2(event);
});
inputHorario.addEventListener("change", (event) => {
  onChangeInput2(event);
});
adicionarMatButton.addEventListener("click", (event) => {
  event.preventDefault();
  createNewMateria(formValues2);
  clearForm();
});
const clearForm = () => {
  inputNomMat.value = "";
  inputNomDoc.value = "";
  inputHorario.value = "";
};
terminarButton.addEventListener("click", (event) => {
  event.preventDefault();
  onChangeInput1(materias);
  createNewGrupo(formValues1);
  // console.log(grupos);
});

mostrarAulaButton.addEventListener("click", function () {
  window.location = "../../materia.html";
});

let formValues1 = {};
function onChangeInput(event) {
  formValues1 = { ...formValues1, [event.target.id]: event.target.value };
  // console.log(formValues1);
}
function onChangeInput1(materias) {
  formValues1.materias = [...materias];
  // console.log(formValues1);
}
let formValues2 = {};
function onChangeInput2(event) {
  formValues2 = { ...formValues2, [event.target.id]: event.target.value };
  // console.log(formValues2);
}
