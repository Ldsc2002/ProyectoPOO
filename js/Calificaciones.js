class Calificaciones {
    getCalificaciones() {
        matematica = window.localStorage.getItem("resMat");
        lenguaje = window.localStorage.getItem("resLen");
        ciencia = window.localStorage.getItem("resCie");
        result = [0, 0, 0];

        if (window.localStorage.getItem("resMat") != null) {
            result[0] = matematica;
        }
        //TODO
        return result;
    }

    setCalificacion(materia, nota) {
        if (materia == 1) {
            window.localStorage.setItem("resMat", nota);
        }
    } //TODO

}