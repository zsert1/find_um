import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {legacy_createStore as createStore} from 'redux';
import rootReducer from './modules';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
