import { Alumno } from "../../data/class.js";
import { alumnos } from "../alumnos.js";
export let formValues = {};

export function onChangeInput(event) {
  formValues = { ...formValues, [event.target.id]: event.target.value };
  console.log(formValues);
}

export function buscarCi(alumnos, inputText) {
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].ci.toLowerCase() === inputText.toLowerCase()) {
      return i;
    }
  }
  return -1;
}
export function buscarNom(alumnos, inputText) {
  let v = [];
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].first_name.toLowerCase() === inputText.toLowerCase()) {
      v.push(i);
    }
  }
  return v;
}
export function buscarApe(alumnos, inputText) {
  let v = [];
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].last_name.toLowerCase() === inputText.toLowerCase()) {
      v.push(i);
    }
  }
  return v;
}
