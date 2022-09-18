import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { signInWithGoogle, auth, Logout } from '~/services/firebase';

import classNames from 'classnames/bind';
import styles from '../Login/Login.module.scss';

const cx = classNames.bind(styles);
export default function SignIn() {
    const [currentUser, setCurrentUser] = useState();
    const [token, setToken] = useState();

    async function SignInGoogle() {
        signInWithGoogle().then((result) => {
            console.log('Result: ', result);
            setToken(result.user.accessToken);
            setCurrentUser(auth.currentUser);
        });
    }
    useEffect(() => {
        const fetchData = async () => {
            await setCurrentUser(auth.currentUser);
        };
        fetchData().catch((e) => {
            console.log(e);
        });

        //setCurrentUser(auth.currentUser);
    }, []);
    if (currentUser) {
        var user = [
            {
                ID: currentUser.uid,
                name: currentUser.displayName,
                email: currentUser.email,
                PhotoURL: currentUser.photoURL,
            },
        ];
        sessionStorage.setItem('currentUser', JSON.stringify(auth.currentUser));
        window.location.assign('/');
    }

    return (
        <center>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <center>
                        <div className={cx('content')}>
                            <h1>Login</h1>
                            {!currentUser && (
                                <button onClick={SignInGoogle}>
                                    Login By Google
                                </button>
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
