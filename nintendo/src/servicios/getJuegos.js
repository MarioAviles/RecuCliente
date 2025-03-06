export function getJuegos() {
    const Url = `/api/api/gEGCcwY`
  
    return fetch(Url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        console.log("datos juegos:", data)
        return data.map(juego => ({
          id: juego.id,
          fechaLanzamiento: juego.fechaLanzamiento,
          categorias: juego.categorias,
          nombre: juego.nombre,
          nota: juego.nota
        }));
      })
      .catch(er => {
        console.log("Error al obtener los datos", er)
        throw er
      });
  }