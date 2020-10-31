class Validar {
    constructor(){
        if (this.constructor == Validar) {
            throw new Error ("La clase abstracta no se puede instanciar");
        }
    }

    // Método que devuelve un array con: la pregunta, la respuesta correcta y tres respuestas incorrectas de una de las preguntas guardadas en el atributo preguntas
    preguntaList() {
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