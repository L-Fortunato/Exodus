import React from 'react'
import { Col, Container, NavLink, Row } from 'react-bootstrap'

const Contatos = () => {
    return (
        <Container id='contatos' className='text-center pb-5'>
            <div className='pb-5 pt-2'>
                <h1 className='gradientText'>Contatos</h1>
                <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
            </div>
            <Row>
                <Col>
                <NavLink className='contactLink' href='https://www.instagram.com/omatheus.delima/' target="_blank" rel='noreferrer'><i className=" fab fa-instagram fa-3x gradientText pb-1"></i>
                <p style={{fontSize:'1.2em',color:'#333'}} >instagram.com/omatheus.delima</p></NavLink>
                </Col>
            </Row>
            <Row>
                <Col>
                <NavLink className='contactLink' href='#'><i className=" fab fa-whatsapp fa-3x gradientText pb-1"></i>
                <p style={{fontSize:'1.2em',color:'#333'}} >(xx)xxxx-xxxx</p></NavLink>
                </Col>
            </Row>
            <Row>
                <Col>
                <NavLink className='contactLink' href='#'><i className=" far fa-envelope fa-3x gradientText pb-1"></i>
                <p style={{fontSize:'1.2em',color:'#333'}} >exodus@loreipsum.com</p></NavLink>
                </Col>
            </Row>
        </Container>
    )
}

export default Contatos
