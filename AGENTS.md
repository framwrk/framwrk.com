# AGENTS.md

Marketing website for the company. Vite + React 19 + TypeScript, Tailwind CSS v4, shadcn/ui (preset `buFywKo`, Base UI primitives).

## Package manager & commands

- **Always use bun.** Never npm, pnpm, or yarn.
- Drive everything through package.json scripts: `bun run dev`, `bun run build`, `bun run lint`, `bun run preview`.
- Install dependencies with `bun install` / `bun add`. Never edit `bun.lock` by hand.
- Never add a dependency without asking the user first.
- Never invoke `vite`/`tsc`/`eslint` directly — go through the scripts.

## shadcn/ui — do not modify generated code

- Never edit `src/components/ui/**`, `src/hooks/use-mobile.ts`, or `components.json` by hand. These are upstream-managed shadcn output.
- To change a generated component, regenerate it with the shadcn CLI (`bunx shadcn@latest add <name> --force`) after checking for registry/preset updates — don't patch it in place.
- Build product components by composing the generated ones elsewhere (e.g. `src/components/`), not by extending the files in `src/components/ui/`.
- `eslint.config.js` ignores `src/components/ui/` and `src/hooks/use-mobile.ts` on purpose — don't "fix" lint in those files and don't remove the ignores.

## Styling

- Use Tailwind utilities and the theme tokens from `src/index.css` only. No hardcoded hex/rgb colors anywhere.
- In `src/index.css`, only the theme token blocks (`@theme`, `:root`, `.dark`) may be edited, and only to change the theme itself. App CSS never goes in this file.
- Restraint: one decorative brand mark per page, accent color reserved for interactive elements. When a design feels busy, the fix is subtraction.

## Verification & git

- Before claiming any work is done: `bun run lint` and `bun run build` must both pass.
- `dist/` is a throwaway build artifact — delete it after verifying, don't commit it.
- Commit directly to `main`, never push. Keep commits small and the diff surgical — revert unrelated churn instead of including it.
