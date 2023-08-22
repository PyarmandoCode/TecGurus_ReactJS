import React from "react";

//Ciclo de Vida del Componenete
//Inicializacion

class ComponenteOne extends React.Component {
    UNSAFE_componentWillMount() {
        console.log("El Componente se va a montar el el DOM")
    }
    render() {
        return <h1>Bienvenido al Ciclo de Vida del Compoenente</h1>
    }
}

//Monta

class App extends React.Component {
    render() {
        return (
            <div>
                <ComponenteOne/>
            </div>
        )
    }
}

export default App;