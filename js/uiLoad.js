/******************************************************************
uiLoad.js
Autor: Luis Santos
Última modificación: 2020-09-09

Implementa todas las funciones que se encargan de la navegación en
la Single Page Application. También inicializa los componentes de 
materialize.
******************************************************************/

"use strict";

//Inicializa materialize
document.addEventListener('DOMContentLoaded', function() { //Espera a que la página termine de cargar
    var elems = document.querySelectorAll('.sidenav'); //Navegación movil
    var instances = M.Sidenav.init(elems);

    var elems = document.querySelectorAll('.collapsible'); //Colapsable
    var instances = M.Collapsible.init(elems);
});

function navigatePage(load) { //Navega a otra página
    let current = ["#main", "#help", "#questions"]; //Lista de las páginas en la app
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

    console.log(load + " from " + current); //Mensaje de consola
}

