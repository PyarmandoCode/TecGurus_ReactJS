//Este es el componente que al final contendra todas los cards

import React from "react";
import Card from "./Card";

import imagen1 from '../assets/auto1.png';
import imagen2 from '../assets/auto2.png';
import imagen3 from '../assets/auto3.png';

const cards = [
    {
        id: 1,
        title: "Auto1-Toyota",
        image: imagen1
    },
    {
        id: 2,
        title: "Auto2-Datsun",
        image: imagen2
    },
    {
        id: 3,
        title: "Auto3-Volswagen",
        image: imagen3
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h100" >
            <div className="row">
                {
                    cards.map(card =>
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} image={card.image} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Cards