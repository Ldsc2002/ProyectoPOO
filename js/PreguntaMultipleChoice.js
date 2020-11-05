/******************************************************************
PreguntaMultipleChoice.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-11-4

Implementa las preguntas de selección multiple que se le pueden 
presentar al usuario. Extiende la clase pregunta.
******************************************************************/

// Clase Pregunta
class PreguntaMultipleChoice extends Pregunta {

    /*  Atributos   */

    // String materia: Identifica de que materia son las preguntas
    // Array preguntas: Guarda Pregunta textual
    // int cantidad: cantidad de preguntas que hay el array preguntas

    /*  Métodos */

    // constructor
    constructor(materia){ //Constructor de la clase

        /* Se llenan las variables de instancia dependiende de la materia dada como parámetro
        1. Matemática
        2. Lenguaje
        3. Ciencias*/

        let mat, preguntas;

        if (materia == 1) { //Si la matetia es matematica

            mat = "Matemática"
            preguntas = JSON.parse(sessionStorage.getItem("matematica")); //Obtiene los datos almacenados en el cache

        } else if (materia == 2) { //Si la materia es lenguaje

            mat = "Lenguaje";
            preguntas = JSON.parse(sessionStorage.getItem("lenguaje")); //Obtiene los datos almacenados en el cache

        } else if (materia == 3) { //Si la materia es ciencias

            mat = "Ciencias";
            preguntas = JSON.parse(sessionStorage.getItem("ciencias")); //Obtiene los datos almacenados en el cache
        }

        super(mat, preguntas) //Llama el constructor de pregunta
    }

    getRespuesta(x){ //Devuelve la respuesta
        return this.preguntas[x][1];
    }

    getPregunta(x){ //Devuelve la pregunta
        return (this.preguntas[x][0]);
    }

    getIncorrect(x){ //Devuelve las preguntas incorrectas
        return [this.preguntas[x][2], this.preguntas[x][3], this.preguntas[x][4]];
    }
}