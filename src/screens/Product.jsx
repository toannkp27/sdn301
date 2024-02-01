import React from "react";
import { Button, Container, Image, Table } from "react-bootstrap";
import { PenFill, Trash3Fill } from "react-bootstrap-icons";
import nike from "../assets/images/nike.jpg";
const Product = () => {
  return (
    <Container className="list-product">
      <Table className="text-center">
        <tr>
          <th>ProductID</th>
          <th>Name</th>
          <th>Details</th>
          <th>Price</th>
          <th>Image</th>
          <th>Brand</th>
          <th>Quantity In Stock</th>
          <th>Size</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Nike air </td>
          <td>So beautyfull </td>
          <td>111</td>
          <td>
            <Image
              src={nike}
              alt="img-product"
              style={{ width: "90px", height: "100px" }}
            ></Image>
          </td>
          <td>Nike</td>
          <td>12</td>
          <td>39,40,41</td>
          <td>
            <Button className="btn btn-danger">
              <Trash3Fill />
            </Button>

            <Button>
              <PenFill />
            </Button>
          </td>
        </tr>
        <tr>
          <td>1</td>
          <td>Nike air </td>
          <td>So beautyfull</td>
          <td>111</td>
          <td>
            <Image
              src={nike}
              alt="img-product"
              style={{ width: "90px", height: "100px" }}
            ></Image>
          </td>
          <td>Nike</td>
          <td>12</td>
          <td>39,40,41</td>
          <td>
            <Button className="btn btn-danger">
              <Trash3Fill />
            </Button>

            <Button>
              <PenFill />
            </Button>
          </td>
        </tr>
      </Table>
    </Container>
  );
};

export default Product;
