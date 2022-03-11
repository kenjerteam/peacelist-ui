import Container from 'react-bootstrap/Container';
import {ToolbarComponent} from "./toolbar/ToolbarComponent";
import {TableComponent} from "./table/TableComponent";
import {SuggestResourceModalComponent} from "./modal/SuggestResourceModalComponent";
import {getAllResources, saveResource} from "./api/ResourceRestClient";
import React from 'react';

class ContainerComponent extends React.Component {

    state = {
        showModal: false,
        showSuccess: false,
        resources: getAllResources()
    }

    saveResource = async (data) =>
        await saveResource(data)
                .then(() => this.setState({showSuccess: true}))
                .catch(e => this.setState({showSuccess: false}))

    toggleShow = () => this.setState({showModal: true})

    render() {
        return (
            <Container className="p-3">
                <ToolbarComponent toggleShow={this.toggleShow} showSuccess={this.state.showSuccess}/>
                <TableComponent resources={this.state.resources}/>
                <SuggestResourceModalComponent saveResource={this.saveResource} show={this.state.showModal} resources={this.props.data}/>
            </Container>
        );
    }
}

export default ContainerComponent;