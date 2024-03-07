import { Button } from "primereact/button";
import React from "react";
import { Container } from "react-bootstrap";
import { ChatDots, HandThumbsUp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Comments = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const exampleRating = 4;

  return (
    <Container>
      <div style={{ backgroundColor: "#eee" }}>
          <div className="row d-flex justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-start align-items-center">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                      alt="avatar"
                      width="60"
                      height="60"
                    />
                    <div>
                      <h6 className="fw-bold text-primary mb-1">
                        Lily Coleman
                      </h6>
                      <p className="text-muted small mb-0">
                        Shared publicly - Jan 2020
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 mb-4 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip consequat.
                  </p>

                  <div
                    className="d-flex justify-content-start"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Link
                      to={"/"}
                      className="d-flex align-items-center me-3"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingRight: "25px",
                      }}
                    >
                      <HandThumbsUp
                        style={{ fontSize: "26px", marginTop: "3px" }}
                      />{" "}
                      <h5 style={{ fontSize: "20px" }}>Like</h5>
                    </Link>
                    <Link
                      to={"/"}
                      className="d-flex align-items-center me-3"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingRight: "25px",
                      }}
                    >
                      <ChatDots
                        style={{ fontSize: "26px", marginTop: "3px" }}
                      />{" "}
                      <h5 style={{ fontSize: "20px" }}>Reply</h5>
                    </Link>
                    
                  </div>
                </div>
                <div
                  className="card-footer py-3 border-0 pl-4 pr-4"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex flex-start w-100">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                      alt="avatar"
                      width="40"
                      height="40"
                    />
                    <div className="form-outline w-100">
                      <textarea
                        className="form-control"
                        id="textAreaExample"
                        placeholder="Write comments..."
                        rows="4"
                        style={{ background: "#fff" }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="d-flex text-end mt-2 pt-1">
                    <Button
                      type="button"
                      className="p-button-primary p-button-sm"
                    >
                      Post comment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
  );
};

export default Comments;
