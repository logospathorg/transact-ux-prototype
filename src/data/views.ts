import type { ViewId } from '../types/transact';

interface ViewMeta {
  title: string;
  /** Placeholder content for views not yet built in this pass. */
  comingSoon?: {
    description: string;
    planned: string[];
  };
}

/**
 * Per-view metadata: the top-bar title plus, for screens deferred to a later
 * pass, the placeholder copy. Dashboard and Batch Queue are fully built and have
 * no `comingSoon` entry.
 */
export const VIEW_META: Record<ViewId, ViewMeta> = {
  dashboard: { title: 'Dashboard' },
  'batch-queue': { title: 'Batch Queue' },
  review: {
    title: 'Review',
    comingSoon: {
      description:
        'The document review workspace lets operators verify classification and fix document boundaries.',
      planned: [
        'Side-by-side page thumbnails and document viewer',
        'Reclassify and re-split documents',
        'Confidence indicators per classification',
        'Approve / reject and submit to extraction',
      ],
    },
  },
  validation: {
    title: 'Validation',
    comingSoon: {
      description:
        'The data validation workspace surfaces low-confidence extracted fields for operator correction.',
      planned: [
        'Document image beside extracted field data',
        'Inline field editing with validation rules',
        'Low-confidence and required-field flags',
        'Keyboard-driven field navigation',
      ],
    },
  },
  'batch-classes': {
    title: 'Batch Classes',
    comingSoon: {
      description:
        'Administrators configure batch classes, document types, and the workflow each batch follows.',
      planned: [
        'Workflow builder (Import → Export)',
        'Document type and separation setup',
        'Module configuration per stage',
        'Assignment and SLA policies',
      ],
    },
  },
  'extraction-rules': {
    title: 'Extraction Rules',
    comingSoon: {
      description:
        'Define and test extraction rules for each field on a document type.',
      planned: [
        'Field-level extraction rule editor',
        'Test rules against sample documents',
        'Confidence thresholds and validation logic',
        'Lookup and formatting transforms',
      ],
    },
  },
  exports: {
    title: 'Exports',
    comingSoon: {
      description:
        'Configure export destinations and monitor downstream handoff results.',
      planned: [
        'Export destination configuration',
        'Failed export queue and retry',
        'Field mapping to downstream systems',
        'Delivery receipts and audit trail',
      ],
    },
  },
  reports: {
    title: 'Reports',
    comingSoon: {
      description:
        'Operational reporting on throughput, accuracy, automation rate, and exceptions.',
      planned: [
        'Throughput and volume trends',
        'Automation / straight-through rate',
        'Exception and rework analysis',
        'SLA compliance by batch class',
      ],
    },
  },
  'system-health': {
    title: 'System Health',
    comingSoon: {
      description:
        'Super administrators monitor service status, queues, and infrastructure health.',
      planned: [
        'Service and module status',
        'Queue depth and processing latency',
        'Error rate monitoring',
        'Capacity and scaling indicators',
      ],
    },
  },
};
