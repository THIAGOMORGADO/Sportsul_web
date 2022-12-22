import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Logo from '../../assets/logo.jpeg'

import './styles.css'

function HeaderNavBar() {
  return (
    <Navbar className="NavBar-container" expand="sm">
      <Container>
        <Navbar.Brand href="#" className="menu">
          <img src={Logo} className="Logo" />
          <h3>Sport Sul</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="btnArea" />
        <Navbar.Collapse id="navbarScroll" className="btnMenu">
          <Nav className="item" style={{ color: '#fff', fontSize: '22px'}}>
           
              <Nav.Link href="#action1" >Home</Nav.Link>
              <Nav.Link href="#about">Quem Somos</Nav.Link>
              <Nav.Link href="#action2">Produtos</Nav.Link>
              <Nav.Link href="#action2">Contatos</Nav.Link>
        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderNavBar
