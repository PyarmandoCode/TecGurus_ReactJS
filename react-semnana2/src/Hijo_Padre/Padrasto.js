import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    state = {
        msg :"",
    }

    handleCallback =(chilData) => {
        this.setState ({msg:chilData})
    }
    render() {
        const {msg} =this.state;
        return(
            <div>
                <h1>{msg}</h1>
                <Child parentCallback={this.handleCallback}/>
            </div>
        )
    }
}
export default Parent;