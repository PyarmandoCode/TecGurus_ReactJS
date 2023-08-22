import React ,{Component} from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {myState : "CiclodeVida"}
        this.changeMyState =this.changeMyState.bind(this);
    }

    render() {
        return (
            <div style={{ textAlign:"center" ,marginTop:"5%", color:"blue"}}>
                <h1>Bienvenido a mi Sitio web de Reactjs</h1>
                <h3>{this.state.myState}</h3>
                <button onClick={this.changeMyState}>Cambiar el estado del componente</button>
            </div>
        );
    }
    componentWillMount() {
        console.log("Paso 2:Componente Montado")
    }
    componentDidMount() {
        console.log("Paso 3:Componenne Desmontado")
    }
    componentWillReceiveProps(newProps) {
        console.log("Paso 4:Actualizacion del componente de acuerdo a los Props pasados");
    }
    shouldComponentUpdate(newProps,newState) {
        //Actualizando el componenete si fuera necesario
        return true;
    }

    changeMyState() {
        this.setState({
            myState:"CiclodeVidaActualizado",
        });
    }
    
}


export default App;