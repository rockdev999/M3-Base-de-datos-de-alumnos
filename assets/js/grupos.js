let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

const principalButton = document.getElementById("principal");
const logoutButton = document.getElementById("logout");
// TERCERO
const t_fisiButton = document.getElementById("t_fisi");
const t_mateButton = document.getElementById("t_mate");
const t_quimiButton = document.getElementById("t_quimi");
// SEGUNDO
const s_fisiButton = document.getElementById("s_fisi");
const s_mateButton = document.getElementById("s_mate");
const s_quimiButton = document.getElementById("s_quimi");
// PRIMERO
const p_fisiButton = document.getElementById("p_fisi");
const p_mateButton = document.getElementById("p_mate");
const p_quimiButton = document.getElementById("p_quimi");

principalButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../home.html";
});
logoutButton.addEventListener("click", function () {
  localStorage.removeItem("usuarioRegistrado");
  window.location = "../../index.html";
});

// REDICCIONAMIENTO A LAS MATERIAS CORRESPONDIENTES

// TERCERO
t_fisiButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../materias/t_fisi.html";
});
t_mateButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../materias/t_mate.html";
});
t_quimiButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../materias/t_quimi.html";
});
// SEGUNDO
s_fisiButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../materias/s_fisi.html";
});
s_mateButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../materias/s_mate.html";
});
s_quimiButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../materias/s_quimi.html";
});
// PRIMERO
p_fisiButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../materias/p_fisi.html";
});
p_mateButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../materias/p_mate.html";
});
p_quimiButton.addEventListener("click", function () {
  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioLogueado));
  window.location = "../../materias/p_quimi.html";
});
