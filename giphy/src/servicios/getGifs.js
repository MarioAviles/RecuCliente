import { APIKEY } from "./settings";

export function getGifs ({limite=25, keyword="null", page=0}) {

// limite = Número máximo de resultados que nos sirve el APIRest
// offset = Cuantos resultados me tengo que saltar de los resultados que te voy a devolver

  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword}&limit=${limite}&offset=${page*limite}&rating=g&lang=en`;


  // Usamos fetch para recuperar los post de la REST API. Puesto que hacemos
  // una petición al servidor y esta puede tardar un tiempo en resolverse usaremos
  // una promesa, la respuesta de la REST API es los que devolvemos
  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
          const {data} = response

          // Video 2 de Curso React, minuto 36 explica esto por qué es así
          const gifs = data.map(image => {
          const {images, title, id} = image
          const url = images.downsized_medium.url
          return {title, id, url};})
      
      return gifs
  })
}