# Implementation status — read before submission

This ZIP is a runnable starter MVP, not a finished challenge submission.

| Requirement | Status |
|---|---|
| React frontend | Basic register/login/account screen |
| Express/TypeScript API | Basic API routes |
| PostgreSQL + Prisma | Schema included; local migration required |
| Account onboarding | Request and admin decision API |
| RBAC | Basic account-holder/admin/auditor checks; auditor scoping incomplete |
| Double-entry transfer | Two ledger entries created in same transaction; DB-enforced posting missing |
| Idempotency | Key + request hash + unique constraint; race-condition integration tests missing |
| Concurrency / overdraft | Row locks + serializable transaction; verify with PostgreSQL integration tests |
| Append-only audit | Events created; DB immutability controls missing |
| Redis rate limiting | Not implemented; process-local limiter only |
| First admin | Local seed script; hardened separate-credential bootstrap missing |
| Database roles | Not implemented |
| Deposit / withdrawal | Not implemented |
| Statements | Not implemented |
| Auditor assigned-account scope | Not implemented |
| Health | Basic API health only |
| Demo video / technical write-up | Must be created by participant |
| PROMPTS.md | Template only; fill with actual history |

Complete all HR-confirmed requirements and run real integration tests before submission. Do not claim missing functionality is complete.
