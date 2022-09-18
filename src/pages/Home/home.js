import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import Widget from '~/components/Widget/widget';
const cx = classNames.bind(styles);
function Home() {
    return (
        <div>
            <div className={cx('Container')}>
                <div className={cx('widgets')}>
                    <Widget type={'customer'} />
                    <Widget type={'driver'} />
                    <Widget type={'order'} />
                    <Widget type={'invoice'} />
                </div>
            </div>
        </div>
    );
}

export default Home;
