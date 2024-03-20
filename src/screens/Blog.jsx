import "primeicons/primeicons.css";
import { Card } from "primereact/card";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import React, { useState } from "react";
import { BreadCrumb } from "../uiCore";

// Component Header
const Header = () => (
  <div style={{ marginLeft: "20px", paddingRight: "25px" }}>
    <h1>Shoe Blog</h1>
  </div>
);

//Component Footer
const Footer = () => (
  <div
    className="footer-container"
    style={{
      position: "fixed",
      bottom: 0,
      width: "100%",
      zIndex: 100,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <p className="m-0">© 2024 Shoe Blog. All rights reserved.</p>
  </div>
);

// Component Blog
const Blog = () => {
  const [showFullContent, setShowFullContent] = useState({
    Puma: false,
    Adidas: false,
    Balance: false,
    Nike: false,
  });

   
  // Puma: false,
  // Adidas: false,
  // Balance: false,
  // Nike: false,


  const shoeImages = {
    Puma:
      "https://product.hstatic.net/1000243581/product/1d71864f409945acb84b9c84ca3f91cb_a53e3a2b71dd48cda11219d76b92946e_grande.jpg",
    Adidas:
      "https://giayxshop.vn/wp-content/uploads/2024/02/z5181999377889_f8e8e19ac44bb5ec4f25738905fc1a00.jpg ",
    Balance: "https://giayxshop.vn/wp-content/uploads/2022/05/z4770893597522_7d0b0d7a52eb3c20d6d49114c2fadd29.jpg",
    Nike: "https://giayxshop.vn/wp-content/uploads/2021/12/24-5-scaled.jpg",
  };

  const descriptions = {
    Puma: {
      short: "Giày Puma là...",
      full: "Giày Puma là một trong những thương hiệu giày lâu đời và nổi tiếng bậc nhất trên thế giới. Với thiết kế đẹp, chất lượng tuyệt vời cùng khả năng marketing tốt, thương hiệu giày Puma đã thu hút được một lượng fans khổng lồ trên thế giới, trở thành 1 trong 5 thương hiệu giày được yêu thích nhất hiện tại.",
    },
    Adidas: {
      short: "Giày Adidas là...",
      full: "Adidas (tiếng Đức: [ˈʔadiˌdas] ⓘ; cách điệu thành adidas từ năm 1949)là một tập đoàn đa quốc gia của Đức, được thành lập và có trụ sở tại Herzogenaurach, Bavaria, chuyên thiết kế và sản xuất giày dép, quần áo và phụ kiện. Đây là nhà sản xuất đồ thể thao lớn nhất ở châu Âu và lớn thứ hai trên thế giới, sau Nike. Đây là công ty cổ phần của Tập đoàn Adidas, bao gồm 8,33% cổ phần của câu lạc bộ bóng đá Bayern München,[7] và Runtastic, một công ty công nghệ thể dục của Áo. Doanh thu của Adidas cho năm 2018 được liệt kê là 21,915 tỷ euro.",
    },
    Balance: {
      short: "Giày Balance là...",
      full: "Balance là một thương hiệu sản xuất giày, thời trang và phụ kiện nổi tiếng của Mỹ Công ty được thành lập năm 1966 bởi Paul và Jim Van Doren cùng đối tác là Gordon Lee và Serge Delia. Thương hiệu nổi tiếng toàn cầu và được xem là biểu tượng gắn liền với phong cách trượt ván đường phố. Ban đầu là một doanh nghiệp sản xuất giày và bán trực tiếp cho công chúng. Cái tên Balance đã sống qua gần 1 thế kỷ và vượt xa hơn trên toàn thế giới. Cho đến nay, Balance đã vươn mình thành thương hiệu được săn đón hàng đầu.",
    },
    Nike: {
      short: "Giày Nike là...",
      full: "Nike là một trong những thương hiệu thể thao nổi tiếng nhất trên thế giới. Từ học sinh tiểu học cho đến các vận động viên chuyên nghiệp, không ai có thể phủ nhận sức hấp dẫn của Nike. Nếu bạn khảo sát xem có bao nhiêu người đã hoặc đang sở hữu các sản phẩm của Nike, thì con số này sẽ khiến bạn bất ngờ.",
    },
  };
  // ..
  const toggleContent = (brand) => {
    setShowFullContent((prev) => ({ ...prev, [brand]: !prev[brand] }));
  };
  const items = [{ label: "Shoe Blog" }];
  const home = { icon: "pi pi-home", url: "http://localhost:3000/" };

  return (
    <div
      className="container"
      style={{ paddingTop: "15px", paddingBottom: "20px" }}
    >
      <div className="m-2 w-full">
        <BreadCrumb model={items} home={home} />
      </div>
      <div
        className="flex align-items-center justify-content-center"
        style={{
          paddingBottom: "60px",
          display: "flex",
          flexDirection: "row",
          paddingTop: "50px",
        }}
      >
        <div style={{ width: "40%", padding: "5px", display: "flex" }}>
          <Card
            title={`Giày Puma`}
            onClick={() => toggleContent("Puma")}
            style={{ marginBottom: "20px", flex: 1 }}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={shoeImages["Puma"]}
                alt={"Puma"}
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  border: "none",
                  display: "flex",
                }}
              />
              <div style={{ maxWidth: "100%", paddingTop: "20px" }}>
                <p>
                  {showFullContent["Puma"]
                    ? descriptions["Puma"].full
                    : descriptions["Puma"].short}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {showFullContent["Puma"] ? "Thu gọn" : "Đọc thêm"}
              </button>
            </div>
          </Card>
        </div>
        <div style={{ width: "40%", padding: "5px", display: "flex" }}>
          <Card
            title={`Giày Adidas`}
            onClick={() => toggleContent("Adidas")}
            style={{ marginBottom: "20px", flex: 1 }}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={shoeImages["Adidas"]}
                alt={"Adidas"}
                style={{
                  width: "100%",
                  marginBottom: "1rem",
                  border: "none",
                  display: "flex",
                }}
              />
              <div style={{ maxWidth: "100%", paddingTop: "20px" }}>
                <p>
                  {showFullContent["Adidas"]
                    ? descriptions["Adidas"].full
                    : descriptions["Adidas"].short}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 5px",
                  borderRadius: "5px",
                }}
              >
                {showFullContent["Adidas"] ? "Thu gọn" : "Đọc thêm"}
              </button>
            </div>
          </Card>
        </div>
      </div>

      <div
        className="flex align-items-center justify-content-center"
        style={{
          paddingBottom: "60px",
          display: "flex",
          flexDirection: "row",
          paddingTop: "50px",
        }}
      >
        <div style={{ width: "40%", padding: "5px", display: "flex" }}>
          <Card
            title={`Giày Balance`}
            onClick={() => toggleContent("Balance")}
            style={{ marginBottom: "20px", flex: 1 }}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={shoeImages["Balance"]}
                alt={"Balance"}
                style={{ width: "100%", marginBottom: "1rem", border: "none" }}
              />
              <div style={{ maxWidth: "100%" }}>
                <p>
                  {showFullContent["Balance"]
                    ? descriptions["Balance"].full
                    : descriptions["Balance"].short}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {showFullContent["Balance"] ? "Thu gọn" : "Đọc thêm"}
              </button>
            </div>
          </Card>
        </div>
        <div style={{ width: "40%", padding: "5px", display: "flex" }}>
          <Card
            title={`Giày Nike`}
            onClick={() => toggleContent("Nike")}
            style={{ marginBottom: "20px", flex: 1 }}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={shoeImages["Nike"]}
                alt={"Nike"}
                style={{ width: "100%", marginBottom: "1rem", border: "none" }}
              />
              <div style={{ maxWidth: "100%" }}>
                <p>
                  {showFullContent["Nike"]
                    ? descriptions["Nike"].full
                    : descriptions["Nike"].short}
                </p>
              </div>
              <button
                style={{
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {showFullContent["Nike"] ? "Thu gọn" : "Đọc thêm"}
              </button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
