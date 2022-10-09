import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/SectionThree.css";

const SectionThree = () => {
  const models = useSelector((state) => state.models);
  return (
    <div className="s3-container">
      <div>
        <h1 className="text-center">The Embed-to-Earn Model</h1>
      </div>
      <Container>
        <Row>
          {models.map(({ title, description }, i) => (
            <Col>
              <div className={`box box-${i}`}>
                <h3>{`#${i} ${title}`} </h3>
                <p>{description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SectionThree;
