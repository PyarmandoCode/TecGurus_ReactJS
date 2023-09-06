import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react';

export default function Posts() {
    const [APIData, setAPIData] = useState([]);
    const [filterdResults, setFilterdResults] = useState([]);
    const [searchInput, setsearchInput] = useState('');

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setsearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLocaleLowerCase())
            })
            setFilterdResults(filteredData)
        }
        else {
            setFilterdResults(APIData)
        }

    }

    return (
        <div style={{ padding: 20 }}>Datos de Usuario
            <Input icon="search"
                placeholder="Buscar"
                onChange={(e) => searchItems(e.target.value)}
            />
            {searchInput.length > 1 ? (
                filterdResults.map((item) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Card.Header>{item.name}</Card.Header>
                                <Card.Description>
                                    {item.email}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })
            ) : (
                APIData.map((item) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Card.Header>{item.name}</Card.Header>
                                <Card.Description>
                                    {item.phone}
                                </Card.Description>
                                <Card.Header>{item.email}</Card.Header>
                            </Card.Content>
                        </Card>
                    )
                })
            )}
        </div>
    )
}




