import { Nav, Navbar } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../App";

const NavigationBar = () => {
  const login = useContext(UserContext);
  const history = useHistory();
  console.log({ login });
  const handleOrder = () => {
    if (login.isAdmin) {
      history.push("/allOrders");
    } else {
      history.push("/userOrders");
    }
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="d-flex justify-content-between"
    >
      <Navbar.Brand href="#home"> Photographyish </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className=" justify-content-end"
      >
        <Nav>
          <Nav.Link href="#" className="centerItem">
            <Link to="/" className="nav-link active ">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="#" className="centerItem">
            <button onClick={handleOrder}>Orders</button>
          </Nav.Link>
          <Nav.Link href="#" className="centerItem">
            <Link to="/logIn" className="nav-link active ">
              LogIn
            </Link>
          </Nav.Link>

          {login.isAdmin && (
            <Nav.Link>
              <Link to="/allOrders" className="nav-link centerItem">
                Admin
              </Link>
            </Nav.Link>
          )}

          <Nav.Link>
            <Link to="/login">
              <button className="nav-link btn btn-success active centerItem">
                Log in
              </button>
            </Link>
            {login?.loggedInUser?.name && (
              <span> {login?.loggedInUser?.name} </span>
            )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
