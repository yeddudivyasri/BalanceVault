# Threat model
Assets: credentials, tokens, account ownership, balances, ledger, transaction history and audit records.

Current controls: bcrypt password hashing; JWT authentication; basic role middleware; owner-scoped account listing; transfer source ownership check; Zod validation; Helmet; JSON body size limit; parameterized Prisma operations; idempotency key + request hash; row locks and serializable transaction; audit events.

Residual risks: current rate limiter is process-local, not Redis-backed. Ledger posting is performed in application code and is not protected by database-owned posting functions or append-only triggers. Database role separation, auditor account assignment, hardened separate-credential first-admin bootstrap, deposit/withdrawal, statements, and full concurrency/security integration tests are not yet implemented. This is an educational MVP, not a production banking system.
