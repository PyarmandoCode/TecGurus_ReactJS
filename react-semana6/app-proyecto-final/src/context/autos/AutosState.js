
//userReducer es un Hook para administrar el estado de un
//Componente
import React, { useReducer } from "react";
import AutoContext from "./AutosContext";
import AutosReducer from "./AutosReducer"
import axios from "axios";


const AutosState = (props) => {
    const initialState = {
        autos: [],
        selectedAuto: null
    }


    const [state, dispatch] = useReducer(AutosReducer, initialState)

    //Este Metodo me Traera una lista de AUtos
    const getAutos = async () => {
        const res = await axios.get("https://api-cars-jb0r.onrender.com/autos")
        dispatch({
            type: 'GET_AUTOS',
            payload: res.data.results
        })
    }

    //Este metodo nos Traera el Auto seleccionado
    const getProfile = async(id) => {
        const res= await axios.get("https://api-cars-jb0r.onrender.com/auto/"+id)
        dispatch({
            type:'GET_PROFILE',
            payload:res.data.auto
        })
    }

//Podemos pasar la informacio a cualquier componente gracias al 
//Contexto que hemos creado
    return (
        <AutoContext.Provider value={{
            autos: state.autos,
            selectedAuto: state.selectedAuto,
            getAutos,
            getProfile
        }}>
            {props.children}
        </AutoContext.Provider>
    )

}

export default AutosState;