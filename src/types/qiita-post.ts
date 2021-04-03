import Category from './category';

type QiitaPost = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  category: Category;
};

export default QiitaPost;
