import Footer from '../organisms/footer';
import Header from '../organisms/header';
import SEOHeader from './seo-header';

const IndexTemplate: React.FC = ({ children }) => {
  return (
    <div>
      <SEOHeader />

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default IndexTemplate;
