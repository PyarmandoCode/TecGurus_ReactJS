import Swal from "sweetalert2";
//Esta Libreria permite ejecutar sweetalert con react
import withReactContent from "sweetalert2-react-content";

//Vamos a crear una funcion que nos va a permitir mostrar alertas de sweetalert

export function show_alerta(mensaje, icono, foco = '') {
    onfocus(foco);
    const MySwal = withReactContent(Swal);
    MySwal.fire({
        title: mensaje,
        icon: icono
    });

}

function onfocus(foco) {
    if (foco !== '') {
        document.getElementById(foco).focus();
    }
}