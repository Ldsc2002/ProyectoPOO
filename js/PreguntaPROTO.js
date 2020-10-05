document.addEventListener('DOMContentLoaded', function() {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vTY9aEURaOJOJd7ZF3g0yE-nbA8HO6rfPjdKJHLp8JGrmJSiz44weM_BtZizodIjhdwtYFpyeiD75C1/pub?output=csv", {
        download: true,
        complete: function(results) {
            console.log(results);
        }
    });
});