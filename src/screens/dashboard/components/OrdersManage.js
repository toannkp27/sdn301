
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';

import React, { useState } from 'react';

const OrderManage = () => {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [visible, setVisible] = useState(false);
    const sampleData = [
        {
            "id": 1,
            "order_date": "2024-02-10T12:30:00.000Z",
            "customer_name": "John Doe",
            "total_cost": 110,
            "status": "Processing",
            "payment_method": "Credit Card",
            "description": "Urgent delivery requested",
            "estimated_delivery_date": "2024-02-15T12:00:00.000Z",
            "transport_fee": 10,
            "tax": 5,
            "discount": 15

        },
        {
            "id": 2,
            "order_date": "2024-02-11T14:45:00.000Z",
            "customer_name": "Alice Smith",
            "total_cost": 90,
            "status": "Shipped",
            "payment_method": "PayPal",
            "description": "Standard delivery",
            "estimated_delivery_date": "2024-02-18T11:30:00.000Z",
            "transport_fee": 8,
            "tax": 4,
            "discount": 10
        },
        {
            "id": 3,
            "order_date": "2024-02-11T14:45:00.000Z",
            "customer_name": "Alice Smith",
            "total_cost": 90,
            "status": "Shipped",
            "payment_method": "PayPal",
            "description": "Standard delivery",
            "estimated_delivery_date": "2024-02-18T11:30:00.000Z",
            "transport_fee": 8,
            "tax": 4,
            "discount": 10
        },
        {
            "id": 4,
            "order_date": "2024-02-11T14:45:00.000Z",
            "customer_name": "Alice Smith",
            "total_cost": 90,
            "status": "Shipped",
            "payment_method": "PayPal",
            "description": "Standard delivery",
            "estimated_delivery_date": "2024-02-18T11:30:00.000Z",
            "transport_fee": 8,
            "tax": 4,
            "discount": 10
        },
        {
            "id": 5,
            "order_date": "2024-02-11T14:45:00.000Z",
            "customer_name": "Alice Smith",
            "total_cost": 90,
            "status": "Shipped",
            "payment_method": "PayPal",
            "description": "Standard delivery",
            "estimated_delivery_date": "2024-02-18T11:30:00.000Z",
            "transport_fee": 8,
            "tax": 4,
            "discount": 10
        },
        {
            "id": 6,
            "order_date": "2024-02-11T14:45:00.000Z",
            "customer_name": "Alice Smith",
            "total_cost": 90,
            "status": "Shipped",
            "payment_method": "PayPal",
            "description": "Standard delivery",
            "estimated_delivery_date": "2024-02-18T11:30:00.000Z",
            "transport_fee": 8,
            "tax": 4,
            "discount": 10
        },

    ]
    const orderDetail = {
        "id": 1,
        "order_date": "2024-02-10T12:30:00.000Z",
        "customer_name": "John Doe",
        "products": [
            {
                "product_id": 101,
                "product_name": "Product A",
                "quantity": 2,
                "unit_price": 30
            },
            {
                "product_id": 102,
                "product_name": "Product B",
                "quantity": 1,
                "unit_price": 50
            }
        ],
        "total_cost": 110,
        "status": "Processing",
        "payment_method": "Credit Card",
        "shipping_info": {
            "address": "123 Main St, Cityville",
            "carrier": "UPS",
            "tracking_number": "123456789"
        },
        "payment_info": {
            "card_number": "**** **** **** 1234",
            "expiration_date": "12/26",
            "cvv": "123",
            "cardholder_name": "DOAN DAC HAU",
        },
        "description": "Urgent delivery requested",
        "estimated_delivery_date": "2024-02-15T12:00:00.000Z",
        "transport_fee": 10,
        "tax": 5,
        "discount": 15
    };
    const handleEyeClick = (rowData) => {
        setSelectedOrder(rowData);
        setVisible(true);
    };

    const onHide = () => {
        setVisible(false);
    };
    const TimeBody = (inputDate) => {

        const dateObject = new Date(inputDate);

        const day = dateObject.getDate().toString().padStart(2, '0');
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObject.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        return formattedDate
    }
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };
    const priceBodyTemplate = (fee) => {
        return formatCurrency(fee);
    };
    const ActionBody = (rowData) => {
        return (
            <>
                <Button
                    type="button"
                    icon="pi pi-eye"
                    rounded
                    outlined
                    onClick={() => handleEyeClick(rowData)}
                />
            </>
        );
    };
    const InputForm = (props) => {
        const { label, id, placeholder, type, className, required, onChange, value = '', ...inputprop } = props

        return (
            <div className="mb-3 px-2 change-disabled">
                {label && (
                    <div className="w-full flex justify-content-between">
                        <label htmlFor={id} className="font-medium w-full">
                            {label}
                        </label>
                    </div>
                )}
                <InputText
                    id={id}
                    className={classNames(' mt-2 w-full', { 'p-invalid': required }, className)}
                    // placeholder={placeholder || (label && `Nhập ${label.toLowerCase()}`)}
                    value={value}
                    type={type}
                    style={{ minHeight: '50px' }}

                    {...inputprop}
                />
            </div>
        )
    }
    const dialogFooter = (
        <div>
            <Button label="Close" icon="pi pi-times" onClick={onHide} />
        </div>
    );
    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Orders Manage</span>
            {/* <Button icon="pi pi-refresh" rounded raised /> */}
        </div>
    );
    const statusBodyTemplate = (status) => {
        return (
            status === 'Processing' ? (
                <Tag className=' mt-2 w-5rem h-2rem' severity="info" value="Processing"></Tag>
            ) : status === 'Complete' ? (
                <Tag className=' mt-2 w-5rem h-2rem' severity="success" value="Complete"></Tag>
            ) : status === 'Cancel' ? (
                <Tag className=' mt-2 w-5rem h-2rem' severity="danger" value="Cancel"></Tag>
            ) : null
        )
    };
    // const headerCard = (
    //     <img alt="Card" src="path_to_your_card_image" style={{ width: '100%' }} />
    // );

    const footerCard = (
        <span>
            <Button label="Action 1" className="p-button-text" />
            <Button label="Action 2" className="p-button-text" />
        </span>
    );
    const OrderDetail = (obj) => {
        const product = obj && obj.products ? obj.products : null
        return (
            <div className="card bg-color m-4 ">
                <div class="formgrid grid m-3">
                    <div class="field col">
                        <InputForm
                            id="id"
                            value={obj.id}
                            label="ID"
                        />
                        <InputForm
                            id="customer_name"
                            value={obj.customer_name}
                            label="Order Date"
                        />
                        <InputForm
                            id="order_date"
                            value={TimeBody(obj.order_date)}
                            label="Order Date"
                        />
                        <InputForm
                            id="customer_name"
                            value={obj.customer_name}
                            label="Customer Name"
                        />
                        <InputForm
                            id="total_cost"
                            value={priceBodyTemplate(obj.total_cost)}
                            label="Total Cost"
                        />
                        <InputForm
                            id="payment_method"
                            value={priceBodyTemplate(obj.payment_method)}
                            label="Payment Method"
                        />
                        <div className="mb-3 px-2 change-disabled">
                            <div className="w-full flex justify-content-between">
                                <label className="font-medium w-full">
                                    Status
                                </label>
                            </div>
                            <div >
                                {statusBodyTemplate(obj.status)}
                            </div>
                        </div>
                    </div>
                    <div class="field col">
                        {/* <div>Shipping Information: {obj.shipping_info}</div> */}
                        <InputForm
                            id="description"
                            value={priceBodyTemplate(obj.description)}
                            label="Description"
                        />
                        <InputForm
                            id="payment_method"
                            value={priceBodyTemplate(obj.payment_method)}
                            label="Estimated Delivery Date"
                        />
                        <InputForm
                            id="transport_fee"
                            value={priceBodyTemplate(obj.transport_fee)}
                            label="Transport Fee"
                        />
                        <InputForm
                            id="tax"
                            value={obj.tax}
                            label="Tax"
                        />
                        <InputForm
                            id="discount"
                            value={obj.discount}
                            label="Discount"
                        />
                        <InputForm
                            id="estimated_delivery_date"
                            value={TimeBody(obj.estimated_delivery_date)}
                            label="Estimated Delivery Date"
                        />
                    </div>
                </div>
                <hr />
                <div className="m-3 mt-2 px-2 change-disabled">
                    <div className="w-full flex justify-content-between">
                        <label className="text-4xl w-full mb-2">
                            Cart
                        </label>
                    </div>
                    <div className="w-full border-round border-solid border-1 surface-border">
                        <DataTable
                            className='m-2'
                            value={product}
                            first={first}
                            rows={rows}
                            onPage={(e) => setFirst(e.first)}
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                            paginator
                            currentPageReportTemplate={`In total there are ${product ? product.length : 0} orders.`}
                        >
                            <Column field="product_id" header="Product ID"></Column>
                            <Column field="product_name" header="Product Name"></Column>
                            <Column field="quantity" header="Quantity"></Column>
                            <Column field='unit_price' header="Unit Price" body={(rowData) => priceBodyTemplate(rowData.unit_price)} />
                            <Column header="Total Cost" body={(rowData) => priceBodyTemplate(rowData.unit_price * rowData.quantity)} />

                        </DataTable>
                    </div>
                </div>
                <hr />
                <div className="m-3 mt-2 px-2 change-disabled">
                    <div className="w-full flex justify-content-between">
                        <label className="text-4xl w-full mb-2">
                            Shipping Information
                        </label>
                        <div className="w-full ">
                            <div>
                                Address : <strong>{obj.shipping_info.address}</strong>
                            </div>
                            <div>
                                Carrier : <strong>{obj.shipping_info.carrier}</strong>
                            </div>
                            <div>
                                Tracking Number : <strong>{obj.shipping_info.tracking_number}</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="m-3 mt-2 px-2 change-disabled">
                    <div className="w-full flex justify-content-between">
                        <label className="text-4xl w-full mb-2">
                            Payment Information
                        </label>

                        {/* <div className="w-full ">
                            <div>
                                Address : <strong>{obj.shipping_info.address}</strong>
                            </div>
                            <div>
                                Carrier : <strong>{obj.shipping_info.carrier}</strong>
                            </div>
                            <div>
                                Tracking Number : <strong>{obj.shipping_info.tracking_number}</strong>
                            </div>
                        </div> */}
                    </div>
                    <Card
                        title="VISA CARD"
                        // subTitle={footerCard}
                        style={{ width: '30rem' }}
                        className="ui-card-shadow"
                    // footer={footerCard}
                    // header={headerCard}
                    >
                        <p style={{ fontFamily: "Lucida Console", fontSize: "25px" }}>{obj.payment_info.card_number}</p>
                        <div>VALID THRU <p style={{ display: "inline-block", fontSize: "22px", fontFamily: "Lucida Console" }}>{obj.payment_info.expiration_date}</p></div>
                        <div style={{ fontSize: "25px", fontFamily: "Lucida Console" }}>{obj.payment_info.cardholder_name}</div>
                    </Card>
                </div>
            </div>
        )
    }
    return (
        <div className="w-full border-round border-solid border-1 surface-border">
            <DataTable
                className='m-2'
                value={sampleData}
                header={header}
                first={first}
                rows={rows}
                onPage={(e) => setFirst(e.first)}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                paginator
                currentPageReportTemplate={`In total there are ${sampleData ? sampleData.length : 0} orders.`}
            >
                <Column field="id" header="Order ID"></Column>
                <Column field="order_date" header="Order date" body={(rowData) => TimeBody(rowData.order_date)}></Column>
                <Column field="customer_name" header="Customer Name"></Column>
                <Column field="total_cost" header="Total Cost" body={(rowData) => priceBodyTemplate(rowData.total_cost)}></Column>
                <Column field="status" header="Status" ></Column>
                <Column field="payment_method" header="Payment Method"></Column>
                <Column field="description" header="Description"></Column>
                <Column field="estimated_delivery_date" header="Estimated Delivery Date" body={(rowData) => TimeBody(rowData.estimated_delivery_date)} ></Column>
                <Column field="transport_fee" header='Transport Fee' body={(rowData) => priceBodyTemplate(rowData.transport_fee)}></Column>
                <Column field="tax" header='Tax'></Column>
                <Column field="discount" header='Discount'></Column>
                <Column header="Operation" body={ActionBody} />
            </DataTable>
            <Dialog
                header="Order Details"
                visible={visible}
                style={{ width: '70vw' }}
                modal
                onHide={onHide}
                footer={dialogFooter}
            >
                {selectedOrder && (
                    OrderDetail(orderDetail)
                )}
            </Dialog>
        </div >
    );
}
export default OrderManage

