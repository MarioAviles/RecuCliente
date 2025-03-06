export function getRecetaId(id) {

  if (!id) {
    console.warn("ID de receta no válido:", id);
    return Promise.resolve([]); // Devolver un array vacío si el ID es inválido
  }

  const Url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  return fetch(Url, {
    method: "GET"
  })
    .then(response => response.json())
    .then(data => {
      console.log("📦 Datos JSON obtenidos:", data);
      return data.meals.map(receta => ({
        nombre: receta.strMeal,
        categoria: receta.strCategory,
        area: receta.strArea,
        id: receta.idMeal,
      }));
    })
    .catch(er => {
      console.log("Error al obtener los datos", er)
      throw er
    });
}