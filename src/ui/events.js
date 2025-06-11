
import { fizzBuzz } from '../core/fizzBuzz.js';
import { addToHistory } from './dom.js';

const form = document.getElementById('fizzbuzz-form');
const inputNumber = document.getElementById('number-input');

form.addEventListener('submit', (e) => {
  console.log('click');
  e.preventDefault();

  const valueText = inputNumber.value.trim();

  if (valueText=== "") {
    alert("Por favor, ingresa un número válido.");
    return;
  }

  const value = Number(valueText);
  const result = fizzBuzz(value);

  addToHistory(result);
});
