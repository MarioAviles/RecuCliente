export function getArea() {
    const Url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  
    return fetch(Url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => {
        console.log("datos areas:", data)
        return data.meals.map(receta => ({
          area: receta.strArea,
        }));
      })
      .catch(er => {
        console.log("Error al obtener los datos", er)
        throw er
      });
  }