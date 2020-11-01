/******************************************************************
ValidarMultipleChoice.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-10-31

Extiente la clase validar. Implementa los métodos de validar para 
preguntas de selección multiple.
******************************************************************/

// Clase ValidarMultipleChoice
class ValidarMultipleChoice extends Validar {

    /*  Atributos   */

    // String materia: identifica la materia
    // Pregunta preguntas: Objeto de la clase pregunta que contiene las preguntas de una materia
    // int cont_preguntas: Lleva el conteo de las preguntas que se le hacen al usuario.
    // int puntos: Puntos totales del usuario
    // int respondidas: Preguntas resueltas por el usuario

    /*  Métodos */

    // constructor
    constructor(materia) { //Constructor de la clase
        var temp = new PreguntaMultipleChoice(materia);
        super(temp); //Llama al constructor de validar
    }

    // Método que devuelve un array con: la pregunta, la respuesta correcta y tres respuestas incorrectas de una de las preguntas guardadas en el atributo preguntas
    preguntaList(preg) {
        var pregunta = preg - 1; // Se le resta 1 al parámetro para que esté acorde a la indentación de los arrays
        var ret = []; // array que guardará el retorno

        ret.push(this.preguntas.getPregunta(pregunta)); // Se añade la respuesta de la pregunta corrspondiente a ret
        ret.push(this.preguntas.getRespuesta(pregunta)); // Se añade la respuesta de la pregunta correspondiente a ret

        // Se añaden las 3 respuestas incorrectas de la pregunta correspondiente a ret
        let temp = this.preguntas.getIncorrect(pregunta);
        
        for (var i = 0; i < temp.length; i++){
            ret.push(temp[i]);
        }

        return ret; // Se devuelve ret
    }
}