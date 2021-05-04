import styles from '../../styles/components/atoms/ps-menu-button.module.scss';

const PsMenuButton: React.FC = ({ children }) => {
  return (
    <button className={styles.root} onClick={() => {}}>
      {children}
    </button>
  );
};

export default PsMenuButton;
