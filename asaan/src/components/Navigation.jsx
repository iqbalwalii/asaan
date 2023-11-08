// import React from "react";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const [user, setUser] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem("user") != null) {
      const user = JSON.parse(localStorage.getItem("user"));
      console.log(user, "aa");
      setUser(user.first_name);
    }
  });
  console.log(user, "nmae");
  const onLogoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <LinkContainer to="/">
        <Navbar.Brand className="px-2">BOOKINGS</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {user ? (
            <Nav.Link>{user}</Nav.Link>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
          {user ? (
            <Nav.Link onClick={onLogoutHandler}>Logout</Nav.Link>
          ) : (
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
