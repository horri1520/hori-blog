import { AppProps } from 'next/app';
import '../styles/foundation/global.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
