/******************************************************************
Calificaciones.js
Autores: 
- Luis Santos: 20226
- Paola Contreras: 20213
- Jóse Lucero: 20306
- Diego Córdova: 20212

Última modificación: 2020-09-23

Implementa el almacenamiento de las calificaciones obtenidas por
el usuario.
******************************************************************/

class Calificaciones { 
    getCalificaciones() { //Devuelve las calificaciones
        let matematica = window.localStorage.getItem("resMat"); //Calificacion de matematica
        let lenguaje = window.localStorage.getItem("resLen"); //Calificacion de lenguaje
        let ciencia = window.localStorage.getItem("resCie"); //Calificacion de ciencia
        let result = [0, 0, 0];

        if (window.localStorage.getItem("resMat") != null) { //Verifica que haya algo almacenado
            result[0] = matematica; 
        }
        
        if (window.localStorage.getItem("resLen") != null) { //Verifica que haya algo almacenado
            result[1] = lenguaje;
        }

        if (window.localStorage.getItem("resCie") != null) { //Verifica que haya algo almacenado
            result[2] = ciencia;
        }

        return result; //Devuelve las calificaciones
    }

    setCalificacion(materia, nota) { //Guarda la calificación de una materia
        if (materia == 1) { //Si es matematica
            window.localStorage.setItem("resMat", nota);
        } else if (materia == 2) { //Si es lenguaje
            window.localStorage.setItem("resLen", nota);
        } else if (materia == 3) { //Si es ciencia
            window.localStorage.setItem("resCie", nota);
        }
    }
}