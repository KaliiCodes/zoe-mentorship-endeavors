# ZOE MENTORSHIP ENDEAVORS

Marketing site for ZOE MENTORSHIP ENDEAVORS, built with Next.js App Router.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- `sonner` for toast feedback
- `zod` for contact-form validation

## Routes

- `/`
- `/about`
- `/programs`
- `/activities`
- `/contact`
- `/api/contact`

## Local Development

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Notes

- Contact submissions are validated on both the client and the server.
- The current contact API logs submissions on the server and is ready for an email or CRM integration.
- Brand styling is centralized in `app/globals.css`, and shared content lives in `content/site.ts`.
