import { useState } from 'react';
import Area from '~/pages/area';
import Car from '~/pages/car';
import Customer from '~/pages/customer';
import Driver from '~/pages/driver';
import Group from '~/pages/group';
import Home from '~/pages/Home/home';
import Invoice from '~/pages/invoice';
import SignIn from '~/pages/Login/login';
import Order from '~/pages/order';
import { auth } from '~/services/firebase';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: SignIn },
    { path: '/areas', component: Area },
    { path: '/orders', component: Order },
    { path: '/drivers', component: Driver },
    { path: '/cars', component: Car },
    { path: '/groups', component: Group },
    { path: '/customers', component: Customer },
    { path: '/invoices', component: Invoice },
];

const privateRoutes = [];
export { privateRoutes, publicRoutes };
