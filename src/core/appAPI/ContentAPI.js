import AppConstants from '../settings/constants';
import { makeAPIGetRequest } from '../services/network/NetworkServiceREST';

const getContent = () => {
    const url = [AppConstants.network.network_request_url.CONTENT_APP_CATS, AppConstants.network.appKey];

    const data = {
        query: {
            appId: AppConstants.network.appId,
            eventId: AppConstants.network.eventId
        }
    }

    return makeAPIGetRequest(url, data);
}

export default getContent;