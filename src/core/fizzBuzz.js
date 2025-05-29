/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */ 
    export default function fizzBuzz (number) {
	try {
		if (typeof number !== 'number' || isNaN(number)) {
			throw new Error('Wrong input');
        }


        let result = '';
        if (number % 3 === 0 && number % 5 === 0) {
			result = 'FizzBuzz';
		} else if (number % 3 === 0) {
			result = 'Fizz';
		} else if (number % 5 === 0) {
			result = 'Buzz';
		} else {
			result = String(number);
		}

        return {
			status: 'ok',
			message: 'The number is correct',
			data: {
				number,
				result
			}
		};

    } catch (error) {
		return {
			status: 'error',
			message: error.message,
			data: {
				number,
				result: ''
			}
		};
	}
}
        