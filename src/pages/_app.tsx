import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../services/redux/store';
import type { AppProps } from 'next/app';
// import Layout from '@/components/Layout/Layout';
import Head from 'next/head';
import '../../public/fonts/fonts.css';
import '../../public/normalize.css';
import '../globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Layout> */}
          <Head>
            <link rel="icon" href="/icons/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          </Head>
          <Component {...pageProps} />
        {/* </Layout> */}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
