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
        var xmlhttp;
        
        if (window.XMLHttpRequest) { // IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp.responseText;
        
                Papa.parse(text, {
                    complete: function(results) {
                        console.log("Finished:", results);
                        this.preguntas = results.data;
                        this.cantidad = results.data.length;

                        if (materia == 1){
                            for (var i = 0; i < this.preguntas.length; i++) {
                                let temp = this.preguntas[i][0]
                                this.preguntas[i][0] = ("Resuelva la siguiente operación matemática: " + temp);
                
                            }
                        }
                    }
                });
            }
        }

        if (materia == 1){
            xmlhttp.open("GET", "db/matematica.csv", true);
            xmlhttp.send();

            this.materia = "Matemática";
        }
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