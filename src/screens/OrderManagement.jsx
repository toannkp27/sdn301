import React from "react";
import { Button, Container, Image, Table } from "react-bootstrap";
import { PenFill, Trash3Fill } from "react-bootstrap-icons";
import nike from "../assets/images/nike.jpg";

const OrderManagement = () => {
  return (
    <Container className="list-product">
         <h3 className="text-center">ORDER MANAGEMENT</h3>
      <Table className="text-center">
        <tr>
          <th>Name</th>
          <th>Ordered</th>
          <th>ProductInformation</th>
          <th>Image</th>
          <th>Size</th>
          <th>Quantity In Stock</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Nike air </td>
          <td>10/12/2002 </td>
          <td>Giày Nike</td>
          <td>
            <Image
              src={nike}
              alt="img-product"
              style={{ width: "90px", height: "100px" }}
            ></Image>
          </td>
          <td>39</td>
          <td>1</td>
          <td>330.000</td>
          <td>
            <select>
              <option value="0">Chờ Xác Nhận</option>
              <option value="1">Đã Thanh Toán</option>
              <option value="2">Đã Giao Hàng</option>
            </select>
          </td>
        </tr>
      </Table>
    </Container>
  );
};

export default OrderManagement;
