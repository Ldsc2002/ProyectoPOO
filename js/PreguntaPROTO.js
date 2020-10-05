var file;

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("text/csv");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}



document.addEventListener('DOMContentLoaded', function() {
    
    readTextFile("../db/matematica.csv", function(text){
        file = JSON.parse(text);
        console.log(file);

        Papa.parse(file, {
            complete: function(results) {
                console.log("Finished:", results);
            }
        });
    });
});