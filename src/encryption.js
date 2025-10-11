
// GREEN 2.0 - Implementación de la función de encriptación

// 6 - Requisito Funcional: Escaneo de virus básico
function scanForVirus(file) {
  // Simulación: Si el nombre contiene "virus", lo consideramos infectado
  if (file.name.toLowerCase().includes("virus")) {
    return false; // Infectado
  }
  return true; // Limpio
}


// 4 - Implementamos la función de encriptación
const CryptoJS = require("crypto-js");

function encryptData(data) {
  return CryptoJS.AES.encrypt(data, "super-secret-key").toString();
}

module.exports = { encryptData, scanForVirus };