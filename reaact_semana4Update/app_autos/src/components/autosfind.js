import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function Posts() {
    const [APIData, setAPIData] = useState([]);
    const [filterdResults, setFilterdResults] = useState([]);
    const [searchInput, setsearchInput] = useState('');


    useEffect(() => {
        async function cargarAutosApi() {
            const resp = await fetch('https://api-cars-jb0r.onrender.com/autos')
            const data = await resp.json();
            setAPIData(data.Autos);
        }
        cargarAutosApi();
    }, [])

    const searchItems = (searchValue) => {
        setsearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
            })
            //Como lo voy a Filtrar
            setFilterdResults(filteredData);
        }
        else {
            //Como me lo trae la API
            setFilterdResults(APIData);
        }
    }
    return (
        <div style={{ padding: 20 }}>
            Busca tu Auto
            <div className='container'>
                <input icon="search"
                    placeholder='Search..'
                    onChange={(e) => searchItems(e.target.value)}
                />
            </div>
            <div className='container'>
                <div className='row' style={{ padding: '2rem' }}>
                    {searchInput.length > 1 ? (
                        filterdResults.map((item) => {
                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant='top' src={item.imagen} alt={item.nombre} />
                                    <Card.Body>
                                        <Card.Title>{item.nombre}</Card.Title>
                                        <Card.Text>{item.detalle}</Card.Text>
                                        <Button variant='primary'>Ver Detalle</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })

                    ) : (
                        APIData.map((item) => {
                            return (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant='top' src={item.imagen} alt={item.nombre} />
                                    <Card.Body>
                                        <Card.Title>{item.nombre}</Card.Title>
                                        <Card.Text>{item.detalle}</Card.Text>
                                        <Button variant='primary'>Ver Detalle</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    )}
                </div>
            </div>
        </div>
    )
}
