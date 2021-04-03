import axios from 'axios';
import apiEndpoints from 'src/config/api/api-endpoints';
import apiRequestHeaders from 'src/config/api/api-request-headers';
import FetchQiitaPostsApiResponse from 'src/types/api/fetch-qiita-posts-response';

const fetchQiitaPostsApiClient = async () => {
  const url = apiEndpoints.qiitaPosts;
  const res = await axios.get(url, { headers: apiRequestHeaders });

  if (res.status !== 200) {
    throw Error(res.statusText);
  }

  const data: FetchQiitaPostsApiResponse = res.data;

  return data;
};

export default fetchQiitaPostsApiClient;
