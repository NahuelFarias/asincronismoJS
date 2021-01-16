let XMLHtppRequest = require("xmlhttprequest").XMLHttpRequest;

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
