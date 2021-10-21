//Se crea una funcion para renderear la busqueda de películas
let renderingFilm = (filmData) => {
    console.log(filmData)
    let busqueda = document.getElementById("pelix")
    for (let  i= 0;  i<filmData.Search.length; i++) {
        busqueda.innerHTML +=  '<div class="card" style="width: 18rem;">' +
        '<img src=' + `${filmData.Search[i].Poster}` + 'class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h5 class="card-title"> <strong>Titulo: </strong>'+ `${filmData.Search[i].Title}` + '</h5>' +
        '<p class="card-text">'  + '</p>' + '</div>' +
        '<ul class="list-group list-group-flush">' +
        '<li class="list-group-item"> <strong>Año: </strong>' + `${filmData.Search[i].Year}` + '</li>' + '</ul>' + '</div>'
    }
}

//Se exporta desde index.js//Se crea una funcion que contendra los datos de la API
export let getOmdbApi = (filmForSearch) => {
    console.log(filmForSearch)
    fetch("https://www.omdbapi.com/?s=" + `${filmForSearch}` + "&apikey=954d0791")
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

//Se crea una pre-seleccion de peliculas
let peliSeletion = ["tt4154756", "tt1843866", "tt3501632", "tt4154796", "tt1345836", "tt0103776"]

//_____----->>>Traer pre-seleccion desde API

//iterar seleccion//fetch a la API
for (const item of peliSeletion) {
    //console.log(item)
    fetch("https://www.omdbapi.com/?i=" +item + "&apikey=954d0791" )
    .then((response) => response.json())
    .then((data) => renderingSelectionMovie(data))
    .catch((error) => console.log(error))
}

//rendering pre-seleccion
let renderingSelectionMovie = (data) => {
    //console.log(data)
    let preSelection = document.getElementById("peli-selection")
    preSelection.innerHTML += ' <div class="card" style="width: 18rem;"> ' + 
    '<a href="https://www.youtube.com/playlist?list=PLeUE1Tl0ah2Ic0LmR2GaCwh8br1nTAUXP" target="_blank">' +
    "<img " + "src= " +`${data.Poster}` + " class='card-img-top' alt=''>" + "</a>"+
    "  <div class='card-body'> " +
    "  <h5 class='card-title'> <strong>Titulo: </strong>" + `${data.Title}`  + "</h5> " +
    "  <p> <strong>Año: </strong>" + `${data.Year}` + "</p>" + 
    "  <p> <strong>Duración: </strong>" + `${data.Runtime}` + "</p>" +
    "  <p> <strong>Género: </strong>" + `${data.Genre}` + "</p>" +
    "  <p> <strong>Actores: </strong>" + `${data.Actors}` + "</p>" +
    "  <p> <strong>Director: </strong>" + `${data.Director}` + "</p>" +
    "  <p class='card-text'> <strong>Plot: </strong>" +  `${data.Plot}` +  "</p> " +
    " </div> " +
    "   </div> "
}

//Se crea la colección de peliculas de Marvel
let marvelSelection = ["tt0371746", "tt0800369", "tt0458339","tt0848228", "tt2015381", "tt0478970", "tt1211837", "tt1825683", "tt4154664", "tt3480822", "tt2250912"]

//_____----->>>Traer seleccion desde API

//iterar seleccion//fetch a la API
for (const item of marvelSelection) {
   // console.log(item)
    fetch("https://www.omdbapi.com/?i=" +item + "&apikey=954d0791" )
    .then((response) => response.json())
    .then((data) => renderingMarvelSelection(data))
    .catch((error) => console.log(error))
}

//Se crea el rendering para marvel
let renderingMarvelSelection = (marvelData) => {
   // console.log(marvelData)
    let mSelection = document.getElementById("MarvelSudios")
    mSelection.innerHTML += ' <div class="card" style="width: 18rem;"> ' + '<a href="https://www.youtube.com/playlist?list=PLeUE1Tl0ah2LIVxfUOdhGrSrb0HKgFkh7" target="_blank">' +
    "<img " + "src= " +`${marvelData.Poster}` + " class='card-img-top' alt=''></a>" +
    "  <div class='card-body'> " +
    "  <h5 class='card-title'> <strong>Titulo: </strong>" + `${marvelData.Title}`  + "</h5> " +
    "  <p> <strong>Año: </strong>" + `${marvelData.Year}` + "</p>" + 
    "  <p> <strong>Duración: </strong>" + `${marvelData.Runtime}` + "</p>" +
    "  <p> <strong>Género: </strong>" + `${marvelData.Genre}` + "</p>" +
    "  <p> <strong>Actores: </strong>" + `${marvelData.Actors}` + "</p>" +
    "  <p> <strong>Director: </strong>" + `${marvelData.Director}` + "</p>" +
    "  <p class='card-text'> <strong>Plot: </strong>" +  `${marvelData.Plot}` +  "</p> " +
    " </div> " +
    "   </div> "
}

//Se crea la coleccion de DC Comics
let dcSelection = ["tt0372784", "tt0770828", "tt7286456", "tt0451279", "tt0409459", "tt1386697", "tt0974015", "tt0327554", "tt0468569"]

//_____----->>>Traer seleccion desde API

//iterar seleccion//fetch a la API
for (const item of dcSelection) {
    //console.log(item)
    fetch("https://www.omdbapi.com/?i=" +item + "&apikey=954d0791" )
    .then((response) => response.json())
    .then((data) => renderingDcSelection(data))
    .catch((error) => console.log(error))
}

//Se crea el rendering de DC
let renderingDcSelection = (dcData) => {
    //console.log(dcData)
    let dSelection = document.getElementById("DC-Comics")
    dSelection.innerHTML += ' <div class="card" style="width: 18rem;"> ' + '<a href="https://www.youtube.com/playlist?list=PLeUE1Tl0ah2JzAsqFIX0TAvYuBk4IrDmr" target="_blank">' +
    "<img " + "src= " +`${dcData.Poster}` + " class='card-img-top' alt=''></a>" +
    "  <div class='card-body'> " +
    "  <h5 class='card-title'> <strong>Titulo: </strong>" + `${dcData.Title}`  + "</h5> " +
    "  <p> <strong>Año: </strong>" + `${dcData.Year}` + "</p>" + 
    "  <p> <strong>Duración: </strong>" + `${dcData.Runtime}` + "</p>" +
    "  <p> <strong>Género: </strong>" + `${dcData.Genre}` + "</p>" +
    "  <p> <strong>Actores: </strong>" + `${dcData.Actors}` + "</p>" +
    "  <p> <strong>Director: </strong>" + `${dcData.Director}` + "</p>" +
    "  <p class='card-text'> <strong>Plot: </strong>" +  `${dcData.Plot}` +  "</p> " +
    " </div> " +
    "   </div> "
}

//Se crea la coleccion de LucasFilm
let lucasSelection = ["tt0080684", "tt0086190", "tt0120915", "tt0121765", "tt0121766", "tt2488496", "tt2527336"]

//_____----->>>Traer seleccion desde API

//iterar seleccion//fetch a la API
for (const item of lucasSelection) {
   // console.log(item)
    fetch("https://www.omdbapi.com/?i=" +item + "&apikey=954d0791" )
    .then((response) => response.json())
    .then((data) => renderingLucasSelection(data))
    .catch((error) => console.log(error))
}

//Se crea el rendering de LucasFilm
let renderingLucasSelection = (lData) => {
    //console.log(lData)
    let lSelection = document.getElementById("StarWars")
    lSelection.innerHTML +=  ' <div class="card" style="width: 18rem;"> ' + '<a href="https://www.youtube.com/playlist?list=PLeUE1Tl0ah2IM7rO9OxzI_GWjJ4riNZMM" target="_blank">' +
        "<img " + "src= " +`${lData.Poster}` + " class='card-img-top' alt=''></a>" +
        "  <div class='card-body'> " +
        "  <h5 class='card-title'> <strong>Titulo: </strong>" + `${lData.Title}`  + "</h5> " +
        "  <p> <strong>Año: </strong>" + `${lData.Year}` + "</p>" + 
        "  <p> <strong>Duración: </strong>" + `${lData.Runtime}` + "</p>" +
        "  <p> <strong>Género: </strong>" + `${lData.Genre}` + "</p>" +
        "  <p> <strong>Actores: </strong>" + `${lData.Actors}` + "</p>" +
        "  <p> <strong>Director: </strong>" + `${lData.Director}` + "</p>" +
        "  <p class='card-text'> <strong>Plot: </strong>" +  `${lData.Plot}` +  "</p> " +
        " </div> " +
        "   </div> "
    }
