//importar los paquetes
const { absolutePath, validar, obtenerEnlacesMarkdown } = require("./function");
const filePath = '../READMEPRUEBA.md'
// const esContenidoMarkdown = require('./function')

const mdLinks = (filePath) => {
  return new Promise((resolve, reject) => {
    // convertir la ruta en absoluta
    const absoluteFilePath = absolutePath(filePath);
    // comprobar que la ruta existe
    if (!validar(absoluteFilePath)) {

      reject(new Error("La ruta no existe"));
    } else {
      obtenerEnlacesMarkdown(absoluteFilePath)
      .then((links) => {
        resolve(links);
        console.log('Enlaces encontrados:');
      })
      .catch((error) => {
        reject(error);
        console.error('Error al obtener los enlaces:', error); 
      });
  }
  });


};

module.exports = mdLinks;
