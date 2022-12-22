/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import HeaderNavBar from './components/Navbar'
import CarrouselImagens from './components/SlideShow'

import './App.css'

import WhatsAppLogo from './assets/icons/whatsapp.png'
import telegramLogo from './assets/icons/telegram.png'
import instagramLogo from './assets/icons/instagram.png'

import Logo from './assets/logo.jpeg'
import maps from './assets/maps.png'
import globe from './assets/globe.png'
import prices from './assets/prices.png'
import car from './assets/car.png'
import cart from './assets/cart.png'



function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <HeaderNavBar />
        </Row>
      </Container>

      <Container>
        <Row>
          <Col sm={6}>
            <CarrouselImagens />
          </Col>
          <Col sm={6}>
            <main>
              <h1>
                Sport Sul - fabricante de luvas para musculação e ciclismos{' '}
              </h1>
              <h2>
                Acessa nosso whatsApp para falar com um de nosso revendedores...
              </h2>
            </main>

            <div className="btn_Social">
              <a href="" className="btnWhatsapp">
                <img src={WhatsAppLogo} alt="whatsapp" className="logo_btn" />
              </a>

              <a href="" className="btnTelegram">
                <img src={telegramLogo} alt="whatsapp" className="logo_btn" />
              </a>

              <a href="" className="btnInstagram">
                <img src={instagramLogo} alt="whatsapp" className="logo_btn" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="aboutsSectio" id="about">
        <Row>
          <Col sm="6">
            <div className="infoImg">
              <img src={Logo} className="aboutLogo" />
            </div>
          </Col>
          <Col sm="6">
            <h1>Quem Somos...</h1>
            <p>
              Somos a Sport sul empresa que trabalho com produtos para de
              academias e ciclimos somos uma empresa com um bom tempo de mercado
              trabalhamos com vendas de produtos para academia como luvas e
              equipamento... temos uma vasta categorias de produtos e com preço
              acessivel para voce nao somos lojas somos a fabricante de luvas
              entrem em contato com nosso revendedores... a entrega e para todo
              brasil se for na capital ou interior ate mesmo litoral entregamos
              mas se sua compra for para fora de sao paulo e enviado pelo
              correios vendemos por atacado e varejo...
            </p>

            <div className="informationContainer">
              <div className="information">
                <div className="infoBoll1">
                  <img src={maps} />
                </div>
                <div className="infoBoll2">
                  <img src={globe} />
                </div>
                <div className="infoBoll3">
                  <img src={prices} />
                </div>
                <div className="infoBoll4">
                  <img src={car} />
                </div>
                <div className="infoBoll5">
                  <img src={cart} />
                </div>
              </div>
              
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
