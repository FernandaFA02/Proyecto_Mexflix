//Se crea una nueva funcion para renderear la pelicula
let renderingFilm = (filmData) => {
    console.log(filmData)
    let movieTitle = document.getElementById("film-title")
    let moviePoster = document.getElementById("film-poster")
    movieTitle.innerHTML = filmData.Title
    moviePoster.setAttribute("src", filmData.Poster)
}

/*aqui se exporta desde el index.js el API con una variable que sera igual  a una funcion flecha que contendra
un fetch con la direccion del API a la cual se le agregará un template string, junto del cuál se agregaran sus respectivos
.then (junto con sus condicionales), .catch y .finally 
*/

export let getOmdbApi = (filmForSearch) => {
fetch("http://www.omdbapi.com/?t=" + `${filmForSearch}` + "&apikey=954d0791")
.then((response) => {
    console.log(response)
    if(response.status == 404){
        alert("Verifica que tengas el titulo correcto de la pelicula")
    }else{
        response.json()
        .then((data) => renderingFilm(data))
        .catch((error) => console.log(error))
    }
})
    .finally(() => console.log("Promesas resueltas"))
}

