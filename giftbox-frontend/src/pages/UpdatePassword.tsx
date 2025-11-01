import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function updatePassword() {
    setMsg(null); setErr(null);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setErr(error.message);
    else setMsg('Password updated. You can now log in.');
  }

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-md border rounded-2xl p-6 space-y-4">
        <h1 className="text-xl font-semibold">Set new password</h1>
        <input
          className="border w-full p-2 rounded"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="New password"
          type="password"
        />
        <button className="w-full bg-black text-white py-2 rounded" onClick={updatePassword}>
          Update password
        </button>
        {msg && <div className="text-green-700 text-sm">{msg}</div>}
        {err && <div className="text-red-600 text-sm">{err}</div>}
      </div>
    </div>
  );
}
