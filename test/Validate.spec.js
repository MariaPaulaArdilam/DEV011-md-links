const http = require("https");
const { validateLinks } = require("../src/function.js");

describe("Pruebas para validateLinks", () => {
  it("Debería resolver un enlace HTTP exitoso", () => {
    const link = "https://example.com";
    const mockResponse = {
      statusCode: 200,
    };

    jest.spyOn(http, "get").mockImplementation((url, callback) => {
      callback(mockResponse);
      return {
        on: jest.fn(),
      };
    });

    return expect(validateLinks(link)).resolves.toEqual({
      href: link,
      status: 200,
      ok: "ok",
    });
  });

  it("Debería rechazar un enlace HTTP no válido", () => {
    const link = "https://invalid.com";

    const mockResponse = {
      statusCode: 404,
    };

    jest.spyOn(http, "get").mockImplementation((url, callback) => {
      callback(mockResponse);
      return {
        on: jest.fn(),
      };
    });

    return expect(validateLinks(link)).resolves.toEqual({
      href: link,
      status: 404,
      ok: "fail",
    });
  });
});
