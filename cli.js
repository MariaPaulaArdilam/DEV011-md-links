#! /usr/bin/env node

const mdLinks = require("./src/index.js");
let filePath = process.argv[2]  //"READMEPRUEBA.md"
let validate = true
let stats = true 

const args = process.argv.slice(2);

if (args.length !== 1 && args.length !== 2 && args.length !== 3) {
  console.log('Uso: md-links READMEDEPRUEBA.md');
} else {
  filePath = args[0];
  validate = args[1] === '--validate';
  stats = args[2] === '--stats';
}

mdLinks(filePath, validate, stats)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));


