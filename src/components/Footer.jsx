import React from 'react';
import { Button } from 'primereact/button';
import logo from "../assets/images/logoooo.png";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <img
                    src={logo}
                    height={80}
                    alt="logo"
                    style={{ objectFit: "contain", paddingLeft: "50px" }}
                />
            </div>
           {/* . */}

            <div className="footer-column p-col p-md-4 p-lg-4 p-text-center order-2 order-md-1" style={{ marginRight: '1rem', paddingLeft: "40px"  }}>
                <h2 className="footer-heading">Support</h2>
                    <p>Documentation</p>
                    <p>Forums</p> 
                    <p>Language Packs</p>
                    <p>Blog</p>
            </div>

            <div className="footer-column p-col p-md-4 p-lg-4 p-text-center order-1 order-md-3">
                <h2 className="footer-heading">Contact Us</h2>
                <p>Đại học FPT Hà Nội</p>
                <p>Email: contact@example.com</p>
                <p>Điện thoại: (012) 345-6789</p>
            </div>

            <div className="footer-column p-col p-md-4 p-lg-4 p-text-center order-3 order-md-2">
                <h2 className="footer-heading">Follow Us</h2>
                <Button icon="pi pi-facebook" size='large' className="p-button-rounded p-button-text custom-button" />
                <Button icon="pi pi-twitter"  size='large' className="p-button-rounded p-button-text custom-button" />
                <Button icon="pi pi-instagram" size='large' className="p-button-rounded p-button-text custom-button" />
            </div>
            <style jsx>{`
                .footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1rem;
                    background-color: #f0f0f0;
                }

                .footer-column {
                    flex-grow: 1; /* Mở rộng ra để lấp đầy không gian trong flex container */
                }

                .footer-heading {
                    margin: 0; /* Loại bỏ margin mặc định của h2 */
                    padding: 0; /* Loại bỏ padding mặc định của h2 */
                    line-height: 1.5; /* Đảm bảo chiều cao của h2 tương đương với nội dung bên trong */
                }

                .p-col {
                    width: 100%;
                }
                .custom-button {
                  background-color: transparent; /* Đảm bảo màu nền trong suốt */

                @media (min-width: 576px) {
                    .p-col {
                        width: auto;
                    }
                }
            `}</style>
        </div>
    );
}

export default Footer;