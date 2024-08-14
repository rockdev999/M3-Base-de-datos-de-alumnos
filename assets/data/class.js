export class Alumno {
  constructor(first, last, ci, age) {
    this.first_name = first;
    this.last_name = last;
    this.ci = ci;
    this.age = age;
    this.subjects = null;
    this.qualification = null;
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
}

export class Grupo {
  constructor(name_group, materias) {
    this.name_group = name_group;
    this.materias = null;
  }
}

export class Materia {
  constructor(nom_materia, docente, horario, alumnos) {
    this.nom_materia = nom_materia;
    this.docente = docente;
    this.horario = horario;
    this.alumnos = alumnos;
  }
}
