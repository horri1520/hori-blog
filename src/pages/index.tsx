import fetchPostsApiClient from 'src/api-clients/fetch-posts';
import fetchQiitaPostsApiClient from 'src/api-clients/fetch-qiita-posts';
import IndexTemplate from 'src/components/templates/index-template';
import integratePosts from 'src/utils/integrate-posts';
import newestSortIndexPosts from 'src/utils/newest-sort-index-posts';
import IndexPostsViewModel from 'src/view-models/index-posts';
import styles from '../styles/components/pages/index.module.scss';

type Props = {
  fetchedIndexPosts: IndexPostsViewModel[];
};

const IndexPage: React.VFC<Props> = ({ fetchedIndexPosts }: Props) => {
  return (
    <div className={styles.root}>
      <IndexTemplate>
        {fetchedIndexPosts.map((post, index) => (
          <div key={index}>
            <h1>{post.title}</h1>
          </div>
        ))}
      </IndexTemplate>
    </div>
  );
};

export const getStaticProps = async () => {
  const fetchPostsApiResponse = await fetchPostsApiClient();
  const fetchQiitaPostsApiResponse = await fetchQiitaPostsApiClient();

  const fetchedIndexPosts: IndexPostsViewModel[] = integratePosts(
    fetchPostsApiResponse.contents,
    fetchQiitaPostsApiResponse.contents,
  );

  fetchedIndexPosts.sort((a, b) => newestSortIndexPosts(a, b));

  return {
    props: {
      fetchedIndexPosts: fetchedIndexPosts,
    },
  };
};

export default IndexPage;
