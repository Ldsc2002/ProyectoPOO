class Calificaciones {
    getCalificaciones() {
        matematica = window.localStorage.getItem("resMat");
        lenguaje = window.localStorage.getItem("resLen");
        ciencia = window.localStorage.getItem("resCie");
        result = [0, 0, 0];

        if (window.localStorage.getItem("resMat") != null) {
            result[0] = matematica;
        }
        
        if (window.localStorage.getItem("resLen") != null) {
            result[1] = lenguaje;
        }

        if (window.localStorage.getItem("resCie") != null) {
            result[2] = ciencia;
        }
        //TODO probar funcionalidad
        return result;
    }

    setCalificacion(materia, nota) {
        if (materia == 1) {
            window.localStorage.setItem("resMat", nota);
        }
    } //TODO

}