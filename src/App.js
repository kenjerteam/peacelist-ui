import './App.css';
import ContainerComponent from "./component/ContainerComponent";
import React from 'react';
import Container from "react-bootstrap/Container";

class App extends React.Component{

    render() {
        return (
            <Container className="App">
                <ContainerComponent/>
            </Container>
        );
    }
}

export default App;
