import React from "react";

class Child extends React.Component {
    onTrigger = () => {
        this.props.parentCallback("Semana2 ReactJS");
    }

    render() {
        return (
            <div>
                <br></br>
                <button onClick={this.onTrigger}> Aceptar</button>
            </div>
        )
    }

}

export default Child;