
const mdLinks = require("../src/index.js");
const {
    absolutePath,
    validar,
    obtenerEnlacesMarkdown,
  } = require('../src/function.js') 

  jest.mock("../src/function.js", () => ({
    absolutePath: jest.fn(),
    validar: jest.fn(),
    obtenerEnlacesMarkdown: jest.fn(),
    validateLinks: jest.fn()
  }));

describe('Pruebas para mdLinks', () => {
    afterEach(() => {
      jest.clearAllMocks(); 
    });
  
    it('Debería rechazar la promesa si la ruta no existe', () => {
      absolutePath.mockReturnValue('/ruta/inexistente');
      validar.mockReturnValue(false);
      return expect(mdLinks('/ruta/inexistente', false, false)).rejects.toThrow('La ruta no existe');
    });
  
    it('Debería resolver los enlaces sin estadísticas ni validación', async () => {
        const mockLinks = [
          { href: 'https://example.com', text: 'Example' },
        ];
    
        absolutePath.mockReturnValue('/ruta/valida');
        validar.mockReturnValue(true);
        obtenerEnlacesMarkdown.mockResolvedValue(mockLinks);
        const result = await mdLinks('/ruta/valida', false, false);
        expect(result).toEqual(mockLinks);
      });
  
  });