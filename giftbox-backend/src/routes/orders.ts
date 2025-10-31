import { Router } from 'express';
import { requireAuth } from '../middleware/auth';
import { supabaseAdmin } from '../supabase';

const router = Router();

// Get my orders
router.get('/mine', requireAuth, async (req, res) => {
  const user = (req as any).user;
  const { data, error } = await supabaseAdmin
    .from('orders')
    .select('id,total_cents,status,created_at,order_items (id,product_id,quantity,price_cents)')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Create order (very simplified)
router.post('/', requireAuth, async (req, res) => {
  const user = (req as any).user;
  const { items } = req.body as { items: Array<{ product_id: string; quantity: number; price_cents: number }> };

  const total = items.reduce((s, it) => s + it.price_cents * it.quantity, 0);

  const { data: order, error: orderErr } = await supabaseAdmin
    .from('orders')
    .insert({ user_id: user.id, total_cents: total, status: 'pending' })
    .select()
    .single();

  if (orderErr) return res.status(500).json({ error: orderErr.message });

  const rows = items.map(i => ({ order_id: order.id, ...i }));
  const { error: itemsErr } = await supabaseAdmin.from('order_items').insert(rows);
  if (itemsErr) return res.status(500).json({ error: itemsErr.message });

  res.json({ ok: true, order_id: order.id });
});

export default router;
