import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Dialog } from 'primereact/dialog'; // Import Dialog component
import { Menu } from 'primereact/menu';
import React, { useState } from 'react';

export default function Menu1() {
    const [visible, setVisible] = useState(false); // State để kiểm soát việc hiển thị của modal

    const itemRenderer = (item) => (
        <div className='p-menuitem-content'>
            <a className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </a>
        </div>
    );

    let items = [
        {
            separator: true
        },
        {
            label: 'Cart',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    shortcut: '⌘+N',
                    template: itemRenderer
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search',
                    shortcut: '⌘+S',
                    template: itemRenderer
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog',
                    shortcut: '⌘+O',
                    template: itemRenderer
                },
                {
                    label: 'Messages',
                    icon: 'pi pi-inbox',
                    badge: 2,
                    template: itemRenderer
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out',
                    shortcut: '⌘+Q',
                    template: itemRenderer
                }
            ]
        },
    ];

    const toggleMenu = () => {
        setVisible(!visible); // Khi gọi toggleMenu, đảo ngược giá trị của visible để hiển thị hoặc ẩn modal
    };

    return (
        <div>
            <div className="ml-5">
                <span className="p-menuitem-link" onClick={toggleMenu}>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" shape="circle" />
                    <div className="flex flex-column align">
                        <span className="font-bold">Amy Elsner</span>
                        <span className="text-sm">Agent</span>
                    </div>
                </span>
            </div>

            <Dialog header="Menu" visible={visible} onHide={() => setVisible(false)} modal={true} style={{ width: '50vw' }}>
                <Menu model={items} />
            </Dialog>
        </div>
    )
}
