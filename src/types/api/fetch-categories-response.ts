import Category from '../category';

type FetchCategoriesApiResponse = {
  contents: Category[];
  totalCount: number;
  offset: number;
  limit: number;
};

export default FetchCategoriesApiResponse;
