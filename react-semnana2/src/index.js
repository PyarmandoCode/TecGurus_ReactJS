import React from "react";
import ReactDOM  from "react-dom/client";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//import App from './Ciclo_Vida/montaje'
import App2 from './Ciclo_Vida/desmontar'
import App3 from './Ciclo_Vida_Full/app'
import Parent from "./Padre_Hijo/Padre";
import Padrasto from "./Hijo_Padre/Padrasto";
//import App from "./Rutas/App"
//import App from "./Tareas/App"
import  App from "./AutoMoviles/App"
import { UserPage } from "./Pages/UserPage";


const root = ReactDOM.createRoot(document.getElementById("root"))


// root.render(
//     <div>
//         <App />
//     </div>
// )

// root.render(
//     <div>
//         <App3 />
//     </div>
// )

// root.render(
//     <div>
//         <Parent />
//     </div>
// )

root.render(
    <React.StrictMode>
        <UserPage />
    </React.StrictMode>
)