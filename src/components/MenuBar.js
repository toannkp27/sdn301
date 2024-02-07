
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { MegaMenu } from 'primereact/megamenu';
import { Ripple } from 'primereact/ripple';
import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
    const itemRenderer = (item, options) => {
        console.log(item);
        if (item.root) {
            return (
                <Link to={item.route} className="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase p-ripple hover:surface-ground" style={{ borderRadius: '2rem' }}>
                    <span className={item.icon} />
                    <span className="ml-2">{item.label}</span>
                    <Ripple />
                </Link>
            );
        } else if (!item.image) {
            return (
                <a className="flex align-items-center p-3 cursor-pointer mb-2 gap-2 " onClick={options.onClick}>
                    <span className="inline-flex align-items-center justify-content-center border-circle bg-primary w-3rem h-3rem">
                        <i className={`${item.icon} text-lg`}></i>
                    </span>
                    <span className="inline-flex flex-column gap-1">
                        <span className="font-medium text-lg text-900">{item.label}</span>
                        <span className="white-space-nowrap">{item.subtext}</span>
                    </span>
                </a>
            );
        } else {
            return (
                <div className="flex flex-column align-items-start gap-3" onClick={options.onClick}>
                    <img alt="megamenu-demo" src={item.image} className="w-full" />
                    <span>{item.subtext}</span>
                    <Button className="p-button p-component p-button-outlined" label={item.label} />
                </div>
            );
        }
    };

    const items = [
        {
            label: 'Home',
            root: true,
            route: "/",
            template: itemRenderer,
        },
        {
            label: 'List Product',
            root: true,
            template: itemRenderer
        },
        {
            label: 'Blog',
            root: true,
            template: itemRenderer
        },
        {
            label: 'Contact',
            root: true,
            template: itemRenderer
        },
        {
            label: 'Dashboard',
            root: true,
            route: "/dashboard",
            template: itemRenderer
        },
    ];


    const end = <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />;

    return (
        <div >
            <MegaMenu model={items} orientation="horizontal" end={end} breakpoint="960px" style={{ borderRadius: '3rem' }} />
        </div>
    )
}
