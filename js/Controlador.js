"use strict"

class Controlador {
    constructor(materia) {
        this.val = new Validar(materia);
        this.preguntas = [];
        let x = 1;

        for (let i = 1; i < (this.val.getCont_preguntas() + 1); i++) {
            let temp = this.val.preguntaList(i);
            this.preguntas.push(temp);
        }
    }

    newPregunta(x) {
        console.log(this.preguntas)
        document.getElementById("preguntaOut").innerHTML = this.preguntas[x][0];
        document.getElementById("materiaOut").innerHTML = this.val.getMateria();

        let temp = this.preguntas[x].slice();
        temp.shift();

        this.mezclarRespuestas(temp);

        document.getElementById("Opcion1").innerHTML = temp[0];
        document.getElementById("Radio1").value = temp[0];
        document.getElementById("Opcion2").innerHTML = temp[1];
        document.getElementById("Radio2").value = temp[1];
        document.getElementById("Opcion3").innerHTML = temp[2];
        document.getElementById("Radio3").value = temp[2];
        document.getElementById("Opcion4").innerHTML = temp[3];
        document.getElementById("Radio4").value = temp[3];
            
        return this.preguntas[x][1];
       
    }
    mezclarRespuestas(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
}

var cont, count = 0, respuesta;

function preguntas(mat) {
    cont = new Controlador(mat);
    newPregunta(count);
}

function newPregunta() {
    respuesta = cont.newPregunta(count);
    console.log(respuesta);
    count++;
}

function checkRespuesta() {
    let form = document.getElementsByName("group1");

    for (let i = 0; i < form.length; i++) {
        if (form[i].checked) {
            if (form[i].value == respuesta) {
                M.toast({html: "Respuesta correcta!"})
                newPregunta()
            } else {
                M.toast({html: "Respuesta equivocada, vuelve a intentar"})
            }
        }
    }
}