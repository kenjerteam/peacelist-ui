import {
    DropdownButton,
    FormControl,
    InputGroup, Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";
import Button from "react-bootstrap/Button";
import React from "react";

export class SuggestResourceModalComponent extends React.Component {

    validUrl = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    state = {
        show: this.props.show,
        types: [],
        resource: {}
    }

    toggleShow = () => this.setState({show: !this.state.show})

    submit = () => {
        if (this.state.resource.type === 'WEB_SITE' && !this.state.content.matches(this.validUrl)) {
            return;
        }
        this.toggleShow()
        this.props.saveResource(this.state.resource)
    }

    selectType = (type) => {
        this.setState({resource: {type: type}})
    }

    onContentInput = (content) => {
        this.setState({resource: {content: content}})
    }

    render() {
        return (
            <Modal show={this.state.show}>
                <ModalHeader>
                    Suggest a resource
                </ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <DropdownButton
                            aria-required={"true"}
                            variant="outline-secondary"
                            title="Help type"
                            id="help-type">
                            {this.props.resources.map((it, index) => {
                                return <DropdownItem onInput={this.selectType} key={index}>{it.type}</DropdownItem>
                            })}
                        </DropdownButton>
                        <FormControl placeholder="Content" onInput={this.onContentInput} aria-required={"true"}/>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <InputGroup>
                        <Button onClick={this.submit}>
                            Submit
                        </Button>
                    </InputGroup>
                </ModalFooter>
            </Modal>
        )
    }
}
