"use strict"

function newPreguntas(materia) {
    var val = new Validar(materia)

    var temp = val.preguntaList(0);

    document.getElementById("preguntaOut").innerHTML = temp[0] 

}