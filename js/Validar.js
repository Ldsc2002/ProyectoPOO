/**********************************************
Programación orientada a objetos
validar.js
Autores: 
Luis Santos: 20226
Paola Contreras: 20213
José Pablo Díaz: 20396
Jóse Lucero: 20306
Diego Córdova: 20212

Catedrático: Tomás Gálvez

Clase Validar
**********************************************/

// Clase Validar
class Validar {

    /*  Atributos   */

    // String materia: identifica la materia
    // array preguntas: guarda las preguntas de la materia
    // int cont_preguntas: Lleva el conteo de las preguntas que se le hacen al usuario.
    // int cont_respuestas: int - lleva el conteo de respuestas correctas que da el usuario.

    #materia
    #preguntas
    #cont_preguntas

    /*  Métodos */

    // constructor
    constructor(materia){

        var preguntas = []; // Arraylist que guarda las preguntas temporalmente

        // Si materia es 1 
        if (materia == 1){

            this.#materia = "Matemática"; // asiganar materia matemática

        // Si materia es 2
        } else if (materia == 2){

            this.#materia = "Lenguaje"; // asiganar materia Lenguaje

        //Si materia es 3
        } else if (materia == 3){

            this.#materia = "Ciencias Naturales"; // asiganar materia ciencias naturales
        }

        // Se crean 5 preguntas de la materia correspondiente 
        for (var i = 0; i < 5; i++){

            preguntas.push(new Pregunta(materia, i)) // se crea una nueva instancia y se guarda en el array preguntas.
        }

        this.#preguntas = preguntas; // Se asigna un array llena con las 5 preguntas de la materia al atributo preguntas
        this.#cont_preguntas = preguntas.length; // Se inicia en 0 el contador de preguntas

    }

    // Método que devuelve un array con: la pregunta, la respuesta correcta y tres respuestas incorrectas de una de las preguntas guardadas en el atributo preguntas
    preguntaList(preg) {

        var pregunta = preg - 1; // Se le resta 1 al parámetro para que esté acorde a la indentación de los arrays
        var ret = []; // array que guardará el retorno

        ret.push(this.#preguntas[pregunta].getPregunta()); // Se añade la respuesta de la pregunta corrspondiente a ret
        ret.push(this.#preguntas[pregunta].getRespuesta()); // Se añade la respuesta de la pregunta correspondiente a ret

        // Se añaden las 3 respuestas incorrectas de la pregunta correspondiente a ret
        for (var i = 0; i < 3; i++){

            ret.push(this.#preguntas[pregunta].getIncorrect()[i]);
        }

        return ret; // Se devuelve ret
    }

    // Método para corroborar que la respuesta seleccionada sea la respuesta correcta 
    corroborar(correcta){
        //Se crea un ciclo para reccorer el array de respuestas
        for (var i = 0; i < correcta.length; i++) {
            // Se crea la condicion para comparar la respuesta dada por el usuario en el array de respuestas basandose en el index 
            if (preguntas[Pregunta].getRespuesta() == correcta[i]) {
                this.#cont_respuestas++; // se le suma 1 al contador de respuestas
                this.#cont_preguntas++; // se le suma 1 al contador de preguntas
            } else 
                this.#cont_preguntas++; // se le suma 1 al contador de respuestas
            }
    }

    /*  Getters */  

    // materia
    getMateria() {
        return this.#materia;
    }

    // cont_preguntas
    getCont_preguntas() {
        return this.#cont_preguntas;
    }
}
