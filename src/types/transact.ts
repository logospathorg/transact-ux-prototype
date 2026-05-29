// Shared domain types for the Transact UX prototype.
// Keep these aligned with mock data in src/data and the UI components that consume them.

/** Workflow stages a batch moves through, in order. */
export type WorkflowStage =
  | 'Import'
  | 'Page Processing'
  | 'Classification'
  | 'Review'
  | 'Extraction'
  | 'Validation'
  | 'Export';

export const WORKFLOW_STAGES: WorkflowStage[] = [
  'Import',
  'Page Processing',
  'Classification',
  'Review',
  'Extraction',
  'Validation',
  'Export',
];

/** High-level processing status shown as a chip in queues. */
export type BatchStatus =
  | 'Processing'
  | 'Ready for Review'
  | 'Ready for Validation'
  | 'Export Failed'
  | 'Complete';

export const BATCH_STATUSES: BatchStatus[] = [
  'Processing',
  'Ready for Review',
  'Ready for Validation',
  'Export Failed',
  'Complete',
];

export type Priority = 'Low' | 'Normal' | 'High' | 'Urgent';

export const PRIORITIES: Priority[] = ['Low', 'Normal', 'High', 'Urgent'];

/** Batch classes define how a batch is processed (workflow + document types). */
export type BatchClass =
  | 'Accounts Payable'
  | 'Loan Documents'
  | 'Claims'
  | 'Enrollment Forms';

export const BATCH_CLASSES: BatchClass[] = [
  'Accounts Payable',
  'Loan Documents',
  'Claims',
  'Enrollment Forms',
];

/** SLA health derived from how close a batch is to its deadline. */
export type SlaState = 'On Track' | 'At Risk' | 'Breached';

export interface SlaInfo {
  state: SlaState;
  /** Human-readable time remaining or overdue, e.g. "2h 15m left" or "1h 40m over". */
  label: string;
}

export interface BatchInstance {
  id: string;
  batchClass: BatchClass;
  status: BatchStatus;
  /** The workflow module the batch currently sits in. */
  currentModule: WorkflowStage;
  priority: Priority;
  /** ISO-like display string for when the batch was created. */
  createdTime: string;
  sla: SlaInfo;
  pages: number;
  documents: number;
  errors: number;
  /** Assigned operator/admin, or null when unassigned. */
  assignedUser: string | null;
}

/** User roles the prototype is designed around. */
export type Role = 'Super Administrator' | 'Administrator' | 'Operator';

export const ROLES: Role[] = ['Super Administrator', 'Administrator', 'Operator'];

export interface UserProfile {
  name: string;
  role: Role;
  initials: string;
}

/** Direction of a KPI trend, used to color the delta indicator. */
export type TrendDirection = 'up' | 'down' | 'flat';

export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  /** Optional supporting context shown under the value. */
  caption?: string;
  /** Signed delta vs. the previous period, e.g. "+12%". */
  delta?: string;
  trend?: TrendDirection;
  /** Whether an upward trend is a good thing (affects delta color). */
  positiveIsGood?: boolean;
  /** Tone used for the icon/accent. */
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'danger';
  /** lucide icon name resolved in the KpiCard. */
  icon: KpiIconName;
}

export type KpiIconName =
  | 'layers'
  | 'eye'
  | 'check-square'
  | 'alert-triangle'
  | 'zap'
  | 'clock';

/** Operator work queue summary card. */
export interface WorkQueueSummary {
  id: string;
  label: string;
  description: string;
  count: number;
  /** Number of items breaching or near SLA within this queue. */
  slaRisk: number;
  status: BatchStatus;
  targetView: ViewId;
}

export type ActivityKind =
  | 'completed'
  | 'exported'
  | 'failed'
  | 'review'
  | 'validation'
  | 'imported'
  | 'assigned';

export interface ActivityEvent {
  id: string;
  kind: ActivityKind;
  message: string;
  batchId: string;
  actor: string;
  /** Relative time label, e.g. "4m ago". */
  time: string;
}

/** Counts used to render the workflow stage overview on the dashboard. */
export interface WorkflowStageStat {
  stage: WorkflowStage;
  /** Batches currently in this stage. */
  inProgress: number;
  /** Batches blocked/erroring in this stage. */
  blocked: number;
}

/** Navigation view identifiers (lightweight in-app routing). */
export type ViewId =
  | 'dashboard'
  | 'batch-queue'
  | 'review'
  | 'validation'
  | 'batch-classes'
  | 'extraction-rules'
  | 'exports'
  | 'reports'
  | 'system-health';

export type NavIconName =
  | 'gauge'
  | 'list-checks'
  | 'file-search'
  | 'clipboard-check'
  | 'boxes'
  | 'regex'
  | 'upload-cloud'
  | 'bar-chart'
  | 'activity';

export interface NavItem {
  id: ViewId;
  label: string;
  icon: NavIconName;
  /** Roles allowed to see this item. */
  roles: Role[];
  /** Optional badge count surfaced in the sidebar. */
  badge?: number;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}
