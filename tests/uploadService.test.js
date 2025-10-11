
// RED


// 1 - Rechazo de archivos no permitidos
const { uploadFile } = require("../src/uploadService");

// 3 - Aumentamos una nueva constante para los tests
const { encryptData } = require("../src/encryption");

// 1 - Rechazo de archivos no permitidos
test("Debe rechazar archivos no permitidos", () => {
  const file = { name: "virus.exe", size: 500, type: "application/x-msdownload" };
  expect(() => uploadFile(file)).toThrow("Tipo de archivo no permitido");
});

// 3 - Aumentamos un nuevo test para la función encryptData
test("Debe encriptar el archivo antes de subirlo", () => {
  const file = { name: "data.pdf", size: 200, type: "application/pdf" };
  const result = uploadFile(file);
  expect(result.encrypted).toBe(true);
});

// 6 - Test para archivos infectados
test("Debe rechazar archivos infectados o sospechosos", () => {
  const file = { name: "virus_document.pdf", size: 500, type: "application/pdf" };
  expect(() => uploadFile(file)).toThrow("El archivo está infectado o es sospechoso");
});

//Tener en cuenta compañeritos que esta prueba fallará al inicio porque uploadFile aún no existe.