import pages from 'src/constants/pages';
import postTypes from 'src/constants/post-types';
import Post from 'src/types/post';
import QiitaPost from 'src/types/qiita-post';
import IndexPostsViewModel from 'src/view-models/index-posts';

const integratePosts = (
  posts: Post[],
  qiitaPosts: QiitaPost[],
): IndexPostsViewModel[] => {
  const integratedPosts: IndexPostsViewModel[] = [];

  posts.forEach(post => {
    const p: IndexPostsViewModel = {
      id: post.id,
      title: post.title,
      thumbnail: post.thumbnail
        ? post.thumbnail.url
        : 'https://pbs.twimg.com/card_img/1377614910138548227/zrtwlMGN?format=jpg&name=large',
      publishedAt: post.publishedAt,
      category: post.category.name,
      type: postTypes.microcms,
      url: pages.post.path + post.id,
    };
    integratedPosts.push(p);
  });

  qiitaPosts.forEach(post => {
    const p: IndexPostsViewModel = {
      id: post.id,
      title: post.title,
      thumbnail: post.thumbnailUrl,
      publishedAt: post.publishedAt,
      category: post.category.name,
      type: postTypes.qiita,
      url: post.url,
    };
    integratedPosts.push(p);
  });

  return integratedPosts;
};

export default integratePosts;
