import fetchCategoriesApiClient from 'src/api-clients/fetch-categories';
import fetchPostsApiClient from 'src/api-clients/fetch-posts';
import fetchQiitaPostsApiClient from 'src/api-clients/fetch-qiita-posts';
import IndexPosts from 'src/components/organisms/index-posts';
import IndexTemplate from 'src/components/templates/index-template';
import Category from 'src/types/category';
import integratePosts from 'src/utils/integrate-posts';
import newestSortIndexPosts from 'src/utils/newest-sort-index-posts';
import IndexPostsViewModel from 'src/view-models/index-posts';
import styles from '../styles/components/pages/index.module.scss';

type Props = {
  fetchedIndexPosts: IndexPostsViewModel[];
  fetchedCategories: Category[];
};

const IndexPage: React.VFC<Props> = ({
  fetchedIndexPosts,
  fetchedCategories,
}: Props) => {
  return (
    <div className={styles.root}>
      <IndexTemplate>
        <IndexPosts posts={fetchedIndexPosts} />
      </IndexTemplate>
    </div>
  );
};

export const getStaticProps = async () => {
  const fetchPostsApiResponse = await fetchPostsApiClient();
  const fetchQiitaPostsApiResponse = await fetchQiitaPostsApiClient();
  const fetchCategoriesApiResponse = await fetchCategoriesApiClient();

  const fetchedIndexPosts: IndexPostsViewModel[] = integratePosts(
    fetchPostsApiResponse.contents,
    fetchQiitaPostsApiResponse.contents,
  );

  fetchedIndexPosts.sort((a, b) => newestSortIndexPosts(a, b));

  return {
    props: {
      fetchedIndexPosts: fetchedIndexPosts,
      fetchedCategories: fetchCategoriesApiResponse.contents,
    },
  };
};

export default IndexPage;
