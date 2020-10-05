var file = new File(["matematica"], "../db/matematica.csv")

document.addEventListener('DOMContentLoaded', function() {
    Papa.parse(file, {
        complete: function(results) {
            console.log("Finished:", results);
        }
    });
});