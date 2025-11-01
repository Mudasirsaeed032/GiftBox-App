import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';

export default function App() {
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [products, setProducts] = useState<any[]>([]);

  // Track session
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSessionToken(data.session?.access_token ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSessionToken(s?.access_token ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  // signIn removed: magic-link UI handled on dedicated auth page

  async function loadProducts() {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/products`);
    setProducts(await res.json());
  }

  async function loadMyOrders() {
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/api/orders/mine`, {
      headers: sessionToken ? { Authorization: `Bearer ${sessionToken}` } : {}
    });
    const data = await res.json();
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
  <h1 className="text-2xl font-bold mb-4">GiftStop – React + Node + Supabase</h1>

      <div className="mb-6 space-y-2">
        <div className="text-sm text-gray-600">Logged in? {sessionToken ? 'Yes' : 'No'}</div>
      </div>

      <div className="flex gap-3 mb-6 items-center">
        <button className="border px-3 py-2 rounded" onClick={loadProducts}>Load Products</button>
        <button className="border px-3 py-2 rounded" onClick={loadMyOrders} disabled={!sessionToken}>
          Load My Orders (Auth)
        </button>
        {!sessionToken && (
          <a href="/auth" className="text-sm underline ml-2">Sign in / Sign up</a>
        )}
      </div>

      <ul className="space-y-2">
        {products.map(p => (
          <li key={p.id} className="border p-3 rounded">
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm">{p.description}</div>
            <div className="text-sm">Price: {(p.price_cents/100).toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
