# rockdev999-Base-de-datos-de-alumnos

Base de Datos para alumnos con HTML, CSS, Bootstrap y JS, tambien tiene agregado algo de LocalStorage

# Instrucciones para interactuar con la página

## Página Principal

Para acceder a la página principal, abre el archivo `index.html` en tu navegador. La página admite los siguientes usuarios por defecto:

```javascript
const cuentas = {
  usuarios: [
    { usuario: "juan_perez", password: 1234 },
    { usuario: "maria_garcia", password: 5678 },
    { usuario: "pedro_lopez", password: 9012 },
  ],
};
```

![Login](./assets/images/login.png "LOGIN")
![Login](./assets/images/login2.png "LOGIN")
![MAIN](./assets/images/main.png "MAIN")

## Gestión de Cursos y Materias

Los cursos disponibles son **PRIMERO**, **SEGUNDO** y **TERCERO**. Cada curso incluye las siguientes materias:

- **FÍSICA**
- **MATEMÁTICA**
- **QUÍMICA**

Por defecto, todas las materias estarán vacías. Puedes gestionar alumnos y notas desde las siguientes pestañas:

![CURSOS](./assets/images/cursos.png "CURSOS")
![ALUMNOS](./assets/images/alumnos2.png "ALUMNOS")

### 1. Gestionar Alumnos

En esta sección, puedes realizar las siguientes acciones:

- **Agregar Alumnos**:  
  Haz clic en el botón `AGREGAR ALUMNOS` para abrir un formulario donde puedes ingresar los datos personales de los alumnos. Una vez registrados, se añadirán a una tabla general con todos los alumnos existentes.

- **Mostrar Lista**:  
  Haz clic en el botón `MOSTRAR LISTA` para visualizar a todos los alumnos registrados, independientemente del curso al que pertenezcan.

- **Buscar por Apellido**:  
  Usa el campo de búsqueda para encontrar alumnos cuyo apellido coincida con tu consulta.

- **Filtrar por Nombre o CI**:  
  Puedes filtrar a los alumnos ingresando su nombre o su cédula de identidad.

  ![Gestion de Alumnos](./assets/images/alumnos.png "Gestion de Alumnos")
  ![Gestion de Alumnos](./assets/images/alumnos2.png "Lista de Alumnos")
  ![Gestion de Alumnos](./assets/images/alumnos5.png "Agregar Alumnos")
  ![Gestion de Alumnos](./assets/images/alumnos3.png.png "Fltrar Alumnos")
  ![Gestion de Alumnos](./assets/images/alumnos4.png "Resultado del Filtro")

### 2. Gestión de Cursos

Desde esta pestaña, puedes interactuar con los cursos disponibles. Las opciones incluyen:

- **Agregar Alumnos a Cursos**:  
  Selecciona uno o varios alumnos disponibles para asignarlos a un curso. Una vez añadidos, puedes cerrar el modal y hacer clic en `MOSTRAR LISTA` para ver la lista actualizada.

- **Asignar Notas**:  
  Para cada alumno, puedes agregar notas correspondientes al:

  - **1er Trimestre**
  - **2do Trimestre**
  - **3er Trimestre**  
    Después de ingresar las notas, haz clic en `GUARDAR`. Esto actualizará automáticamente la Nota Final (**NF**) de cada alumno y calculará el promedio general del curso, visible al final de la lista.

- **Ordenar Alumnos**:  
  Puedes ordenar la lista de alumnos en **orden ascendente** o **orden descendente**.

- **Filtrar Alumnos**:  
   Aplica filtros para visualizar alumnos específicos según tus criterios.
  ![Gestion de Cursos](./assets/images/cursos.png "Gestion de Cursos")
  ![Gestion de Cursos](./assets/images/cursos2.png "Curso")
  ![Gestion de Cursos](./assets/images/cursos3.png "Agregar alumnos a la materia")
  ![Gestion de Cursos](./assets/images/cursos4.png "Alumnos del curso")
  ![Gestion de Cursos](./assets/images/cursos5.png "Alumnos de otro curso")

## Persistencia de Datos

Toda la información se guarda utilizando **LocalStorage**, lo que simula una base de datos local. Esto asegura que los datos permanezcan disponibles mientras uses el mismo navegador.
