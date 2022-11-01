import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
    '489362668767-85aqns3bpjp20t3ieg5u27jn3mhd6lvm.apps.googleusercontent.com';
function LogoutGoogle() {
    const onSuccess = () => {
        window.location.reload();
        sessionStorage.removeItem('currentUser');
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
