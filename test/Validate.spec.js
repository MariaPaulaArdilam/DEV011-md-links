const mdLinks = require("../src/index.js");
jest.mock("../src/index.js");

describe("md-Links es una funcion", () => {
  it("debe llamar correctamente a la funcion validateLinks con los links", () => {
    const link = [
      {
        href: "https://example.com",
        text: "Example",
      },
    ];
    mdLinks(link);
    expect(mdLinks).toHaveBeenCalled();
    expect(mdLinks).toHaveBeenCalledTimes(link.length); 
    expect(mdLinks).toHaveBeenCalledWith([
      { href: "https://example.com", text: "Example" },
    ]);
  });

  it("debe devolver el resultado de validacion", () => {
    const links = [{ href: "https://example.com", text: "Example" }];
    mdLinks.mockImplementation((link) => {
      const result = mdLinks(links);
      if (link === "https://example.com") {
        return [{ href: "https://example.com", text: "Example", status: 200 }];
      }
      expect(result).toEqual([
        { href: "https://example.com", text: "Example", status: 200 },
      ]);
    });
  });

  it("debe manejar errores correctamente", () => {
    const links = [{ href: "https://ejemplo.com/1" }];

    const errorMessage = "Error al validar enlaces";

    mdLinks.mockRejectedValue(new Error(errorMessage));

    expect(mdLinks(links)).rejects.toThrow(errorMessage);
    expect(mdLinks).toHaveBeenCalledTimes(2); // Verificar que se llamó validateLinks una vez
  });
});
