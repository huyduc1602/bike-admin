import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Widget from '~/components/Widget/widget';

import { listUser, listCustomers } from '~/data/data';
import Table from '~/components/Table';
import LineChar from '~/components/Chart/LineChart';
import { useState, useEffect } from 'react';
import { _parseJSON } from '~/api/helperApi';
import commonApi from '~/api/commonApi';
import ReactLoading from 'react-loading';

const cx = classNames.bind(styles);
function Home() {
    const [loading, setLoading] = useState(false);
    const [listResult, setListResult] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [navigate, setNavigate] = useState(false);
    const fetchApi = () => {
        (async () => {
            try {
                const params = {
                    sort: 'account_createdDate-desc',
                    page: 1,
                };
                const { data } = await commonApi.search(`customer/all`, params);
                console.log('axiosdata: ' + JSON.stringify(data));
                setListResult(data.accountDtoList);
                setPageCount(data.totalPages);
                setLoading(false);
            } catch (e) {
                console.error(e);
                setNavigate(true);
            }
        })();
    };
    useEffect(() => {
        fetchApi();
    }, []);
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
                        <Table listAll data={listResult} />
                    </div>
                    <div className={cx('charUser')}>
                        <h1>Chart</h1>
                        <LineChar />
                    </div>
                </div>
                {loading && (
                    <ReactLoading
                        type="spokes"
                        className="loading"
                        color="rgb(44 137 176)"
                    />
                )}
            </div>
        </div>
    );
}

export default Home;
