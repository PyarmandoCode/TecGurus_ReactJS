import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css"

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: "",
            list: [],
        };
    }

    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                id: Math.random(),
                value: this.state.userInput,
            };
            //Sintaxis de propagacion no se conoce los elemntos de la list
            const list = [...this.state.list];
            //Añadiendo elementos a la lista
            list.push(userInput);
            //Resetear el state
            this.setState({
                list,
                userInput: "",
            })

        }
    }


    deleteItem(key) {
        const list = [...this.state.list];
        const updateList = list.filter((item) => item.id !== key)
        this.setState({
            list: updateList
        });
    }

    editItem=(index) =>{
        const todos =[...this.state.list]
        const editedTodo = prompt("Ingrese el Nuevo Valor a editar:");
        if (editedTodo !==null && editedTodo.trim()!=='') {
            let updatedTodos = [...todos]
            updatedTodos[index].value=editedTodo
            this.setState({
                list:updatedTodos,
            });
        }
    }

    render() {
        return (
            <Container>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                    }}
                > KANBAN BOARD
                </Row>
                <hr />
                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Agregar Tarea"
                                size="lg"
                                value={this.state.userInput}
                                onChange={(item) =>
                                    this.updateInput(item.target.value)
                                }
                            />
                            <InputGroup>
                                <Button
                                    variant="dark"
                                    className="mt-2"
                                    onClick={() => this.addItem()}
                                >
                                    Agregar
                                </Button>
                            </InputGroup>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 5, offset: 4 }} >
                        <ListGroup>
                            {this.state.list.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <ListGroup.Item
                                            variant="primary"
                                            action
                                            style={{ display: "flex", justifyContent: "space-between" }}

                                        >
                                            {item.value}
                                            <span>
                                                <Button style={{ marginRight: "10px" }}
                                                    variant="primary"
                                                    onClick={() => this.deleteItem(item.id)}
                                                >
                                                    Eliminar
                                                </Button>
                                                <Button variant="info"
                                                  onClick={()=>this.editItem(index)}
                                                   >
                                                    Editar
                                                </Button>
                                            </span>
                                        </ListGroup.Item>
                                    </div>
                                )
                            })}

                        </ListGroup>
                    </Col>
                </Row>
            </Container >
        );
    }

}

export default App;

