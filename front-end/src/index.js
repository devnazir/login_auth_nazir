import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ProviderMessage } from './hooks/useMessage';
import { ProviderToken } from './hooks/useToken';

ReactDOM.render(
  <React.StrictMode>
    <ProviderMessage>
      <ProviderToken>
        <App />
      </ProviderToken>
    </ProviderMessage>
  </React.StrictMode>,
  document.getElementById('root')
);
