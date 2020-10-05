/******************************************************************
Validar.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-10-03

Implementa todas las funciones que se comunican con el controlador
para implementar las preguntas y la calificación de las mismas.
******************************************************************/

// Clase Validar
class Validar {

    /*  Atributos   */

    // String materia: identifica la materia
    // array preguntas: guarda las preguntas de la materia
    // int cont_preguntas: Lleva el conteo de las preguntas que se le hacen al usuario.
    // int cont_respuestas: int - lleva el conteo de respuestas correctas que da el usuario.

    /*  Métodos */

    // constructor
    constructor(materia){
        this.preguntas = new Pregunta(materia)

        this.puntos = 0;
        this.respondidas = 0;
        this.materia = this.preguntas.getMateria();

        // Se crean 5 preguntas de la materia correspondiente
        this.cont_preguntas = this.preguntas.getSize();
        //this.cont_preguntas = this.preguntas.getSize(); // Se inicia en 0 el contador de preguntas

    }

    // Método que devuelve un array con: la pregunta, la respuesta correcta y tres respuestas incorrectas de una de las preguntas guardadas en el atributo preguntas
    preguntaList(preg) {

        var pregunta = preg - 1; // Se le resta 1 al parámetro para que esté acorde a la indentación de los arrays
        var ret = []; // array que guardará el retorno

        ret.push(this.preguntas.getPregunta(pregunta)); // Se añade la respuesta de la pregunta corrspondiente a ret
        ret.push(this.preguntas.getRespuesta(pregunta)); // Se añade la respuesta de la pregunta correspondiente a ret

        // Se añaden las 3 respuestas incorrectas de la pregunta correspondiente a ret
        temp = this.preguntas.getIncorrect(pregunta);
        
        for (var i = 0; i < temp.length; i++){
            ret.push(temp[i]);
        }

        return ret; // Se devuelve ret
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
