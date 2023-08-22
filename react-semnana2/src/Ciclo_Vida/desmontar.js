import React from "react";


//Inicializacion
class ComponenteOne extends React.Component {
    componentWillUnmount() {
        alert("El Componente se Montara en este momento");
    }

    render() {
        return <h1>Bienvenido al Ciclo de Vida del Compoenente</h1>
    }
}

//Montar el Componente y Eliminarlo

class App extends React.Component {
    state = { display: true };
    delete = () => {
        this.setState({ display: false });
        console.log("El Componente es Desmontado en el DOM")
    };

    render() {
        let comp;
        if (this.state.display) {
            //Montame el componente en el Dom
            comp = <ComponenteOne />
        }
        return (
            <div>
                {comp}
                <button onClick={this.delete}>
                    Eliminar Componente
                </button>
            </div>
        );
    }
}

export default App;