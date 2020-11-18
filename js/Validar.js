/******************************************************************
Validar.js
Autores:
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212
- José Díaz: 20396

Última modificación: 2020-11-4

Implementa todas las funciones que se comunican con el controlador
para implementar las preguntas y la calificación de las mismas.
Se utiliza como una clase abstracta, ya que nunca se instancia.
******************************************************************/

class Validar { //Clase abstracta validar
    constructor(preguntas){
        if (this.constructor == Validar) {
            throw new Error("No se puede instanciar una clase abstracta.")
        } else {
            this.preguntas = preguntas; //Preguntas
            this.puntos = 0;
            this.respondidas = 0;
            this.materia = this.preguntas.getMateria(); //Asigna el nombre de la materia
            this.cont_preguntas = this.preguntas.getSize(); //Obtiene la cantidad de preguntas
        }
    }

    //La manera en la que da la pregunta puede variar, el método no esta definido
    preguntaList() { //Se debe sobreescribir el método en la clase que extiende a validar
        throw new Error ("El método preguntaList() debe ser implementado")
    }

    mezclarRespuestas(array) { //Mezcla un array para randomizar las posiciones de las respuestas
        var currentIndex = array.length, temporaryValue, randomIndex;

        // Mientras hay elementos que mezclar
        while (0 !== currentIndex) {

          // Toma uno de los elementos restantes
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // Lo cambia por otro de los elementos
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array; //Devuelve un array mezclado
    }

    //Método para guardar el puntaje por pregunta
    sumarPuntaje(puntos){
        this.puntos = this.puntos + puntos; //Suma el puntaje de la pregunta al total
        this.respondidas++; //Suma uno a la cantidad de preguntas
    }

    //Devuelve la nota del usuario
    notaTotal() {
        let resultado = this.puntos/this.respondidas; //Saca el promedio de la nota
        return parseInt(resultado); //Devuelve la nota como numero entero
    }

    /*  Getters */

    // materia
    getMateria() {
        return this.materia;
    }

    // cont_preguntas
    getCont_preguntas() {
        return this.cont_preguntas;
    }
}
