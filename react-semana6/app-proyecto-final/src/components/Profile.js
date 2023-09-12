import React, { useContext } from "react";
import AutoContext from "../context/autos/AutosContext";

const Profile = () => {
    const { selectedAuto } = useContext(AutoContext)
    return (
        <>
            {selectedAuto ? (<div><img src={selectedAuto.imagen} alt="" className="card-img-top  m-auto img-fluid" style={{ width: 180 }} />
                <p>{selectedAuto.detalle}</p>
                <p>Precio:{selectedAuto.precio}</p>
                <p>Puertas:{selectedAuto.puertas}</p>


            </div>) : (<h1>No selecciono ningun auto</h1>)}
        </>
    )
}

export default Profile;