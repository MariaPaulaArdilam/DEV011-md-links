const mdLinks = require("./index.js");
const filePath = "READMEPRUEBA.md"
const validate = true

mdLinks(filePath, validate)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));