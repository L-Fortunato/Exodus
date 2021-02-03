import React from 'react'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import Particles from 'react-particles-js'
import logo from '../images/logo.svg'

const Home = () => {
    const particleSettings = {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            }
        }
    }

    return (
        <Jumbotron id='home' className='gradient'>
            <div className='particles'>
                <Particles params={particleSettings} />
            </div>
            <img style={{ paddingBottom: '40px' }} alt='exodus logo' src={logo} className='homeImage'></img>
            <Container>
                <p style={{ paddingBottom: '20px', color: 'white' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                <p >
                    <Button s variant="light" href='#sobre'>Saiba Mais</Button>
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Home
