import React from 'react';
import { Row,Container,Col, Image } from 'react-bootstrap';
import BannerComponent from '../components/BannerComponent';
import banner1 from '../assets/images/banner1.png'
import banner2 from '../assets/images/banner2.png'
import banner3 from '../assets/images/banner3.png'
import banner4 from '../assets/images/banner4.png'
import banner5 from '../assets/images/Black-Friday-Facebook-cover-Banner-07.jpg'
import filter1 from '../assets/images/filterMan.jpg'
import filter2 from '../assets/images/filterWoman.jpg'
import filter3 from '../assets/images/filterKid.jpg'

const Homepage = () => {
    return (
        <div>
            <BannerComponent arrImages={[banner3,banner4,banner5,banner2,banner1]}/>
            <Container>
                <Row className='d-flex justify-content-beween'>
                    <Col col={4} >
                        <div>
                        <Image src={filter1} style={{objectFit:'cover'}} alt='filter'/>
                            <button>New Product</button>
                        </div>
                    </Col>
                    <Col col={4} >
                        <div>
                        <Image src={filter2} style={{objectFit:'cover'}} alt='filter'/>
                            <button>Best Sellers</button>
                        </div>
                    </Col>
                    <Col col={4} >
                        <div>
                        <Image src={filter3} style={{objectFit:'cover'}} alt='filter'/>
                            <button>Latest Blogs</button>
                        </div>
                    </Col>
                </Row>
                <Row>New Product</Row>
                <Row>Best Sellers</Row>
                <Row>Latest Blogs</Row>
            </Container>
           
        </div>
    );
};

export default Homepage;