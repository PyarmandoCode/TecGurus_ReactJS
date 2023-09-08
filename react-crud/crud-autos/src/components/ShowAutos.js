import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { show_alerta } from '../functions';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const ShowAutos = () => {
    const urlpost = "https://api-cars-jb0r.onrender.com/autos";
    const [autos, setAutos] = useState([]);
    const [auto, setAuto] = useState('');
    const [nombre, setNombre] = useState('');
    const [detalle, setDetalle] = useState('');
    const [precio, setPrecio] = useState('');
    const [imagen, setImagen] = useState('');
    //Las Operaciones que se realizaran en la BD
    const [operation, setOperation] = useState(1);
    //El titulo del Modal
    const [title, setTitle] = useState('');


    useEffect(() => {
        getAutos();
    }, []);

    const getAutos = async () => {
        const respuesta = await axios.get(urlpost);
        setAutos(respuesta.data.Autos);
    }

    //Me Va A Permitir abrir el Modal Para agregar y editar
    const openmodal = (op, id, nombre, detalle, precio, imagen) => {
        setAuto('');
        setNombre('');
        setDetalle('');
        setPrecio('');
        setImagen('');
        setOperation(op);
        if (op === 1) {
            setTitle('Registrar Auto');
        }
        else if (op === 2) {
            setTitle('Editar Auto');
            setAuto(id);
            setNombre(nombre);
            setDetalle(detalle);
            setPrecio(precio);
            setImagen(imagen);

        }

        //Llevar el cursor en el campo indicado en el modal
        window.setTimeout(function () {
            document.getElementById('nombre').focus();
        }, 500)

    }
    //Validar los campos del Form
    const validar = () => {
        let metodo;
        let parametros;
        let url;
        if (nombre.trim() === '') {
            show_alerta('Escriba el Nombre del Auto', 'warning');
        }
        else if (detalle.trim() === '') {
            show_alerta('Escriba el Detalle del Auto', 'warning');
        }
        else if (precio.trim() === '') {
            show_alerta('Escriba el Precio del Auto', 'warning');
        }
        else if (imagen.trim() === '') {
            show_alerta('Escriba el Path de la Imagen del Auto', 'warning');
        }
        else {
            if (operation === 1) {
                parametros = JSON.stringify({
                    detalle: detalle,
                    imagen: imagen,
                    nombre: nombre,
                    precio: precio
                })
                url = urlpost;
                metodo = 'POST';
            }
            else {
                if (operation === 2) {
                    parametros = JSON.stringify({
                        detalle: detalle,
                        imagen: imagen,
                        nombre: nombre,
                        precio: precio
                    })
                    const urlput = "https://api-cars-jb0r.onrender.com/auto/" + auto
                    url = urlput;
                    metodo = 'PUT';

                }
            }
            enviarsolicitud(url, metodo, parametros);
        }

    }

    const enviarsolicitud = async (url, metodo, parametros) => {
        try {
            const response = await fetch(url, {
                method: metodo,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: parametros
            });
            const data = await response.json();
            let msj = data.message;
            show_alerta(msj, 'success');
            if (msj.includes('successfully')) {
                document.getElementById('btncerrar').click();
                getAutos();
            }
        } catch (error) {
            show_alerta('Error en la Solicitud', 'error');
            console.log(error);
        }
    }

    const deleteauto = (id, nombre) => {
        const urldel = "https://api-cars-jb0r.onrender.com/auto/" + id
        let url = urldel;
        let metodo = 'DELETE';
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: '¿Seguro de eliminar el auto' + nombre + '?',
            icon: 'question', text: 'No se puede Dar Marcha Atras Cuidado!!!',
            showCancelButton: true, confirmButtonText: 'Si,eliminar', cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                enviarsolicitud(url, metodo);
            }
            else {
                show_alerta('El Automovil no se pudeo eliminar', 'info');
            }
        })

    }


    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <button onClick={() => openmodal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalAutos' >
                                <i className='fa-solid fa-circle-plus' >Agregar</i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr><th>#</th><th>AUTO</th><th>DETALLE</th><th>PRECIO</th> </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {autos.map((auto, i) => (
                                        <tr key={auto.auto}>
                                            <td>{(i + 1)}</td>
                                            <td>{auto.nombre}</td>
                                            <td>{auto.detalle}</td>
                                            <td>${new Intl.NumberFormat('es-mx').format(auto.precio)}</td>
                                            <td><img src={auto.imagen} alt={auto.nombre} style={{ height: 80, width: 80 }}></img></td>
                                            <td>
                                                <button onClick={() => openmodal(2, auto.auto, auto.nombre, auto.detalle, auto.precio, auto.imagen)} className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalAutos' >
                                                    <i className='fa-solid fa-edit'></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteauto(auto.auto, auto.nombre)} className='btn btn-danger'>
                                                    <i className='fa-solid fa-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/*Este DIV ES PARA EL MODAL */}
            <div id="modalAutos" className='modal fade' aria-hidden='true' >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <label className='h5'>{title}</label>
                            <button type="button" className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
                        </div>

                        <div className='modal-body'>
                            <input type='hidden' id='id'></input>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-car'></i></span>
                                <input type="text" id="nombre" className='form-control' placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}>
                                </input>
                            </div>

                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                                <textarea id="detalle" className='form-control' placeholder='Detalle' value={detalle} onChange={(e) => setDetalle(e.target.value)}  >
                                </textarea>
                            </div>

                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-dollar-sign'></i></span>
                                <input type='number' id="precio" className='form-control' placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)} >
                                </input>
                            </div>

                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-car'></i></span>
                                <input type='text' id="imagen" className='form-control' placeholder='Path Imagen' value={imagen} onChange={(e) => setImagen(e.target.value)} >
                                </input>
                            </div>
                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={() => validar()} className='btn btn-success'>
                                    <i className='fa-solid fa-floppy-disk'>Guardar</i>
                                </button>
                            </div>
                            <div className='modal-footer'>
                                <button type='button' id='btncerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowAutos
