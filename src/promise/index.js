// Aqui la promesa se ejecuta al llamar la funcion.
const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Whooops!");
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));

// Nosotros seteamos el tiempo. Ademas nos devulve un error mas especifico.
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("True");
      }, 2000);
    } else {
      const error = new Error("Whoops!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((err) => {
    console.error(err);
  });
