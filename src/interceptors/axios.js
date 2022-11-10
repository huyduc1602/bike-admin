import axios from 'axios';
import SessionStorageKey from '~/utils/LocalStorageKey';

axios.defaults.baseURL = 'https://another-bikeke2.herokuapp.com/api/v1/';

let refresh = false;

const handleLocalStorage = () => {
    window.localStorage.setItem('isThisInLocalStorage', 'true');
    window.dispatchEvent(new Event('storage'));
};

if (localStorage.getItem('access_token')) {
    axios.defaults.headers.common['Authorization'] =
        localStorage.getItem('access_token');
}

axios.interceptors.response.use(
    (resp) => resp,
    async (error) => {
        if (error.response.status === 403 && !refresh) {
            refresh = true;

            const response = await axios.post(
                'auth/admin',
                {
                    idToken: localStorage.getItem(SessionStorageKey.ID_TOKEN),
                },
                { withCredentials: true },
            );

            if (response.status === 200) {
                axios.defaults.headers.common[
                    'Authorization'
                ] = `Bearer ${response.data['accessToken']}`;
                handleLocalStorage();
                localStorage.setItem(
                    'access_token',
                    'Bearer ' + response.data['accessToken'],
                );

                return axios(error.config);
            }
        }
        refresh = false;
        return error;
    },
);
