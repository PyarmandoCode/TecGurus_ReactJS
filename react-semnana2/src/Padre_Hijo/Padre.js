import React from "react";
import Child from "./Hijo";

const Parent = () => {
    const data = "Envio de Parametros";
    return (
        <div>
            <Child data={data} />
        </div>
    )
}

export default Parent;