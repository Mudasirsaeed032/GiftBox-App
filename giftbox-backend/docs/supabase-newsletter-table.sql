-- Newsletter Subscribers Table
-- Run this SQL in your Supabase SQL Editor to create the newsletter_subscribers table

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email 
  ON newsletter_subscribers(email);

-- Add comment for documentation
COMMENT ON TABLE newsletter_subscribers IS 'Stores email addresses of users who subscribed to the newsletter';
COMMENT ON COLUMN newsletter_subscribers.email IS 'Subscriber email address (unique, normalized to lowercase)';
COMMENT ON COLUMN newsletter_subscribers.created_at IS 'Timestamp when the user subscribed';

-- Optional: Enable Row Level Security (RLS)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Optional: Create policy to allow service role to insert/select
CREATE POLICY "Service role can manage newsletter subscribers"
  ON newsletter_subscribers
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);
