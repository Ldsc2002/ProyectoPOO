class ValidarMC extends Validar {

    /*  Atributos   */

    // String materia: identifica la materia
    // Pregunta preguntas: Objeto de la clase pregunta que contiene las preguntas de una materia
    // int cont_preguntas: Lleva el conteo de las preguntas que se le hacen al usuario.
    // int puntos: Puntos totales del usuario
    // int respondidas: Preguntas resueltas por el usuario

    /*  Métodos */

    // constructor
    constructor(materia){
        console.log("Instancia creada")
        super(preguntas) = new PreguntaMultipleChoice(materia); //Crea una nueva instancia de preguntan
        super(puntos) = 0; 
        super(respondidas) = 0;
        super(materia) = super(preguntas).getMateria(); //Asigna el nombre de la materia
        super(cont_preguntas) = super(preguntas).getSize(); //Obtiene la cantidad de preguntas

    }

    // Método que devuelve un array con: la pregunta, la respuesta correcta y tres respuestas incorrectas de una de las preguntas guardadas en el atributo preguntas
    preguntaList(preg) {
        var pregunta = preg - 1; // Se le resta 1 al parámetro para que esté acorde a la indentación de los arrays
        var ret = []; // array que guardará el retorno

        ret.push(super(preguntas).getPregunta(pregunta)); // Se añade la respuesta de la pregunta corrspondiente a ret
        ret.push(super(preguntas).getRespuesta(pregunta)); // Se añade la respuesta de la pregunta correspondiente a ret

        // Se añaden las 3 respuestas incorrectas de la pregunta correspondiente a ret
        let temp = super(preguntas).getIncorrect(pregunta);
        
        for (var i = 0; i < temp.length; i++){
            ret.push(temp[i]);
        }

        return ret; // Se devuelve ret
    }
}