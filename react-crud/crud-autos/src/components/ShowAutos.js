import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { show_alerta } from '../functions';

const ShowAutos = () => {
    const url = "https://api-cars-jb0r.onrender.com/autos";
    const [autos, setAutos] = useState([]);
    useEffect(() => {
        getAutos();
    }, []);

    const getAutos = async () => {
        const respuesta = await axios.get(url);
        setAutos(respuesta.data.Autos);
    }


    return (
        <div className='App'>
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <button className='btn btn-dark' >
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
                                            <td>{auto.precio}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default ShowAutos
