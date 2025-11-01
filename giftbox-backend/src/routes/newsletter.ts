import { Router, Request, Response } from 'express';
import { supabaseAdmin } from '../supabase';

const router = Router();

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/newsletter
 * Subscribe a user to the newsletter
 * Body: { email: string }
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const { email } = req.body || {};

    // Validate email
    if (!email || typeof email !== 'string' || !EMAIL_RX.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email address' 
      });
    }

    // Normalize email (lowercase, trim)
    const normalizedEmail = email.toLowerCase().trim();

    // Insert into Supabase
    const { error } = await supabaseAdmin
      .from('newsletter_subscribers')
      .insert({ email: normalizedEmail });

    if (error) {
      // Check if it's a duplicate email error (unique constraint)
      if (error.code === '23505' || error.message.includes('duplicate') || error.message.includes('unique')) {
        return res.status(409).json({ 
          error: 'This email is already subscribed' 
        });
      }
      
      console.error('Newsletter subscription error:', error);
      return res.status(500).json({ 
        error: 'Failed to subscribe. Please try again.' 
      });
    }

    return res.status(200).json({ 
      message: 'Successfully subscribed to newsletter',
      success: true 
    });

  } catch (e) {
    console.error('Newsletter route error:', e);
    return res.status(500).json({ 
      error: 'Something went wrong. Please try again later.' 
    });
  }
});

export default router;
