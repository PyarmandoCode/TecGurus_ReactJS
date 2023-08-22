import React from "react";
import ReactDOM  from "react-dom/client";
import App from './Ciclo_Vida/montaje'
import App2 from './Ciclo_Vida/desmontar'
import App3 from './Ciclo_Vida_Full/app'

const root = ReactDOM.createRoot(document.getElementById("root"))


// root.render(
//     <div>
//         <App />
//     </div>
// )

root.render(
    <div>
        <App3 />
    </div>
)