import Thumbnail from './thumbnail';

type Post = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  thumbnail?: Thumbnail;
  body: string;
};

export default Post;
