import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../images/logo.svg'
import logo1 from '../images/logo2.svg'

const Header = () => {
    const [navbar, setNavbar] = useState(false)

    const navChange = () => {
        if (window.scrollY > 500) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', navChange)


    return (
        <Container fluid>
            <Navbar collapseOnSelect expand="lg" fixed='top' bg={navbar ? 'light' : 'transparent'} variant={navbar ? 'light' : 'dark'} style={{ transition: '0.5s', borderStyle: 'none', zIndex: '99', width:'100%' }}>
                <Navbar.Brand href="#home">
                    <img  alt="Exodus" src={navbar ? logo1 : logo} height="35" className="d-inline-block align-top gradientText" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse  id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link  href="#sobre">Sobre Nós</Nav.Link>
                        <Nav.Link  href="#serviços">Serviços</Nav.Link>
                        <Nav.Link  href="#contatos">Contatos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default Header