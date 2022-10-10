import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/SectionThree.css";

const SectionThree = () => {
  const [data, setData] = useState([]);
  const models = useSelector((state) => state.models);

  useEffect(() => {
    if (models) {
      setData(models);
    }
  }, [models]);

  return (
    <div id="promote" className="s3-container">
      <div>
        <h1 className="text-center">The Embed-to-Earn Model</h1>
      </div>
      <Container>
        <Row>
          {data.map(({ title, description }, i) => (
            <Col key={i}>
              <div className={`box box-${i}`}>
                <h3>{`#${i + 1} ${title}`} </h3>
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
