# Transact UX Prototype

A modern UX prototype for a workflow document automation application inspired by Ephesoft Transact.

This project explores how a legacy enterprise document capture and automation experience could be reimagined as a modern SaaS-style application. The goal is not to copy the existing Transact UI, but to preserve the underlying workflow concepts and improve usability, clarity, and operator efficiency.

## Project Purpose

The prototype is intended to storyboard and demonstrate a modernized user experience for document automation workflows, including:

* Document capture and import
* Batch processing
* Document classification
* Manual document review
* Data extraction
* Manual validation
* Export configuration and monitoring
* Reporting and operational visibility

The design focuses on making the workflow state visible, reducing operator friction, and separating administrator configuration workflows from production operator work queues.

## Product Context

Document automation systems process documents from sources such as:

* Scanned paper
* Uploads
* Watched folders
* Fax
* Email attachments
* External integrations

A typical workflow includes:

1. Import documents
2. Process and clean up pages
3. Assemble and classify documents
4. Send low-confidence items to manual review
5. Extract document data
6. Send uncertain or failed data to validation
7. Export documents and metadata
8. Report on accuracy, throughput, and exceptions

## Primary User Roles

### Super Administrator

Responsible for system-level configuration, security, infrastructure, and global settings.

### Administrator

Responsible for configuring batch classes, document types, extraction rules, validation rules, and export destinations.

### Operator

Responsible for reviewing document classification, fixing document boundaries, validating extracted data, and resolving processing exceptions.

## Prototype Scope

The prototype is planned around the following core screens:

1. Role-aware Home Dashboard
2. Batch Instance Management Queue
3. Batch Detail / Workflow Timeline
4. Document Review Workspace
5. Data Validation Workspace
6. Batch Class Workflow Builder
7. Extraction Rule / Test Screen
8. Export Configuration and Results
9. Reports Dashboard

The first build priority is:

1. App shell and navigation
2. Home dashboard
3. Batch queue
4. Batch detail workflow timeline
5. Document review workspace
6. Data validation workspace

## Design Direction

The UI should feel like a modern enterprise SaaS application.

Design goals:

* Make workflow state visible at all times
* Use role-based navigation
* Prioritize exception handling
* Highlight confidence, errors, and next actions
* Support keyboard-heavy operator workflows
* Use clean layouts, status chips, data grids, cards, and document viewer panels
* Optimize for desktop operator workstations
* Avoid generic dashboard styling
* Avoid copying the legacy UI directly

## Example Workflow Story

The first usable prototype should tell this story:

An operator logs in, sees batches requiring attention, opens a batch, reviews document classification, validates extracted invoice fields, and submits the batch for export.

## Example Data

The prototype uses realistic mock data for document automation scenarios.

Example batch classes:

* Accounts Payable
* Loan Documents
* Claims
* Enrollment Forms

Example document types:

* Invoice
* Purchase Order
* W-9
* Contract
* Driver License
* Claim Form

Example extracted fields:

* Vendor Name
* Vendor ID
* Invoice Number
* Invoice Date
* PO Number
* Subtotal
* Tax
* Total Amount
* Due Date
* Account Number

Example statuses:

* Processing
* Ready for Review
* Ready for Validation
* Export Failed
* Complete

## Technology Stack

This prototype is built with a modern React frontend stack optimized for fast iteration, clean component development, and easy deployment.

- **React 19** – Frontend UI framework
- **TypeScript 6** – Type-safe JavaScript for more reliable development
- **Vite 8** – Fast local development server and production build tool
- **Tailwind CSS 4** – Utility-first styling system
- **Lucide React** – Icon library for clean, modern UI icons
- **ESLint** – Code quality and linting
- **npm / Node.js** – Package management and development runtime
- **GitHub** – Source control and project collaboration

## Recommended Project Structure

```text
src/
  components/
    layout/
    navigation/
    dashboard/
    batches/
    review/
    validation/
    workflow/
    reports/
    ui/
  data/
    mockBatches.ts
    mockDocuments.ts
    mockFields.ts
  pages/
  types/
  utils/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Development Notes

When adding or changing features:

* Keep components small and reusable
* Use TypeScript types for core workflow objects
* Keep mock data realistic and easy to modify
* Build incrementally by screen
* Preserve clear workflow state
* Make primary actions easy to find
* Include useful empty, loading, and error states
* Avoid unnecessary dependencies

## Definition of Done

A screen or feature is considered complete when:

* It supports the intended user role
* The workflow state is obvious
* Primary actions are visible
* Errors and exceptions are clear
* Mock data looks realistic
* The layout works well on desktop
* Components are reusable
* The screen can be demonstrated without backend services

## Project Status

Early prototype.

Current focus:

* Establish the app shell
* Build the dashboard
* Build the batch queue
* Create a realistic operator workflow from batch review to validation
