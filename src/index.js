import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from './redux/store';
import { ThemeProvider } from 'styled-components';
import { store, persistor } from './redux/store';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
        </Provider>
      </ThemeProvider>
  </React.StrictMode>
);
