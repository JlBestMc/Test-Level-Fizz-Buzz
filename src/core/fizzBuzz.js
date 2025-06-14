
export function fizzBuzz(number) {
  try {
    if (typeof number !== 'number' || isNaN(number)) {
      throw new Error('Entrada no válida');
    }

    let output = '';
    let message = '';

    if (number % 3 === 0 && number % 5 === 0) {
      output = 'FizzBuzz';
      message = 'El número es divisible por 3 y 5';
    } else if (number % 3 === 0) {
      output = 'Fizz';
      message = 'El número es divisible por 3';
    } else if (number % 5 === 0) {
      output = 'Buzz';
      message = 'El número es divisible por 5';
    } else {
      output = number;
      message = 'El número no es divisible por 3 ni 5';
    }

    return {
      status: 'ok',
      message,
      data: {
        input: number,
        output
      }
    };
  } catch (error) {
    return {
      status: 'error',
      message: error.message,
      data: {
        input: number,
        output: ''
      }
    };
  }
}
   