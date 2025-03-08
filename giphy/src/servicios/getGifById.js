import { APIKEY } from "./settings";

export function getGifById (id) {

  const apiURL = `https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`;

//  console.log(apiURL);

  return fetch(apiURL)
    .then(response => response.json())
    .then(response => {
          const {title, id} = response.data;
          const url = response.data.images.downsized_medium.url
          return {title, id, url}          
        
  })
}