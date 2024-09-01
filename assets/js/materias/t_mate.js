import { Alumno } from "../../data/class.js";
import {
  promedioCurso,
  ordenarNotasAsc,
  ordenarNotasDsc,
  inputSearchMat,
  buscarAlumnoEnMateria,
} from "../controllers/controllers.js";
let alumnos = JSON.parse(localStorage.getItem("alumnos"));

console.log(alumnos);

let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

let principalButton = document.getElementById("principal");
let logoutButton = document.getElementById("logout");

const listaDeAlumnos = document.getElementById("listaDeAlumnos");
const listaAluButton = document.getElementById("listaAluButton");
const agregarAlumnosButton = document.getElementById("agregarAlumnos");
const listaAlumnosMat = document.getElementById("listaAlumnosMat");

const guardarnotas = document.getElementById("guardarnotas");

const promedioCursoT = document.getElementById("promedioCursoT");

const ordAsc = document.getElementById("ordAsc");
const ordDsc = document.getElementById("ordDsc");
// buscar alumnos mat
let optionsSearchM = document.getElementById("optionsSearch");
let inputSearchM = document.getElementById("inputSearch");
let searchButtonM = document.getElementById("search");

principalButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../../home.html";
});

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("usuarioRegistrado");
  window.location = "../../../index.html";
});

let alumnosT_Mate = JSON.parse(localStorage.getItem("alumnosT_Mate")) || [];
const showStudents = (alumnos) => {
  let llistAlumnosHTML = "";
  let i = 0;
  alumnos.forEach((alumno) => {
    llistAlumnosHTML += `
    <tr>
                <th scope="row">${i + 1}</th>
                <td><input type="checkbox" id="alumno-${i}" value="${
      alumno.ci
    }"></td>
                <td>${alumno.ci}</td>
                <td>${alumno.first_name}</td>
                <td>${alumno.last_name}</td>
                <td>${alumno.age}</td>
              </tr>`;
    i += 1;
  });
  listaDeAlumnos.innerHTML = llistAlumnosHTML;
  localStorage.setItem("alumnos", JSON.stringify(alumnos));
};

showStudents(alumnos);

agregarAlumnosButton.addEventListener("click", () => {
  alumnos.forEach((alumno, index) => {
    const checkbox = document.getElementById(`alumno-${index}`);
    if (checkbox.checked) {
      alumnosT_Mate.push(alumno);
    }
  });
  console.log(alumnosT_Mate);
});

const showStudentsPrincipal = (alumnosT_Mate) => {
  let llistAlumnosHTML = "";
  let i = 0;
  alumnosT_Mate.forEach((alumno) => {
    llistAlumnosHTML += `
      <tr>
                  <th scope="row">${i + 1}</th>
                  <td>${alumno.ci}</td>
                  <td>${alumno.first_name}</td>
                  <td>${alumno.last_name}</td>
                  <td>${alumno.age}</td>
                  <td><input type="number" id="pnota${i + 1}${
      alumno.ci
    }" min="0" max="100" class="rounded text-center" value="${
      alumno.p_nota
    }"/></td>
                  <td><input type="number" id="snota${i + 1}${
      alumno.ci
    }" min="0" max="100" class="rounded text-center" value="${
      alumno.s_nota
    }"/></td>
                  <td><input type="number" id="tnota${i + 1}${
      alumno.ci
    }" min="0" max="100" class="rounded text-center" value="${
      alumno.t_nota
    }"/></td>
                  <td><div id="notaf${i + 1}-${
      alumno.ci
    }" class="number-display">${alumno.notafinal}</div></td>
                </tr>`;
    i += 1;
  });
  listaAlumnosMat.innerHTML = llistAlumnosHTML;
  localStorage.setItem("alumnosT_Mate", JSON.stringify(alumnosT_Mate));
};

listaAluButton.addEventListener("click", function () {
  showStudentsPrincipal(alumnosT_Mate);
  promedioCursoT.innerHTML = `${promedioCurso(alumnosT_Mate).toFixed(1)}`;
});

function actualizaNotasAlu(alumnosT_Mate) {
  let i = 0;
  alumnosT_Mate.forEach((alumno, i) => {
    const inputPNota = document.getElementById(`pnota${i + 1}${alumno.ci}`);
    const inputSNota = document.getElementById(`snota${i + 1}${alumno.ci}`);
    const inputTNota = document.getElementById(`tnota${i + 1}${alumno.ci}`);

    if (inputPNota && inputSNota && inputTNota) {
      alumno.p_nota = parseFloat(inputPNota.value) || 0;
      alumno.s_nota = parseFloat(inputSNota.value) || 0;
      alumno.t_nota = parseFloat(inputTNota.value) || 0;

      // Calcular la nota final
      alumno.notafinal = (
        (alumno.p_nota + alumno.s_nota + alumno.t_nota) /
        3
      ).toFixed(1);
    }

    i += 1;

    localStorage.setItem("alumnosT_Mate", JSON.stringify(alumnosT_Mate));
  });
}

guardarnotas.addEventListener("click", (event) => {
  actualizaNotasAlu(alumnosT_Mate);
  localStorage.setItem("alumnosT_Mate", JSON.stringify(alumnosT_Mate));
  console.log("adasdsa");
  console.log(alumnosT_Mate);
  showStudentsPrincipal(alumnosT_Mate);
  promedioCursoT.innerHTML = `${promedioCurso(alumnosT_Mate).toFixed(1)}`;
});

ordAsc.addEventListener("click", (event) => {
  alumnosT_Mate = ordenarNotasAsc(alumnosT_Mate);
  showStudentsPrincipal(alumnosT_Mate);
});

ordDsc.addEventListener("click", (event) => {
  alumnosT_Mate = ordenarNotasDsc(alumnosT_Mate);
  showStudentsPrincipal(alumnosT_Mate);
});

let inputText = "";
inputSearchM.addEventListener("change", (event) => {
  inputText = inputSearchMat(inputSearchM.value);
});
searchButtonM.addEventListener("click", (event) => {
  listaAlumnosMat.innerHTML = buscarAlumnoEnMateria(
    optionsSearchM,
    alumnosT_Mate,
    inputText,
    listaAlumnosMat
  );
});
