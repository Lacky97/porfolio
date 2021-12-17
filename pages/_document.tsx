import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='dark'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content='MERN Stack Web Developer'></meta>
          <meta
            name="keywords"
            content='MERN Stack Web'></meta>
          
        </Head>
        <body className='bg-fixed bg-gradient-to-r from-green to-blue-400 dark:from-dark-600 dark:to-dark-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
