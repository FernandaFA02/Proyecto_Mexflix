
//Se crea una variable para atraer el Id del boton de usuario
//También se crearan variables para obtener los valores del input de usuario y password
/*Se establecen las condiciones para dejar entrar al usuario, si son correctas se oculta la pantalla 
1 y se muestra la pantalla dos*/
let entrada = document.getElementById("inicio")
entrada.addEventListener("click", function () {
    let user = document.getElementById("usuario").value
    let password = document.getElementById("password").value
    if(user == "Fer" && password == 1234){ //Se establecen usuario y contraseña, si se cumplen se ejecuta:
    document.getElementById("pantalla1").hidden = true //se oculta pantalla 1
    document.getElementById("pantalla2").hidden = false //se muestra pantalla 2
    }else{
        alert("Usuario y/o Contraseña no validos")
    }
})

//Dentro de la segunda pantalla//Se crea una funcion para generar el buscador de peliculas//Aquí va el DOM //Se importa la API desde data.js
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

//Se agrega una alerta de bienvenida e informaciòn
alert("Hola Bienvenid@, si gustas ver los trailers de las peliculas, por favor dale click a cualquier poster")
