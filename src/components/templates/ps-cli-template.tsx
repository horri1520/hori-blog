import styles from '../../styles/components/templates/ps-cli-template.module.scss';
import PsMenuBar from '../organisms/ps-menu-bar';

const PsCliTemplate: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <PsMenuBar />
      <main className={styles.contents}>{children}</main>
    </div>
  );
};

export default PsCliTemplate;
