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
    function fizzBuzz (number) {
	try {
		if (typeof number !== 'number' || isNaN(number)) {
			throw new Error('Entrada no válida');
        }

        let result: "";
        