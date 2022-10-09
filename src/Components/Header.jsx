import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// local imports
import coloredMainLogo from "../Assets/colored_main_logo.svg";

function Header() {
  return (
    <>
      <Navbar bg="white" expand="lg" style={{ zIndex: 1 }}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img alt="" src={coloredMainLogo} width="150" height="30" className="my-3 mx-3 d-inline-block align-top" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className="d-flex" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link className="me-5 inactive-link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="me-5 active-link" href="#earn">
                Earn
              </Nav.Link>
              <Nav.Link className="me-5 inactive-link" href="#promote">
                Promote
              </Nav.Link>
              <Nav.Link className="me-5 inactive-link" href="#join">
                Join Waitlist
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
