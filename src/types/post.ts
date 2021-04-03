import Category from './category';
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
  category: Category;
};

export default Post;
