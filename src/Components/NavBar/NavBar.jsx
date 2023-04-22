import CartWidget from "../CartWidget/CartWidget"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBell} from "@fortawesome/free-solid-svg-icons"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, NavLink, useParams } from "react-router-dom";


const NavBar = () => {
  
  return (
 <>
    <Navbar bg="primary" variant="dark">
    <Container>
    <FontAwesomeIcon icon={faBell}/>
    <Link to="/" className="alert alert-success" >La Tienda</Link>
      <Nav className="me-auto">
        <NavLink to="/categoria/PC" className={(isActive)=>isActive ? "btn btn-primary" : "btn btn-outline-primary"}>PC</NavLink>
        <NavLink to="/categoria/IPHONE" className={(isActive)=>isActive ? "btn btn-primary" : "btn btn-outline-primary"} >IPHONE</NavLink>
        <NavLink to="/categoria/TABLET" className={(isActive)=>isActive ? "btn btn-primary" : "btn btn-outline-primary"}>TABLET</NavLink>
          
      </Nav>
      <Nav>
        <Link to="/cart">
        <CartWidget />
        </Link>
      
          </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default NavBar
