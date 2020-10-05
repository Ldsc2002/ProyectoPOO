var file;
var xmlhttp;

if (window.XMLHttpRequest) { // IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else { // IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var text = xmlhttp.responseText;
        console.log(text)

        Papa.parse(text, {
            complete: function(results) {
                console.log("Finished:", results);
            }
        });
    }
}

xmlhttp.open("GET", "data.csv", true);
xmlhttp.send();