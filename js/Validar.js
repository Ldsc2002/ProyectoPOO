

// Clase Validar
class Validar {

    /*  Atributos   */

    // array preguntas: guarda las preguntas de la materia
    // int cont_preguntas: Lleva el conteo de las preguntas que se le hacen al usuario.
    // int cont_respuestas: int - lleva el conteo de respuestas correctas que da el usuario.

    /*  Métodos */

    // constructor
    constructor(materia){

        var preguntas = []; // Arraylist que guarda las preguntas temporalmente

        // Se crean 5 preguntas de la materia correspondiente 
        for (var i = 0; i < 5; i++){

            preguntas.push(new Pregunta(materia, i))
        }

        this.preguntas = preguntas; // Se asigna un array llena con las 5 preguntas de la materia al atributo preguntas
        this.cont_preguntas = 0; // Se inicia en 0 el contador de preguntas
        this.cont_respuestas = 0; // Se inicia en 0 el contador de respuestas correctas

    }

    

    /* Getters  */

    // preguntas
    getPreguntas() {
        return this.preguntas;
    }

    // cont_preguntas
    getCont_preguntas() {
        return this.cont_preguntas;
    }

    // cont_respuestas
    getCont_respuestas() {
        return this.Cont_respuestas;
    }
}

