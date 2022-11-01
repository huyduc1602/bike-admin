import React from 'react';
import { GoogleLogout } from 'react-google-login';
import SessionStorageKey from '../../../../utils/SessionStorageKey';

const clientId =
    '489362668767-85aqns3bpjp20t3ieg5u27jn3mhd6lvm.apps.googleusercontent.com';
function LogoutGoogle() {
    const onSuccess = () => {
        sessionStorage.removeItem(SessionStorageKey.USER_INFO);
        sessionStorage.removeItem(SessionStorageKey.ACESS_TOKEN);
        window.location.reload();
    };
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
}
export default LogoutGoogle;
