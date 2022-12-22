import { Carousel } from 'react-bootstrap';

import Logo from '../../assets/logo.jpeg';
import frente from '../../assets/frente.jpeg';
import produtos from '../../assets/produtos.png';


import './styles.css';

function CarrouselImagens() {
  return (
    <Carousel
      className="Container-carrouselImg"
    >
      <Carousel.Item interval={1000} >
        <img
          className="d-block w-100"
          src={Logo}
          alt="First slide"
          width={500}
          height={500}
        />
        <Carousel.Caption>
          <h3>Sport Sul - Fabricante de luvas </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={frente}
          alt="Second slide"
          width={500}
          height={500}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={produtos}
          alt="Third slide"
          width={500}
          height={500}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarrouselImagens;