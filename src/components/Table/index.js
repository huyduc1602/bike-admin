import classnames from 'classnames/bind';
import Button from '../Button';
import styles from './Table.module.scss';

const cx = classnames.bind(styles);
function Table({ listAll, data, customer, driver, station, visibleMap }) {
    const handleVisibleMap = (latitude, longtitude) => {
        visibleMap(latitude, longtitude);
    };
    const hello = (text) => {
        console.log(text);
    };

    return (
        <>
            {listAll && (
                <div className={cx('table')}>
                    <table className={cx('listUser')}>
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
                    <table className={cx('listUser')}>
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
                    <table className={cx('listUser')}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>User Name</th>
                                <th>Full Name</th>
                                <th>Phone</th>
                                {/* <th>Address</th> */}
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
                                    {/* <td>{item.Address}</td> */}
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
            {station && (
                <div className={cx('table')}>
                    <table className={cx('listUser')} id={cx('listStation')}>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Address</th>
                                {/* <th>Address</th> */}
                                <th>Image</th>
                                <th>Latitude</th>
                                <th>Longtitude</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.Id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Address}</td>
                                    <td>
                                        <img
                                            src={item.Img}
                                            className={cx('img-place')}
                                        />
                                    </td>
                                    <td>{item.Latitude}</td>
                                    <td>{item.Longtitude}</td>
                                    <td>{item.Status}</td>
                                    <td>
                                        {item.Latitude && item.Longtitude && (
                                            <Button
                                                outline
                                                onClick={() =>
                                                    handleVisibleMap(
                                                        item.Latitude,
                                                        item.Longtitude,
                                                    )
                                                }
                                            >
                                                View Map
                                            </Button>
                                        )}
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
