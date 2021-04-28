import fetchPostsApiClient from 'src/api-clients/fetch-posts';
import BgAdminTemplate from 'src/components/templates/bg-admin-template';
import FetchPostsApiResponse from 'src/types/api-responses/fetch-post';
import Post from 'src/types/post';

type Props = {
  fetchedPosts: FetchPostsApiResponse;
};

const IndexPage: React.VFC<Props> = ({ fetchedPosts }) => {
  return (
    <BgAdminTemplate>
      {fetchedPosts.contents.map((post: Post, index: number) => (
        <div key={index}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </BgAdminTemplate>
  );
};

export const getServerSideProps = async () => {
  const fetchedPosts: FetchPostsApiResponse = await fetchPostsApiClient();

  return {
    props: {
      fetchedPosts: fetchedPosts,
    },
  };
};

export default IndexPage;
