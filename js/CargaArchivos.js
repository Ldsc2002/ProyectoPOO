/******************************************************************
Controlador.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-10-05

Implementa la apertura de archivos cuando el usuario carga la
página web y almacena los datos en el cache para que se puedan 
accesar rápidamente cuando sea necesario. Utiliza PapaParse para
procesar los datos de los archivos CSV.
******************************************************************/

class CargaArchivos {
    constructor() { //Constructor de la clase
        var xmlhttp;
        let preguntas;

        if (window.XMLHttpRequest) { //Verificar compatibilidad 
            xmlhttp = new XMLHttpRequest();
        } else { //En caso de que el usuario este usando una versión incompatible
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //Método legacy
        }
        
        xmlhttp.onreadystatechange = function() { //Verifica que la página este lista para carga el archivo
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp.responseText;
        
                Papa.parse(text, { //Procesa los datos com PapaParse
                    complete: function(results) {
                        console.log("Finished:", results);
                        preguntas = results.data;

                        for (var i = 0; i < preguntas.length; i++) { //Se repite para cada pregunta
                            let temp = preguntas[i][0]
                            preguntas[i][0] = ("Resuelva la siguiente operación matemática: " + temp);
                        }
                        sessionStorage.setItem("matematica", JSON.stringify(preguntas)) //Almacena los datos en cache
                    }
                });
            }
        }

        xmlhttp.open("GET", "db/matematica.csv", true); //Procesar archivo matematica.csv
        xmlhttp.send(); //Manda la solucitud

        if (window.XMLHttpRequest) { //Verificar compatibilidad 
            xmlhttp = new XMLHttpRequest();
        } else { //En caso de que el usuario este usando una versión incompatible
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //Método legacy
        }
        
        xmlhttp.onreadystatechange = function() { //Verifica que la página este lista para carga el archivo
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp.responseText;
        
                Papa.parse(text, { //Procesa los datos com PapaParse
                    complete: function(results) {
                        console.log("Finished:", results);
                        preguntas = results.data;

                        for (var i = 0; i < preguntas.length; i++) { //Se repite para cada pregunta
                            let temp = preguntas[i][0]
                            preguntas[i][0] = ("Complete la siguiente oración: " + temp);
                        }
                        sessionStorage.setItem("lenguaje", JSON.stringify(preguntas)) //Almacena los datos en cache
                    }
                });
            }
        }

        xmlhttp.open("GET", "db/lenguaje.csv", true); //Procesar archivo lenguaje.csv
        xmlhttp.send(); //Manda la solicitud

        if (window.XMLHttpRequest) { //Verificar compatibilidad 
            xmlhttp = new XMLHttpRequest();
        } else { //En caso de que el usuario este usando una versión incompatible
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //Método legacy
        }
        
        xmlhttp.onreadystatechange = function() { //Verifica que la página este lista para carga el archivo
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp.responseText;
        
                Papa.parse(text, { //Procesa los datos com PapaParse
                    complete: function(results) {
                        console.log("Finished:", results);
                        preguntas = results.data;

                        for (var i = 0; i < preguntas.length; i++) { //Se repite para cada pregunta
                            let temp = preguntas[i][0]
                            preguntas[i][0] = (temp);
                        }
                        sessionStorage.setItem("ciencias", JSON.stringify(preguntas)) //Almacena los datos en cache
                    }
                });
            }
        }
        
        xmlhttp.open("GET", "db/ciencias.csv", true); //Procesar el archivo ciencias.csv
        xmlhttp.send(); //Manda la solicitud

    }
}