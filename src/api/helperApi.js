const replaceFilterParams = (params) => {
    let searchParams = {
        filter: [],
        perPage: params.perPage,
        page: params.page,
    };
    Object.entries(params.filter || {}).forEach(([key, value]) => {
        const filterKey = 'filter[' + key + ']';
        searchParams[[filterKey]] = value;
    });
    return searchParams;
};

export {
    replaceFilterParams,
};