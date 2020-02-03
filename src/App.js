import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Navigation from './navigation';

export default () => (
  <ToastProvider>
    <Navigation />
  </ToastProvider>
)
