
import React from 'react';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Link } from "react-router-dom"

export default function RouterDemo() {
    const itemRenderer = (item) => (
        <div className='p-menuitem-content '>
            <Link to={item.url} className="flex align-items-center p-menuitem-link">
                <span className={item.icon} />
                <span className="mx-2">{item.label}</span>
                {item.badge && <Badge className="ml-auto" value={item.badge} />}
                {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
            </Link>
        </div>
    );
    const items = [
        {
            template: () => {
                return (
                    <span className="inline-flex align-items-center gap-1 px-4 py-4">
                        <span className="font-medium text-xl font-semibold">
                            <span className="text-primary">GROWZ</span>
                        </span>
                    </span>
                );
            }
        },
        {
            label: 'Router Link',
            icon: 'pi pi-palette',
            url: '/unstyled',
            template: itemRenderer
        },
        {
            label: 'Programmatic',
            icon: 'pi pi-link',
            url: '/',
            template: itemRenderer
        },
        {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://react.dev/',
            template: itemRenderer
        }
    ];

    return (
        <div className='min-w-20rem '>
            <Menu model={items} className='w-full ' style={{ "height": '96vh' }} />
        </div>
    )
}


