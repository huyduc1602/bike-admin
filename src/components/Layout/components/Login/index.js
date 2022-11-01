import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '~/utils/refreshToken';
import { gapi } from 'gapi-script';

const clientId =
    '489362668767-85aqns3bpjp20t3ieg5u27jn3mhd6lvm.apps.googleusercontent.com';

function LoginGoogle(props) {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);
    const setUser = (user) => {
        props.handleSetUser(user);
    };

    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
        // initializing the setup
        refreshTokenSetup(res);
        const user = {
            ID: res.profileObj.googleId,
            name: res.profileObj.name,
            email: res.profileObj.email,
            PhotoURL: res.profileObj.imageUrl,
            accessToken: res.accessToken,
        };
        setUser(user);
        console.log('user:', user);
    };
    const onFailure = (res) => {
        console.log('Login failed] res:', res);
    };
    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin '}
                style={{ marginTop: '100px' }}
                issignedIn={true}
            />
        </div>
    );
}
export default LoginGoogle;
