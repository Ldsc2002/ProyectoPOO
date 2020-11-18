/******************************************************************
Pregunta.js
Autores:
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212
- José Díaz: 20396

Última modificación: 2020-11-4

Clase Pregunta, sirve como una base para que se puedan implementar
diferentes tipos de preguntas. Se utiliza como una clase abstracta,
ya que nunca se instancia.
******************************************************************/

//Clase abstracta Pregunta
class Pregunta {
    constructor(mat, preguntas) { //Constructor de la clase
        if (this.constructor == Pregunta) {
            throw new Error("No se puede instanciar una clase abstracta.")
        } else {
            this.materia = mat; //Define la materia
            this.preguntas = preguntas; //Define las preguntas
            this.cantidad = preguntas.length; //Cantidad de preguntas
        }
    }

    getMateria() { //Devuelve la materia
        return this.materia;
    }

    getRespuesta(x){ //Método abstracto, devuelve la respuesta
        throw new Error ("El método getRespuesta() debe ser implementado")
    }

    getPregunta(x){ //Método abstracto, devuelve la pregunta
        throw new Error ("El método getPregunta() debe ser implementado")
    }

    getIncorrect(x){ //Método abstracto, devuelve las preguntas incorrectas
        throw new Error ("El método getIncorrect() debe ser implementado")
    }

    getSize() { //Devuelve la cantidad de preguntas
        return this.cantidad;
    }

}
