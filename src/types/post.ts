import Category from './category';
import Thumbnail from './thumbnail';

type Post = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  title: string;
  thumbnail: Thumbnail;
  body: string;
  category: Category;
};

export default Post;
