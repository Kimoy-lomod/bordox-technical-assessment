import { Col } from "react-bootstrap";
import "../styles/SectionFive.css";
import socialIcons from "../assets/social.svg";
import embedLogoWhite from "../assets/embed_logo_white.svg";

const SectionFive = () => {
  return (
    <div style={{ padding: "20rem 20rem", display: "flex", backgroundColor: "#280A5F", color: "white", height: "70vh" }}>
      <Col>
        <div>
          <img alt="" src={embedLogoWhite} width="200" />
          <p className="mt-3">© Embed 2022</p>
        </div>
      </Col>
      <Col>
        <div>
          <p className="details">
            Embed protocol is a marketing community engine solution for brands and NFT holders that discovers, tokenizes, and
            activates communities in the metaverse and web3
          </p>
          <img alt="" src={socialIcons} width="150" className="mt-4" />
          <div className="footer-links">
            <a href="#legal">Legal</a>
            <span>|</span>
            <a href="#privacy">Privacy</a>
            <span>|</span>
            <a href="#careers">Careers</a>
            <span>|</span>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </Col>
    </div>
  );
};

export default SectionFive;
