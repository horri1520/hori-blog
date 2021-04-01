import fetchPostsApiClient from 'src/api-clients/fetch-posts';
import IndexTemplate from 'src/components/templates/index-template';
import Post from 'src/types/post';
import styles from '../styles/components/pages/index.module.scss';

type Props = {
  fetchedPosts: Post[];
};

const IndexPage: React.VFC<Props> = ({ fetchedPosts }: Props) => {
  return (
    <div className={styles.root}>
      <IndexTemplate>
        {fetchedPosts.map((post, index) => (
          <div key={index}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </IndexTemplate>
    </div>
  );
};

export const getStaticProps = async () => {
  const fetchPostsApiResponse = await fetchPostsApiClient();

  return {
    props: {
      fetchedPosts: fetchPostsApiResponse.contents,
    },
  };
};

export default IndexPage;
