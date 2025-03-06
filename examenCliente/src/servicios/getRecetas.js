export function getRecetas(letra = "a") {
    const Url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`
  
    return fetch(Url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {

        if (!data.meals || data.meals.length === 0 || letra === 'Ñ') return []
        
        return data.meals.map(receta => ({
          nombre: receta.strMeal,
          categoria: receta.strCategory,
          foto: receta.strMealThumb,
          id: receta.idMeal
        }));
      })
      .catch(er => {
        console.log("Error al obtener los datos", er)
        throw er
      });
  }