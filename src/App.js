// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, NavbarToggle, NavbarCollapse} from 'react-bootstrap';
import Nav from 'react-bootstrap/esm/Nav';

import ITyped from './components/Ityped';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      title: 'Poems of a Lifetime',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Poem List', path: '/poems' },
        // { title: 'Home', path: '/' },
      ],
      home: {
        title: 'Poems of a Lifetime by Brandon Magofna',
        subTitle: 'Checkout my featured poem for the month:',
        text: <ITyped/>,
      },
      about: {
        title: 'Meet Brandon.',
        subTitle: 'Author, Developer, & Content Creater',
        // text: <ITyped/>,
      },
      poems: {
        title: 'My Archive: Poem\'s of a Lifetime.',
        subTitle: 'Even on the darkest of nights, all it takes is a single star to illuminate the sky.',
        text: '"Poetry is the clear expression of mixed feelings."',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <Link className="logo" to="/poems">Greatness Awaits</Link>
            </Navbar.Brand>

            <NavbarToggle className="border-0" aria-controls="navbar-toggle"/>
            <NavbarCollapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/">Collection</Link>
              </Nav>
            </NavbarCollapse>
      </Router>
    )
  }
}

export default App;