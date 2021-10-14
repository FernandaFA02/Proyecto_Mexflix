//La UI contendrá 5 pantallas, se atraerán por medio de getElementById, se les pondrá la 
//propiedad hidden para ocultarlas mientrás no están siendo usadas

//Se crea una variable para atraer el Id del boton de usuario
//También se crearan variables para obtener los valores del input de usuario y password
//Se establecen las condiciones para dejar entrar al usuario, si son correctas se oculta la pantalla 
//1 y se muestra la pantalla dos
//Dentro de la pantalla 2 se crea una funcion para generar el buscador de peliculas

//Aqui va todo lo del DOM
//Se importa el API desde data.js
import {getOmdbApi} from "./data.js";
console.log(getOmdbApi)

//Se trigerea el boton de busqueda

