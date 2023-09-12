import React, { useEffect } from "react";
import { useContext } from "react";
import AutoContext from "../context/autos/AutosContext";


const AutoList = () => {
    const { autos, getAutos,getProfile } = useContext(AutoContext)

    useEffect(() => {
        getAutos();
    }, [getAutos])

    return (
        <div className="list-group h-100">
            {
                autos.map(auto => (
                    <a className="list-group-item list-group-item-action d-flex flow-row justify-content-start" href="#!" key={auto.auto}
                      onClick={() =>getProfile(auto.auto)}
                       >
                        <img src={auto.imagen} alt={auto.nombre} className="img-fluid mr-4 rounded-circle" width={100} />
                        <p>
                            {auto.nombre}
                        </p>



                    </a>
                ))
            }

        </div>
    )
}

export default AutoList;