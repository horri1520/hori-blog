import SeperateView from 'src/components/templates/seperate-view';
import pages from 'src/constants/pages';

const CategoriesPage: React.VFC = () => {
  const currentPage = pages.categories;
  return <SeperateView currentPage={currentPage}>CategoriesPage</SeperateView>;
};

export default CategoriesPage;
