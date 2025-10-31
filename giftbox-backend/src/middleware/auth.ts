import { Request, Response, NextFunction } from 'express';
import { supabaseAnon } from '../supabase';

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;

  if (!token) return res.status(401).json({ error: 'Missing Bearer token' });

  const { data, error } = await supabaseAnon.auth.getUser(token);
  if (error || !data?.user) return res.status(401).json({ error: 'Invalid token' });

  (req as any).user = data.user;
  next();
}
