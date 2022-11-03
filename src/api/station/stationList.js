import * as httpRequest from '../httpRequest';

export const listStaionApi = async (page = 1) => {
    try {
        const res = await httpRequest.get('/station/all', {
            params: { page: page },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
