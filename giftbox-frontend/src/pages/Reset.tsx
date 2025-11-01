import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function ResetPage() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function sendReset() {
    setMsg(null); setErr(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/update-password'
    });
    if (error) setErr(error.message);
    else setMsg('If this email exists, a reset link has been sent.');
  }

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-md border rounded-2xl p-6 space-y-4">
        <h1 className="text-xl font-semibold">Reset password</h1>
        <input
          className="border w-full p-2 rounded"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          type="email"
        />
        <button className="w-full bg-black text-white py-2 rounded" onClick={sendReset}>
          Send reset link
        </button>
        {msg && <div className="text-green-700 text-sm">{msg}</div>}
        {err && <div className="text-red-600 text-sm">{err}</div>}
      </div>
    </div>
  );
}
