//Se crea una nueva funcion para renderear la pelicula
let renderinFilm = (filmData) => {

}

/*aqui se exporta desde el index.js el API con una variable ue sera igual  a una funcion flecha que contendra
un fetch con la direccion del API a la cual se le agregará un template string, junto del cuál se agregaran sus respectivos
.then (junto con sus condicionales), .catch y .finally 
*/

export let getOmdbApi = (filmForSearch) => {
fetch("" + `${filmForSearch}`)
.then((response) => {
    console.log(response)
    if(response.status == 404){
        alert("Verifica que tengas el titulo correcto de la pelicula")
    }else{
        response.json()
        .then((data))
    }
})
}

