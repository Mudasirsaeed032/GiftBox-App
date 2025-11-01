import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthPage from './pages/Auth';
import ResetPage from './pages/Reset';
import UpdatePasswordPage from './pages/UpdatePassword';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/auth', element: <AuthPage /> },
  { path: '/reset', element: <ResetPage /> },
  { path: '/update-password', element: <UpdatePasswordPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
