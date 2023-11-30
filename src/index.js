//importar los paquetes
const { absolutePath, validar, obtenerEnlacesMarkdown, validateLinks } = require("./function");

const mdLinks = (path, validate, stats) => {
  return new Promise((resolve, reject) => {
    const absoluteFilePath = absolutePath(path);

    if (!validar(absoluteFilePath)) {
      reject(new Error("La ruta no existe"));
    } else {
      obtenerEnlacesMarkdown(absoluteFilePath)
        .then((links) => {
          if (stats) {
            const totalLinks = links.length;
            const uniqueLinks = [...new Set(links.map((link) => link.href))].length;

            const statistics = {
              total: totalLinks,
              unique: uniqueLinks,
              // Agrega más estadísticas según sea necesario
            };

            resolve(statistics);
          } else if (validate) {
            const linkPromises = links.map((linkObj) => {
              return validateLinks(linkObj.href); // Validar cada enlace
            });

            Promise.all(linkPromises)
              .then((validatedLinks) => {
                const combinedLinks = links.map((linkObj, index) => {
                  return { ...linkObj, ...validatedLinks[index] };
                });
                resolve(combinedLinks);
              })
              .catch((error) => {
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
};

module.exports = mdLinks;
