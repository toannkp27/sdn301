
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';

const UserManage = () => {
    const [first, setFirst] = useState(0);
    const rows = 10;
    const [sampleData, setSampleData] = useState([]); 

    useEffect(() => {
        fetch('http://localhost:9999/users/listUser')
          .then((resp) => resp.json())
          .then((data) => {
            setSampleData(data); 
        })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

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
                <Column field="full_name" header="Full Name"></Column>
                <Column field="gender" header="Gender" ></Column>
                <Column field="address" header="Address"></Column>
                <Column field="birthday" header="Birthday" body={(rowData) => TimeBody(rowData.birthday)} ></Column>
                <Column header="Phone" field="phone"></Column>
                <Column header="Email" field='Email'></Column>
            </DataTable>

        </div>
    );
}
export default UserManage