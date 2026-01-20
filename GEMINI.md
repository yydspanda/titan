# Gemini Workspace Instructions

This document provides context and instructions for the Gemini agent working on the "Titan" project.

## 1. Core Environment: Bun

**Strict Rule**: This project uses **Bun** exclusively. Do NOT use `npm`, `pnpm`, or `yarn`.

- **Runtime**: Bun
- **Package Manager**: Bun
- **Test Runner**: Bun (native `bun test`)

### Setup & Installation

To install dependencies:

```bash
bun install
```

## 2. Development & Server

To start the Next.js development server:

```bash
bun dev
# Server usually starts at http://localhost:3000
```

## 3. Interaction Testing (Chrome MCP)

**Goal**: Use the `chrome-devtools` MCP tool to verify the application functionality in a real browser environment.

### Prerequisites for Agent

1. Ensure the development server is running (`bun dev`).
2. Use the `chrome-devtools` tool to open `http://localhost:3000`.

### Standard Testing Routine (Agent Instructions)

When asked to "test the app" or "verify changes", perform the following steps using Chrome MCP:

1. **Smoke Test**:
   - Open the homepage.
   - Check if the page title is correct.
   - Screenshot the initial load to verify layout.
   - **Monitor Console**: Check for any _Red_ errors in the Browser Console logs.

2. **Interaction**:
   - Verify buttons are clickable.
   - If there is a login/form, attempt to fill it and submit.
   - Monitor Network tab for failed API requests (404/500 errors).

## 4. Database & Migrations

Since we use Bun, database commands should also be run via Bun:

```bash
# Example for Drizzle/Prisma (Adjust based on package.json scripts)
bun run db:push
# or
bun run db:migrate
```

## 5. Unit Testing

To run the project's unit tests (using Bun's native test runner):

```bash
bun test
```

## 6. Project Structure Context

- Framework: Next.js
- Language: TypeScript
- Environment: Windows
