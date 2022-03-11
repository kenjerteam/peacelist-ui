import {Row, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ReactComponent as ContactIcon } from "../common/icons/phone.svg";
import { ReactComponent as WebSiteIcon } from "../common/icons/web.svg";
import { ReactComponent as PersonIcon } from "../common/icons/helper.svg";
import React from "react";

export class TableComponent extends React.Component {

    render() {
        return (
            <Container>
                <Row>
                    <Table className="Table-main">
                        <tbody>
                        {this.props.resources.map((resource, index) => {
                            return <tr id={index}>
                                <td>{this.defineType(resource.type)}</td>
                                <td>{resource.content}</td>
                            </tr>
                        })}
                        </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }

    defineType(type) {
        switch (type) {
            case 'WEB_SITE': return WebSiteIcon;
            case 'PERSON': return PersonIcon;
            default : return ContactIcon;
        }
    }
}