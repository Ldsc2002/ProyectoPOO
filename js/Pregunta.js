/******************************************************************
Calificaciones.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-10-03

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
    constructor(materia, index){

        if (materia == 1){

            // Se crean arrays para guardar las respuestas y preguntas textuales de las preguntas disponibles
            var respuestas = [2, 9, 1, 5, 28];
            var preguntas = ["4 - 2", "3 x 3", "(7 + 2) - 8", "5 x 1", "7 x 4"];

            // Se asigna respuesta correcta, materia y pregunta según los parámetros dados
            this.pregunta = ("Resuelva la siguiente operación matemática: " + preguntas[index]);
            this.respuesta = respuestas[index];
            

            // Si el parámetro index es 0 (primera pregunta de 5)
            if (index == 0){

                this.incorrect = [3, 5, 6]; // Se asignan las respuestas incorrectas segun la pregunta

            // Si el parámetro index es 1 (segunda pregunta de 5)
            } else if (index == 1){
                
                this.incorrect = [6, 3, 5]; // Se asignan las respuestas incorrectas segun la pregunta

            // Si el parámetro index es 2 (tercera pregunta de 5)
            } else if (index == 2){

                this.incorrect = [3, 9, 8]; // Se asignan las respuestas incorrectas segun la pregunta        

            // Si el parámetro index es 3 (cuarta pregunta de 5)
            } else if (index == 3){

                this.incorrect = [6, 7, 4]; // Se asignan las respuestas incorrectas segun la pregunta
                
            // Si el parámetro index es 4 (quinta pregunta de 5)
            } else {

                this.incorrect = [20, 12, 14]; // Se asignan las respuestas incorrectas segun la pregunta
            }

        } else if (materia == 2){

            // Se crean arrays para guardar las respuestas y preguntas textuales de las preguntas disponibles
            var preguntas = ["El gusano de seda da ______.", "El niño corre ______.", "El avión _____ alto.", "La casa es muy ______.", "El sol está muy _______."];
            var respuestas = ["seda", "rapido", "vuela", "bonita", "lejos"];

            // Se asigna respuesta correcta, materia y pregunta según los parámetros dados
            this.materia = "Lenguaje";
            this.pregunta = ("Complete la siguiente oración\n" + preguntas[index]);
            this.respuesta = respuestas[index];

            // Si el parámetro index es 0 (primera pregunta de 5)
            if (index == 0){

                this.incorrect = ["lana", "risa", "gusanos"]; // Se asignan las respuestas incorrectas segun la pregunta

            // Si el parámetro index es 1 (segunda pregunta de 5)
            } else if (index == 1){
                
                this.incorrect = ["niño", "corre", "bien"]; // Se asignan las respuestas incorrectas segun la pregunta

            // Si el parámetro index es 2 (tercera pregunta de 5)
            } else if (index == 2){

                this.incorrect = ["es", "corre", "flota"]; // Se asignan las respuestas incorrectas segun la pregunta          

            // Si el parámetro index es 3 (cuarta pregunta de 5)
            } else if (index == 3){

                this.incorrect = ["casa", "alegre", "verde"]; // Se asignan las respuestas incorrectas segun la pregunta
                
            } else {

                this.incorrect = ["cerca", "sonriente", "redondo"]; // Se asignan las respuestas incorrectas segun la pregunta
            }

        } else {

            // Se crean arrays para guardar las respuestas y preguntas textuales de las preguntas disponibles
            var respuestas = ["gusto", "estrella", "ovíparo", "herbívoro", "mamífero"];
            var preguntas = ["¿Con que sentido percibimos los sabores?", "Complete la siguiente oración\nEl sol es una _____ muy grande.", "La gallina pone huevos\nentonces esun animal: ", "Si un animal como plantas, entonces es: ", "El perro es un animal: "];

            // Se asigna respuesta correcta, materia y pregunta según los parámetros dados
            this.materia = "Ciencias Naturales";
            this.pregunta = (preguntas[index]);
            this.respuesta = respuestas[index];

            // Si el parámetro index es 0 (primera pregunta de 5)
            if (index == 0){

                this.incorrect = ["vista", "olfato", "tacto"]; // Se asignan las respuestas incorrectas segun la pregunta

            // Si el parámetro index es 1 (segunda pregunta de 5)
            } else if (index == 1){
                
                this.incorrect = ["galaxia", "luz", "constelación"]; // Se asignan las respuestas incorrectas segun la pregunta

            // Si el parámetro index es 2 (tercera pregunta de 5)
            } else if (index == 2){

                this.incorrect = ["ave", "majestuoso", "vivíparo"]; // Se asignan las respuestas incorrectas segun la pregunta           

            // Si el parámetro index es 3 (cuarta pregunta de 5)
            } else if (index == 3){

                this.incorrect = ["carnívoro", "herbívoro", "omnívoro"]; // Se asignan las respuestas incorrectas segun la pregunta
                
            // Si el parámetro index es 4 (quinta pregunta de 5)
            } else {

                this.incorrect = ["mamífero", "ovíparo", "herbívoro"]; // Se asignan las respuestas incorrectas segun la pregunta
            } 
        }
    }

   /* Getters   */

   // materia
   getMateria() {
       return this.materia;
   }

   // respuesta
   getRespuesta(){
       return this.respuesta;
   }

   // pregunta
   getPregunta(){
       return this.pregunta;
   }

   // incorrect
   getIncorrect(){
       return this.incorrect;
   }
}