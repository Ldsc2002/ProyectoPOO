var array = [];
var xmlhttp;
if (window.XMLHttpRequest) { // IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
} else { // IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var text = xmlhttp.responseText;
        // Now convert it into array using regex
        array = text.split(/\n|\r/g);
    }
}
xmlhttp.open("GET", "https://docs.google.com/spreadsheets/d/e/2PACX-1vRi0TErB19VVDtMywTl3CjNweMuABO7Ot25_x0C2MMqgfHPohJerAkBGAf6aS0T94xZ6-9WDLLcmTJ1/pub?output=csv", true);
xmlhttp.send();
