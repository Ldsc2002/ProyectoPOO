let data;

document.addEventListener('DOMContentLoaded', function() {
    Papa.parse("../db/matematica.csv", {
        complete: function(results) {
            console.log("Finished:", results);
        }
    });
});