/**
 * React Native App
 * Everything starts from the App
 */
import { LoadingRoot, ToastProvider } from '@components';
import { I18n, LanguageProvider } from '@i18n';
import MainStack from '@navigation';
import configureStore from 'app/store';
import React, { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

const { persistor, store } = configureStore();

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <I18nextProvider i18n={I18n}>
          <Suspense fallback={null}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
              <MainStack />
              <ToastProvider />
              <LanguageProvider />
            </PersistGate>
            <LoadingRoot />
          </Suspense>
        </I18nextProvider>
      </Provider>
    </React.Fragment>
  );
};

export default App;
