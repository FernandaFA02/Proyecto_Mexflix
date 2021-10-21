//Se crea una funcion para generar el buscador de peliculas//Aquí va el DOM //Se importa la API desde data.js
import {getOmdbApi} from "./data.js";


//Se trae el valor de input
let searchFilm = () => {
    let searchValue = document.getElementById("search-input").value 
    getOmdbApi(searchValue)
    let peliCard = document.getElementById("pelix")
    peliCard.hidden = false;
    let tituloCard = document.getElementById("tituloSearch")
    tituloCard.hidden = false;
} 

//Se trigerea el boton de busqueda
let buttonSearch = document.getElementById("search-button")
buttonSearch.addEventListener('click', searchFilm)
