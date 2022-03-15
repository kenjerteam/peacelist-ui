import {FormControl, FormSelect, InputGroup, ModalBody, ModalFooter, ModalHeader} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React from "react";

export class SuggestResourceModalComponent extends React.Component {

    validUrl = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    constructor(props) {
        super(props);
        this.state = {
            types: [],
            resource: {}
        }
        this.submit = this.submit.bind(this);
        this.selectType= this.selectType.bind(this);
        this.onContentInput = this.onContentInput.bind(this);
    }


    submit() {
        if (this.state.content === "Help type") {
            return;
        }

        if (this.state.resource.type === 'WEB_SITE' && !this.state.resource.content.matches(this.validUrl)) {
            return;
        }
        this.props.saveResource(this.state.resource)
            .then(this.props.toggleHide)
            .catch(this.props.showError);
    }

    selectType(e) {
        this.setState({
            resource: {
                type: {
                    type: e.target.value
                },
                content: this.state.resource.content,
                approved: false
            },
            types: this.state.types
        })
    }

    onContentInput(e) {
        this.setState({
            resource: {
                type: {
                    type: this.state.resource.type.type
                },
                content: e.target.value,
                approved: false
            },
            types: this.state.types
        })
    }

    render() {
        return (
            <div>
                <ModalHeader>
                    Suggest a resource
                </ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <FormSelect defaultValue="help-type-default" onChange={this.selectType}>
                            <option id="help-type-default">Help type</option>
                            {this.props.types.map((it, index) => {
                                return <option key={index}>{it.type}</option>
                            })}
                        </FormSelect>
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
            </div>
        )
    }
}
