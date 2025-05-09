import React from "react";
import Slider from "react-slick";

// Example images (replace with your actual image paths)
import image1 from "/images/Laser Arena, Paintball.jfif";
import image2 from "/images/Laser Arena, Paintball.jfif";
import image3 from "/images/Laser Arena, Paintball.jfif";

const Carousel = () => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    focusOnSelect: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src={image1} alt="Promo 1" className="carousel-image" />
          <div className="carousel-caption">
            <h3>Exclusive Offer</h3>
            <p>Get 20% off on your first purchase!</p>
            <button className="carousel-btn">Shop Now</button>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={image2} alt="Promo 2" className="carousel-image" />
          <div className="carousel-caption">
            <h3>New Arrivals</h3>
            <p>Explore the latest collection</p>
            <button className="carousel-btn">Discover More</button>
          </div>
        </div>
        <div className="carousel-slide">
          <img src={image3} alt="Promo 3" className="carousel-image" />
          <div className="carousel-caption">
            <h3>Free Shipping</h3>
            <p>On orders above $50</p>
            <button className="carousel-btn">Shop Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
