 # Agent Instructions
 Read this entire file before starting any task.

 ## Self-Correcting Rules Engine
 This file contains a growing ruleset that improves over time. **At session start, read the entire "Learned Rules"
 section before doing anything.**
 
 ### How it works
 1. When the user corrects you or you make a mistake,**immediately append a new rule** to the "Learned Rules"
 section at the bottom of this file.
 2. Rules are numberedsequentially and written as clear, imperative instructions.
 3. Format: "N. [CATEGORY] Never/Always do X - because Y
 4. Categories: " [STYLE]' " [CODE, [ARCH]', "[TOOL)',"[PROCESS), "[DATA)', "[UX]', "[OTHER]"
 5. Before starting any task, scan all rules below for relevant constraints.
 6. If two rules conflict, the higher-numbered (newer) rule wins.
 7. Never delete rules. If a rule becomes obsolete, append a new rule that supersedes it.
 
 ### When to add a rule
 - User explicitly corrects your output ("no, do it this way")
 - User rejects a file, approach, or pattern
 - You hit a bug caused by a wrong assumption about this codebase
 - User states a preference ("always use X", "never do Y")
 
 ### Rule format example
 14. [CODE] Always use "bun' instead of 'npm' - user preference, bun is installed globally.
 15. [STYLE] Never add emojis to commit messages - project convention.
 16. [ARCH] API routes live in 'src/server/routes/', not 'src/api/ - existing codebase pattern.
 
 ## LearnedRules
 <!-- New rules are appended below this line. Do not edit above this section. —>

1. [ARCH] Use lightweight in-app view switching for navigation — `App.tsx` holds `activeView: ViewId` and `role: Role` in state and renders the matching page. Do NOT add React Router unless deep-linking/browser-history is genuinely required, because the prototype must stay static-host friendly.
2. [DATA] Navigation is data-driven in `src/data/navigation.ts`; each `NavItem` declares allowed `roles`, and `navSectionsForRole(role)` filters the menu. Add new screens by adding a `ViewId` to `src/types/transact.ts`, an entry to `navigation.ts`, and metadata to `src/data/views.ts` — not by hardcoding nav.
3. [UX] Never communicate status by color alone (accessibility). Status/priority/SLA indicators pair color with a label and/or shape — follow `StatusChip`, `PriorityBadge`, `SlaIndicator`.
4. [TOOL] Use `lucide-react` for all icons; map icon-name strings stored in data to components (see `components/layout/navIcons.tsx`, `KpiCard`) rather than importing icons into data files.
5. [STYLE] Use the `cn()` helper in `src/utils/cn.ts` for conditional Tailwind classes. Tailwind is v4 (no `tailwind.config.js`); global styles live in `src/index.css` via `@import "tailwindcss"`.
6. [CODE] Keep mock data in `src/data/` and shared domain types in `src/types/transact.ts`. Export status/priority/etc. arrays (e.g. `BATCH_STATUSES`) alongside their union types so filters and UIs iterate from one source of truth.
7. [PROCESS] Before considering a change done, run `npm run build` and `npm run lint` — both must pass clean (the build runs `tsc -b`, so type errors fail it).