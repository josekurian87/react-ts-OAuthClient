import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <GoogleOAuthProvider clientId="1060342539471-a27kj48ep97ubka4h0jnv0g43bl0cl2a.apps.googleusercontent.com">
  <StrictMode>
    <App />
  </StrictMode>
  </GoogleOAuthProvider>
);
