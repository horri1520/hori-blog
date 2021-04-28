import axios from 'axios';
import API_BASE_URL from 'src/config/api/api-base-url';
import apiEndpoints from 'src/config/api/api-endpoints';
import apiRequestHeaders from 'src/config/api/api-request-headers';
import FetchPostsApiResponse from 'src/types/api-responses/fetch-post';
import Post from 'src/types/post';

const fetchPostsApiClient = async (): Promise<FetchPostsApiResponse> => {
  const url = `${API_BASE_URL}/${apiEndpoints.posts}`;

  const res = await axios.get(url, {
    headers: apiRequestHeaders,
  });

  const fetchedPosts: FetchPostsApiResponse = res.data;
  return fetchedPosts;
};

export default fetchPostsApiClient;
