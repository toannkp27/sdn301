import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";
import { default as React } from 'react';
import { CalendarForm, InputForm } from "../../components";
const Profile = (props) => {
    const { visible, setVisible } = props;
    const onHide = () => {
        setVisible(false);
    };
    const dialogFooter = (
        <div>
            {/* <Button
                label="Add new"
                icon="pi pi-plus"
            // onClick={handleAddProduct} 
            /> */}
            <Button
                label="Close"
                icon="pi pi-times"
                onClick={onHide}
                className="bg-red-600 border-red-600"
            />
        </div>
    );
    const icon = (<i className="pi pi-search"></i>)

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
                                        // value={infos.full_name}
                                        // onChange={(e) => setInfos({ ...infos, full_name: e.target.value })}
                                        label="Full Name"
                                        required
                                    />

                                    <InputForm
                                        id="email"
                                        // value={infos.email_contact}
                                        label="Email"
                                    />
                                    <InputForm
                                        id="phone"
                                        // value={infos.phone_contact}
                                        label="Phone"
                                    />
                                </div>
                                <div className="col-12 lg:col-6">
                                    <CalendarForm
                                        id="birthday"
                                        label="Date of birth"
                                    // value={infos.birthday}
                                    // onChange={(e) => setInfos({ ...infos, birthday: e.target.value })}
                                    />
                                    <InputForm
                                        id="address"
                                        // value={infos.address}
                                        // onChange={(e) => setInfos({ ...infos, address: e.target.value })}
                                        label="Address"
                                    />
                                    <InputForm
                                        id="code"
                                        // value={infos.code}
                                        // onChange={(e) => setInfos({ ...infos, code: e.target.value })}
                                        label="Gender"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default Profile
