const tbody = document.getElementById('display-data');

export function addToHistory(result) {
  if (result.status !== 'ok') return;

  const row = document.createElement('tr');
  row.classList.add('text-center');

  const cellInput = document.createElement('td');
  cellInput.textContent = result.data.input;
  cellInput.classList.add('px-4', 'py-2', 'w-100', 'h-60');

  const cellOutput = document.createElement('td');
  cellOutput.classList.add('w-100', 'h-60',  'px-4', 'py-2', 'flex', 'justify-center', 'flex-col', 'items-center');

  const text = document.createElement('p');
  text.textContent = result.data.output;
  cellOutput.appendChild(text);

  const output = String(result.data.output).toLowerCase();
  
  if (["fizz"].includes(output)) {
    text.textContent = "";
    const img = document.createElement('img');
    img.src = `src/images/${output}.png`;
    img.classList.add('w-50', 'h-50', 'object-contain');
    cellOutput.appendChild(img);
  }

  if (["fizzbuzz", "buzz"].includes(output)) {
    text.textContent = "";
    const img = document.createElement('img');
    img.src = `src/images/${output}.png`;
    img.classList.add('w-40', 'h-50', 'object-contain');
    cellOutput.appendChild(img);
  }


  row.appendChild(cellInput);
  row.appendChild(cellOutput);

  tbody.appendChild(row);

}

