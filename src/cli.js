const mdLinks = require("./index.js");
const filePath = "READMEPRUEBA.md"

mdLinks(filePath)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));