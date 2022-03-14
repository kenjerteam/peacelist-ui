import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

export const EmptyComponent = ({spacing}) => {
    const rows = [];
    for (let i = 0; i < spacing; i++) {
        rows.push(<div key={i.toString()}><Row className="m-3"><Col></Col></Row></div>);
    }
    return <Container>
        {rows.map(it => it)}
    </Container>
}