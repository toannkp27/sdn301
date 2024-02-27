
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';

const UserManage = () => {
    const [first, setFirst] = useState(0);
    const rows = 10;
    const sampleData = [
        {
            "id": 1,
            "fullName": "User 1",
            "age": 47,
            "address": "Houston, TX",
            "birthday": "2000-07-18T18:33:04.697Z",
            "phone": "(282) 244-6732",
            "email": "user_1@yahoo.com"
        },
        {
            "id": 2,
            "fullName": "User 2",
            "age": 58,
            "address": "Houston, TX",
            "birthday": "1989-01-06T09:05:19.666Z",
            "phone": "(600) 957-2593",
            "email": "user_2@gmail.com"
        },
        {
            "id": 3,
            "fullName": "User 3",
            "age": 28,
            "address": "San Jose, CA",
            "birthday": "1994-01-22T17:54:08.833Z",
            "phone": "(898) 954-6949",
            "email": "user_3@gmail.com"
        },
        {
            "id": 4,
            "fullName": "User 4",
            "age": 58,
            "address": "New York, NY",
            "birthday": "1999-01-15T00:46:43.880Z",
            "phone": "(649) 264-6408",
            "email": "user_4@hotmail.com"
        },
        {
            "id": 5,
            "fullName": "User 5",
            "age": 31,
            "address": "San Diego, CA",
            "birthday": "1996-07-17T06:45:41.670Z",
            "phone": "(292) 673-5563",
            "email": "user_5@hotmail.com"
        },
        {
            "id": 6,
            "fullName": "User 6",
            "age": 20,
            "address": "Philadelphia, PA",
            "birthday": "1999-01-08T17:20:53.350Z",
            "phone": "(361) 528-1123",
            "email": "user_6@hotmail.com"
        },
        {
            "id": 7,
            "fullName": "User 7",
            "age": 35,
            "address": "San Diego, CA",
            "birthday": "1993-11-23T04:33:37.344Z",
            "phone": "(470) 311-6395",
            "email": "user_7@yahoo.com"
        },
        {
            "id": 8,
            "fullName": "User 8",
            "age": 58,
            "address": "San Jose, CA",
            "birthday": "1994-11-17T03:51:48.506Z",
            "phone": "(257) 720-5826",
            "email": "user_8@yahoo.com"
        },
        {
            "id": 9,
            "fullName": "User 9",
            "age": 56,
            "address": "New York, NY",
            "birthday": "1996-06-05T09:37:10.293Z",
            "phone": "(627) 574-1750",
            "email": "user_9@yahoo.com"
        },
        {
            "id": 10,
            "fullName": "User 10",
            "age": 20,
            "address": "San Diego, CA",
            "birthday": "1980-07-19T08:13:38.604Z",
            "phone": "(256) 845-3030",
            "email": "user_10@yahoo.com"
        }
    ]
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

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Users Manage</span>
            {/* <Button icon="pi pi-refresh" rounded raised /> */}
        </div>
    );

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
                currentPageReportTemplate={`In total there are ${sampleData ? sampleData.length : 0} products.`}
            >
                <Column field="fullName" header="Full Name"></Column>
                <Column field="age" header="Age" ></Column>
                <Column field="address" header="Address"></Column>
                <Column field="birthday" header="Birthday" body={(rowData) => TimeBody(rowData.birthday)} ></Column>
                <Column header="Phone" field="phone"></Column>
                <Column header="Email" field='email'></Column>
            </DataTable>

        </div>
    );
}
export default UserManage