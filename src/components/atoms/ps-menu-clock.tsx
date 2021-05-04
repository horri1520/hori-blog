import getLocaleDate from 'src/utils/get-locale-date';
import styles from '../../styles/components/atoms/ps-menu-clock.module.scss';

const PsMenuClock: React.VFC = () => {
  const now = new Date();
  const date = getLocaleDate(now);

  return (
    <button className={styles.root}>
      {/* <time className={styles.datetime}>{date}</time> */}
      <time className={styles.datetime}>5月4日(火) 13:54</time>
    </button>
  );
};

export default PsMenuClock;
