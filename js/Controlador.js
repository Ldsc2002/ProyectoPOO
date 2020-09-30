/******************************************************************
Controlador.js
Autor: Luis Santos
Última modificación: 2020-09-09

Implementa todas las funciones que comunican a las otras clases
con el frontend de HTML.
******************************************************************/

"use strict"

let cont;

document.addEventListener('DOMContentLoaded', function() { //Espera a que la página termine de cargar y crea una instancia del controlador
    cont = new Controlador();
});

class Controlador { //Clase de controlador
    cal = new Calificaciones();

    constructor() {
        var elems = document.querySelectorAll('.sidenav'); //Navegación movil
        var instances = M.Sidenav.init(elems);
    
        var elems = document.querySelectorAll('.collapsible'); //Colapsable
        var instances = M.Collapsible.init(elems);

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                     .register("./service-worker.js");
          }
    }

    asignarMateria(materia) { //Constructor de la clase
        //Atributos de la clase
        this.val = new Validar(materia); //Nueva instancia de validar
        this.materia = materia;
        this.preguntas = []; //Preguntas disponibles
        this.count = 0; //Cuenta de preguntas hechas por el usuario

        for (let i = 1; i < (this.val.getCont_preguntas() + 1); i++) { //Por cada una de las preguntas
            let temp = this.val.preguntaList(i); //Obtiene la pregunta y la copia a temp
            this.preguntas.push(temp); //Añade la pregunta a this.preguntas
        }

        this.newPregunta();
    }

    newPregunta() { //Cambia los valores del HTML con los de la pregunta
        if ((this.count + 1) > this.preguntas.length) { //Si ya se respondieron todas las preguntas
            document.getElementById("preguntaOut").innerHTML = "Felicidades!"; //Mensaje al finalizar el juego
            document.getElementById("materiaOut").innerHTML = "Has completado todas las preguntas! Ahora regresarás a la página principal"; 
            this.setCalificacion(100); //TODO obtener nota
            setTimeout(this.navigatePage("#main"), 50000)
        } else{ //Si aun hay preguntas
            let x = this.count; //Copia el valor de this.count
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

    navigatePage(load) { //Navega a otra página
        let current = ["#main", "#help", "#questions", "#results"]; //Lista de las páginas en la app
        let navigateTo = document.querySelector(load); //Elemento destino
        let navigateIndex = current.findIndex(function(element) { //Elemento actual
            return element === load;
        });
    
        current.splice(navigateIndex, 1); //Quita el actual de la lista
    
        for (let i=0; i < current.length; i++) { //Por todas las páginas menos la actual
            let currentPage = document.querySelector(current[i]); //Selecciona el elemento que coincide con ese ID
    
            currentPage.classList.add("pageOut"); //Añade la clase pageOut
            currentPage.classList.remove("pageIn"); //Quita la clase pageIn
    
            setTimeout(navigateCurrent, 500); //Espera 500ms para llamar a navigateCurrent
    
            function navigateCurrent() {
            currentPage.setAttribute("style", "display:none"); //Esconde el elemento
            }
        }
    
        setTimeout(navigate, 500); //Espera 500ms para llamar a navigate
    
        function navigate() { //Navega a la nueva página
            navigateTo.setAttribute("style", "display:block"); //Hace visible el elemento
            navigateTo.classList.add("pageIn"); //Añade la clase pageIn
            navigateTo.classList.remove("pageOut"); //Quita la clase pageOut
        }

        if (load == "#results") {
            this.loadCalificaciones();
        }
    }

    loadCalificaciones() {
        let resultados = this.cal.getCalificaciones();

        if(resultados[0] != 0) {
            document.getElementById("resMat").innerHTML = resultados[0];
        }

        if(resultados[1] != 0) {
            document.getElementById("resLan").innerHTML = resultados[1];
        }

        if(resultados[2] != 0) {
            document.getElementById("resCie").innerHTML = resultados[3];
        } //TODO probar funcionalidad
    }

    setCalificacion(nota) {
        this.cal.setCalificacion(this.materia, nota);
        console.log(this.materia, nota)
        //TODO probar funcionalidad
    }
}