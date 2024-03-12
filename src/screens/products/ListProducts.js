import { BreadCrumb } from 'primereact/breadcrumb';
import { Image } from "primereact/image";
import { Paginator } from 'primereact/paginator';
import React, { useEffect, useState } from 'react';
import { Dropdownz, GridForm, Inputz } from '../dashboard/components/forrm/ForrmList';
import { useGetParams } from '../hooks';
import { Link } from 'react-router-dom';

const Header = ({ setParams }) => {
    const [filter, setFilter] = useState({ key_search: '', floor: '' })
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9999//brands') 
            .then(response => response.json())
            .then(data => setBrands(data))
            .catch(error => console.error('Error fetching brands:', error));
    }, []);

    return (
        <>
            <div className='m-3'>
                <GridForm setParams={setParams} filter={filter} setFilter={setFilter} className="lg:col-12">
                    <Inputz
                        value={filter.key_search}
                        placeholder="Find by name"
                        onChange={(e) => setFilter({ ...filter, key_search: e.target.value })}
                    />
                    <Dropdownz
                        value={filter.status}
                        options={brands.map(brand => (
                            <option key={brand.id} value={brand.id}>{brand.name}</option>
                        ))}
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
const ListProducts = () => {
    const initParam = useGetParams()
    const [params, setParams] = useState(initParam)
    const [products,setProducts]=useState([])
    useEffect(() => {
        fetch('http://localhost:9999/products') 
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const items = [
        { label: "Products" },
    ];
    const home = { icon: "pi pi-home", url: "http://localhost:3000/" };

    // const products = [
    //     {
    //         id: 1,
    //         name: 'Ultraboost Light',
    //         image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4eb226710c1d4baab6256b741b7d0be7_9366/gi%C3%A0y-ultraboost-light.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'LOWSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 2,
    //         name: 'Superstar Slip-On',
    //         image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/67e3732b3fee450092aae2724526d569_9366/gi%C3%A0y-superstar-slip-on.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 2,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 3,
    //         name: 'Superstar',
    //         image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/4e5f3f5011d04322a1914a8aa7fd670d_9366/gi%C3%A0y-superstar.jpg',
    //         price: 65,
    //         category: 'Fitness',
    //         rating: 1,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 4,
    //         name: 'Stan Smith PF W',
    //         image: 'https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/6bf90d60370e41df970a2a8b920aad5f_9366/stan-smith-pf-w.jpg',
    //         price: 65,
    //         category: 'Clothing',
    //         rating: 5,
    //         inventoryStatus: 'LOWSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 5,
    //         name: 'TRAINER TRAE YOUNG 3 LOW',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b856ac34516a4de39450d1ab2b95f867_9366/Giay_Trainer_Trae_Young_3_Low_trang_IE2704_02_standard_hover.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 3,
    //         inventoryStatus: 'LOWSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 6,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 7,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 8,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 9,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 10,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 11,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },

    //     {
    //         id: 12,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 13,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 14,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 15,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 16,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 17,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 18,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    //     {
    //         id: 19,
    //         name: 'SUPERSTAR XLG',
    //         image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d8845335f0fd4b29928017b151b51fa4_9366/Giay_Superstar_XLG_nau_IF3701_04_standard.jpg',
    //         price: 65,
    //         category: 'Accessories',
    //         rating: 4,
    //         inventoryStatus: 'INSTOCK',
    //         unitInStock: 10
    //     },
    // ]
    const [currentPage, setCurrentPage] = useState(1);
    const [rows, setRows] = useState(12);
    const [first, setFirst] = useState(0);
    const productsOnPage = products.slice(first, first + rows);
    const totalRecords = products.length;
    const onPageChange = (event) => {
        setFirst(event.first);
        setCurrentPage(event.page + 1);
    };
    const renderProducts = () => {
        return productsOnPage.map((p) => {
            return (
                <div key={p.id} className="col-3 flex align-items-center justify-content-center">
                    <div className="m-2 border-round-md">
                        <Image
                            className="border-round-md"
                            src={p.images[1].url}
                            alt="Image"
                            width="280"
                            preview
                        />
                        <Link to={`/detail/${p._id}`} style={{ textDecoration: "none" }}>
                        <div className="font-bold text-base" style={{color:"black"}}>{p.name}</div>
                        <div className="text-xl text-red-400 inline-block font-bold">{(p.price) * 0.5}$</div>{" "}
                        <span className="line-through text-base text-color inline-block">{p.price}$</span>{" "}
                        </Link>
                       
                    </div>
                </div>
            );
        });
    };
    return (
        <div
            className="container"
            style={{ paddingTop: "15px", paddingBottom: "20px" }}
        >
            <div className="m-2 w-full">
                <BreadCrumb model={items} home={home} />
            </div>
            <div>
                <Header setParams={setParams} />
            </div>
            <hr />
            <div className="grid mt-2 surface-ground p-3 surface-0 shadow-2">
                {renderProducts()}
            </div>
            <div className="p-mt-2">
                <Paginator
                    first={first}
                    rows={rows}
                    totalRecords={totalRecords}
                    onPageChange={onPageChange}
                    className="p-mt-2"
                    currentPageReportTemplate={`Showing {first} to {last} of {totalRecords} products`}
                />
            </div>
        </div>
    )
}

export default ListProducts
