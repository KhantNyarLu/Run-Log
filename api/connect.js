export default function handler(req, res) {
  const clientId = process.env.STRAVA_CLIENT_ID;
  if (!clientId) {
    return res.status(500).send('STRAVA_CLIENT_ID environment variable is not set.');
  }
  const redirectUri = `https://${req.headers.host}/api/callback`;
  const url = new URL('https://www.strava.com/oauth/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('redirect_uri', redirectUri);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', 'activity:read_all');
  res.redirect(302, url.toString());
}
