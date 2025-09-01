// Vercel serverless function: Exchanges authorization code for tokens with Supabase
// Env vars required (set in Vercel):
// - SUPABASE_OAUTH_CLIENT_ID
// - SUPABASE_OAUTH_CLIENT_SECRET

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  try {
    const { code, code_verifier, redirect_uri, client_id } = req.body || {};
    if (!code || !code_verifier || !redirect_uri) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    const serverClientId = process.env.SUPABASE_OAUTH_CLIENT_ID;
    const clientSecret = process.env.SUPABASE_OAUTH_CLIENT_SECRET;
    if (!serverClientId || !clientSecret) {
      res.status(500).json({ message: 'Server OAuth configuration missing' });
      return;
    }

    // Optional: ensure client-sent client_id matches server one
    if (client_id && client_id !== serverClientId) {
      res.status(400).json({ message: 'client_id mismatch' });
      return;
    }

    const params = new URLSearchParams();
    params.set('grant_type', 'authorization_code');
    params.set('code', code);
    params.set('redirect_uri', redirect_uri);
    params.set('code_verifier', code_verifier);
    params.set('client_id', serverClientId);

    const basic = Buffer.from(`${serverClientId}:${clientSecret}`).toString('base64');
    const resp = await fetch('https://api.supabase.com/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${basic}`,
        'Accept': 'application/json'
      },
      body: params.toString()
    });

    const text = await resp.text();
    let json;
    try { json = JSON.parse(text); } catch { json = { raw: text }; }

    if (!resp.ok) {
      res.status(resp.status).json({ message: 'Token exchange failed', details: json });
      return;
    }

    res.status(200).json(json);
  } catch (err) {
    res.status(500).json({ message: 'Unexpected error', error: String(err) });
  }
}


