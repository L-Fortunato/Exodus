import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Sobre = () => {
    return (
        <Container id='sobre' className='text-center pt-1 pb-5'>
            <Row className='pt-4'>
                <Col>
                    <h1 className='gradientText'>Nossa História</h1>
                </Col>
            </Row>
            <Row className='pt-4 text-center'>
                
                <Col className='mr-5 ml-5'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                
            </Row>
            <Row className='pt-5'>
                <Col className='pb-5' sm >
                    <i className="fas fa-rocket fa-5x gradientText pb-3"></i>
                    <h3 className='pb-1 gradientText'>Missão</h3>
                    <div className='aboutText'>
                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small>
                    </div>
                </Col >
                <Col className='pb-5' sm>
                    <i className="fas fa-eye fa-5x gradientText pb-3"></i>
                    <h3 className='pb-1 gradientText'>Visão</h3>
                    <div className='aboutText'>
                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small>
                    </div>
                </Col>
                <Col className='pb-5' sm>
                    <i className="fas fa-handshake fa-5x gradientText pb-3"></i>
                    <h3 className='pb-1 gradientText'>Valores</h3>
                    <div className='aboutText'>
                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</small>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Sobre
