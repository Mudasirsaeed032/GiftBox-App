import { useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import type { Availability, SortKey } from '../types/product';

export interface ShopQuery {
  category?: string | null;
  min?: number | null;
  max?: number | null;
  type?: string | null;
  avail?: Availability | null;
  q?: string | null;
  sort?: SortKey | null;
  cursor?: string | null;
}

function toNumberOrNull(v: string | null) {
  if (!v) return null;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export function useShopFilters() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const query: ShopQuery = useMemo(() => ({
    category: params.get('category'),
    min: toNumberOrNull(params.get('min')),
    max: toNumberOrNull(params.get('max')),
    type: params.get('type'),
    avail: (params.get('avail') as Availability) || null,
    q: params.get('q'),
    sort: (params.get('sort') as SortKey) || 'popular',
    cursor: params.get('cursor'),
  }), [params]);

  function update(next: Partial<ShopQuery>, replace = false) {
    const p = new URLSearchParams(params);
    Object.entries(next).forEach(([k, v]) => {
      if (v === null || v === undefined || v === '') p.delete(k);
      else p.set(k, String(v));
    });
    // reset cursor on any filter changes
    if (Object.keys(next).some(k => k !== 'cursor')) p.delete('cursor');
    replace ? navigate({ search: `?${p.toString()}` }, { replace: true })
            : navigate({ search: `?${p.toString()}` });
  }

  function clearAll() {
    navigate({ search: '' });
  }

  return { query, update, clearAll };
}
