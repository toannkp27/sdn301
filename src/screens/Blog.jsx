// Blog.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, InputGroup, FormControl } from 'react-bootstrap';



// Component Header
const Header = () => {
    return (
       
       <div style={{ marginLeft: '20px', paddingTop: '20px' }}>
            <h1>Shoe Blog</h1>
        </div>
    );
};

//Component Footer
const Footer = () => {
    return (
        <Container fluid className="footer-container" style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100, display: 'flex', justifyContent: 'center' }}>
            <p className="m-0">© 2024 Shoe Blog. All rights reserved.</p>
        </Container>
    );
};

// Component Blog

const Blog = () => {
    const [showFullContentConverse, setShowFullContentConverse] = useState(false);
    const [showFullContentAdidas, setShowFullContentAdidas] = useState(false);
    const [showFullContentVans, setShowFullContentVans] = useState(false);
    const [showFullContentNike, setShowFullContentNike] = useState(false);


    const toggleContentConverse = () => {
        setShowFullContentConverse(!showFullContentConverse);
    };

    const toggleContentAdidas = () => {
        setShowFullContentAdidas(!showFullContentAdidas);
    };
    const toggleContentVans = () => {
        setShowFullContentVans(!showFullContentVans);
    };
    const toggleContentNike = () => {
        setShowFullContentNike(!showFullContentNike);
    };

    return (
        <div style={{ paddingBottom: '60px' }}>
            {/* Header Component */}
            <Header />

            {/* Main Content */}
            <Container className="mt-5 pt-3">
                <Row>
                    <Col md={2}>
                        {/* Left column */}
                        <div>
                            <h2>Categories</h2>
                            <p>Fashion</p>
                            <p>Style</p>
                            <p>Season</p>
                            <p>Other</p>
                        </div>
                    </Col>
                    <Col md={5}>
                        {/* Middle column */}
                        <Row>
                            <Col>
                                <Card>
                                {/* Card for Converse */}
                                <Card className="custom-card">
                                    <Card.Title className="custom-title">1. Giày CONVERSE</Card.Title>
                                    <Card.Img
                                        variant="top"
                                        src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/473702aSd/giay-converse-1148332.jpg"
                                        className="custom-image"
                                    />
                                    <Card.Body>
                                        <Card.Text>
                                            {showFullContentConverse
                                                ? `Là một trong những thương hiệu giày hot nhất, Converse đã cực kỳ khẳng định vị thế và uy tín của mình qua thời gian. Ra đời từ năm 1917, nhưng cho đến ngày nay, Converse vẫn không ngừng làm mê đắm giới trẻ Việt. ...`
                                                : `Là một trong những thương hiệu giày hot nhất, Converse đã cực kỳ khẳng định ... `}
                                        </Card.Text>
                                        <span className={`read-more ${showFullContentConverse ? 'collapse' : ''}`} onClick={toggleContentConverse}>
                                            {showFullContentConverse ? 'Thu gọn' : 'Đọc thêm'}
                                        </span>
                                    </Card.Body>
                                </Card>
                                </Card>

                               {/* Add new product below Adidas */}
                               <Card className="custom-card mt-3">
                                <Card.Title className="custom-title">3. Giày Vans </Card.Title>
                                    <Card.Img
                                        variant="top"
                                        src="https://drake.vn/image/catalog/H%C3%ACnh%20content/gi%C3%A0y-vans-nam-%C4%91%E1%BA%B9p/giay-vans-nam-dep-06.jpg"
                                        // className="custom-image"
                                        className="custom-image image-container"
                                    />
                                    <Card.Body>
                                        <Card.Text>
                                            {showFullContentVans
                                                ? `Giày Vans vốn được biết đến là đôi giày dành cho bộ môn lướt ván - trào lưu mới thời bấy giờ. Dần dần, Vans được giới trẻ cực kỳ ưa chuộng và sử dụng như những đôi giày thể thao khác. 

                                                Vans ra đời ngày 16 tháng 3 năm 1966 tại California, Mỹ do Paul Van Doren cùng các cộng sự của mình thành lập. Ngay từ phòng cách, thiết kế sản phẩm cũng có thể thấy được hình ảnh của những anh chàng Mỹ trẻ tuổi năng động, phá cách và khoẻ khoắn.`
                                                : `Giày Vans vốn được biết đến là đôi giày dành cho bộ môn lướt ván - ... `}
                                        </Card.Text>
                                        <span className={`read-more ${showFullContentVans ? 'collapse' : ''}`} onClick={toggleContentVans}>
                                            {showFullContentVans ? 'Thu gọn' : 'Đọc thêm'}
                                        </span>
                                    </Card.Body>
                                    {/* Add product content here */}
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5}>
                        {/* Right column */}
                        <Row>
                            <Col>
                                {/* Card for Adidas */}
                                <Card>
                                <Card className="custom-card">
                                    <Card.Title className="custom-title">2. Giày ADIDAS</Card.Title>
                                    <Card.Img
                                        variant="top"
                                        src="https://gcs.tripi.vn/public-tripi/tripi-feed/img/473702abm/4-adidas-18059.jpg"
                                        className="custom-image"
                                    />
                                    <Card.Body>
                                        <Card.Text>
                                            {showFullContentAdidas
                                                ? `Adidas là biểu tượng thời trang giày với doanh số bán hàng ấn tượng hàng năm. Với thiết kế truyền thống của mình với những 'vạch' nổi tiếng, Adidas thu hút người tiêu dùng bởi sự giản dị và tinh tế. ...`
                                                : `Adidas là biểu tượng thời trang giày với doanh số bán hàng ấn tượng hàng năm. ... `}
                                        </Card.Text>
                                        <span className={`read-more ${showFullContentAdidas ? 'collapse' : ''}`} onClick={toggleContentAdidas}>
                                            {showFullContentAdidas ? 'Thu gọn' : 'Đọc thêm'}
                                        </span>
                                    </Card.Body>
                                </Card>

                                {/* Add new product below Adidas */}
                                <Card className="custom-card mt-3">
                                <Card.Title className="custom-title">4. Giày Nike </Card.Title>
                                    <Card.Img
                                        variant="top"
                                        src="https://hanoi26sneaker.com/wp-content/uploads/2023/03/Giay-Nike-Air-Force-1-Low-College-Pack-Midnight-Navy-SH6928-698.jpg"
                                        // className="custom-image"
                                        className="custom-image image-container"
                                    />
                                    <Card.Body>
                                        <Card.Text>
                                            {showFullContentNike
                                                ? `Nike là một trong những thương hiệu thể thao nổi tiếng nhất trên thế giới. Từ học sinh tiểu học cho đến các vận động viên chuyên nghiệp, không ai có thể phủ nhận sức hấp dẫn của Nike. Nếu bạn khảo sát xem có bao nhiêu người đã hoặc đang sở hữu các sản phẩm của Nike, thì con số này sẽ khiến bạn bất ngờ.`
                                                : `Nike là một trong những thương hiệu thể thao nổi tiếng nhất trên thế giới.  ... `}
                                        </Card.Text>
                                        <span className={`read-more ${showFullContentNike ? 'collapse' : ''}`} onClick={toggleContentNike}>
                                            {showFullContentNike ? 'Thu gọn' : 'Đọc thêm'}
                                        </span>
                                    </Card.Body>
                                    {/* Add product content here */}
                                </Card>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Container>

            {/* Footer Component */}
            <Footer />
        </div>
    );
};

export default Blog;
