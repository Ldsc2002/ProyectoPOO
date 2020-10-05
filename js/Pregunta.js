/******************************************************************
Calificaciones.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-09-23

Implementa las preguntas que se le pueden presentar al usuario. 
******************************************************************/

// Clase Pregunta
class Pregunta{

    /*  Atributos   */

    // Array Respuesta: Guarda la respuesta correcta a la pregunta
    // Array pregunta: Guarda Pregunta textual
    // Array incorrect: Array de respuestas erróneas

    /*  Métodos */

    // constructor
    constructor(materia){
        this.materia = materia;
        this.cantidad = 5;

        this.preguntas = JSON.parse(sessionStorage.getItem("matematica"));
        console.log(this.preguntas);
        console.log(this.preguntas[0])
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
       return this.preguntas[x][0];
   }

   // incorrect
   getIncorrect(x){
       return [this.preguntas[x][2], this.preguntas[x][3], this.preguntas[x][4]];
   }

   getSize() {
       return this.cantidad;
   }
}