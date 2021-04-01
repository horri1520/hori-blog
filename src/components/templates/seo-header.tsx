import Head from 'next/head';

const SEOHeader: React.VFC = () => {
  return (
    <Head>
      <title>hori-blog</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export default SEOHeader;
