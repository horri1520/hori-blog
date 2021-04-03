import axios from 'axios';
import apiEndpoints from 'src/config/api/api-endpoints';
import apiRequestHeaders from 'src/config/api/api-request-headers';
import FetchCategoriesApiResponse from 'src/types/api/fetch-categories-response';

const fetchCategoriesApiClient = async () => {
  const url = apiEndpoints.category;
  const res = await axios.get(url, { headers: apiRequestHeaders });

  const data: FetchCategoriesApiResponse = res.data;

  return data;
};

export default fetchCategoriesApiClient;
