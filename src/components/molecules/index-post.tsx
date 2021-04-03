import IndexPostsViewModel from 'src/view-models/index-posts';
import Image from 'next/image';
import styles from '../../styles/components/molucules/index-post.module.scss';
import NextLink from '../atoms/next-link';

type Props = {
  post: IndexPostsViewModel;
};

const IndexPost: React.VFC<Props> = ({ post }: Props) => {
  return (
    <div className={styles.root}>
      <NextLink href={post.url}>
        <article className={styles.wrapper}>
          <img
            src={post.thumbnail}
            alt="th"
            decoding="async"
            className={styles.thumbnail}
          />
          <div className={styles.information}>
            <h1>{post.title}</h1>
          </div>
        </article>
      </NextLink>
    </div>
  );
};

export default IndexPost;
