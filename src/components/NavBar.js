import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './NavBar.css'

export default function NavBar() {
  return (
    <Navbar bg="info" variant="secondary">
      <Navbar.Brand as={Link} to="/transactions" className="p-4">
        BUDGET APP
      </Navbar.Brand>
      <Nav className="ml-auto custom-nav">
        <Button variant="outline-primary">
          <Nav.Link as={Link} to="/transactions/new">New Transaction</Nav.Link>
        </Button>
      </Nav>
    </Navbar>
  );
}