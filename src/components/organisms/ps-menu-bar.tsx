import styles from '../../styles/components/organisms/ps-menu-bar.module.scss';
import PsMenuButton from '../atoms/ps-menu-button';
import PsMenuClock from '../atoms/ps-menu-clock';

const PsMenuBar: React.VFC = () => {
  return (
    <header className={styles.root}>
      <nav className={styles.navigation}>
        <PsMenuButton>Portfolio of Kaito Horiuchi</PsMenuButton>
        <PsMenuButton>ファイル</PsMenuButton>
        <PsMenuButton>編集</PsMenuButton>
        <PsMenuButton>表示</PsMenuButton>
        <PsMenuButton>移動</PsMenuButton>
        <PsMenuButton>ウィンドウ</PsMenuButton>
        <PsMenuButton>ヘルプ</PsMenuButton>
      </nav>

      <div className={styles.controllers}>
        <PsMenuClock />
      </div>
    </header>
  );
};

export default PsMenuBar;
