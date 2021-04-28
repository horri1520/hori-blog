import styles from '../../styles/components/templates/bg-admin-template.module.scss';

const BgAdminTemplate: React.FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default BgAdminTemplate;
