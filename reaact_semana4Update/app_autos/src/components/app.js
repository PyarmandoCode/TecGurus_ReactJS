import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const ApiComponent = () => {
    const [autos, setautos] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    //Ciclo de Vida del componente

    useEffect(() => {
        async function cargarAutosApi() {
            try {
                const resp = await fetch('https://api-cars-jb0r.onrender.com/autos');
                //console.log(await resp.json());
                const data = await resp.json()
                setIsLoaded(true);
                setautos(data.Autos);


            } catch (error) {
                setIsLoaded(true);
                setError(error);

            }
        }
        cargarAutosApi();
    }, [])


    if (error) {
        return <>{error.message}</>
    } else if (!isLoaded) {
        return <><h1>Estamos Preparando Todo</h1></>
    } else {
        return (
            <div className="container">
                <div className="row">
                    {autos.map((item) => (
                        <div className="col-md-4" key={item.auto}>
                            <Card style={{ width: '18erm' }}>
                                <Card.Img variant="top" src={item.imagen} alt={item.nombre} />
                                <Card.Body>
                                    <Card.Title>Modelo:  {item.nombre}</Card.Title>
                                    <Card.Text>Precio: {item.precio}</Card.Text>
                                    <Button variant="primary">Verd Dettale</Button>
                                </Card.Body>

                            </Card>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}
export default ApiComponent;