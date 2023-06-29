import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'; 
import img1 from '../../../public/img/carousel1.jpg'
import img2 from '../../../public/img/carousel4.jpg'
import img3 from '../../../public/img/carousel3.jpg'

function CarouselComponent() {

  const handleImageClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <Carousel slide={false}>
        <Carousel.Item>
          <img
            className="d-block carousel-image" // Aplica a classe carousel-image
            src={img1}
            alt="First slide"
            onClick={handleImageClick}
          />
          <Carousel.Caption>
            {/*<h3>First slide label</h3>*/}
            {/*<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image" // Aplica a classe carousel-image
            src={img2}
            alt="Second slide"
            onClick={handleImageClick}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block carousel-image" // Aplica a classe carousel-image
            src={img3}
            alt="Third slide"
            onClick={handleImageClick}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;