import { Router } from 'express';
import { supabaseAdmin } from '../supabase';
const router = Router();

// Public list
router.get('/', async (_req, res) => {
  const { data, error } = await supabaseAdmin
    .from('products')
    .select('id,name,description,price_cents,image_url,category_id,created_at')
    .order('created_at', { ascending: false });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router;
