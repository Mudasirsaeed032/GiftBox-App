import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthPage from './pages/Auth';
import ResetPage from './pages/Reset';
import UpdatePasswordPage from './pages/UpdatePassword';
import { AuthProvider } from './app/providers/AuthProvider';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/auth', element: <AuthPage /> },
  { path: '/reset', element: <ResetPage /> },
  { path: '/update-password', element: <UpdatePasswordPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ErrorBoundary>
        <Suspense fallback={<div className="p-6">Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </ErrorBoundary>
    </AuthProvider>
  </React.StrictMode>
);
