//Se crea una nueva funcion para renderear la pelicula
let renderingFilm = (filmData) => {
    console.log(filmData)
    let movieTitle = document.getElementById("film-title")
    let moviePoster = document.getElementById("film-poster")
    let movieActors = document.getElementById("movie-actors")
    movieTitle.innerHTML = filmData.Title
    moviePoster.setAttribute("src", filmData.Poster)
    movieActors.innerHTML = filmData.Actors
}

/*aqui se exporta desde el index.js el API con una variable que sera igual  a una funcion flecha que contendra
un fetch con la direccion del API a la cual se le agregará un template string, junto del cuál se agregaran sus respectivos
.then (junto con sus condicionales), .catch y .finally 
*///esta busqueda es por nombre de la pelicula

export let getOmdbApi = (filmForSearch) => {
fetch("https://www.omdbapi.com/?t='' + ''" + `${filmForSearch}` + "&apikey=954d0791")
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

//Se crea un segundo rendering para la busqueda por año
let renderingFilmYear = (filmData) => {
    console.log(filmData)
    let movieTitle = document.getElementById("film-title")
    let moviePoster = document.getElementById("film-poster")
    let movieYear = document.getElementById("film-year")
    movieTitle.innerHTML = filmData.Title
    moviePoster.setAttribute("src", filmData.Poster)
    movieYear.setAttribute("src", filmData.Year)
}


//se crea otra funcion export para hacer la busqueda por año  
export let getOmdbApiYear = (SearchForYear) => {
fetch("https://www.omdbapi.com/?y=" + `${SearchForYear}` + "&apikey=954d0791")
.then((response) => {
    console.log(response)
    if(response.status == 404){
        alert("Verifica que tengas el año correcto")
    }else{
        response.json()
        .then((data) => renderingFilmYear(data))
        .catch((error) => console.log(error))
    }
})
        .finally(() => console.log("Promesas resueltas"))
}
