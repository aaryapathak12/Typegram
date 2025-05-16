import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App.jsx'
const domain=process.env.REACT_APP_AUTH0_DOMAIN;
const client=process.env.REACT_APP_AUTH0_CLIENT_ID;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={client}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <App />
  </Auth0Provider>
  </StrictMode>,
)
