import styles from '../../styles/components/templates/bg-admin-template.module.scss';
import BgHeader from '../organisms/bg-header';
import BgSideNavigation from '../organisms/bg-side-navigation';

const BgAdminTemplate: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.headerWrapper}>
        <BgHeader />
      </div>
      <div className={styles.sideNavWrapper}>
        <BgSideNavigation />
      </div>

      <main className={styles.contents}>{children}</main>
    </div>
  );
};

export default BgAdminTemplate;
