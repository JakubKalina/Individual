import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import NavbarBrand from 'react-bootstrap/NavbarBrand';


import Footer from './components/Footer';



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Jakub Kalina',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'My sample title',
        subtitle: 'My sample subtitle',
        text: 'Some sample text on my website'
      },
      about: {
        title: 'About me',
      },
      contact: {
        title: "Let's keep in touch."
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
        {/* Pasek nawigacyjny */}
        <Navbar className="border-bottom" bg="transparent" expand="lg">

          {/* Logo strony - imię */}
          <Navbar.Brand>
            Jakub Kalina
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            {/* Linki nawigacyjne */}
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

lol
        {/* <Footer /> */}

        </Container>
      </Router>
    );
  }

}

export default App;
