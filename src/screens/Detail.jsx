import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const Detail = () => {
  const [value, setValue] = useState(1);
  const items = [
    { label: "Nữ" },
    { label: "Chạy" },
    { label: "GIÀY ULTRABOOST 22" },
  ];
  const home = { icon: "pi pi-home", url: "http://localhost:3000/" };
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
  };

  const buttons = ["3.5 UK", "4 UK", "4.5 UK", "5 UK"];
  const images = [
    {
      itemImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/798d3061f5934cd1983bade800a7f2dd_9366/GIAY_ULTRABOOST_22_trang_GX5595_01_standard.jpg",
      alt: "Image 1",
      thumbnailImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/798d3061f5934cd1983bade800a7f2dd_9366/GIAY_ULTRABOOST_22_trang_GX5595_01_standard.jpg",
    },
    {
      itemImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b14ab283e8664331ac44ade800a804d3_9366/GIAY_ULTRABOOST_22_trang_GX5595_02_standard_hover.jpg",
      alt: "Image 2",
      thumbnailImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b14ab283e8664331ac44ade800a804d3_9366/GIAY_ULTRABOOST_22_trang_GX5595_02_standard_hover.jpg",
    },
    {
      itemImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e135a7cfd7c490a8ac4ade800a80d4e_9366/GIAY_ULTRABOOST_22_trang_GX5595_03_standard.jpg",
      alt: "Image 3",
      thumbnailImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6e135a7cfd7c490a8ac4ade800a80d4e_9366/GIAY_ULTRABOOST_22_trang_GX5595_03_standard.jpg",
    },
    {
      itemImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/616ba20c88d742909a7dade500f6a6fb_9366/GIAY_ULTRABOOST_22_trang_GX5595_04_standard.jpg",
      alt: "Image 4",
      thumbnailImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/616ba20c88d742909a7dade500f6a6fb_9366/GIAY_ULTRABOOST_22_trang_GX5595_04_standard.jpg",
    },
    {
      itemImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c6fde21e28743818a74ade800a81553_9366/GIAY_ULTRABOOST_22_trang_GX5595_05_standard.jpg",
      alt: "Image 4",
      thumbnailImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c6fde21e28743818a74ade800a81553_9366/GIAY_ULTRABOOST_22_trang_GX5595_05_standard.jpg",
    },
    {
      itemImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d81bb06294b440379161ade800a82c41_9366/GIAY_ULTRABOOST_22_trang_GX5595_09_standard.jpg",
      alt: "Image 4",
      thumbnailImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d81bb06294b440379161ade800a82c41_9366/GIAY_ULTRABOOST_22_trang_GX5595_09_standard.jpg",
    },
    {
      itemImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12fdec9a222f4226bea2ade800a7fc46_9366/GIAY_ULTRABOOST_22_trang_GX5595_06_standard.jpg",
      alt: "Image 4",
      thumbnailImageSrc:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12fdec9a222f4226bea2ade800a7fc46_9366/GIAY_ULTRABOOST_22_trang_GX5595_06_standard.jpg",
    },
  ];

  const itemTemplate = (item) => {
    return (
      <img src={item.itemImageSrc} alt={item.alt} style={{ width: "100%" }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ width: "50%" }}
      />
    );
  };
  const increaseQuantity = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decreaseQuantity = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };

  return (
    <div
      className="container"
      style={{ paddingTop: "113px", paddingBottom: "20px" }}
    >
      <div className="m-2 w-full">
        <BreadCrumb model={items} home={home} />
      </div>
      <div className="card bg-color ">
        <div className="grid grid-form">
          <div className="col-6 lg:col-6  ">
            <Galleria
              value={images}
              responsiveOptions={responsiveOptions}
              numVisible={5}
              style={{ maxWidth: "640px" }}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
            />
          </div>
          <div className="col-6 lg:col-6  ">
            <h2>GIÀY ULTRABOOST 22</h2>
            <div>Mã sp: Đang cập nhật</div>
            <div className=" ">
              <div className="text-4xl text-red-400 inline-block font-bold">
                2.600.000₫
              </div>{" "}
              <span className="line-through text-xl text-color inline-block">
                5.200.000₫
              </span>{" "}
              <div className=" font-bold text-white border-round w-4rem h-2rem m-2 bg-red-400 flex align-items-center justify-content-center">
                Sale
              </div>
            </div>
            <div>
              <div className="grid grid-form">
                <div className="col-2 lg:col-2  ">
                  <img
                    class="img-responsive"
                    alt="ss"
                    src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/iamge_product2.png?1688607702821"
                  ></img>
                </div>
                <div className="col-10 lg:col-10  ">
                  <div className="font-bold">Miễn phí vận chuyển</div>
                  <div>Cho đơn hàng từ 499.000đ</div>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-form">
                <div className="col-2 lg:col-2  ">
                  <img
                    class="img-responsive"
                    alt="ss"
                    src="//bizweb.dktcdn.net/100/455/315/themes/894917/assets/iamge_product1.png?1688607702821"
                  ></img>
                </div>
                <div className="col-10 lg:col-10  ">
                  <div className="font-bold">Miễn phí đổi, sửa hàng</div>
                  <div>
                    Đổi hàng trong 30 ngày kể từ ngày mua Hỗ trợ sửa đồ miễn phí
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">Số lượng:</div>
            <div className="mt-2">
              <Button
                className=" bg-white text-green-600 h-4rem w-4rem border-round border-2 border-green-600"
                label="-"
                onClick={decreaseQuantity}
              />
              <InputText
                className="h-4rem w-4rem border-round border-2 border-green-600"
                style={{ textAlign: "center" }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button
                className=" bg-white text-green-600 h-4rem w-4rem border-round border-2 border-green-600"
                label="+"
                onClick={increaseQuantity}
              />
            </div>
            <div className="mt-2">Kích cỡ:</div>
            <div className="mt-2">
              {buttons.map((button, index) => (
                <div key={index} className="mr-2 inline-block">
                  <Button
                    className={` ${
                      selectedButton === index
                        ? "bg-green-600 text-white"
                        : "bg-white text-green-600 border-round border-1"
                    }`}
                    onClick={() => handleButtonClick(index)}
                  >
                    <span>{button}</span>
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-2">
              <Button className="w-full bg-green-600" label="Mua ngay" />
            </div>
            <div className="mt-2">
              <Button
                className="w-full border-round border-2 bg-white text-green-600 border-green-600"
                label="Thêm vào giỏ hàng"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="text-4xl font-bold mt-2">Sản phẩm tương tự</div>
        <div className="mt-2">
          <div className="flex justify-content-center">
            <div className="m-2 border-round-md">
              <Image
                className="border-round-md"
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/798d3061f5934cd1983bade800a7f2dd_9366/GIAY_ULTRABOOST_22_trang_GX5595_01_standard.jpg"
                alt="Image"
                width="210"
                preview
              />
              <div className="font-bold text-base">GIÀY ULTRABOOST 22</div>
              <div className="text-xl text-red-400 inline-block font-bold">
                2.600.000₫
              </div>{" "}
              <span className="line-through text-base text-color inline-block">
                5.200.000₫
              </span>{" "}
            </div>
            <div className="m-2 border-round-md">
              <Image
                className="border-round-md"
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/798d3061f5934cd1983bade800a7f2dd_9366/GIAY_ULTRABOOST_22_trang_GX5595_01_standard.jpg"
                alt="Image"
                width="210"
                preview
              />
              <div className="font-bold text-base">GIÀY ULTRABOOST 22</div>
              <div className="text-xl text-red-400 inline-block font-bold">
                2.600.000₫
              </div>{" "}
              <span className="line-through text-base text-color inline-block">
                5.200.000₫
              </span>{" "}
            </div>
            <div className="m-2 border-round-md">
              <Image
                className="border-round-md"
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/798d3061f5934cd1983bade800a7f2dd_9366/GIAY_ULTRABOOST_22_trang_GX5595_01_standard.jpg"
                alt="Image"
                width="210"
                preview
              />
              <div className="font-bold text-base">GIÀY ULTRABOOST 22</div>
              <div className="text-xl text-red-400 inline-block font-bold">
                2.600.000₫
              </div>{" "}
              <span className="line-through text-base text-color inline-block">
                5.200.000₫
              </span>{" "}
            </div>
            <div className="m-2 border-round-md">
              <Image
                className="border-round-md"
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/798d3061f5934cd1983bade800a7f2dd_9366/GIAY_ULTRABOOST_22_trang_GX5595_01_standard.jpg"
                alt="Image"
                width="210"
                preview
              />
              <div className="font-bold text-base">GIÀY ULTRABOOST 22</div>
              <div className="text-xl text-red-400 inline-block font-bold">
                2.600.000₫
              </div>{" "}
              <span className="line-through text-base text-color inline-block">
                5.200.000₫
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
