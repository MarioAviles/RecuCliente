import { APIKEY } from "./settings";

export function getTrendings () {


  const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g`;
  
  console.log(apiURL);

  // Usamos fetch para recuperar los post de la REST API. Puesto que hacemos
  // una petición al servidor y esta puede tardar un tiempo en resolverse usaremos
  // una promesa, la respuesta de la REST API es los que devolvemos
  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
          const {data} = response
          return data
  })
}