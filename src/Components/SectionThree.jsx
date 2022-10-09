import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/SectionThree.css";

const SectionThree = ({ data }) => {
  return (
    <div className="s3-container">
      <div>
        <h1 className="text-center">The Embed-to-Earn Model</h1>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="box box-1">
              <h3>#1 Match</h3>
              <p></p>
            </div>
          </Col>
          <Col>
            <div className="box box-2">
              <h3>#2 Influence</h3>
              <p></p>
            </div>
          </Col>
          <Col>
            <div className="box box-3">
              <h3>#3 Earn</h3>
              <p></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionThree;
