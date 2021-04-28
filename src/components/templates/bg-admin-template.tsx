import styles from '../../styles/components/templates/bg-admin-template.module.scss';
import BgSideNavigation from '../organisms/bg-side-navigation';

const BgAdminTemplate: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.sideNavWrapper}>
        <BgSideNavigation />
      </div>

      <main className={styles.contents}>{children}</main>
    </div>
  );
};

export default BgAdminTemplate;
