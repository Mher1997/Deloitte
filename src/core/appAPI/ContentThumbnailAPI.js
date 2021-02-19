import AppConstants from '../settings/constants';
import { makeAPIGetRequest } from '../services/network/NetworkServiceREST';

const getThumbnails = () => {
    const url = [AppConstants.network.network_request_url.CONTENT_THUMBNAIL_URL, AppConstants.network.appId];

    return makeAPIGetRequest(url);
}

export default getThumbnails;