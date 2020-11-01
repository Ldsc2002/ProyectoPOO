/******************************************************************
Pregunta.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-10-31

Clase Pregunta, sirve como una base para que se puedan implementar
diferentes tipos de preguntas. Se utiliza como una clase abstracta,
ya que nunca se instancia.
******************************************************************/

//Clase Pregunta
class Pregunta {
    constructor(mat, preguntas) { //Constructor de la clase
        this.materia = mat; //Define la materia
        this.preguntas = preguntas; //Define las preguntas
        this.cantidad = preguntas.length; //Cantidad de preguntas
    }

    getMateria() { //Devuelve la materia
        return this.materia;
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

    getSize() { //Devuelve la cantidad de preguntas
        return this.cantidad;
    }

}