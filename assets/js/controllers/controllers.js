import { Alumno } from "../../data/class.js";
// import { lalumnos } from "../alumnos.js";
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

export function promedioCurso(alumnos) {
  let total = 0;
  alumnos.forEach((alumno) => {
    total += parseFloat(alumno.notafinal);
  });
  total = parseFloat(total / (alumnos.length + 1));
  return parseFloat(total);
}

export let ordenarNotasAsc = (alumnos) => {
  if (alumnos.length <= 1) {
    return alumnos;
  }

  // Elegir el pivote; en este caso, tomamos el elemento central
  const pivot = alumnos[Math.floor(alumnos.length / 2)].notafinal;

  // Dividir el array en tres partes: menor, igual y mayor que el pivote
  const left = alumnos.filter((alumno) => alumno.notafinal < pivot);
  const middle = alumnos.filter((alumno) => alumno.notafinal === pivot);
  const right = alumnos.filter((alumno) => alumno.notafinal > pivot);

  // Ordenar las partes y combinarlas
  return [...ordenarNotasAsc(left), ...middle, ...ordenarNotasAsc(right)];
};

export let ordenarNotasDsc = (alumnos) => {
  if (alumnos.length <= 1) {
    return alumnos;
  }
  // Elegir el pivote; en este caso, tomamos el elemento central
  const pivot = alumnos[Math.floor(alumnos.length / 2)].notafinal;

  // Dividir el array en tres partes: menor, igual y mayor que el pivote
  const left = alumnos.filter((alumno) => alumno.notafinal > pivot);
  const middle = alumnos.filter((alumno) => alumno.notafinal === pivot);
  const right = alumnos.filter((alumno) => alumno.notafinal < pivot);

  // Ordenar las partes y combinarlas
  return [...ordenarNotasDsc(left), ...middle, ...ordenarNotasDsc(right)];
};

export function inputSearchMat(inputSearch) {
  // console.log(inputSearch.value);
  return inputSearch;
}

export function buscarAlumnoEnMateria(
  optionsSearch,
  alumnos,
  inputText,
  listaAlumnosMat
) {
  const valor = parseInt(optionsSearch.value);
  switch (valor) {
    case 1:
      let x = parseInt(buscarCi(alumnos, inputText));
      let llistAlumnosHTML = "";
      if (x >= 0) {
        llistAlumnosHTML += `<tr>
                    <th scope="row">${1}</th>
                    <td>${alumnos[x].ci}</td>
                    <td>${alumnos[x].first_name}</td>
                    <td>${alumnos[x].last_name}</td>
                    <td>${alumnos[x].age}</td>
                    <td>${alumnos[x].p_nota}</td>
                    <td>${alumnos[x].s_nota}</td>
                    <td>${alumnos[x].t_nota}</td>
                    <td>${alumnos[x].notafinal}</td>
                  </tr>`;
        listaAlumnosMat.innerHTML = llistAlumnosHTML;
      } else {
        llistAlumnosHTML = `<tr>
              <th>NO HAY REGISTRO</th>
            </tr>`;
        listaAlumnosMat.innerHTML = llistAlumnosHTML;
      }
      break;
    case 2:
      let y = buscarNom(alumnos, inputText);
      let newlis = "";
      for (let i = 0; i < y.length; i++) {
        newlis += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${alumnos[y[i]].ci}</td>
                    <td>${alumnos[y[i]].first_name}</td>
                    <td>${alumnos[y[i]].last_name}</td>
                    <td>${alumnos[y[i]].age}</td>
                    <td>${alumnos[y[i]].p_nota}</td>
                    <td>${alumnos[y[i]].s_nota}</td>
                    <td>${alumnos[y[i]].t_nota}</td>
                    <td>${alumnos[y[i]].notafinal}</td>
                  </tr>`;
      }
      listaAlumnosMat.innerHTML = newlis;
      break;
    case 3:
      let z = buscarApe(alumnos, inputText);
      let newlis2 = "";
      for (let i = 0; i < z.length; i++) {
        newlis2 += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${alumnos[z[i]].ci}</td>
                    <td>${alumnos[z[i]].first_name}</td>
                    <td>${alumnos[z[i]].last_name}</td>
                    <td>${alumnos[z[i]].age}</td>
                    <td>${alumnos[z[i]].p_nota}</td>
                    <td>${alumnos[z[i]].s_nota}</td>
                    <td>${alumnos[z[i]].t_nota}</td>
                    <td>${alumnos[z[i]].notafinal}</td>
                  </tr>`;
      }
      listaAlumnosMat.innerHTML = newlis2;
      break;
  }
  return listaAlumnosMat.innerHTML;
}
