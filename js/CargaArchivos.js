class CargaArchivos {
    constructor() {
        var xmlhttp;
        let materia = 1;

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

                        if (materia == 1){
                            for (var i = 0; i < this.preguntas.length; i++) {
                                let temp = this.preguntas[i][0]
                                this.preguntas[i][0] = ("Resuelva la siguiente operación matemática: " + temp);
                
                            }
                        }
                        sessionStorage.setItem("matematica", this.preguntas)

                    }
                });
            }
        }
    xmlhttp.open("GET", "db/matematica.csv", true);
    xmlhttp.send();
        
    }
}