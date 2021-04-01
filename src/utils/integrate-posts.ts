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
      title: post.title,
      thumbnail: post.thumbnail ? post.thumbnail.url : '',
      publishedAt: post.publishedAt,
    };
    integratedPosts.push(p);
  });

  qiitaPosts.forEach(post => {
    const p: IndexPostsViewModel = {
      title: post.title,
      thumbnail: post.thumbnailUrl,
      publishedAt: post.publishedAt,
    };
    integratedPosts.push(p);
  });

  return integratedPosts;
};

export default integratePosts;
