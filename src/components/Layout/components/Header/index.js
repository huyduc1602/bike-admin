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
import { gapi } from 'gapi-script';

const clientId =
    '489362668767-85aqns3bpjp20t3ieg5u27jn3mhd6lvm.apps.googleusercontent.com';
const cx = classNames.bind(styles);

function Header({ user }) {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    });
    const handleSetUser = (userData) => {
        if (userData) {
            sessionStorage.setItem(
                SessionStorageKey.USER_INFO,
                JSON.stringify(userData),
            );
            sessionStorage.setItem(
                SessionStorageKey.ACESS_TOKEN,
                JSON.stringify(userData.accessToken),
            );
            window.location.reload();
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
