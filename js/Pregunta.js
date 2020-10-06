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
class Pregunta{

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

        if (materia = 1) {

            this.materia = "Matemática"
            this.preguntas = JSON.parse(sessionStorage.getItem("matematica")); //Obtiene los datos almacenados en el cache

        } else if (materia = 2) {

            this.materia = "Lenguaje";
            this.preguntas = JSON.parse(sessionStorage.getItem("lenguaje")); //Obtiene los datos almacenados en el cache

        } else if (materia = 3) {

            this.materia = "Ciencias";
            this.preguntas = JSON.parse(sessionStorage.getItem("ciencias")); //Obtiene los datos almacenados en el cache
        }

        this.cantidad = this.preguntas.length; // cantidad de preguntas
    }

   /* Getters   */

   // materia
   getMateria() {
       return this.materia;
   }

   // respuesta
   getRespuesta(x){
       return this.preguntas[x][1];
   }

   // pregunta
   getPregunta(x){
       return (this.preguntas[x][0]);
   }

   // incorrect
   getIncorrect(x){
       return [this.preguntas[x][2], this.preguntas[x][3], this.preguntas[x][4]];
   }

   // size
   getSize() {
       return this.cantidad;
   }
}