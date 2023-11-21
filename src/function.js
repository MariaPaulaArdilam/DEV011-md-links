const path = require("path");
const fs = require("fs");


const absolutePath = (route) => path.resolve(route);

const validar = (route) => fs.existsSync(route);

const obtenerEnlacesMarkdown = (filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          const regex = /\[([^\]]+)\]\(([^)]+)\)/g; 
          const links = [];
          let match;
          while ((match = regex.exec(data)) !== null) {
            links.push({
              href: match[2], // URL del enlace
              text: match[1], // Texto del enlace
              file: filePath, // Ruta del archivo
            });
          }
          resolve(links);
        }
      });
    });
  };
  
module.exports = { absolutePath, validar, obtenerEnlacesMarkdown };
