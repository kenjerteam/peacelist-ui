import {Row, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ReactComponent as ContactIcon } from "../common/icons/phone.svg";
import { ReactComponent as WebSiteIcon } from "../common/icons/web.svg";
import { ReactComponent as PersonIcon } from "../common/icons/helper.svg";
import React from "react";
import Button from "react-bootstrap/Button";

export class TableComponent extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Table className="Table-main" size="sm">
                        <tbody>
                        {this.props.resources.map((resource, index) => {
                            return <tr key={resource.id} id={"resource" + resource.id}>
                                <td>{this.mapIcon(resource.type.type)}</td>
                                <td>{resource.content}</td>
                                <td>{resource.approved}</td>
                            </tr>
                        })}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }

    mapIcon(type) {
        switch (type) {
            case 'WEB_SITE': return <WebSiteIcon/>;
            case 'PERSON': return <PersonIcon/>;
            default : return <ContactIcon/>;
        }
    }
}