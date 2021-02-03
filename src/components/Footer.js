import React from 'react'
import logo from '../images/logo.svg'


const Footer = () => {
    return (
        <div className='footerMain' >
            <div className='footerDiv'>
                <img className='footerLogo' src={logo} alt='logo'></img>
                <small className='white'>Lorem Ipsum</small>
            </div>
            <div className='footerDiv'>
                <a href='#sobre' className='whiteLink pb-3'>Sobre Nós</a>
                <a href='#serviços' className='whiteLink pb-3'>Serviços</a>
                <a href='#contatos' className='whiteLink'>Contatos</a>
            </div>
            <div className='footerDiv contactFoot pl-4'>
                <h6 className='white'>Entre em contato!</h6>
                <div className='pt-2'>
                    <a href='https://www.instagram.com/omatheus.delima/ ' target="_blank" rel='noreferrer' className='whiteLink'><i className="white fab fa-instagram fa-2x pt-1"></i></a>
                    <a href='#blank' className='whiteLink'><i className="white fab fa-whatsapp fa-2x pl-4 pt-1"></i></a>
                    <a href='#blank' className='whiteLink'><i className="white far fa-envelope fa-2x pl-4 pt-1"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer
