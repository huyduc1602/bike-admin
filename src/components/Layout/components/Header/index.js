import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Logout, signInWithGoogle } from '~/services/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import LoginGoogle from '../Login';
import LogoutGoogle from '../Logout';
import SessionStorageKey from '../../../../utils/SessionStorageKey';
const cx = classNames.bind(styles);

function Header({ user }) {
    // useEffect(() => {
    //     user = sessionStorage.getItem('currentUser');
    //     if (user) {
    //         console.log('user header:' + user);
    //         setAvatar(user.photoURL);
    //     }
    // }, []);

    const handleSetUser = (userData) => {
        console.log('userData: ' + userData);
        if (userData) {
            sessionStorage.setItem(
                SessionStorageKey.USER_INFO,
                JSON.stringify(userData),
            );
            // window.location.reload();
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button bar orange>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                {user && (
                    <div className={cx('user')}>
                        <img
                            src={user.PhotoURL}
                            alt={'avatar'}
                            referrerPolicy="no-referrer"
                        />
                        <h3>{user.name}</h3>
                        {/* <Button orange login onClick={Logout}>
                            Logout
                        </Button> */}
                        <LogoutGoogle />
                    </div>
                )}
                {!user && (
                    // <Button orange login onClick={SignInGoogle}>
                    //     Login
                    // </Button>
                    <LoginGoogle handleSetUser={handleSetUser} />
                )}
            </div>
        </header>
    );
}
export default Header;
