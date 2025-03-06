export function getAllGames () {

    // Usamos fetch para recuperar los post de la REST API. Puesto que hacemos
    // una petición al servidor y esta puede tardar un tiempo en resolverse usaremos
    // una promesa, la respuesta de la REST API es los que devolvemos
    return fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key": "19116d23d4msh7a3a868f91f0533p1fdec8jsn2b466cfc9a32"
        }
    })
    .then(response => {
        const data = response.json();
        return data;
    })
    .catch(err => {
        console.error(err);
        console.log("sin datos");
    });
}