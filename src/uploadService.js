
// GREEN

//Importaciones
// 5 - Integración de la encriptación en el servicio de carga
const { encryptData, scanForVirus } = require("./encryption");


// 2 - Aceptación de archivos permitidos
function uploadFile(file) {
  const allowedTypes = ["image/png", "image/jpeg", "application/pdf"];
  //Agregamos una nueva constante para el tamaño máximo
  const maxSize = 10000;

// 2 - Validación de tipo de archivo
  if (!allowedTypes.includes(file.type)) {
    throw new Error("Tipo de archivo no permitido");
  }

  // 5 - Validamos el tamaño del archivo
  if (file.size > maxSize)
    throw new Error("El archivo supera el tamaño permitido");

  // 6 - Requisito Funcional: Escaneo de virus antes de subir
  if (!scanForVirus(file)) {
    throw new Error("El archivo está infectado o es sospechoso");
  }

  // 5 - Encriptamos el archivo antes de subirlo
  const encryptedContent = encryptData(file.name);

  // Simulamos la carga del archivo
  return {message: "Archivo cargado exitosamente", encrypted: true, data: encryptedContent };
}

module.exports = { uploadFile };
