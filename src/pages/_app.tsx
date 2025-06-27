// File: src/pages/_app.tsx

import Layout from '@/components/Layout/Layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';

// Эти импорты задействуют redux-persist, поэтому мы не можем 
// «автоматически» применять их на сервере
import { persistor, store } from '@/services/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({ Component, pageProps }: AppProps) {
  // Флаг, который указывает, загрузились ли мы уже в браузере
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Этот useEffect выполнится только на клиенте (после гидратации)
    setIsClient(true);
  }, []);

  // Если мы ещё не перешли к клиентскому рендеру, а мы в SSR, просто выводим Layout+Component
  if (!isClient) {
    return (
      <Layout>
        <Head>
          <link rel="icon" href="/icons/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    );
  }

  // После того как React «запускается» в браузере, isClient станет true,
  // и мы «подключим» Redux и PersistGate
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Head>
            <link rel="icon" href="/icons/favicon.ico" />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/icons/favicon-16x16.png"
            />
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
