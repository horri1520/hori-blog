import Footer from '../organisms/footer';
import Header from '../organisms/header';
import styles from '../../styles/components/templates/index-template.module.scss';
import SEOHeader from './seo-header';

const IndexTemplate: React.FC = ({ children }) => {
  return (
    <div className={styles.root}>
      <SEOHeader />

      <Header />
      <div className={styles.contentsOuter}>
        <div className={styles.contentsInner}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default IndexTemplate;
