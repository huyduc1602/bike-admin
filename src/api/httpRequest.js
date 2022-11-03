import axios from 'axios';
import SessionStorageKey from '../utils/SessionStorageKey';

const accessToken = sessionStorage.getItem(SessionStorageKey.ACESS_TOKEN);
const httpRequest = axios.create({
    baseURL: 'https://bikeke.azurewebsites.net/',
    headers: { Authorization: accessToken },
});
const httpAuthRequest = axios.create({
    baseURL: 'https://bikeke.azurewebsites.net/',
    headers: {
        Authorization: accessToken,
        'Content-Type': 'application/json, text/plain, */*',
        'Access-Control-Allow-Origin': '*',
    },
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export const post = async (path, token) => {
    const response = await httpAuthRequest.post(path, token);
    return response.data;
};

export default httpRequest;
