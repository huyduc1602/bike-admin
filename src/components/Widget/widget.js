import styles from './Widget.module.scss';
import classNames from 'classnames/bind';

import { customer, driver, invoice, order } from '~/data/data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowAltCircleUp,
    faCartShopping,
    faFileInvoice,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Widget({ type }) {
    const amount = 100;
    const diff = 20;

    let data;
    switch (type) {
        case 'customer':
            data = {
                title: 'Customers',
                isMoney: false,
                link: 'See all Customers',
                icon: faUser,
            };
            break;
        case 'order':
            data = {
                title: 'Orders',
                isMoney: true,
                link: 'See all Orders',
                icon: faCartShopping,
            };
            break;
        case 'invoice':
            data = {
                title: 'Invoice',
                isMoney: true,
                link: 'See all users',
                icon: faFileInvoice,
            };
            break;
        case 'driver':
            data = {
                title: 'Dirvers',
                isMoney: false,
                link: 'See all Dirver',
                icon: faUser,
            };
            break;
        default:
            break;
    }

    return (
        <div className={cx('widget')}>
            <div className={cx('left')}>
                <span className={cx('title')}>{data.title}</span>
                <span className={cx('counter')}>
                    {data.isMoney && '$'} {amount}
                </span>
                <span className={cx('link')}>{data.link}</span>
            </div>
            <div className={cx('right')}>
                <div className={cx('percentage')}>
                    <FontAwesomeIcon icon={faArrowAltCircleUp} />
                    {diff}%
                </div>
                <FontAwesomeIcon className={cx('icon')} icon={data.icon} />
            </div>
        </div>
    );
}

export default Widget;
