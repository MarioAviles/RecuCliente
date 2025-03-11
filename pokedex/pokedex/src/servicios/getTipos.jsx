export function getTipos() {
    return fetch(`https://pokeapi.co/api/v2/type`)
        .then(response => response.json())
        .then(data => {
            //comprobar que no salga nada
            if (!Array.isArray(data.results)) {
                return []; 
            }
            return data.results.map(tipo => ({
                nombre: tipo.name
            }));
        });
}