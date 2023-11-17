const mdLinks = require("../index.js");


describe('mdLinks', () => {

  it('Debe devolver una promesa', () => {
    expect(mdLinks('./README.md')).toBeInstanceOf(Promise);
  });

});
