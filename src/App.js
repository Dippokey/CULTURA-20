import React, { Component } from 'react';
import logo from './Cultura20Logo3.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav} from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <>
        <Navbar scrolling dark expand="md" fixed="top" expand="lg">
          <Navbar.Brand href="#home"><img alt='' className="logo_size" src={logo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="hello">
              <Nav.Link href="#home"><span className="fields">Home</span></Nav.Link>
              <Nav.Link href="#link"><span className="fields">Events</span></Nav.Link>
              <Nav.Link href="#link"><span className="fields">Sponsors</span></Nav.Link>
              <Nav.Link href="#link"><span className="fields">About Us</span></Nav.Link>
              <Nav.Link href="#link"><span className="fields">Contact</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="wrapper">
          <a href="#" className="button">Register Now!</a>
        </div>
        </>
    );
  }
}

export default App;
