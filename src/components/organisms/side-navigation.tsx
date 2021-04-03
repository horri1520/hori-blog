import pages from 'src/constants/pages';
import links from 'src/constants/links';
import Page from 'src/types/page';
import NextLink from '../atoms/next-link';
import styles from '../../styles/components/organisms/side-navigation.module.scss';

type Props = {
  currentPage: Page;
};

const SideNavigation: React.VFC<Props> = ({ currentPage }: Props) => {
  return (
    <header className={styles.root}>
      <nav className={styles.wrapper}>
        <h1 className={styles.title}>hori-blog</h1>
        <NextLink href={pages.index.path}>
          <a
            className={
              currentPage === pages.index
                ? styles.activeTabButton
                : styles.tabButton
            }
            href={pages.index.path}
          >
            Posts
          </a>
        </NextLink>
        <NextLink href={pages.categories.path}>
          <a
            className={
              currentPage === pages.categories
                ? styles.activeTabButton
                : styles.tabButton
            }
            href={pages.categories.path}
          >
            Categories
          </a>
        </NextLink>
        <NextLink href={links.portfolio}>
          <a className={styles.tabButton} href={links.portfolio}>
            Portfolio
          </a>
        </NextLink>
      </nav>
    </header>
  );
};

export default SideNavigation;
