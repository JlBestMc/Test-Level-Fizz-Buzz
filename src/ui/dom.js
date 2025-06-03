/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

const display = document.getElementById('display-data');

// Historial en memoria
const record = [];

export function mostrarResultado(resultado) {
  const row = document.createElement("tr");

  const inputCell = document.createElement("td");
    inputCell.textContent = resultado.data.output;
    inputCell.classList.add("w-full");
}
