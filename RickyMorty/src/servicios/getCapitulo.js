export function getCapitulo(capitulo) {

    if (!capitulo) {
      console.warn("capitulo no válido:", capitulo);
      return Promise.resolve([]); // Devolver un array vacío si el ID es inválido
    }
  
    const Url = `https://rickandmortyapi.com/api/episode/${capitulo}`
  
    return fetch(Url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data.map(capitulo => ({
          nombre: capitulo.name,
          personajes: capitulo.characters,
          id: capitulo.id
        }));
      })
      .catch(er => {
        console.log("Error al obtener los datos", er)
        throw er
      });

  }