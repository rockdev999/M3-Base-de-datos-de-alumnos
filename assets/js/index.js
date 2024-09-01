import cuentas from "../data/users.js";
let usuarioLogueado = null;

function login(usuario, password) {
  let usuarioEncontrado = cuentas.usuarios.find(
    (cuenta) => usuario === cuenta.usuario && password === cuenta.password
  );

  return usuarioEncontrado;
}

// Manejo del DOM
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const loginButton = document.getElementById("login");

let usuarioIngresado = "";
let passwordIngresado = "";

usuario.addEventListener("change", function (event) {
  console.log("Usuario =", event.target.value);
  usuarioIngresado = event.target.value;
});

password.addEventListener("change", function (event) {
  console.log("Password =", event.target.value);
  passwordIngresado = parseInt(event.target.value);
});

loginButton.addEventListener("click", function (event) {
  event.preventDefault();
  usuarioLogueado = login(usuarioIngresado, passwordIngresado);

  if (usuarioLogueado) {
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
    window.location = "./home.html";
  } else {
    alert("Usuario o Contrasenia incorrecto");
  }
});
