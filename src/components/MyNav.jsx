import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = () => {
  const location = useLocation();

  return (
    <Navbar bg="meteo" variant="dark" expand="lg">
      <Container fluid>
        <Link to={"/"} className="navbar-brand mx-auto">
          <img
            src="https://www.mondometeo.com/wp-content/uploads/2022/02/mondometeo.png"
            width="35"
            height="35"
            className="d-inline-block  align-top"
            alt="meteo logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to={"/"}
              className={`nav-link ${
                location.pathname === "/" && "text-white fw-bold"
              }`}
            >
              Home
            </Link>
            <Link
              to="/placeolder"
              className={`nav-link ${
                location.pathname === "/placeolder" && "text-white fw-bold"
              }`}
            >
              Link
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
