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
xmlhttp.open("GET", "data.csv", true);
xmlhttp.send();
console.log(xmlhttp.responseText);
console.log(array);

