
import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ChangePassWord = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop:'30px',
    marginBottom:'30px'
  };

  const formStyle = {
    width: "60%",
    marginBottom: 10,
  };


  const handleChange = () => {
    const userDataString = localStorage.getItem("user");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      console.log("User ID:", userData._id);
      console.log("Username:", userData.username);
    } else {
      console.log("User data not found in localStorage");
    }
  }
  
 

  return (
    <div style={containerStyle}>
        
      <div className="card d-flex" style={formStyle}>
        <div className="p-inputgroup flex-1" style={{ marginBottom: 10 }}>
          <span className="p-inputgroup-addon">
            <i className="pi pi-lock"></i>
          </span>
          <InputText placeholder="Old PassWord" type="password" style={{ width: "50px" }} />
        </div>
        <div className="p-inputgroup flex-1" style={{ marginBottom: 10 }}>
          <span className="p-inputgroup-addon">
            <i className="pi pi-unlock"></i>
          </span>
          <InputText placeholder="New PassWord" type="password" style={{ width: "50px" }} />
        </div>
        <div className="p-inputgroup flex-1" style={{ marginBottom: 10 }}>
          <span className="p-inputgroup-addon">
            <i className="pi pi-lock-open"></i>
          </span>
          <InputText placeholder="Re-NewPassWord" type="password" style={{ width: "50px" }} />
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Button label="Change Password" icon="pi pi-check"  onClick={handleChange}/>
        </div>
      </div>
    </div>
  );
};

export default ChangePassWord;