# AGENTS.md

Instructions for coding agents that work in this repository. Framwrk is a marketing website built with Vite, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui (preset `buFywKo`, Base UI primitives).

## Package manager and commands

- Use bun for every package operation. Don't use npm, pnpm, or yarn.
- Run tasks through the package.json scripts: `bun run dev`, `bun run build`, `bun run lint`, and `bun run preview`.
- Install dependencies with `bun install` or `bun add`. Don't edit `bun.lock` by hand.
- Before you add a dependency, ask the user.
- Don't call `vite`, `tsc`, or `eslint` directly.

## shadcn/ui generated code

- Don't edit the files in `src/components/ui/`, `src/hooks/use-mobile.ts`, or `components.json`. The shadcn CLI generates these files, and the repository treats them as upstream-managed output.
- To change a generated component, check for updates to the registry or preset, and then regenerate the file. Run `bunx shadcn@latest add COMPONENT_NAME --force`. Replace COMPONENT_NAME with the component to add. Don't edit the generated file directly.
- Build product components by composing the generated components in another location, such as `src/components/`. Don't extend the files in `src/components/ui/`.
- The `globalIgnores` entry in `eslint.config.js` excludes `src/components/ui/` and `src/hooks/use-mobile.ts` on purpose. Don't fix lint errors in those files, and don't remove the exclusions.

## Styling

- Use Tailwind utilities and the theme tokens that `src/index.css` defines. Don't hardcode hexadecimal or RGB color values.
- In `src/index.css`, edit only the theme token blocks (`@theme`, `:root`, and `.dark`), and only to change the theme. Put app CSS in a different file.
- Use one decorative brand mark per page, and reserve the accent color for interactive elements. When a page looks busy, remove decorative elements instead of restyling them.

## Verification and Git

- Before you report work as done, both `bun run lint` and `bun run build` must pass.
- The build writes output to `dist/`. Delete the directory after you verify a build, and don't commit it.
- Commit to `main`. Don't push. Keep each commit small and limited to the files that the task requires. Revert unrelated changes instead of committing them.
