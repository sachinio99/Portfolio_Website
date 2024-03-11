import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Fetches the access token from Spotify.
 * 
 * Note: For server-side usage, ensure all parameters are passed from the client side
 * or derived from server-side operations (like session variables, etc.).
 * 
 * @param clientId The Spotify Client ID.
 * @param code The authorization code received from Spotify after user authorization.
 * @param codeVerifier The code verifier used for PKCE. Must match the one used to generate the code challenge sent to Spotify initially.
 * @param redirectUri The redirect URI registered in the Spotify Developer Dashboard and used in the authorization request.
 * @returns The access token.
 */
export async function getAccessToken(
    clientId: string,
    code: string,
    codeVerifier: string,
    redirectUri: string
): Promise<string> {
    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", redirectUri);
    params.append("code_verifier", codeVerifier);

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
    });

    if (!response.ok) {
        throw new Error(`Error fetching access token: ${response.statusText}`);
    }

    const { access_token } = await response.json();
    if (!access_token) {
        throw new Error("Access token was not returned by Spotify.");
    }

    return access_token;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Extract necessary data from the request, e.g., authorization code, code verifier
  // For demonstration, these values might come from the request body or query parameters
  const { clientId, code, codeVerifier, redirectUri } = req.body; // or req.query for GET requests

  try {
    const accessToken = await getAccessToken(clientId, code, codeVerifier, redirectUri);
    res.status(200).json({ accessToken });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}