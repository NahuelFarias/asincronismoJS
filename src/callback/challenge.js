let XMLHtppRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(url_api, callback) {
  let xhttp = new XMLHtppRequest();
  xhttp.open("GET", url_api, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText)); // Aca parseamos de JSON a TEXTO
      } else {
        const error = new Error("Error" + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

// Si supera las 3 peticiones, se trata del Callback Hell.
// Hay que analizar si conviene o no seguir este camino

// Primero buscamos la lista de personajes
fetchData(API, function (error1, data1) {
  // Si da error, matamos retornando un error
  if (error1) {
    return console.error(error1);
  }
  // Luego buscamos en la api el id de Rick
  fetchData(API + data1.results[0].id, function (error2, data2) {
    // Si da error, matamos retornando un error
    if (error2) {
      return console.error(error2);
    }
    // Por ultimo la consulta a la api que contiene su dimension
    fetchData(data2.origin.url, function (error3, data3) {
      // Si da error, matamos retornando un error
      if (error3) {
        return console.error(error3);
      }
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
