export default async function handler(req, res) {
  const { code, error } = req.query;

  if (error || !code) {
    const msg = encodeURIComponent(error || 'missing_code');
    return res.redirect(302, `/?auth_error=${msg}`);
  }

  let data;
  try {
    const tokenRes = await fetch('https://www.strava.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id:     process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
      }),
    });
    data = await tokenRes.json();
    if (!tokenRes.ok) throw new Error(data.message || 'token_exchange_failed');
  } catch (e) {
    return res.redirect(302, `/?auth_error=${encodeURIComponent(e.message)}`);
  }

  const params = new URLSearchParams({
    access_token:  data.access_token,
    refresh_token: data.refresh_token,
    expires_at:    String(data.expires_at),
  });
  res.redirect(302, `/?${params.toString()}`);
}
