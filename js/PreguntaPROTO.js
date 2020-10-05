var xmlhttp;
var file;

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
                file = results;
            }
        });
    }
}

xmlhttp.open("GET", "db/matematica.csv", true);
xmlhttp.send();