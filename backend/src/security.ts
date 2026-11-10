import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import type { Request, Response, NextFunction } from "express";
const secret = process.env.JWT_ACCESS_SECRET;
if (!secret || secret.length < 32) throw new Error("Set JWT_ACCESS_SECRET in root .env (minimum 32 characters)");
export type Role = "ACCOUNT_HOLDER" | "ADMIN" | "AUDITOR";
export type TokenUser = { id: string; role: Role };
export const hashPassword = (p: string) => bcrypt.hash(p, 12);
export const checkPassword = (p: string, h: string) => bcrypt.compare(p, h);
export const signToken = (u: TokenUser) => jwt.sign(u, secret!, { expiresIn: "2h", issuer: "balancevault" });
declare global { namespace Express { interface Request { user?: TokenUser } } }
export function authenticate(req: Request, res: Response, next: NextFunction) {
 const h=req.headers.authorization; if(!h?.startsWith("Bearer ")) return res.status(401).json({error:"Authentication required"});
 try { req.user=jwt.verify(h.slice(7),secret!,{issuer:"balancevault"}) as TokenUser; next(); } catch { return res.status(401).json({error:"Invalid or expired token"}); }
}
export const allowRoles = (...roles: Role[]) => (req: Request,res: Response,next: NextFunction) => req.user && roles.includes(req.user.role) ? next() : res.status(403).json({error:"Forbidden"});
