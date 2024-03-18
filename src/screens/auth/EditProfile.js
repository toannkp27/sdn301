import axios from "axios";
import { format } from "date-fns";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";
import { default as React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../../components";
const EditProfile = (props) => {
  const { visible, setVisible } = props;
  const user = JSON.parse(localStorage.getItem("user"));
  const [editProfile, setEditProfile] = useState({});
  const nav = useNavigate();
  const formattedBirthday = editProfile.birthday
    ? format(new Date(user.birthday), "dd/MM/yyyy")
    : "";

  useEffect(() => {
    axios.get("http://localhost:9999/users/" + user.username).then((res) => {
      setEditProfile(res.data);
      console.log(res.data);
    });
  }, [user.username]);

  const handleUpdate = () => {
    axios
      .put("http://localhost:9999/users/" + user.username, {
        full_name: editProfile.full_name,
        Email: editProfile.Email,
        gender: editProfile.gender,
        birthday: editProfile.birthday,
        phone: editProfile.phone,
        address: editProfile.address,
      })
      .then((response) => {
        if (response.status === 200) {
          alert("Edit profile successfully");
          setVisible(false)
          props.updateProfileData();
        } else {
          console.log("Edit profile failed");
        }
      })

      .catch((error) => {
        console.error("Error: ", error);
      });
    nav("/");
    // window.location.reload();
  };

  const onHide = () => {
    setVisible(false);
  };

  const icon = <i className="pi pi-search"></i>;
  return (
    <Dialog
      header="Edit Profile"
      visible={visible}
      style={{ width: "70vw" }}
      modal
      onHide={onHide}
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
                    label="Full Name"
                    value={editProfile.full_name}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        full_name: e.target.value,
                      })
                    }
                  />

                  <InputForm
                    id="email"
                    label="Email"
                    value={editProfile.Email}
                    onChange={(e) =>
                      setEditProfile({ ...editProfile, Email: e.target.value })
                    }
                  />

                  <InputForm
                    id="birthday"
                    label="Date of birth"
                    value={formattedBirthday}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        formattedBirthday: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="col-12 lg:col-6">
                  <InputForm
                    id="phone"
                    label="Phone"
                    value={editProfile.phone}
                    onChange={(e) =>
                      setEditProfile({ ...editProfile, phone: e.target.value })
                    }
                  />
                  <InputForm
                    id="address"
                    label="Address"
                    value={editProfile.address}
                    onChange={(e) =>
                      setEditProfile({
                        ...editProfile,
                        address: e.target.value,
                      })
                    }
                  />
                  <InputForm
                    id="gender"
                    label="Gender"
                    value={editProfile.gender}
                    onChange={(e) =>
                      setEditProfile({ ...editProfile, gender: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Button
                    label="Save Edit"
                    icon="pi pi-spin pi-cog"
                    className="bg-blue-600 border-red-600"
                    onClick={handleUpdate}
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

export default EditProfile;
