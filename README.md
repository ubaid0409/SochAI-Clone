# SochAI Clone Boilerplate

Ready-to-run Next.js (App Router) + Tailwind + Redux Toolkit + Socket.io client.
- Auth flow: `/` -> `/auth/login` -> `/chat`
- Protected routes by `middleware.js` (cookie `token` required)
- Common Topbar, and three independent sidebars (Chat, Deep Jugar, Dashboard)
- Dummy Socket.io server included in `server/server.js`

## Quick start

```bash
npm install
npm run server   # starts demo socket server on http://localhost:4000
npm run dev      # starts Next.js on http://localhost:3000
```

Login with any credentials (dummy) and start chatting.
