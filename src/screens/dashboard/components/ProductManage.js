
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import React, { useState } from 'react';
import AddProduct from '../../AddProduct';
import { useGetParams } from '../../hooks';
import { Dropdownz, GridForm, Inputz } from './forrm/ForrmList';
const Header = ({ setParams }) => {
    const [filter, setFilter] = useState({ key_search: '', floor: '' })

    return (
        <>
            <div className="flex flex-wrap align-items-center justify-content-between gap-2 m-2">
                <span className="text-3xl text-900 font-bold">Products Manage</span>
            </div>
            <hr />
            <div className='m-3'>
                <GridForm setParams={setParams} filter={filter} setFilter={setFilter} className="lg:col-12">
                    <Inputz
                        value={filter.key_search}
                        placeholder="Find by name"
                        onChange={(e) => setFilter({ ...filter, key_search: e.target.value })}
                    />
                    <Dropdownz
                        value={filter.status}
                        // options={status}
                        onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                        placeholder="Status"
                    />
                    <Dropdownz
                        value={filter.status}
                        // options={status}
                        onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                        placeholder="Category"
                    />
                    <Dropdownz
                        value={filter.status}
                        // options={status}
                        onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                        placeholder="Reviews"
                    />
                </GridForm>
            </div>
        </>
    )
}
const ProductManage = () => {
    const [first, setFirst] = useState(0);
    const [visibledDialog, setVisibledDialog] = useState(false);
    const rows = 10;
    const initParam = useGetParams()
    const [params, setParams] = useState(initParam)
    const [visible, setVisible] = useState(false);
    const onHide = () => {
        setVisible(false);
    };
    const products = [
        {
            id: 1,
            name: 'Ultraboost Light',
            image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4eb226710c1d4baab6256b741b7d0be7_9366/gi%C3%A0y-ultraboost-light.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'LOWSTOCK',
            unitInStock: 10
        },
        {
            id: 2,
            name: 'Superstar Slip-On',
            image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/67e3732b3fee450092aae2724526d569_9366/gi%C3%A0y-superstar-slip-on.jpg',
            price: 65,
            category: 'Accessories',
            rating: 2,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 3,
            name: 'Superstar',
            image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e5f3f5011d04322a1914a8aa7fd670d_9366/gi%C3%A0y-superstar.jpg',
            price: 65,
            category: 'Fitness',
            rating: 1,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 4,
            name: 'Stan Smith PF W',
            image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/6bf90d60370e41df970a2a8b920aad5f_9366/stan-smith-pf-w.jpg',
            price: 65,
            category: 'Clothing',
            rating: 5,
            inventoryStatus: 'LOWSTOCK',
            unitInStock: 10
        },
        {
            id: 5,
            name: 'TRAINER TRAE YOUNG 3 LOW',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b856ac34516a4de39450d1ab2b95f867_9366/Giay_Trainer_Trae_Young_3_Low_trang_IE2704_02_standard_hover.jpg',
            price: 65,
            category: 'Accessories',
            rating: 3,
            inventoryStatus: 'LOWSTOCK',
            unitInStock: 10
        },
        {
            id: 6,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 7,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 8,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 9,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 10,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 11,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },

        {
            id: 12,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 13,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 14,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 15,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 16,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 17,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 18,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
        {
            id: 19,
            name: 'SUPERSTAR XLG',
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
            price: 65,
            category: 'Accessories',
            rating: 4,
            inventoryStatus: 'INSTOCK',
            unitInStock: 10
        },
    ]
    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product) => {
        return <img src={product.image} alt={product.image} className="w-6rem shadow-2 border-round" />;
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };
    return (
        <div className="w-full border-round border-solid border-1 surface-border">
            <Header setParams={setParams} />
            <hr />
            <Button
                onClick={() => setVisible(true)}
                icon="pi pi-plus"
                label="Add New Product"
                size="small"
                severity="info"
                raised
                type="button"
                className='m-2 ml-4'
            />
            <Button
                onClick={() => setVisibledDialog(true)}
                icon="pi pi-plus"
                label="Add New Brand"
                size="small"
                severity="info"
                raised
                type="button"
                className='m-2'
            />
            <DataTable
                className='m-2'
                value={products}
                // header={header}
                first={first}
                rows={rows}
                onPage={(e) => setFirst(e.first)}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                paginator
                currentPageReportTemplate={`In total there are ${products ? products.length : 0} products.`}
            >
                <Column field="name" header="Name" style={{ minWidth: "15rem" }}></Column>
                <Column header="Image" body={imageBodyTemplate}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                <Column header="Units in Stock" field="unitInStock"></Column>
                <Column header="Status" body={statusBodyTemplate}></Column>
            </DataTable>
            {visible === true && (
                <AddProduct visible={visible} setVisible={setVisible} />
            )}
        </div>
    );
}
export default ProductManage