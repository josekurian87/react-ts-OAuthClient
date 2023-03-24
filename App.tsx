import * as React from 'react';
import './style.css';

import { GoogleLogin } from '@react-oauth/google';

export default function App() {
  const responseMessage = (response) => {
    console.log('Success >> ', response);
  };
  const errorMessage = (error) => {
    console.log('Error >> ', error);
  };
  return (
    <div>
      <h1>OAuth Client</h1>
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}
