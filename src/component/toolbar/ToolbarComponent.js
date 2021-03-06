import {Alert, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from 'react';

export class ToolbarComponent extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Button onClick={this.props.toggleShow} size="lg">
                            Suggest
                        </Button>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Alert dismissible show={this.props.showSuccess} variant={"info"}>
                            Suggestion is on review! Thank you!
                        </Alert>
                        <Alert dismissible show={this.props.showError} variant={"danger"}>
                            Something wrong happened :(
                        </Alert>
                    </Col>
                </Row>
            </Container>
        )
    }
}