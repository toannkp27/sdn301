import axios from "axios";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

const ChangePassWord = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
    marginBottom: "30px",
  };

  const formStyle = {
    width: "60%",
    marginBottom: 10,
  };
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [reNewPass, setReNewPass] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleUpdate = () => {
    if (!oldPass || !newPass || !reNewPass) {
      alert("Please fill in all fields!");
      return;
    }
    if (newPass !== reNewPass) {
      alert("New passwords do not match!");
      return;
    }
    if (oldPass !== user.password) {
      alert("Old password is incorrect!");
      return;
    }

    axios
      .put(`http://localhost:9999/users/${user.username}`, {
        password: newPass,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Change password successfully!");
          setOldPass("");
          setNewPass("");
          setReNewPass("");
          const updatedUser = { ...user, password: newPass };
          localStorage.setItem("user", JSON.stringify(updatedUser));
          
        } else {
          alert("Change password failed!");
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
        alert("Change password failed!");
      });
  };

  return (
    <div style={containerStyle}>
      <div className="card d-flex" style={formStyle}>
        <div className="p-inputgroup flex-1" style={{ marginBottom: 10 }}>
          <span className="p-inputgroup-addon">
            <i className="pi pi-lock"></i>
          </span>
          <InputText
            placeholder="Old Password"
            type="password"
            style={{ width: "50px" }}
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
          />
        </div>
        <div className="p-inputgroup flex-1" style={{ marginBottom: 10 }}>
          <span className="p-inputgroup-addon">
            <i className="pi pi-unlock"></i>
          </span>
          <InputText
            placeholder="New Password"
            type="password"
            style={{ width: "50px" }}
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
        </div>
        <div className="p-inputgroup flex-1" style={{ marginBottom: 10 }}>
          <span className="p-inputgroup-addon">
            <i className="pi pi-lock-open"></i>
          </span>
          <InputText
            placeholder="Re-enter New Password"
            type="password"
            style={{ width: "50px" }}
            value={reNewPass}
            onChange={(e) => setReNewPass(e.target.value)}
          />
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Button
            label="Change Password"
            icon="pi pi-check"
            onClick={handleUpdate}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassWord;
