import AppConstants from '../settings/constants';
import { makeAPIGetRequest } from '../services/network/NetworkServiceREST';

const getCompLogo = () => {
    const url = [AppConstants.network.network_request_url.GET_COMP_LOGO, AppConstants.network.appId];

    return makeAPIGetRequest(url);
}

export default getCompLogo;