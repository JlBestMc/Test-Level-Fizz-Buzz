/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            resultado: "" // resultadoado esperado
            }
    }
 * */ 
    export function fizzBuzz (number) {
	try {
		if (typeof number !== 'number' || isNaN(number)) {
			throw new Error('Wrong input');
        }


        let resultado = '';
        if (number % 3 === 0 && number % 5 === 0) {
			resultado = 'FizzBuzz';
		} else if (number % 3 === 0) {
			resultado = 'Fizz';
		} else if (number % 5 === 0) {
			resultado = 'Buzz';
		} else {
			resultado = String(number);
		}

        return {
			status: 'ok',
			message: 'The number is correct',
			data: {
				number,
				resultado
			}
		};

    } catch (error) {
		return {
			status: 'error',
			message: error.message,
			data: {
				number,
				resultado: ''
			}
		};
	}
}
        