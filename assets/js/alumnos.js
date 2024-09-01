import { Alumno } from "../data/class.js";
import { formValues, onChangeInput } from "./controllers/controllers.js";
import { buscarCi, buscarNom, buscarApe } from "./controllers/controllers.js";

let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

let principalButton = document.getElementById("principal");
let logoutButton = document.getElementById("logout");
let indicelistaAluButton = document.getElementById("listaAluButton");
let guardarAluButton = document.getElementById("guardarAlu");
let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputCI = document.getElementById("inputCI");
let inputEdad = document.getElementById("inputEdad");
let listaAlumnos = document.getElementById("listaDeAlumnos");

let optionsSearch = document.getElementById("optionsSearch");
let inputSearch = document.getElementById("inputSearch");
let searchButton = document.getElementById("search");

principalButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../home.html";
});

logoutButton.addEventListener("click", function () {
  localStorage.removeItem("usuarioRegistrado");
  window.location = "../../index.html";
});

let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];
// CREA EL NUEVO EL OBJETO
const createNewStudent = (alumno) => {
  let newStudent = new Alumno(
    alumno.inputNombre,
    alumno.inputApellido,
    alumno.inputCI,
    alumno.inputEdad
  );
  alumnos.push(newStudent);
  console.log(alumnos);

  showStudents(alumnos);
};
// Funciones para buscar por CI, Nombre, Apellido
let inputText = "";
inputSearch.addEventListener("change", function () {
  inputText = inputSearch.value;
});
searchButton.addEventListener("click", function () {
  console.log(optionsSearch.value);
  const valor = parseInt(optionsSearch.value);
  console.log(inputText);
  switch (valor) {
    case 1:
      console.log("aaaaa");
      let x = parseInt(buscarCi(alumnos, inputText));
      console.log(x);
      let llistAlumnosHTML = "";
      if (x >= 0) {
        llistAlumnosHTML += `<tr>
                    <th scope="row">${1}</th>
                    <td>${alumnos[x].ci}</td>
                    <td>${alumnos[x].first_name}</td>
                    <td>${alumnos[x].last_name}</td>
                    <td>${alumnos[x].age}</td>
                  </tr>`;
        listaAlumnos.innerHTML = llistAlumnosHTML;
      } else {
        llistAlumnosHTML = `<tr>
              <th>NO HAY REGISTRO</th>
            </tr>`;
        listaAlumnos.innerHTML = llistAlumnosHTML;
      }
      break;
    case 2:
      console.log("bbbbb");
      let y = buscarNom(alumnos, inputText);
      let newlis = "";

      for (let i = 0; i < y.length; i++) {
        newlis += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${alumnos[y[i]].ci}</td>
                    <td>${alumnos[y[i]].first_name}</td>
                    <td>${alumnos[y[i]].last_name}</td>
                    <td>${alumnos[y[i]].age}</td>
                  </tr>`;
      }
      listaAlumnos.innerHTML = newlis;

      break;
    case 3:
      console.log("cccc");
      let z = buscarApe(alumnos, inputText);
      let newlis2 = "";

      for (let i = 0; i < z.length; i++) {
        newlis2 += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${alumnos[z[i]].ci}</td>
                    <td>${alumnos[z[i]].first_name}</td>
                    <td>${alumnos[z[i]].last_name}</td>
                    <td>${alumnos[z[i]].age}</td>
                  </tr>`;
      }
      listaAlumnos.innerHTML = newlis2;

      break;
  }
});

// Funciones de eventos mostrar lista de alumnos
indicelistaAluButton.addEventListener("click", function () {
  showStudents(alumnos);
});

// muestra la nueva fila con la descripcion del alumno
const showStudents = (alumnos) => {
  let llistAlumnosHTML = "";
  let i = 0;
  alumnos.forEach((alumno) => {
    llistAlumnosHTML += `<tr>
              <th scope="row">${i + 1}</th>
              <td>${alumno.ci}</td>
              <td>${alumno.first_name}</td>
              <td>${alumno.last_name}</td>
              <td>${alumno.age}</td>
            </tr>`;
    i += 1;
  });
  listaAlumnos.innerHTML = llistAlumnosHTML;
  localStorage.setItem("alumnos", JSON.stringify(alumnos));
};

// Funciones de eventos agregar alumnos
inputNombre.addEventListener("change", (event) => {
  onChangeInput(event);
});

inputApellido.addEventListener("change", (event) => {
  onChangeInput(event);
});

inputCI.addEventListener("change", (event) => {
  onChangeInput(event);
});

inputEdad.addEventListener("change", (event) => {
  onChangeInput(event);
});

guardarAluButton.addEventListener("click", (event) => {
  event.preventDefault();

  createNewStudent(formValues);
  clearForm();
});
const clearForm = () => {
  inputNombre.value = "";
  inputApellido.value = "";
  inputCI.value = "";
  inputEdad.value = "";
};

export { alumnos };
