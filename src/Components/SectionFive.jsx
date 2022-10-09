import { Col, Row } from "react-bootstrap";
import "../Styles/SectionFive.css";

const SectionFive = () => {
  return (
    <div style={{ padding: "20rem 20rem", display: "flex", backgroundColor: "#280A5F", color: "white", height: "100vh" }}>
      <Col>
        <div>
          <h1>Section Five</h1>
        </div>
      </Col>
      <Col>
        <div>
          <p className="details">
            Embed protocol is a marketing community engine solution for brands and NFT holders that discovers, tokenizes, and
            activates communities in the metaverse and web3
          </p>
        </div>
      </Col>
    </div>
  );
};

export default SectionFive;
