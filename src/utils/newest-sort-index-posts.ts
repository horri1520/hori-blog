import IndexPostsViewModel from 'src/view-models/index-posts';
import getTimestamp from './get-timestamp';

const newestSortIndexPosts = (
  a: IndexPostsViewModel,
  b: IndexPostsViewModel,
) => {
  const a_ts = getTimestamp(a.publishedAt);
  const b_ts = getTimestamp(b.publishedAt);

  if (a_ts === null || b_ts === null) {
    return 0;
  } else if (a_ts > b_ts) {
    return -1;
  } else {
    return 1;
  }
};

export default newestSortIndexPosts;
