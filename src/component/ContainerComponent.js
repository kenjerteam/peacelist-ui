import Container from 'react-bootstrap/Container';
import {ToolbarComponent} from "./toolbar/ToolbarComponent";
import {TableComponent} from "./table/TableComponent";
import {SuggestResourceModalComponent} from "./modal/SuggestResourceModalComponent";
import {getAllResources, saveResource} from "./api/ResourceRestClient";
import React from 'react';
import {getAllResourceTypes} from "./api/ResourceTypeRestClient";
import {Modal} from "react-bootstrap";
import {EmptyComponent} from "./common/EmptyComponent";

class ContainerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showSuccess: false,
            showError: false,
            resourcesTypes: [],
            resources: []
        }
        this.toggleShow = this.toggleShow.bind(this);
        this.toggleHide = this.toggleHide.bind(this);
        this.saveResource = this.saveResource.bind(this);
    }

    componentDidMount() {
        getAllResources()
            .then(resources => this.setState({
                showModal: this.state.showModal,
                showSuccess: this.state.showSuccess,
                showError: this.state.showError,
                resourcesTypes: this.state.resourcesTypes,
                resources: resources
            }));

        getAllResourceTypes()
            .then(types => this.setState({
                showModal: this.state.showModal,
                showSuccess: this.state.showSuccess,
                showError: this.state.showError,
                resourcesTypes: types,
                resources: this.state.resources
            }));
    }

    async saveResource(data) {
        await saveResource(data)
            .then((data) => {
                this.state.resources.push(data)
                this.setState({
                    showModal: this.state.showModal,
                    showSuccess: true,
                    showError: false,
                    resourcesTypes: this.state.resourcesTypes,
                    resources: this.state.resources
                })
            })
            .catch(e => this.setState({
                showModal: this.state.showModal,
                showSuccess: false,
                showError: true,
                resourcesTypes: this.state.resourcesTypes,
                resources: this.state.resources
            }));
    }

    toggleShow() {
        this.setState({
            showModal: true,
            showSuccess: false,
            showError: false,
            resourcesTypes: this.state.resourcesTypes,
            resources: this.state.resources
        });
    }

    toggleHide() {
        this.setState({
            showModal: false,
            showSuccess: false,
            showError: false,
            resourcesTypes: this.state.resourcesTypes,
            resources: this.state.resources
        });
    }

    render() {
        return (
            <Container className="p-3">
                <EmptyComponent spacing={1}/>
                <ToolbarComponent toggleShow={this.toggleShow} showSuccess={this.state.showSuccess}
                                  showError={this.state.showError}/>
                <EmptyComponent spacing={3}/>
                <TableComponent resources={this.state.resources != null && true ? this.state.resources : []}/>
                <Modal show={this.state.showModal} centered>
                    <SuggestResourceModalComponent showError={this.state.showError} saveResource={this.saveResource}
                                                   toggleHide={this.toggleHide} types={this.state.resourcesTypes}/>
                </Modal>
            </Container>
        );
    }
}

export default ContainerComponent;