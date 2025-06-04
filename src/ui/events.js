/**
 * Responsabilidad: gestionar los eventos
 * */ 

import { fizzBuzz } from '../core/fizzBuzz.js';
import { addToHistory } from './dom.js';

const form = document.querySelector('form');
const inputNumber = document.getElementById('number-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = Number(inputNumber.value);
  const result = fizzBuzz(value);

  addToHistory(result);
});
