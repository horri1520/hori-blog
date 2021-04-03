import IndexPostsViewModel from 'src/view-models/index-posts';
import styles from '../../styles/components/organisms/index-posts.module.scss';
import IndexPost from '../molecules/index-post';

type Props = {
  posts: IndexPostsViewModel[];
};

const IndexPosts: React.VFC<Props> = ({ posts }: Props) => {
  return (
    <div className={styles.root}>
      {posts.map(post => (
        <IndexPost post={post} key={post.id} />
      ))}
    </div>
  );
};

export default IndexPosts;
