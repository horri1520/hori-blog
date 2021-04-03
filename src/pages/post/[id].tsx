import { useRouter } from 'next/dist/client/router';

const PostPage: React.VFC = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>{id}</p>;
};

export default PostPage;
