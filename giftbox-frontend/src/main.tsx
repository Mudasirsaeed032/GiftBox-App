import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './app/router';
import { AuthProvider } from './app/providers/AuthProvider';
import { CartProvider } from './app/providers/CartProvider';
import { WishlistProvider } from './app/providers/WishlistProvider';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <ErrorBoundary>
            <Suspense fallback={<div className="p-6">Loading...</div>}>
              <RouterProvider router={router} />
            </Suspense>
          </ErrorBoundary>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </React.StrictMode>
);
