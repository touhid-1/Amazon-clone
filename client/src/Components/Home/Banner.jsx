import React from 'react'
import Slider from "react-slick";


const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="w-full h-max">
            <Slider {...settings}>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" alt="banner" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="banner" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="banner" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="banner" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="banner" />
                </div>
            </Slider>
        </div>
    )
}

export default Banner