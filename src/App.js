import './App.css';
import ContainerComponent from "./component/ContainerComponent";
import {init} from "./component/Initialization";
import React from 'react';
import Container from "react-bootstrap/Container";

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = init()
    }

    render() {
        return (
            <Container className="App">
                <ContainerComponent data={this.state.resources}/>
            </Container>
        );
    }
}

export default App;
