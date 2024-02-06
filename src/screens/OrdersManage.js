
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';

const UserManage = () => {
    const [first, setFirst] = useState(0);
    const rows = 10
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
            "cvv": "123"
        },
        "description": "Urgent delivery requested",
        "estimated_delivery_date": "2024-02-15T12:00:00.000Z",
        "transport_fee": 10,
        "tax": 5,
        "discount": 15
    }
        ;
    const TimeBody = (inputDate) => {

        const dateObject = new Date(inputDate);

        const day = dateObject.getDate().toString().padStart(2, '0');
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObject.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        return (
            <>
                {formattedDate}
            </>
        )
    }
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };
    const priceBodyTemplate = (fee) => {
        return formatCurrency(fee);
    };
    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Users Manage</span>
            <Button icon="pi pi-refresh" rounded raised />
        </div>
    );

    return (
        <div className="w-full">
            <DataTable
                value={sampleData}
                header={header}
                first={first}
                rows={rows}
                onPage={(e) => setFirst(e.first)}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                paginator
                currentPageReportTemplate={`In total there are ${sampleData ? sampleData.length : 0} products.`}
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
            </DataTable>

        </div >
    );
}
export default UserManage