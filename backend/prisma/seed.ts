import "dotenv/config"; import {PrismaClient} from "@prisma/client"; import bcrypt from "bcryptjs";
const p=new PrismaClient(); const email=process.env.BOOTSTRAP_ADMIN_EMAIL; const password=process.env.BOOTSTRAP_ADMIN_PASSWORD;
if(!email||!password||password.length<14)throw Error("Set BOOTSTRAP_ADMIN_EMAIL and BOOTSTRAP_ADMIN_PASSWORD (14+ chars) in root .env");
await p.user.upsert({where:{email:email.toLowerCase()},update:{},create:{email:email.toLowerCase(),fullName:"Initial Administrator",passwordHash:await bcrypt.hash(password,12),role:"ADMIN"}}); console.log("Local development admin ready"); await p.$disconnect();
