import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/SectionTwo.css";
import montageEarnGif from "../assets/nft-montage-earn.gif";

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
          <div>
            <button class="custom-button border-gradient border-gradient-purple">Join Waitlist</button>
          </div>
        </Col>
        <Col>
          <img alt="" src={montageEarnGif} width="600" className="my-3 mx-3 d-inline-block align-top" />
        </Col>
      </Row>
      <Row>
        <Col className="section-two-p">
          <p>
            The trademarks, logos and brand names that appear on this website are used for informational or editorial
            purposes and are the property of their respective owners. Use of these trademarks, logos and brand names does not
            imply any affiliation with or endorsement by their owners.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;
