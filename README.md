# Next.js Starter Template

This is a starter template for Next.js projects with Prisma and SQLite. It includes basic authentication and database setup to get you up and running quickly.

## Getting Started

Follow the steps below to set up the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/destocot/next-starter
cd next-starter
```

### 2. Set up environment variables

Create a `.env` file in the root directory with the following variables:

```bash
DATABASE_URL="file:./dev.db"
AUTH_SECRET="<your_auth_secret>"
AUTH_URL="http://localhost:3000"
```

Generate the `AUTH_SECRET` using the following command:

```bash
openssl rand -base64 32
```

### 3. Install dependencies

Use your preferred package manager:

```bash
# With npm
npm install

# Or with pnpm
pnpm install

# Or with yarn
yarn install
```

### 4. Database setup

Push the database schema and seed initial data:

```bash
npm run db:push && npm run db:seed
```

### 5. Start the development server

Run the following command to start the server:

```bash
npm run dev
```

The app will be running on `http://localhost:3000`.

---

## Additional Notes

- **Database**: The project uses Prisma with an SQLite database for local development.
- **Authentication**: An `AUTH_SECRET` is required for authentication. Be sure to keep this secret safe.
