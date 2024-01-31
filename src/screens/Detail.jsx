import { BreadCrumb } from "primereact/breadcrumb";
import { Button } from "primereact/button";
import { Galleria } from "primereact/galleria";
import { Image } from "primereact/image";
import { InputText } from "primereact/inputtext";
import { useState } from "react";

const Detail = () => {
  const [value, setValue] = useState(1);
  const items = [
    { label: "Bé trai" },
    { label: "Bộ sơ mi cotton bé trai" },
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

  const images = [
    {
      itemImageSrc:
        "https://bizweb.dktcdn.net/100/455/315/products/4-jpeg-9a6e4ddb-3a67-4644-ac1b-1d3e8ff68e97.jpg?v=1653990460127",
      alt: "Image 1",
      thumbnailImageSrc:
        "https://bizweb.dktcdn.net/100/455/315/products/4-jpeg-9a6e4ddb-3a67-4644-ac1b-1d3e8ff68e97.jpg?v=1653990460127",
    },
    {
      itemImageSrc:
        "https://bizweb.dktcdn.net/100/455/315/products/1-jpeg-6bd0aac2-5c53-411a-9fb2-7432f8f9cdd9.jpg?v=1653990458150",
      alt: "Image 2",
      thumbnailImageSrc:
        "https://bizweb.dktcdn.net/100/455/315/products/1-jpeg-6bd0aac2-5c53-411a-9fb2-7432f8f9cdd9.jpg?v=1653990458150",
    },
    {
      itemImageSrc:
        "https://bizweb.dktcdn.net/100/455/315/products/2-jpeg-e920b6ad-4798-4333-9105-c7d33296880d.jpg?v=1653990459337",
      alt: "Image 3",
      thumbnailImageSrc:
        "https://bizweb.dktcdn.net/100/455/315/products/2-jpeg-e920b6ad-4798-4333-9105-c7d33296880d.jpg?v=1653990459337",
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
    <div className="container">
      <div className="m-2 w-full">
        <BreadCrumb model={items} home={home} />
      </div>
      <div className="card bg-color ">
        <div className="grid grid-form">
          <div className="col-6 lg:col-6  ">
            <Galleria
              value={images}
              responsiveOptions={responsiveOptions}
              numVisible={3}
              style={{ maxWidth: "640px" }}
              item={itemTemplate}
              thumbnail={thumbnailTemplate}
            />
          </div>
          <div className="col-6 lg:col-6  ">
            <h2>Bộ sơ mi cotton bé trai</h2>
            <div>Mã sp: Đang cập nhật</div>
            <div className=" ">
              <div className="text-4xl text-red-400 inline-block font-bold">
                200.000đ
              </div>{" "}
              <span className="line-through text-xl text-color inline-block">
                250.000đ
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
            <div>Số lượng:</div>
            <div className="mt-2">
              <Button
                className=" bg-white text-green-600 h-2rem w-4rem border-round border-2 border-green-600"
                label="-"
                onClick={decreaseQuantity}
              />
              <InputText
                className="h-2rem w-4rem border-round border-2 border-green-600"
                style={{ textAlign: "center" }}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button
                className=" bg-white text-green-600 h-2rem w-4rem border-round border-2 border-green-600"
                label="+"
                onClick={increaseQuantity}
              />
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
                src="https://bizweb.dktcdn.net/thumb/large/100/455/315/products/4-jpeg-66d23174-0378-4f81-bc4e-2da7680f7338-eaf329e3-d8d4-4929-8093-2c858b5656a3.jpg?v=1656643686227"
                alt="Image"
                width="210"
                preview
              />
              <div className="font-bold text-base">
                Sơ mi đũi bé trai vải dày dặn
              </div>
              <div className="text-xl text-red-400 inline-block font-bold">
                200.000đ
              </div>{" "}
              <span className="line-through text-base text-color inline-block">
                250.000đ
              </span>{" "}
            </div>
            <div className="m-2 border-round-md">
              <Image
                className="border-round-md"
                src="https://bizweb.dktcdn.net/thumb/large/100/455/315/products/4-jpeg-66d23174-0378-4f81-bc4e-2da7680f7338-eaf329e3-d8d4-4929-8093-2c858b5656a3.jpg?v=1656643686227"
                alt="Image"
                width="210"
                preview
              />
              <div className="font-bold text-base">
                Sơ mi đũi bé trai vải dày dặn
              </div>
              <div className="text-xl text-red-400 inline-block font-bold">
                200.000đ
              </div>{" "}
              <span className="line-through text-base text-color inline-block">
                250.000đ
              </span>{" "}
            </div>
            <div className="m-2 border-round-md">
              <Image
                className="border-round-md"
                src="https://bizweb.dktcdn.net/thumb/large/100/455/315/products/4-jpeg-66d23174-0378-4f81-bc4e-2da7680f7338-eaf329e3-d8d4-4929-8093-2c858b5656a3.jpg?v=1656643686227"
                alt="Image"
                width="210"
                preview
              />
              <div className="font-bold text-base">
                Sơ mi đũi bé trai vải dày dặn
              </div>
              <div className="text-xl text-red-400 inline-block font-bold">
                200.000đ
              </div>{" "}
              <span className="line-through text-base text-color inline-block">
                250.000đ
              </span>{" "}
            </div>
            <div className="m-2 border-round-md">
              <Image
                className="border-round-md"
                src="https://bizweb.dktcdn.net/thumb/large/100/455/315/products/4-jpeg-66d23174-0378-4f81-bc4e-2da7680f7338-eaf329e3-d8d4-4929-8093-2c858b5656a3.jpg?v=1656643686227"
                alt="Image"
                width="210"
                preview
              />
              <div className="font-bold text-base">
                Sơ mi đũi bé trai vải dày dặn
              </div>
              <div className="text-xl text-red-400 inline-block font-bold">
                200.000đ
              </div>{" "}
              <span className="line-through text-base text-color inline-block">
                250.000đ
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
