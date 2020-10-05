class CargaArchivos {
    constructor() {
        var xmlhttp;
        let preguntas;

        if (window.XMLHttpRequest) { // IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp.responseText;
        
                Papa.parse(text, {
                    complete: function(results) {
                        console.log("Finished:", results);
                        preguntas = results.data;

                        for (var i = 0; i < preguntas.length; i++) {
                            let temp = preguntas[i][0]
                            preguntas[i][0] = ("Resuelva la siguiente operación matemática: " + temp);
                        }
                        sessionStorage.setItem("matematica", JSON.stringify(preguntas))
                    }
                });
            }
        }

        xmlhttp.open("GET", "db/matematica.csv", true);
        xmlhttp.send();

        if (window.XMLHttpRequest) { // IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp.responseText;
        
                Papa.parse(text, {
                    complete: function(results) {
                        console.log("Finished:", results);
                        preguntas = results.data;

                        for (var i = 0; i < preguntas.length; i++) {
                            let temp = preguntas[i][0]
                            preguntas[i][0] = ("Complete la siguiente oración: " + temp);
                        }
                        sessionStorage.setItem("lenguaje", JSON.stringify(preguntas))
                    }
                });
            }
        }

        xmlhttp.open("GET", "db/lenguaje.csv", true);
        xmlhttp.send();

        if (window.XMLHttpRequest) { // IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else { // IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var text = xmlhttp.responseText;
        
                Papa.parse(text, {
                    complete: function(results) {
                        console.log("Finished:", results);
                        preguntas = results.data;

                        for (var i = 0; i < preguntas.length; i++) {
                            let temp = preguntas[i][0]
                            preguntas[i][0] = (temp);
                        }
                        sessionStorage.setItem("ciencias", JSON.stringify(preguntas))
                    }
                });
            }
        }
        
        xmlhttp.open("GET", "db/ciencias.csv", true);
        xmlhttp.send();

    }
}