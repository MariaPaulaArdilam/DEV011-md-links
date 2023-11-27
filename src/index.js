//importar los paquetes
const { absolutePath, validar, obtenerEnlacesMarkdown, validateLinks } = require("./function");

const mdLinks = (path, validate) => {
  return new Promise((resolve, reject) => {
    // convertir la ruta en absoluta
    const absoluteFilePath = absolutePath(path);
    // comprobar que la ruta existe
    if (!validar(absoluteFilePath)) {

      reject(new Error("La ruta no existe"));
    } else {
      obtenerEnlacesMarkdown(absoluteFilePath)
      .then((links) => {
        if (validate) {
          const linkPromises = links.map(linkObj => {
            return validateLinks(linkObj.href); // Validar cada enlace    
      })
      Promise.all(linkPromises)
      .then(validatedLinks => {
        // Combinar información de enlaces validados con información original
        const combinedLinks = links.map((linkObj, index) => {
          return { ...linkObj, ...validatedLinks[index] };
        });
        resolve(combinedLinks);
      })
      .catch(error => {
        reject(error);
      });
  } else {
    resolve(links);
  }
})
.catch((error) => {
  reject(error);
});
  }
  });
}

module.exports = mdLinks;
