import axios from "axios";
import { format } from "date-fns";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";
import { default as React, useEffect, useState } from "react";
import { InputForm } from "../../components";
const Profile = (props) => {
  const { visible, setVisible } = props;
  const [profile, setProfile] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const formattedBirthday = profile.birthday
    ? format(new Date(user.birthday), "dd/MM/yyyy")
    : "";

  useEffect(() => {
    axios.get("http://localhost:9999/users/" + user.username)
      .then((res) => {
        setProfile(res.data);
        console.log(res.data);
      });
  }, [user.username]);
  console.log(profile);
  const onHide = () => {
    setVisible(false);
  };
  const dialogFooter = (
    <div>
      <Button
        label="Close"
        icon="pi pi-times"
        onClick={onHide}
        className="bg-red-600 border-red-600"
      />
      <Button
        label="Edit"
        icon="pi pi-spin pi-cog"
        className="bg-blue-600 border-red-600"
      />
    </div>
  );
  const icon = <i className="pi pi-search"></i>;
  return (
    <Dialog
      header="Profile"
      visible={visible}
      style={{ width: "70vw" }}
      modal
      onHide={onHide}
      footer={dialogFooter}
    >
      <div className="card bg-color m-4 ">
        <div className="grid grid-form">
          <div className="col-12 lg:col-3">
            <div className="card bg-color">
              <Image
                src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                indicatorIcon={icon}
                alt="Image"
                preview
                className=" m-auto"
              />
            </div>
          </div>
          <div className="col-12 lg:col-9 ">
            <div className="card bg-color">
              <div className="grid grid-form">
                <div className="col-12 lg:col-6">
                  <InputForm
                    id="full_name"
                    value={profile.full_name}
                    label="Full Name"
                    readOnly
                  />

                  <InputForm
                    id="email"
                    value={profile.Email}
                    label="Email"
                    readOnly
                  />
                  <InputForm
                    id="phone"
                    value={profile.phone}
                    label="Phone"
                    readOnly
                  />
                </div>
                <div className="col-12 lg:col-6">
                  <InputForm
                    id="birthday"
                    label="Date of birth"
                    readOnly
                    value={formattedBirthday}
                  />
                  <InputForm
                    id="address"
                    value={profile.address}
                    label="Address"
                    readOnly
                  />
                  <InputForm
                    id="gender"
                    value={profile.gender}
                    label="Gender"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Profile;
