import {Alert, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from 'react';

export class ToolbarComponent extends React.Component {

    showModal = () => this.props.toggleShow(true);

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Button onClick={this.showModal} size="lg">
                            Suggest a resource
                        </Button>
                    </Col>
                    <Col></Col>
                    <Col>
                        <Alert dismissible show={this.props.showSuccess} variant={"info"}>
                            Suggestion is on review! Thank you!
                        </Alert>
                    </Col>
                </Row>
            </Container>
        )
    }
}