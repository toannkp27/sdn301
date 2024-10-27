import React from 'react'
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
//aaaaaaa
const BannerComponent = ({ arrImages }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <Slider {...settings}>
            {arrImages.map((image) => {
                return (
                        <Image
                            src={image}
                            alt="slider"
                            width="100%"
                            height='600px'
                            style={{ objectFit: 'contain', imageRendering: 'pixelated' }}
                        />
                )
            })}
        </Slider>
    )
}

export default BannerComponent