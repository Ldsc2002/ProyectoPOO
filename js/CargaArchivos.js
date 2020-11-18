/******************************************************************
CargaArchivos.js
Autores:
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212
- José Díaz: 20396

Última modificación: 2020-10-05

Implementa la apertura de archivos cuando el usuario carga la
página web y almacena los datos en el cache para que se puedan
accesar rápidamente cuando sea necesario. Utiliza PapaParse para
procesar los datos de los archivos CSV.
******************************************************************/

class CargaArchivos {
    constructor() { //Constructor de la clase
        var xmlhttp1, xmlhttp2, xmlhttp3, xmlhttp4;
        let preguntas;

        if (window.XMLHttpRequest) { //Verificar compatibilidad
            xmlhttp1 = new XMLHttpRequest();
            xmlhttp2 = new XMLHttpRequest();
            xmlhttp3 = new XMLHttpRequest();
            xmlhttp4 = new XMLHttpRequest();
        } else { //En caso de que el usuario este usando una versión incompatible
            xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP"); //Método legacy
            xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP"); //Método legacy
            xmlhttp3 = new ActiveXObject("Microsoft.XMLHTTP"); //Método legacy
            xmlhttp4 = new ActiveXObject("Microsoft.XMLHTTP"); //Método Legacy
        }

        xmlhttp1.onreadystatechange = function() { //Verifica que la página este lista para carga el archivo
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp1.responseText;

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

        xmlhttp2.onreadystatechange = function() { //Verifica que la página este lista para carga el archivo
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp2.responseText;

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

        xmlhttp3.onreadystatechange = function() { //Verifica que la página este lista para carga el archivo
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp3.responseText;

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

        xmlhttp4.onreadystatechange = function() { //Verifica que la página este lista para carga el archivo
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp4.responseText;

                Papa.parse(text, { //Procesa los datos com PapaParse
                    complete: function(results) {
                        console.log("Finished:", results);
                        preguntas = results.data;

                        for (var i = 0; i < preguntas.length; i++) { //Se repite para cada pregunta
                            let temp = preguntas[i][0]
                            preguntas[i][0] = ("Complete la siguiente oración sobre geografía: " + temp);
                        }
                        sessionStorage.setItem("sociales", JSON.stringify(preguntas)) //Almacena los datos en cache
                    }
                });
            }
        }

        xmlhttp1.open("GET", "db/matematica.csv", true); //Procesar archivo matematica.csv
        xmlhttp1.send(); //Manda la solucitud

        xmlhttp2.open("GET", "db/lenguaje.csv", true); //Procesar archivo lenguaje.csv
        xmlhttp2.send(); //Manda la solicitud

        xmlhttp3.open("GET", "db/ciencias.csv", true); //Procesar el archivo ciencias.csv
        xmlhttp3.send(); //Manda la solicitud

        xmlhttp4.open("GET", "db/sociales.csv", true); //Procesar el archivo sociales.csv

    }
}
