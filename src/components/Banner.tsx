import React from 'react';
import Slider from 'react-slick';
import banner from '../assets/images/banner.png';
import bonus from '../assets/images/bonus.png';
import foranza from '../assets/images/foranza.png';
import alex from '../assets/images/alex.png';
import bet from '../assets/images/bet.png';
import '../styles/Banner.css'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Banner: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,           
    autoplaySpeed: 3000,
    pauseOnHover: false,   
  };
  

  const images = [banner, bonus, foranza, alex, bet];

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Zeus ${index + 1}`} className="banner-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
