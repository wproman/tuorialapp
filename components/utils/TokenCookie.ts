import { CreateToken } from "@/components/utils/JWTHelper";

interface TokenCookieOptions {
  email: string;
}

export async function TokenCookie({ email }: TokenCookieOptions): Promise<{ 'Set-Cookie': string }> {
  let token = await CreateToken(email);
  return { 'Set-Cookie': `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict` };
}
