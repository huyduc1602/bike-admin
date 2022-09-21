import classnames from 'classnames/bind';
import styles from './Table.module.scss';

const cx = classnames.bind(styles);
function Table({ data }) {
    return (
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
    );
}

export default Table;
