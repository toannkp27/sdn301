import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Panel } from "primereact/panel";
import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useParams } from "react-router";
const Comments = () => {
  const [listComments, setListComments] = useState([]);
  const { pid } = useParams();
  const [text, setText] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const [isUpdateInput, setisUpdateInput] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [editCommentText, setEditCommentText] = useState(""); // New state to store text being edited

  useEffect(() => {
    axios
      .get("http://localhost:9999/comments/" + pid)
      .then((res) => {
        const sortedComments = res.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setListComments(sortedComments);
        console.log(sortedComments);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

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

  const handleEditComment = (index, currentText) => {
    setEditCommentText(currentText); // Đặt lại trạng thái sau khi cập nhật
    setSelectedIndex(index); 
    setisUpdateInput(true); // Đặt isUpdateInput thành true để hiển thị trường nhập để chỉnh sửa
  };

  const handleUpdate = (index) => {
    axios
      .put("http://localhost:9999/comments/" + index, {
        text: editCommentText, 
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Edit comment successfully");
          // Refresh the comments after editing
          axios
            .get("http://localhost:9999/comments/" + pid)
            .then((res) => {
              const sortedComments = res.data.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
              );
              setListComments(sortedComments);
            })
            .catch((err) => {
              console.log(err.message);
            });
        } else {
          console.log("Edit comment failed");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
    setEditCommentText(""); 
    setSelectedIndex(null);
    setisUpdateInput(false);
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
          {user && (
            <InputText
              value={text}
              rows={2}
              cols={30}
              onChange={(e) => setText(e.target.value)}
            />
          )}
        </div>
        <div className="p-col-fixed">
          {user && (
            <Button
              label="Post"
              className="p-button-primary"
              onClick={handleCreate}
            />
          )}
        </div>
      </div>
      <div>
      <Col>
          {listComments.map((l, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <div className="bg-light p-2 rounded">
                    <strong>{l.userId?.username}</strong>
                    {isUpdateInput && selectedIndex === index ? (
                      <>
                        <InputText
                          value={editCommentText} 
                          rows={2}
                          cols={30}
                          onChange={(e) => setEditCommentText(e.target.value)}
                        />
                        <Button
                          label="OK"
                          onClick={() => handleUpdate(l._id)}
                          className="p-button-primary"
                        />
                      </>
                    ) : (
                      <p className="mb-0 d-block">{l.text}</p>
                    )}
                  </div>
                  {user && l.userId?._id === user._id && (
                    <>
                      <button
                        onClick={(e) => handleDeleteComment(e, l._id)}
                        className="btn btn-sm btn-danger ml-2"
                      >
                        Xóa
                      </button>
                      <button
                        className="btn btn-sm btn-danger ml-2"
                        onClick={() => handleEditComment(index, l.text)}
                      >
                        Edit
                      </button>
                    </>
                  )}
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