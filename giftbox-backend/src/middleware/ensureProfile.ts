// backend/src/middleware/ensureProfile.ts
import { Request, Response, NextFunction } from 'express';
import { supabaseAdmin } from '../supabase';

export async function ensureProfile(req: Request, _res: Response, next: NextFunction) {
  const user = (req as any).user;
  const { data } = await supabaseAdmin.from('profiles').select('id').eq('id', user.id).single();
  if (!data) {
    const fullName = user.user_metadata?.full_name ?? null;
    await supabaseAdmin.from('profiles').insert({ id: user.id, full_name: fullName });
  }
  next();
}
