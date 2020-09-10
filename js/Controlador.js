/******************************************************************
Controlador.js
Autor: Luis Santos
Última modificación: 2020-09-09

Implementa todas las funciones que comunican a las otras clases
con el frontend de HTML.
******************************************************************/

"use strict"

class Controlador { //Clase de controlador
    constructor(materia) { //Constructor de la clase
        //Atributos de la clase
        this.val = new Validar(materia); //Nueva instancia de validar
        this.preguntas = []; //Preguntas disponibles
        this.count = 0; //Cuenta de preguntas hechas por el usuario

        for (let i = 1; i < (this.val.getCont_preguntas() + 1); i++) { //Por cada una de las preguntas
            let temp = this.val.preguntaList(i); //Obtiene la pregunta y la copia a temp
            this.preguntas.push(temp); //Añade la pregunta a this.preguntas
        }
    }

    newPregunta() { //Cambia los valores del HTML con los de la pregunta
        if ((this.count + 1) > this.preguntas.length) { //Si ya se respondieron todas las preguntas
            M.toast({html: "Has completado todas las preguntas!"})
        } else{ //Si aun hay preguntas
            let x = this.count; //Copia el valor the this.count
            document.getElementById("preguntaOut").innerHTML = this.preguntas[x][0]; //Obtiene la pregunta
            document.getElementById("materiaOut").innerHTML = this.val.getMateria(); //Obtiene la materia

            let temp = this.preguntas[x].slice(); //Copia la pregunta y sus respuestas al array
            temp.shift(); //Borra el primer valor, que contiene la pregunta

            this.mezclarRespuestas(temp); //Mezcla el array temp

            //Asigna el texto y el valor de cada una de las respuestas a un elemento del HTML
            document.getElementById("Opcion1").innerHTML = temp[0];
            document.getElementById("Radio1").value = temp[0];
            document.getElementById("Opcion2").innerHTML = temp[1];
            document.getElementById("Radio2").value = temp[1];
            document.getElementById("Opcion3").innerHTML = temp[2];
            document.getElementById("Radio3").value = temp[2];
            document.getElementById("Opcion4").innerHTML = temp[3];
            document.getElementById("Radio4").value = temp[3];
                
            this.respuesta = this.preguntas[x][1]; //Asigna la respuesta de la pregunta a this.pregunta
            this.count++; //Suma uno a count
        }
       
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

    checkRespuesta() { //Revisa si la respuesta es correcta y pasa a la siguiente pregunta
        let form = document.getElementsByName("group1"); //Obtiene los elementos del HTML donde estan las respuestas
    
        for (let i = 0; i < form.length; i++) { //Verifica todos los elementos 
            if (form[i].checked) { //Revisa si es la opción seleccionada por el usuario
                if (form[i].value == this.respuesta) { //Revisa si es la respuesta correcta
                    M.toast({html: "Respuesta correcta!"}) 
                    this.newPregunta() //Pasa a la siguiente pregunta
                } else { //Si la respuesta no es correcta
                    M.toast({html: "Respuesta equivocada, vuelve a intentar"})
                }
            }
        }
    }
}