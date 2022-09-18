import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleUp,
    faCar,
    faCartShopping,
    faFileInvoice,
    faHome,
    faIdCard,
    faLayerGroup,
    faUser,
    faUserGroup,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';
export const customer = [
    {
        title: 'Customers',
        isMoney: false,
        link: 'See all Customers',
        icon: faUser,
    },
];
export const driver = [
    {
        title: 'Dirvers',
        isMoney: false,
        link: 'See all Dirver',
        icon: faUser,
    },
];
export const order = [
    {
        title: 'Orders',
        isMoney: false,
        link: 'See all Orders',
        icon: faCartShopping,
    },
];
export const invoice = [
    {
        title: 'Invoice',
        isMoney: false,
        link: 'See all users',
        icon: faFileInvoice,
    },
];
export const links = [
    {
        title: 'Dashboard',
        links: [
            {
                name: 'Home',
                link: '/',
                icon: faHome,
            },
        ],
    },
    {
        title: 'Pages',
        links: [
            {
                name: 'Areas',
                link: '/areas',
                icon: faLayerGroup,
            },
            {
                name: 'Orders',
                link: '/orders',
                icon: faCartShopping,
            },
            {
                name: 'Drivers',
                link: '/drivers',
                icon: faIdCard,
            },
            {
                name: 'Cars',
                link: '/cars',
                icon: faCar,
            },
            {
                name: 'Groups',
                link: '/groups',
                icon: faUserGroup,
            },
            {
                name: 'Customers',
                link: '/customers',
                icon: faUserTie,
            },
            {
                name: 'Invoices',
                link: '/invoices',
                icon: faFileInvoice,
            },
        ],
    },
];
