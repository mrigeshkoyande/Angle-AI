import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './core/hooks/useApp';
import AppRouter from './routes';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </AppProvider>
  );
}
