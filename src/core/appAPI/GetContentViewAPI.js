import AppConstants from '../settings/constants';
import { makeAPIGetRequest } from '../services/network/NetworkServiceREST';

const getContentView = (id) => {
    const url = [AppConstants.network.network_request_url.CONTENTS, AppConstants.network.network_request_url.COUNT_VIEW, id, AppConstants.network.appId, AppConstants.network.eventId];

    return makeAPIGetRequest(url);
}

export default getContentView;