import { corvaDataAPI } from '@corva/ui/clients';

import { API } from '../constants/api';

const fetchWitsData = async ({ query }) => {
  const url = `${API.BASE_URL}/${API.PROVIDER}/${API.WITS_DATASET}/`;
  const params = {
    limit: API.DEFAULT_LIMIT,
    query: JSON.stringify(query),
    sort: JSON.stringify({ timestamp: 1 }), // from oldest to newest
  };

  const response = await corvaDataAPI.get(url, params);

  if (response && response.length) return response;
  else return [];
};

const fetchAggregateWitsData = async ({ query }) => {
  const url = `${API.BASE_URL}/${API.PROVIDER}/${API.WITS_DATASET}/aggregate/`;
  const params = {
    limit: API.DEFAULT_LIMIT,
    match: JSON.stringify({
      ...query,
    }),
    sort: JSON.stringify({ timestamp: 1 }), // from oldest to newest
  };

  const response = await corvaDataAPI.get(url, params);

  if (response && response.length) return response;
  else return [];
};

export { fetchAggregateWitsData, fetchWitsData };
