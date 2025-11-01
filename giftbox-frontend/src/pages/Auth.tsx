import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

type Mode = 'login' | 'signup';

export default function AuthPage() {
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>(''); // used on signup
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    setErr(null);
    setMsg(null);
  }, [mode]);

  async function handleSignup() {
    setLoading(true); setErr(null); setMsg(null);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } }
    });
    setLoading(false);
    if (error) return setErr(error.message);
    if (data.user && !data.session) setMsg('Sign-up successful. Please confirm your email.');
    else setMsg('Signed up and logged in!');
  }

  async function handleLogin() {
    setLoading(true); setErr(null); setMsg(null);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) return setErr(error.message);
    if (data.session) setMsg('Logged in!');
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setMsg('Logged out.');
  }

  return (
    <div className="min-h-screen grid place-items-center p-6">
      <div className="w-full max-w-md border rounded-2xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Account</h1>
          <button
            className="text-sm underline"
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
          >
            {mode === 'login' ? 'Create account' : 'Have an account? Log in'}
          </button>
        </div>

        {mode === 'signup' && (
          <div className="space-y-2">
            <label className="block text-sm">Full name</label>
            <input
              className="border w-full p-2 rounded"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              placeholder="Jane Doe"
            />
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-sm">Email</label>
          <input
            className="border w-full p-2 rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Password</label>
          <input
            className="border w-full p-2 rounded"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            type="password"
          />
        </div>

        <button
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded disabled:opacity-60"
          onClick={mode === 'login' ? handleLogin : handleSignup}
        >
          {loading ? 'Please wait…' : mode === 'login' ? 'Log in' : 'Sign up'}
        </button>

        <div className="flex justify-between">
          <button className="text-sm underline" onClick={handleLogout}>Log out</button>
          <a className="text-sm underline" href="/reset">Forgot password?</a>
        </div>

        {msg && <div className="text-green-700 text-sm">{msg}</div>}
        {err && <div className="text-red-600 text-sm">{err}</div>}
      </div>
    </div>
  );
}
