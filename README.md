# BalanceVault — educational MVP starter

Includes basic account-holder registration/login, account-opening requests, admin account decision endpoint, account listing, and a transfer API using integer paise, idempotency keys, row locks, a serializable PostgreSQL transaction, double ledger entries and audit events.

**Important:** This is not production-ready and does not yet satisfy all HR-confirmed challenge requirements. Read `docs/IMPLEMENTATION_STATUS.md` and `THREATS.md`.

## Requirements
Node.js 22+ (Node 24 recommended if required by challenge), npm, PostgreSQL 15+.

## Windows PowerShell setup
1. Extract ZIP and open the `BalanceVault` folder in VS Code.
2. In the root terminal:
   ```powershell
   Copy-Item .env.example .env
   ```
3. Create a PostgreSQL database named `balancevault` using pgAdmin or psql.
4. Edit `.env`: set your PostgreSQL password and a random JWT secret of 32+ characters. Set a unique admin email/password for local seed.
5. Install dependencies:
   ```powershell
   npm install
   ```
6. Generate Prisma Client:
   ```powershell
   npm run db:generate
   ```
7. Create tables:
   ```powershell
   npm run db:migrate
   ```
   Enter `init` as migration name when prompted.
8. Create local development admin:
   ```powershell
   npm run db:seed
   ```
9. Start frontend and backend:
   ```powershell
   npm run dev
   ```
10. Open http://localhost:5173. API health: http://localhost:3001/api/health.

Run API only: `npm run dev:api`; frontend only: `npm run dev:web`.

## Admin endpoint
Use the seeded admin's bearer token with `POST /api/admin/accounts/{accountId}/decision` and JSON body `{"decision":"ACTIVE"}`.

The seed is local-development convenience only; it is not the required hardened privileged bootstrap flow. Redis, database role separation, database-enforced ledger immutability/posting, auditor account assignment, deposits/withdrawals, statements, full admin UI, and concurrency/idempotency integration tests still need implementation.
