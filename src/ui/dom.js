const tbody = document.getElementById('display-data');

export function addToHistory(result) {
  if (result.status !== 'ok') return;

  const row = document.createElement('tr');

  const cellInput = document.createElement('td');
  cellInput.textContent = result.data.input;
  cellInput.classList.add('border', 'px-4', 'py-2');

  const cellOutput = document.createElement('td');
  cellOutput.textContent = result.data.output;
  cellOutput.classList.add('border', 'px-4', 'py-2');

  fila.appendChild(cellInput);
  fila.appendChild(cellOutput);

  tbody.appendChild(row);
}

