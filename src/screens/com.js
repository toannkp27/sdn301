import React, { useEffect, useState } from "react";
import { Panel } from "primereact/panel";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button"; // Thêm import này
import { Menubar } from "primereact/menubar"; // Thêm import này
import axios from "axios";
import { Col } from "react-bootstrap";
import { useParams } from "react-router";
import { classNames } from "primereact/utils"; // Thêm import này

const Com = () => {
  const [listComments, setListComments] = useState([]);
  const { pid } = useParams();
  const [text, setText] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const [showButtons, setShowButtons] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
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
          const newCommentId = response.data.comment._id;
          setListComments([
            { _id: newCommentId, userId: user, text: text },
            ...listComments,
          ]);
          setText("");
        } else {
          console.log("Comment thất bại");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const handleBigButtonClick = () => {
    setShowButtons(!showButtons);
  };

  const items = [
    {
      label: "Edit",
      icon: "pi pi-pencil",
      command: () => {
        console.log("Edit clicked");
      },
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
      command: () => {
        console.log("Delete clicked");
      },
    },
  ];

  return (
    <Panel header="Thêm Bình Luận" className="mt-4">
      <Col>
        <div className="d-flex align-items-center">
          <strong style={{ marginRight: "10px" }}>thắng</strong>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p className="mb-0 d-block" style={{ marginRight: "5px" }}>HuynhAnhBinh</p>
            <span
              className={classNames("three-dots", { "disabled": showButtons, "hovered": isHovered })}
              onClick={handleBigButtonClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ cursor: "pointer", marginTop: "15px" }}
            >
              {showButtons ? <>&#x22EF;</> : <>&#x22EF;</>}
            </span>
            {showButtons && (
              <Menubar model={items} className="ml-2" />
            )}
          </div>
        </div>
      </Col>
    </Panel>
  );
};

export default Com;