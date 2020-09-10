/******************************************************************
Controlador.js
Autor: Luis Santos
Última modificación: 2020-09-09

Implementa todas las funciones que comunican a las otras clases
con el frontend de HTML.
******************************************************************/

"use strict"

class Controlador { //Clase de controlador
    constructor(materia) {
        this.val = new Validar(materia);
        this.preguntas = [];
        this.count = 0;
        let x = 1;

        for (let i = 1; i < (this.val.getCont_preguntas() + 1); i++) {
            let temp = this.val.preguntaList(i);
            this.preguntas.push(temp);
        }
    }

    newPregunta() {
        if ((this.count + 1) > this.preguntas.length) {
            M.toast({html: "Has completado todas las preguntas!"})
        } else{
            let x = this.count;
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
                
            this.respuesta = this.preguntas[x][1];
            this.count++;
        }
       
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

    checkRespuesta() {
        let form = document.getElementsByName("group1");
    
        for (let i = 0; i < form.length; i++) {
            if (form[i].checked) {
                if (form[i].value == this.respuesta) {
                    M.toast({html: "Respuesta correcta!"})
                    this.newPregunta()
                } else {
                    M.toast({html: "Respuesta equivocada, vuelve a intentar"})
                }
            }
        }
    }
}