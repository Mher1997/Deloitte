import AppConstants from '../settings/constants';
import { makeAPIGetRequest } from '../services/network/NetworkServiceREST';

const getCategories = () => {
    const url = [AppConstants.network.network_request_url.APP_CONTENTS, AppConstants.network.appKey];

    const data = {
        query: {
            appId: AppConstants.network.appId,
            eventId: AppConstants.network.eventId
        }
    }

    return makeAPIGetRequest(url, data);
}

export default getCategories;