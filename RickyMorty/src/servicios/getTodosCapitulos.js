export function getTodosCapitulos(page = 0) {
    const Url = `https://rickandmortyapi.com/api/episode?page=1`
  
    return fetch(Url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {

        if (!data || data.length === 0) return []

        return data.results.map(capitulo => ({
          nombre: capitulo.name,
          fechaLanzamiento: capitulo.air_date,
          episodio: capitulo.episode,
          id: capitulo.id,
          personajes: capitulo.characters
        }));
      })
      .catch(er => {
        console.log("Error al obtener los datos", er)
        throw er
      });
  }