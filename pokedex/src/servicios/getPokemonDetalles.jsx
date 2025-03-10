export function getPokemonDetalles({ id }) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            // Hacer un fetch dentro de un fetch
            const speciesUrl = data.species.url;
            return fetch(speciesUrl)
                .then(response => response.json())
                .then(speciesData => {
                    // Esto es solo para que el texto salga en español
                    const englishFlavorText = speciesData.flavor_text_entries.find(entry => entry.language.name === "es").flavor_text.replace(/\f/g, ' ');
                    return {
                        id: data.id,
                        nombre: data.name,
                        imagen: data.sprites.front_default,
                        tipos: data.types.map(type => type.type.name),
                        peso: data.weight,
                        altura: data.height,
                        estadisticas: data.stats.map(stat => ({
                            nombre: stat.stat.name,
                            valor: stat.base_stat
                        })),
                        descripcion: englishFlavorText
                    };
                });
        });
}