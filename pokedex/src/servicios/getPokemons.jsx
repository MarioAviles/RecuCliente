export function getPokemons({limit , offset}) {
    return fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(response => response.json())
        .then(data => {
            if (!Array.isArray(data.results)) {
                return []; 
            }
            // Promise.all para hacer un fetch dentro de un fetch
            return Promise.all(
                data.results.map(pokemon => 
                    fetch(pokemon.url)
                        .then(res => res.json())
                        .then(pokemon => ({
                            id: pokemon.id,
                            nombre: pokemon.name,
                            imagen: pokemon.sprites.front_default,
                            tipos: pokemon.types.map(type => type.type.name)
                        }))
                )
            );
        });
}
