import axios from 'axios';
import apiEndpoints from 'src/config/api/api-endpoints';
import apiRequestHeaders from 'src/config/api/api-request-headers';
import FetchPostsApiResponse from 'src/types/api/fetch-posts-response';

const fetchPostsApiClient = async () => {
  const url = apiEndpoints.posts;
  const res = await axios.get(url, { headers: apiRequestHeaders });

  if (res.status !== 200) {
    throw Error(res.statusText);
  }

  const data: FetchPostsApiResponse = res.data;

  return data;
};

export default fetchPostsApiClient;
