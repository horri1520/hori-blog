import Page from 'src/types/page';
import SideNavigation from '../organisms/side-navigation';
import styles from '../../styles/components/templates/seperate-view.module.scss';
import MetaHeaders from './meta-headers';

type Props = {
  children?: React.ReactChild;
  currentPage: Page;
};

const SeperateView: React.FC<Props> = ({ children, currentPage }: Props) => {
  return (
    <div className={styles.root}>
      <MetaHeaders />

      <SideNavigation currentPage={currentPage} />
      <div className={styles.contentsOuter}>
        <div className={styles.contentsInner}>{children}</div>
      </div>
    </div>
  );
};

export default SeperateView;
