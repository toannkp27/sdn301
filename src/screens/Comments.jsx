import React, { useEffect, useState } from "react";
import { Panel } from "primereact/panel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import { Image } from "primereact/image";
import { Col } from "react-bootstrap";
import { useParams } from "react-router";

const Comments = () => {
  const [listComments, setListComments] = useState([]);
  const { pid } = useParams();
  const [text, setText] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios.get("http://localhost:9999/comments/" + pid).then((res) => {
      setListComments(res.data);
      console.log(res.data);
    });
  }, []);
  console.log(user._id);
  // const handleCreate = () => {
  //   axios
  //     .post("http://localhost:9999/comments", {
  //       text: text,
  //       userId: user._id,
  //       productId: pid,
  //     })
  //     .then((response) => {
  //       if (response.status === 201) {
  //         alert("Comments thành công");
  //         const newCommentId = response.data.comment._id; // Lấy _id từ phản hồi của máy chủ
  //         setListComments([...listComments, { _id: newCommentId, userId: user, text: text }]);
  //         setText("");
  //         console.log(response.data);
  //       } else {
  //         console.log("Comment thất bại");
  //       }
  //     })

  //     .catch((error) => {
  //       console.error("Error: ", error);
  //     });
  // };
  const handleCreate = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9999/comments", {
        text: text,
        userId: user._id,
        productId: pid,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Comments thành công");
          const newCommentId = response.data.comment._id; // Lấy _id từ phản hồi của máy chủ
          setListComments([
            { _id: newCommentId, userId: user, text: text },
            ...listComments,
          ]);
          setText("");
          console.log(response.data);
        } else {
          console.log("Comment thất bại");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleDeleteComment = (e, index) => {
    e.preventDefault();

    if (window.confirm("Do you want to remove comment - ID: " + index + "?")) {
      axios
        .delete("http://localhost:9999/comments/" + index)
        .then(() => {
          alert("Delete successfully!");
          setListComments(listComments.filter((t) => t._id !== index));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <Panel header="Add Comment" className="mt-4">
      <div className=" flex justify-content-center">
        <div className="p-col-fixed">
          <img
            src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
            alt="User Avatar"
            style={{
              width: "40px",
              height: "40px",
              marginRight: "10px",
              borderRadius: "50%",
            }}
          />
        </div>
        <div className=" flex justify-content-center">
          <InputText
            value={text}
            rows={2}
            cols={30}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="p-col-fixed">
          <Button
            label="Post"
            className="p-button-primary"
            onClick={handleCreate}
          />
        </div>
      </div>
      <div>
        <Col>
          {listComments.map((l, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex">
                {/* <Image
          src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
          roundedCircle
          style={{ width: "5px", height: "40px", marginRight: "10px" }}
        /> */}
                <div className="d-flex align-items-center">
                  <div className="bg-light p-2 rounded">
                    <strong>{l.userId?.username}</strong>
                    <p className="mb-0 d-block">{l.text}</p>
                  </div>
                  <button
                    onClick={(e) => handleDeleteComment(e, l._id)}
                    className="btn btn-sm btn-danger ml-2"
                  >
                    Xóa
                  </button>
                  <button className="btn btn-sm btn-danger ml-2">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </Col>
      </div>
    </Panel>
  );
};

export default Comments;
