import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import images from '~/assets/images';
import { links } from '~/data/data';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to={'/'}>
                        <span className={cx('logoHeader')}>
                            <span className={cx('logoContent')}>
                                <img
                                    className={cx('logoImg')}
                                    src={images.logo}
                                    alt={'F-Go'}
                                ></img>
                                <h1>
                                    <span>F</span>Go
                                </h1>
                            </span>
                        </span>
                    </Link>
                </div>
                <div className={cx('content')}>
                    {links.map((item) => (
                        <div className={cx('title')} key={item.title}>
                            <span className={cx('title')}>{item.title}</span>
                            {item.links.map((link) => (
                                <Link to={link.link}>
                                    <div
                                        className={cx('links')}
                                        key={link.name}
                                    >
                                        {window.location.pathname ==
                                        link.link ? (
                                            <span className={cx('tagActive')}>
                                                <span className={cx('icon')}>
                                                    <FontAwesomeIcon
                                                        icon={link.icon}
                                                    />
                                                </span>
                                                <span className={cx('title')}>
                                                    {link.name}
                                                </span>
                                            </span>
                                        ) : (
                                            <span className={cx('tag')}>
                                                <span className={cx('icon')}>
                                                    <FontAwesomeIcon
                                                        icon={link.icon}
                                                    />
                                                </span>
                                                <span className={cx('title')}>
                                                    {link.name}
                                                </span>
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                    <span>HieuTCM</span>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
