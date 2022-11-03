import * as httpRequest from '../httpRequest';
import SessionStorageKey from '../../utils/SessionStorageKey';

export const getTokenApi = async (idToken) => {
    idToken =
        'eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0NTEzNDVmYWQwODEwMWJmYjM0NWNmNjQyYTJkYTkyNjdiOWViZWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2NjU5NzExOTk4MDEtdXVjc2VrdDM2anQ3MTZxcjYwN3IycmllZXFzcnVsaGIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI2NjU5NzExOTk4MDEtdXVjc2VrdDM2anQ3MTZxcjYwN3IycmllZXFzcnVsaGIuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIzMzQ2MTI0MTYyMjExMzA4ODEiLCJlbWFpbCI6Imh1eWR1YzE2MDJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJrcF9VcUpJNDBsWVRwcVhhSEtnMWtRIiwibmFtZSI6Ikhvw6BuZyBIdXkgxJDhu6ljIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FMbTV3dTJfdnVaTXRWcFd1SzJNR2FEVzBicTBIVXlybWYzVUlfeGNaSGtrZHc9czk2LWMiLCJnaXZlbl9uYW1lIjoiSG_DoG5nIEh1eSIsImZhbWlseV9uYW1lIjoixJDhu6ljIiwibG9jYWxlIjoidmkiLCJpYXQiOjE2Njc0NjA4MDAsImV4cCI6MTY2NzQ2NDQwMH0.ONrxeNCNwlscTG-dvaGtQcgByJtweDqaxea4YPOr4oULhFLmr0f3K9RFQy7SC-76lR8RYA8MPbUH5HnJgPAVm4VBqjWEXdwhnmO87fOxM2H3xfAgPMibdYW6XY526IXF5CzzlwZdLYedtPpQkvgdx6LvidKjTgqjFb8hNFSb8PujvTU8q3hTue3StPprEPHflDNccg_N1NSgEoeI6wT_pwxKLBFh-hXycEYyLejgzXvDVL6MUKoBOmGX8byWqe5mLipWCYbjEvkowXZtcp6fDMHBRffehNFayFh3JnN4INGSKcLk16FOFAQn3wH5brCFeyxsbqPn_yiEr_u6Nb_-3Q';
    try {
        console.log('id toke gui len : ' + idToken.replace(/\s/g, ''));
        const res = await httpRequest.post('/auth/login-admin', idToken);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
