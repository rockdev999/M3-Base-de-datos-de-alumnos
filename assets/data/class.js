export class Alumno {
  constructor(first, last, ci, age) {
    this.first_name = first;
    this.last_name = last;
    this.ci = ci;
    this.age = age;
    this.p_nota = 0;
    this.s_nota = 0;
    this.t_nota = 0;
    this.notafinal = 0;
  }
  getFirst_name() {
    return this.first_name;
  }
  getLast_name() {
    return this.last_name;
  }
  getci() {
    return this.ci;
  }
  setPnota(nota) {
    this.p_nota = nota;
  }
  setSnota(nota) {
    this.s_nota = nota;
  }
  setTnota(nota) {
    this.t_nota = nota;
  }
  actualizaFnota() {
    this.notafinal = (this.p_nota + this.s_nota + this.t_nota) / 3;
  }
}

export class Grupo {
  constructor(name_group, materias) {
    this.name_group = name_group;
    this.materias = materias;
  }
}

export class Materia {
  constructor(nom_materia, docente, horario) {
    this.nom_materia = nom_materia;
    this.docente = docente;
    this.horario = horario;
    this.alumnos = null;
  }
}
