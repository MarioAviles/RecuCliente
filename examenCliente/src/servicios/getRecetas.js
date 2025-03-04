export function getRecetas() {
    const Url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52815'
  
    return fetch(Url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        return data.map(receta => ({
          nombre: receta.srtMeal,
          idiomas: receta.strCategory,
          foto: receta.strMealThumb,
          id: receta.idMeal
        }));
      })
      .catch(er => {
        console.log("Error al obtener los datos", er)
        throw er
      });
  }