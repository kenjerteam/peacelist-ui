import Container from 'react-bootstrap/Container';
import {ToolbarComponent} from "./toolbar/ToolbarComponent";
import {TableComponent} from "./table/TableComponent";
import {SuggestResourceModalComponent} from "./modal/SuggestResourceModalComponent";
import {getAllResources, saveResource} from "./api/ResourceRestClient";
import React from 'react';
import {getAllResourceTypes} from "./api/ResourceTypeRestClient";

class ContainerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showSuccess: false,
            resourcesTypes: [],
            resources: []
        }
        this.toggleShow = this.toggleShow.bind(this);
        this.saveResource = this.saveResource.bind(this);
    }

    componentDidMount() {
        getAllResources().then(resources => this.setState({resources: resources}));
        getAllResourceTypes().then(types => this.setState({resourcesTypes: types}));
    }

    saveResource = async (data) =>
        await saveResource(data)
                .then(() => this.setState({showSuccess: true}))
                .catch(e => this.setState({showSuccess: false}))

    toggleShow() {
        this.setState({showModal: !this.state.show})
    }

    render() {
        return (
            <Container className="p-3">
                <ToolbarComponent toggleShow={this.toggleShow} showSuccess={this.state.showSuccess}/>
                <TableComponent resources={this.state.resources != null && true ? this.state.resources : []}/>
                <SuggestResourceModalComponent shown={this.state.showModal} saveResource={this.saveResource} toggleShow={this.toggleShow} types={this.state.resourcesTypes}/>
            </Container>
        );
    }
}

export default ContainerComponent;