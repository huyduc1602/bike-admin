import React, { useEffect, useState } from 'react';
import styles from '../Login/Login.module.scss';
import classNames from 'classnames/bind';
import LoginGoogle from '~/components/Layout/components/Login';
import SessionStorageKey from '~/utils/LocalStorageKey';
import { gapi } from 'gapi-script';
import * as authJwt from '~/api/auth/authJwt';
import { Navigate, useNavigate } from 'react-router-dom';

const clientId =
    '518656647195-jrug4gar0b1u63jtnnbgkhgpnt2tv2h4.apps.googleusercontent.com';
const cx = classNames.bind(styles);

function SignIn() {
    const [currentUser, setCurrentUser] = useState();
    const [token, setToken] = useState();
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    });
    const setAccessToken = (tokenId) => {
        const result = authJwt.getTokenApi(tokenId);

        console.log('result: ' + result.tokenType + '-' + result.accessToken);
        window.location.href = '/';
        return navigate('/');
    };
    const handleSetUser = (userData) => {
        if (userData) {
            localStorage.setItem(
                SessionStorageKey.USER_INFO,
                JSON.stringify(userData),
            );
            localStorage.setItem(SessionStorageKey.ID_TOKEN, userData.tokenId);
            setAccessToken(userData.tokenId);
            setUserInfo(userData);
            console.log('userData: ' + JSON.stringify(userData));
        }
    };
    return (
        <center>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <center>
                        <div className={cx('content')}>
                            <h1>Login</h1>
                            {!currentUser && (
                                <LoginGoogle handleSetUser={handleSetUser} />
                            )}
                            {currentUser && (
                                <div>
                                    <h1>Please waiting a minute</h1>
                                </div>
                            )}
                        </div>
                    </center>
                </div>
            </div>
        </center>
    );
}

export default SignIn;
