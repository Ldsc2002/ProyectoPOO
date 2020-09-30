class Calificaciones {
    getCalificaciones() {
        let matematica = window.localStorage.getItem("resMat");
        let lenguaje = window.localStorage.getItem("resLen");
        let ciencia = window.localStorage.getItem("resCie");
        let result = [0, 0, 0];

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
        console.log(result)
        return result;
    }

    setCalificacion(materia, nota) {
        if (materia == 1) {
            window.localStorage.setItem("resMat", nota);
        } else if (materia == 2) {
            window.localStorage.setItem("resLen", nota);
        } else if (materia == 3) {
            window.localStorage.setItem("resCie", nota);
        }
    } //TODO probar funcionalidad
}