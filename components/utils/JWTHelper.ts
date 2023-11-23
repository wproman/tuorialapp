// Ostad ar moto kore

import { SignJWT, jwtVerify, JWTPayload } from "jose";

export async function CreateToken(email: string): Promise<string> {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || ''); // Ensure process.env.JWT_SECRET is defined
    const token = await new SignJWT({ email: email })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setIssuer(process.env.JWT_ISSUER || '') // Ensure process.env.JWT_ISSUER is defined
        .setExpirationTime(process.env.JWT_EXPIRATION_TIME || '') // Ensure process.env.JWT_EXPIRATION_TIME is defined
        .sign(secret);
    return token;
}

export async function VerifyToken(token: string): Promise<JWTPayload> {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || ''); // Ensure process.env.JWT_SECRET is defined
    const decoded = await jwtVerify(token, secret);
    return decoded.payload as JWTPayload;
}

// https://github.com/vercel/next.js/discussions/38227  
// online theke


// import {SignJWT, jwtVerify, type JWTPayload} from 'jose';

// export async function sign(payload: Token, secret: string): Promise<string> {
//     const iat = Math.floor(Date.now() / 1000);
//     const exp = iat + 60* 60; // one hour

//     return new SignJWT({...payload})
//         .setProtectedHeader({alg: 'HS256', typ: 'JWT'})
//         .setExpirationTime(exp)
//         .setIssuedAt(iat)
//         .setNotBefore(iat)
//         .sign(new TextEncoder().encode(secret));
// }

// export async function verify(token: string, secret: string): Promise<Token> {
//     const {payload} = await jwtVerify(token, new TextEncoder().encode(secret));
//     // run some checks on the returned payload, perhaps you expect some specific values

//     // if its all good, return it, or perhaps just return a boolean
//     return payload;
// }