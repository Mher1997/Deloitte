import AppConstants from '../../../core/settings/constants';

const createUrl = arg => {
    let url = AppConstants.network.REST_API_URL;
    if(Array.isArray(arg)){
        url = [url, ...arg].join('/');
    }else{
        url = `${url}/${arg}`;
    }
    return url;
}

const MakeAPIRequest = (url, options) => {
    let requestURL = createUrl(url);

    if(options.query){
        requestURL += '?';
        for(let key in options.query){
            requestURL += `${key}=${options.query[key]}&`
        }
    }

    const fetchOptions = {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    fetchOptions.body = options.body && JSON.stringify(options.body);

    return fetch(requestURL, fetchOptions)
        .then(async response => {
            const contentType = response.headers.get("content-type");
            const success = response.ok;
            const data = await response;

            if(!success){
                if(data.Message){
                    throw new Error(data.Message);
                }else{
                    throw new Error('Error message');
                }
            }

            return contentType !== 'application/json' ? data.text() : data.json();
            
        }).catch(err=>err);
}


export const makeAPIGetRequest = (url, data) => {
    const options = data || {};
    const method = 'GET';
    options.method = method;
    
    return MakeAPIRequest(url, options);
}