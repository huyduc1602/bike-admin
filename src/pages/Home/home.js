import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Widget from '~/components/Widget/widget';

import { listUser, listCustomers } from '~/data/data';
import Table from '~/components/Table';
import LineChar from '~/components/Chart/LineChart';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div>
            <div className={cx('Container')}>
                <div className={cx('widgets')}>
                    <Widget type={'customer'} />
                    <Widget type={'driver'} />
                    {/* <Widget type={'order'} /> */}
                    {/* <Widget type={'invoice'} /> */}
                </div>
                <div className={cx('charts')}>
                    <div className={cx('listUser')}>
                        <h1>List New User</h1>
                        <Table listAll data={listCustomers} />
                    </div>
                    <div className={cx('charUser')}>
                        <h1>Chart</h1>
                        <LineChar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
