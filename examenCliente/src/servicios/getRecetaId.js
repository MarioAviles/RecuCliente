export function getRecetaId(id) {
    const Url = `https://www.themealdb.com/api/json/v1/1/search.php?i=${id}`
  
    return fetch(Url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {

        return data.meals.map(receta => ({
          nombre: receta.strMeal,
          categoria: receta.strCategory,
          area: receta.strArea,
          id: receta.idMeal
        }));
      })
      .catch(er => {
        console.log("Error al obtener los datos", er)
        throw er
      });
  }