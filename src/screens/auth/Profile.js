import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Image } from "primereact/image";
import { default as React } from 'react';
import { CalendarForm, DropdownForm, InputForm } from "../../components";
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
                            <Image src="/images/galleria/galleria12.jpg" indicatorIcon={icon} alt="Image" preview width="250" />
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
                                        label="Tên nhân viên (*)"
                                        required
                                    />
                                    <InputForm
                                        id="code"
                                        // value={infos.code}
                                        // onChange={(e) => setInfos({ ...infos, code: e.target.value })}
                                        label="Mã nhân viên (*)"
                                        required
                                    />
                                    <InputForm
                                        id="email"
                                        // value={infos.email_contact}
                                        label="Email (*)"
                                        disabled />
                                    <InputForm
                                        id="phone"
                                        // value={infos.phone_contact}
                                        label="Số điện thoại (*)"
                                        disabled
                                    />
                                    <CalendarForm
                                        id="birthday"
                                        label="Ngày sinh"
                                    // value={infos.birthday}
                                    // onChange={(e) => setInfos({ ...infos, birthday: e.target.value })}
                                    />
                                </div>
                                <div className="col-12 lg:col-6">
                                    <InputForm
                                        id="address"
                                        // value={infos.address}
                                        // onChange={(e) => setInfos({ ...infos, address: e.target.value })}
                                        label="Địa chỉ"
                                    />
                                    <InputForm
                                        id="cmt_number"
                                        // value={infos.cmt_number}
                                        // onChange={(e) => setInfos({ ...infos, cmt_number: e.target.value })}
                                        label="Số chứng minh thư"
                                        type="number"
                                    />
                                    <InputForm
                                        id="cmt_address"
                                        // value={infos.cmt_address}
                                        // onChange={(e) => setInfos({ ...infos, cmt_address: e.target.value })}
                                        label="Nơi cấp"
                                    />
                                    <DropdownForm
                                        id="department_id"
                                        // value={infos.department_id}
                                        // onChange={(e) =>
                                        //     setInfos({ ...infos, department_id: e.target.value, group_id: undefined })
                                        // }
                                        // options={exchanges}
                                        label="Phòng ban (*)"
                                        disabled
                                    />
                                    <DropdownForm
                                        id="group_id"
                                        // value={infos.group_id}
                                        // onChange={(e) => setInfos({ ...infos, group_id: e.target.value })}
                                        // options={groups}
                                        label="Nhóm (*)"
                                        disabled
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
