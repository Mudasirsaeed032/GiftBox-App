import { useEffect, useMemo, useState } from 'react';
import type { ProductsResponse } from '../types/product';

export function useProductsQuery(params: Record<string, unknown>) {
  const [data, setData] = useState<ProductsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const qs = useMemo(() => {
    const p = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
      if (v !== null && v !== undefined && v !== '') p.set(k, String(v));
    });
    return p.toString();
  }, [params]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true); setErr(null);
      try {
        const res = await fetch(`/api/products?${qs}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: ProductsResponse = await res.json();
        if (!cancelled) setData(json);
      } catch (e: any) {
        if (!cancelled) setErr(e.message || 'Failed to load products');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [qs]);

  return { data, loading, err };
}
