export function getPerfumes() {
    const Url = `/api/api/HgYvr1w`
  
    return fetch(Url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        console.log("datos perfumes:", data)
        return data.map(perfume => ({
          id: perfume.id,
          marca: perfume.marca,
          categoria: perfume.categoria,
          nombre: perfume.nombre,
        }));
      })
      .catch(er => {
        console.log("Error al obtener los datos", er)
        throw er
      });
  }