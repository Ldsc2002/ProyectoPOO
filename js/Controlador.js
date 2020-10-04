/******************************************************************
Controlador.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-10-03

Implementa todas las funciones que comunican a las otras clases
con el frontend de HTML.
******************************************************************/

"use strict"

let cont; //Instancia del controlador

document.addEventListener('DOMContentLoaded', function() { //Espera a que la página termine de cargar y crea una instancia del controlador
    cont = new Controlador(); //Crea una nueva instancia del controlador
});

class Controlador { //Clase de controlador
    cal = new Calificaciones();

    constructor() { //Constructor de la clase
        //Inicializa los elementos de la página web

        var elems = document.querySelectorAll('.sidenav'); //Navegación movil
        var instances = M.Sidenav.init(elems);
    
        var elems = document.querySelectorAll('.collapsible'); //Colapsable
        var instances = M.Collapsible.init(elems);

        if ('serviceWorker' in navigator) { //Revisa que el navegador sea compatible con serviceWorkers
            navigator.serviceWorker.register("./service-worker.js"); //Registra el serviceWorker de la PWA
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
        if (this.count == this.preguntas.length) { //Si ya se respondieron todas las preguntas
            document.getElementById("preguntaOut").innerHTML = "Felicidades! Tu nota es " + this.val.notaTotal(); //Mensaje al finalizar el juego
            document.getElementById("materiaOut").innerHTML = "Has completado todas las preguntas! Selecciona otra materia para seguir aprendiendo"; 
            this.setCalificacion(this.val.notaTotal()); //Obteniene la nota y la almacena
            this.count++;
        } else if (this.count < this.preguntas.length) { //Si aun hay preguntas
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
            this.puntos = 100;
            this.count++; //Suma uno a count
        } else {
            M.toast({html: "Ya has completado todas las preguntas"})
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
                    M.toast({html: "Respuesta correcta!"});
                    this.val.sumarPuntaje(this.puntos); //Añade el puntaje de la pregunta al puntaje total
                    this.newPregunta() //Pasa a la siguiente pregunta
                } else { //Si la respuesta no es correcta
                    M.toast({html: "Respuesta equivocada, vuelve a intentar"});
                    this.puntos = (this.puntos/2); //Reduce el puntaje de la pregunta a la mitad cada vez que se equivoca
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

        if (load == "#results") { //Si navega a la pagina de calificaciones
            this.loadCalificaciones(); //Carga las calificaciones
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
        }
    }

    setCalificacion(nota) { //Toma el argumento nota que debe guardar
        this.cal.setCalificacion(this.materia, nota); //Guarda la calificación
    }
}