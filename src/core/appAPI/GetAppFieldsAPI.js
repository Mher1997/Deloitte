import AppConstants from '../settings/constants';
import { makeAPIGetRequest } from '../services/network/NetworkServiceREST';

const getAppFields = () => {
    const url = [AppConstants.network.network_request_url.GET_APP_FIELDS, AppConstants.network.appId];

    const options = {
        query: {
            eventId: AppConstants.network.eventId
        }
    }

    return makeAPIGetRequest(url, options);
}

export default getAppFields;