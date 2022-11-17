# MCGA Segundo Parcial

**Estudiante:** Drincovich Adrián<br>
**Carrera:** Ingenieria en Sistemas<br>
**Commisión:** 4-A<br>
**Turno:** Mañana<br>


## Enunciado del Parcial 📋
Desarrollar una aplicación web que cumpla con los siguientes requisitos:
- Debe estar desarrollada con React utilizando el CLI de create-react-app.
- Contar con una lista de recursos siguiendo la lógica de un ABM.
- Debe contar con una librería para el manejo de formularios. (React-hook-form)
- Debe contar con un layout, el cual debe contener:
 - Header
 - NavBar (barra de navegación)
 - Body o contenido
 - Footer
- Debe contar con más de 1 ruta navegable.
- La app debe tener AL MENOS 2 pantallas:
 - Home: Esta debe contar con los nombres de los integrantes y el nombre de la
aplicación. Es básicamente para poder probar el ruteo de la aplicación.
 - Recurso: en esta pantalla deberán mostrar la lista de recursos con la lógica del
AMB para poder evidenciar la navegación dentro de la app.
- Debe contar con componentes tanto para el Header, Body y Footer, como también un
componente para la lista del recurso. A su vez, estos componentes deben utilizar
componentes compartidos, como ser: botones, inputs. Estos componentes deben contar
con sus archivos .css, preferentemente utilizando CSS modules.
- Debe contar con formularios a la hora de realizar un POST, un DELETE o un UPDATE
de un nuevo recurso a la lista.
- Cada formulario debe contar con las validaciones correspondientes para evitar agregar
nuevos recursos con datos erróneos o sin datos.
- Debe ser posible realizar las diferentes request (GET, POST, PUT, DELETE) desde el
ABM de cada recurso.
- Debe contar con un archivo donde se haga la configuración inicial del store de Redux.
- Debe contar con un reducer por cada recurso y un rootReducer.
- Debe contar con un archivo de actions por cada recurso.
- Debe contar con un archivo de types (constantes) para las actions.
- Debe contar con el uso de action creators utilizando la librería Redux Thunk, los cuales
son necesarios para realizar la conexión del FE con el BE. Para esto, deberán utilizar la
API suministrada al final de este documento.
- Debe contar con un readme con los pasos a seguir para poder ejecutar correctamente la
aplicación, URL del repositorio y nombre del alumno.
- El repositorio debe contener código prolijo, segmentado en commits (mínimo 3
commits).

<br>

### Instalar dependencias

    npm install


### Correr Aplicacion

    npm start

[http://localhost:3000](http://localhost:3000).
<br>

## Construido con 🛠️
- JavaScript ES6
- React Js
- Redux
- Thunk
- React Hook Form
- NPM
- Git