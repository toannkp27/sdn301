import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component"; // Importing the component from the package

const Comments = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const exampleRating = 4;
  return (
    <Container>
      <Row>
        <Col>
          <Form className="d-flex align-items-center mt-4">
            <Image
              src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
              roundedCircle
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <Form.Group controlId="commentInput" className="flex-grow-1 mr-2">
              <Form.Control type="text" placeholder="Write a comment..." />
            </Form.Group>
            {/* ReactStars component for star rating */}
            <div className="mr-2">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </div>
            <Button variant="primary" type="submit">
              Post
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <div className="d-flex">
            <Image
              src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
              roundedCircle
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            <div>
              <div className="bg-light p-2 rounded">
                <strong className="d-flex justify-content-start">
                  VanThang
                </strong>
                <ReactStars
                  count={5}
                  value={exampleRating}
                  size={20}
                  activeColor="#ffd700"
                  edit={false}
                />
                <p className="d-flex justify-content-start">Very Good</p>
              </div>
              <small className="text-muted">3 mins ago</small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Comments;
