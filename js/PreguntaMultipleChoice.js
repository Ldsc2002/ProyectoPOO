/******************************************************************
Calificaciones.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-10-05

Implementa las preguntas que se le pueden presentar al usuario. 
******************************************************************/

// Clase Pregunta
class PreguntaMultipleChoice extends Pregunta {

    /*  Atributos   */

    // String materia: Identifica de que materia son las preguntas
    // Array preguntas: Guarda Pregunta textual
    // int cantidad: cantidad de preguntas que hay el array preguntas

    /*  Métodos */

    // constructor
    constructor(materia){

        /* Se llenan las variables de instancia dependiende de la materia dada como parámetro
        1. Matemática
        2. Lenguaje
        3. Ciencias*/

        let mat, preguntas;

        if (materia == 1) {

            mat = "Matemática"
            preguntas = JSON.parse(sessionStorage.getItem("matematica")); //Obtiene los datos almacenados en el cache

        } else if (materia == 2) {

            mat = "Lenguaje";
            preguntas = JSON.parse(sessionStorage.getItem("lenguaje")); //Obtiene los datos almacenados en el cache

        } else if (materia == 3) {

            mat = "Ciencias";
            preguntas = JSON.parse(sessionStorage.getItem("ciencias")); //Obtiene los datos almacenados en el cache
        }

        super(mat, preguntas)
    }
}