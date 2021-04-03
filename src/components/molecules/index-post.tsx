import IndexPostsViewModel from 'src/view-models/index-posts';
import styles from '../../styles/components/molucules/index-post.module.scss';
import NextLink from '../atoms/next-link';

type Props = {
  post: IndexPostsViewModel;
};

const IndexPost: React.VFC<Props> = ({ post }: Props) => {
  return (
    <NextLink href={post.url}>
      <article className={styles.root}>
        <img className={styles.thumbnail} src={post.thumbnail} alt="th" />
        <h1>{post.title}</h1>
      </article>
    </NextLink>
  );
};

export default IndexPost;
