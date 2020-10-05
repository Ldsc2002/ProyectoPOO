var xmlhttp;
var matematica;

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
                matematica = results.data;
            }
        });
    }
}

xmlhttp.open("GET", "https://docs.google.com/spreadsheets/d/e/2PACX-1vTY9aEURaOJOJd7ZF3g0yE-nbA8HO6rfPjdKJHLp8JGrmJSiz44weM_BtZizodIjhdwtYFpyeiD75C1/pub?output=csv", true);
xmlhttp.send();