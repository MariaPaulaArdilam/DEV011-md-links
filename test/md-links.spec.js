const mdLinks = require("../index.js");


describe("mdLinks", () => {
  it("Debe devolver una promesa", () => {
    expect(mdLinks("./README.md")).toBeInstanceOf(Promise);
  });

  it("Debe rechazar cuando la ruta no existe", () => {
    return mdLinks('C:/Users/Documents/Documentos Maria Paula/DEV011-md-links/NOEXISTE.md').catch((error) =>{
      expect(error.message).toMatch(/la ruta no existe/i) //la i verifica el error sin tener en cuenta las mayusculas y las minusculas 
    }) 
  });
  
  it("Debe devolver un array", ()=>{
    const filePath = 'READMEPRUEBA.md';
    return mdLinks(filePath).then((links) =>{
      expect(links).toBeDefined();
      expect(Array.isArray(links)).toBe(true);
    })
  })
 
});
