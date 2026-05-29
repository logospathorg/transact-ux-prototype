# CLAUDE.md

Guidance for Claude Code and other AI coding agents working in this repository.

> **Read [AGENT_RULES.md](AGENT_RULES.md) first.**
> `AGENT_RULES.md` holds the self-correcting learned ruleset for this project. If a rule there conflicts with anything in this file, the rule wins. Newer or higher-numbered rules override older rules.

## What this is

This repository is a modern **Transact UX prototype** for exploring, validating, and iterating on user experience improvements related to Tungsten Automation / Ephesoft Transact workflows.

The goal is not to build a production Transact replacement. The goal is to create a fast, polished, interactive prototype that can be used to:

* Visualize proposed UX improvements
* Explore user journeys and workflow states
* Demonstrate product concepts to internal stakeholders
* Support product, design, sales engineering, and development conversations
* Rapidly test layouts, navigation, page flows, and interaction patterns before deeper engineering investment

This prototype should feel credible, enterprise-ready, and relevant to document capture, classification, extraction, validation, batch processing, exception handling, and administrative configuration workflows.

## Product context

Transact is an intelligent document processing platform. Prototype work should generally align to these product themes:

* Document ingestion and capture
* Batch monitoring and processing
* Classification and separation
* Data extraction and field validation
* Human review and correction
* Exception handling
* Workflow status visibility
* Queue management
* Confidence scoring
* Business rules
* Export / downstream system handoff
* Administrative setup and configuration
* Cloud / hosted enterprise deployment concepts

Use realistic enterprise UX patterns. Avoid making the product feel like a generic SaaS dashboard that has no connection to document automation.

## Recommended tech stack

Use this stack unless the user explicitly changes direction.

| Concern                 | Choice                                                                      |
| ----------------------- | --------------------------------------------------------------------------- |
| Framework               | React                                                                       |
| Language                | TypeScript                                                                  |
| Build tool              | Vite                                                                        |
| Styling                 | Tailwind CSS                                                                |
| Components              | shadcn/ui-style component patterns or equivalent local reusable components  |
| Icons                   | lucide-react                                                                |
| Charts / visualizations | Recharts, only when useful                                                  |
| State                   | React state first; avoid global state unless the prototype clearly needs it |
| Routing                 | React Router if the prototype has multiple screens or page-level flows      |
| Package manager         | npm                                                                         |
| Hosting target          | GitHub Pages, Cloudflare Pages, or another static host                      |
| Backend                 | None by default                                                             |
| Data                    | Local mock data in TypeScript files or JSON fixtures                        |

## Prototype-first principles

* Favor fast iteration over over-engineering.
* Build realistic UI flows with mock data before adding infrastructure.
* Do not add a backend, database, authentication, or API layer unless explicitly requested.
* Keep the prototype static-host friendly.
* Use clean mock data that reflects real Transact-like concepts: batches, documents, queues, fields, confidence scores, validation status, extraction results, users, roles, and export states.
* Make the prototype polished enough for stakeholder demos, not just technically functional.
* Prefer working vertical slices over disconnected components.

## Commands

Update this section whenever scripts change in `package.json`.

```bash
npm install       # install dependencies
npm run dev       # start local Vite dev server
npm run build     # production build
npm run preview   # preview built output locally
npm run lint      # run lint checks, if configured
```

If tests are added later, update this section with the correct test command.

## Expected project structure

Use this as the starting structure unless Claude Code creates a better structure and updates this file.

```text
src/
  app/
    App.tsx
    routes.tsx
  components/
    ui/
    layout/
    transact/
  data/
    mockBatches.ts
    mockDocuments.ts
    mockQueues.ts
  pages/
    Dashboard.tsx
    BatchQueue.tsx
    BatchDetail.tsx
    DocumentReview.tsx
    AdminSettings.tsx
  styles/
    globals.css
  types/
    transact.ts
```

Recommended conventions:

* `components/ui/` contains reusable low-level UI primitives.
* `components/layout/` contains shell, nav, sidebar, header, breadcrumbs, and page layout components.
* `components/transact/` contains domain-specific components such as confidence badges, document cards, queue tables, validation panels, extraction fields, and batch status indicators.
* `pages/` contains route-level screens.
* `data/` contains mock data only.
* `types/` contains shared TypeScript types.
* Keep mock data separate from components so screens are easier to revise.

## UX direction

The UI should feel:

* Enterprise-grade
* Modern
* Clean
* Dense enough for operational workflows
* Clear enough for demos
* Product-management friendly
* Credible for document automation and intelligent capture

Avoid:

* Overly playful styling
* Consumer app styling
* Fake AI gimmicks that do not support a real workflow
* Generic dashboard filler
* Excessive animation
* Hard-coded copy scattered across many files when structured data would be easier

Preferred visual patterns:

* Left navigation or app shell
* Dashboard summary cards
* Queue tables with filters and status chips
* Document preview beside extracted field data
* Confidence indicators
* Review / approve / reject actions
* Error and exception states
* Before / after workflow comparisons when useful
* Clear empty states
* Realistic admin configuration panels

## Transact domain concepts to model

When useful, model these concepts in mock data and UI:

* Batch
* Document
* Page
* Document type
* Classification result
* Extraction field
* Confidence score
* Validation rule
* Review queue
* Exception queue
* Processing status
* Export status
* User role
* SLA / aging indicator
* Manual correction
* Audit trail
* Workflow step

Use consistent naming across components, mock data, and types.

## TypeScript expectations

* Use TypeScript for new code.
* Prefer explicit domain types in `src/types/transact.ts`.
* Avoid using `any` unless there is a clear reason.
* Keep type names readable and domain-specific, such as `BatchStatus`, `DocumentType`, `ExtractionField`, and `ValidationIssue`.
* Update shared types when mock data or UI assumptions change.
* Do not leave type errors unresolved.

## Component conventions

* Prefer small, reusable components over large monolithic screens.
* Keep domain-specific components named around Transact concepts.
* Use clear prop names.
* Keep layout components separate from business/domain components.
* Avoid premature abstraction, but extract repeated UI patterns once they appear in more than one place.
* Do not introduce large component libraries unless explicitly approved.

## Styling conventions

* Use Tailwind utility classes.
* Keep styling consistent across screens.
* Prefer a restrained enterprise palette: neutral backgrounds, strong readable text, subtle borders, blue/indigo/cyan accents, and meaningful semantic colors for success, warning, error, and processing states.
* Use spacing, hierarchy, and typography to make dense information readable.
* Do not create a custom design system unless the prototype needs it. Start with practical reusable components.

## Data conventions

* Mock data should be realistic enough to support demos.
* Avoid joke names or obviously fake filler.
* Use realistic document-processing examples such as invoices, applications, IDs, loan documents, insurance forms, tax documents, claims, and onboarding packets.
* Include edge cases: low confidence fields, missing required values, duplicate documents, failed exports, validation errors, and manual review states.
* Keep mock data centralized in `src/data/`.

## Accessibility and usability

* Use semantic HTML where practical.
* Buttons should look and behave like buttons.
* Form fields should have labels.
* Maintain readable contrast.
* Support keyboard-friendly interactions where reasonable.
* Do not rely on color alone to communicate status.
* Keep table and panel layouts readable on laptop-sized screens.

## Deployment

The project should remain compatible with static hosting unless explicitly changed.

* Do not require a server for the prototype.
* Do not require environment variables unless necessary.
* Do not commit build output unless the selected deployment method requires it.
* If using GitHub Pages with Vite, configure `base` only when deploying under a repository subpath.
* If using Cloudflare Pages, ensure the build command and output directory are documented.

Update this section when the actual hosting target is chosen.

## Documentation maintenance requirements

Claude Code must keep project documentation accurate as the project changes.

After every meaningful code change, Claude Code must review whether these files need updates:

* `CLAUDE.md`
* `AGENT_RULES.md`
* `README.md`
* Any architecture or setup notes created later

Update `CLAUDE.md` when:

* The tech stack changes
* Commands change
* The folder structure changes
* Major architecture decisions change
* Deployment assumptions change
* The prototype scope changes
* New major workflows or pages are added

Update `AGENT_RULES.md` when:

* A mistake is found and should not be repeated
* The user gives a reusable preference
* A convention is discovered during implementation
* A recurring pattern should become a rule
* A project-specific do/don't needs to be preserved

Do not let these files become stale.

## AGENT_RULES.md relationship

`CLAUDE.md` explains the current project, stack, commands, and architecture.

`AGENT_RULES.md` is the living rulebook. It should contain numbered learned rules.

Recommended starting format for `AGENT_RULES.md`:

```md
# AGENT_RULES.md

Self-correcting rules for AI coding agents working on this repository.

Rules are numbered. Newer or higher-numbered rules override older rules when there is a conflict.

## Rules

1. Read `CLAUDE.md` before making code changes.
2. Keep the prototype static-host friendly unless the user explicitly requests backend functionality.
3. After meaningful code changes, check whether `CLAUDE.md`, `AGENT_RULES.md`, or `README.md` need updates.
4. Preserve Transact-specific product context. Do not turn the prototype into a generic SaaS dashboard.
5. Prefer realistic mock data and domain-specific naming over placeholder filler.
```

## When iterating

Before considering a change complete:

1. Run the relevant quality checks.
2. Confirm the app still starts locally.
3. Confirm the changed screen or workflow behaves correctly.
4. Check for obvious responsive layout problems.
5. Update `CLAUDE.md` or `AGENT_RULES.md` if the change affects project knowledge or reusable rules.
6. Summarize what changed and what should be tested next.

Minimum expected checks:

```bash
npm run build
npm run lint
```

If lint is not configured yet, either configure it or clearly state that it is not available.

## Working style for Claude Code

* Make incremental changes.
* Explain tradeoffs briefly.
* Prefer concrete implementation over long theoretical planning.
* Ask for clarification only when blocked.
* When assumptions are needed, make reasonable assumptions and document them.
* Keep the prototype easy to understand and easy to revise.
* Do not add unnecessary dependencies.
* Do not hide major architecture changes.
* Do not silently change the project direction.

## Current status

Initial project guidance file for a new Transact UX prototype.

Update this section after the first prototype is created to reflect:

* Actual routes/screens
* Actual components
* Actual mock data files
* Actual deployment target
* Actual scripts
* Any deviations from the recommended stack
