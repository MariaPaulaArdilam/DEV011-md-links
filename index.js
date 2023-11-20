//importar los paquetes
const fs = require("fs");
const path = require("path");
const filePath = "READMEPRUEBA.md";

const mdLinks = (filePath) => {
  return new Promise((resolve, reject) => {
    // convertir la ruta en absoluta
    const absoluteFilePath = path.resolve(filePath);
    // comprobar que la ruta existe
    if (!fs.existsSync(absoluteFilePath)) {
      reject(new Error("La ruta no existe"));
    } else {
      // comprobar que el archivo existe
      resolve(`La ruta ${absoluteFilePath} existe.`);
    }
  });
};

module.exports = mdLinks;

mdLinks(filePath)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

