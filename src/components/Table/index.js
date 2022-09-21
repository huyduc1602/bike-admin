import classnames from 'classnames/bind';
import Button from '../Button';
import styles from './Table.module.scss';

const cx = classnames.bind(styles);
function Table({ listAll, data, customer, driver }) {
    return (
        <>
            {listAll && (
                <div className={cx('table')}>
                    <table id={cx('listUser')}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>User Name</th>
                                <th>Full Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Join Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.UserName}</td>
                                    <td>{item.FullName}</td>
                                    <td>{item.Phone}</td>
                                    <td>{item.Address}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.CreateDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {customer && (
                <div className={cx('table')}>
                    <table id={cx('listUser')}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>User Name</th>
                                <th>Full Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Wallet</th>
                                <th>Join Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.UserName}</td>
                                    <td>{item.FullName}</td>
                                    <td>{item.Phone}</td>
                                    <td>{item.Address}</td>
                                    <td>{item.Email}</td>
                                    <td className={cx('wallet')}>
                                        {item.Wallet}{' '}
                                        <div className={cx('coin')}>
                                            <span>Coin</span>
                                        </div>
                                    </td>
                                    <td>{item.CreateDate}</td>
                                    <td>
                                        {item.Status == '1' ? (
                                            <Button primary> Disable</Button>
                                        ) : (
                                            <Button green> Enable</Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {driver && (
                <div className={cx('table')}>
                    <table id={cx('listUser')}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>User Name</th>
                                <th>Full Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>NumCar</th>
                                <th>Area</th>
                                <th>Wallet</th>
                                <th>Join Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.UserName}</td>
                                    <td>{item.FullName}</td>
                                    <td>{item.Phone}</td>
                                    <td>{item.Address}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.NumCar}</td>
                                    <td>{item.Area}</td>
                                    <td className={cx('wallet')}>
                                        {item.Wallet}{' '}
                                        <div className={cx('coin')}>
                                            <span>Coin</span>
                                        </div>
                                    </td>
                                    <td>{item.CreateDate}</td>
                                    <td>
                                        {item.Status == '1' ? (
                                            <Button primary> Disable</Button>
                                        ) : (
                                            <Button green> Enable</Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default Table;
