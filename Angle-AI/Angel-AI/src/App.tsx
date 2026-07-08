import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './core/hooks/AppProvider';
import GlobalSOS from './components/sos/GlobalSOS';
import AppRouter from './routes';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <AppRouter />
        <GlobalSOS />
      </BrowserRouter>
    </AppProvider>
  );
}
