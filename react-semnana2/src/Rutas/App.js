import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './home'
import About from './about'
import Contact from './contact'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul className="App-header">
                        <li>
                            <Link to="/">Quien Soy</Link>
                        </li>
                        <li>
                            <Link to="/about">Mis Habilidades</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contactame</Link>
                        </li>
                    </ul>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/contact" element={<Contact />}></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}
export default App;