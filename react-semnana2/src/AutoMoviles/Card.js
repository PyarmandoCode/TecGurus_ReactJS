import React from "react";



function Card(props) {
    return (
        <div className="card text-center">
            <div className="card-body">
                <img src={props.image} alt="" width="300px"/>
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen</p>
                <a href="#1" className="btn btn-outline-secondary rounded-0">Ver Detalle</a>
            </div>

        </div>
    )
}

export default Card;