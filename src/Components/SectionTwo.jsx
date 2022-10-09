import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/SectionTwo.css";
import montageEarnGif from "../Assets/nft-montage-earn.gif";

const SectionTwo = () => {
  return (
    <Container>
      <Row className="container">
        <Col className="section-two-details">
          <h1>Lead the change</h1>
          <p>
            In a decentralised world, you power the brand. Influence the way brands will look in the metaverse and build a
            community around those you love. Be a part of the change and join Embed’s decentralized protocol today
          </p>
          <Button variant="primary">Primary</Button>{" "}
        </Col>
        <Col>
          <img alt="" src={montageEarnGif} width="600" className="my-3 mx-3 d-inline-block align-top" />
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;