class Pregunta {
    constructor(mat, preguntas) {
        this.materia = mat;
        this.preguntas = preguntas;
        this.cantidad = preguntas.length; // cantidad de preguntas
    }

    getMateria() {
        return this.materia;
    }

    // respuesta
    getRespuesta(x){
        return this.preguntas[x][1];
    }

    // pregunta
    getPregunta(x){
        return (this.preguntas[x][0]);
    }

    // incorrect
    getIncorrect(x){
        return [this.preguntas[x][2], this.preguntas[x][3], this.preguntas[x][4]];
    }

    // size
    getSize() {
        return this.cantidad;
    }

}