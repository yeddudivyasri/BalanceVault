# API reference
Base URL: http://localhost:3001/api

- GET `/health` — health check
- POST `/auth/register` — `{email, fullName, password}`
- POST `/auth/login` — `{email, password}`
- GET `/me` — authenticated profile
- POST `/accounts` — `{label}`; creates PENDING account request
- GET `/accounts` — own accounts; admin sees all
- POST `/admin/accounts/:id/decision` — admin `{decision:"ACTIVE"|"REJECTED"}`
- POST `/transactions/transfer` — `{fromAccountId,toAccountId,amountPaise,idempotencyKey}`
- GET `/admin/audit` — admin/auditor recent audit events

Authenticated endpoints use `Authorization: Bearer <token>`.
