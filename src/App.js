import './App.css';
import Home from './components/Home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { VscLayers, VscHome } from 'react-icons/vsc';
import { BsPeople, BsQuestionSquare } from 'react-icons/bs';
import { Link, Routes, Route, Router } from 'react-router-dom';
import Candidates from './components/Candidates';
import AboutUs from './components/AboutUs';
import Details from './components/Details';

function App() {
  return (
    <div className='App'>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#'>
            <VscLayers />
            HOMEWORK COMPANY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to={'/'}>
                <VscHome />
                <br />
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to={'/Candidates'}>
                <BsPeople />
                <br />
                CANDİDATES
              </Nav.Link>
              <Nav.Link as={Link} to={'/AboutUs'}>
                <BsQuestionSquare />
                <br />
                ABOUT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Candidates' element={<Candidates />} />
        <Route path='Candidates/Details/:id' element={<Details />} />
        <Route path='AboutUs' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
