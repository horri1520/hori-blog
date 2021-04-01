import Post from '../post';

type FetchPostsApiResponse = {
  contents: Post[];
  totalCount: number;
  offset: number;
  limit: number;
};

export default FetchPostsApiResponse;
