//La UI contendrá 5 pantallas, se atraerán por medio de getElementById, se les pondrá la 
//propiedad hidden para ocultarlas mientrás no están siendo usadas
document.getElementById("pantalla2").hidden = true //se oculta la segunda pantalla
document.getElementById("pantalla3").hidden = true //se oculta la tercera pantalla
document.getElementById("pantalla4").hidden = true //se oculta la cuarta pantalla
document.getElementById("pantalla5").hidden = true //se oculta la quinta pantalla
//Se crea una variable para atraer el Id del boton de usuario
//También se crearan variables para obtener los valores del input de usuario y password
/*Se establecen las condiciones para dejar entrar al usuario, si son correctas se oculta la pantalla 
1 y se muestra la pantalla dos*/
let entrada = document.getElementById("inicio")
inicio.addEventListener("click", function () {
    let user = document.getElementById("usuario").value
    let password = document.getElementById("password").value
    if(user == "Juanito" && password == 1234){ //Se establecen usuario y contraseña, si se cumplen se ejecuta:
    document.getElementById("pantalla1").hidden = true //se oculta pantalla 1
    document.getElementById("pantalla2").hidden = false //se muestra pantalla 2
    }else{
        alert("Usuario y/o Contraseña no vaalidos")
    }
})
//Dentro de la pantalla 2 se crea una funcion para generar el buscador de peliculas
//Aqui va todo lo del DOM
//Se importa el API desde data.js
import {getOmdbApi} from "./data.js";
console.log(getOmdbApi)
//Se importa el API para segunda busqueda por año
import  {getOmdbApiYear} from "./data.js";
console.log(getOmdbApiYear)
//se trae el valor de input
let searchFilm = () => {
    let searchValue = document.getElementById("searchInput").value 
    getOmdbApi(searchValue)
}
//Se trigerea el boton de busqueda
let buttonSearch = document.getElementById("searchButton")
buttonSearch.addEventListener('click', searchFilm)