import type { Role, ViewId } from '../types/transact';
import { kpiMetrics, workQueues } from '../data/mockDashboard';
import { KpiCard } from '../components/dashboard/KpiCard';
import { WorkQueueCard } from '../components/dashboard/WorkQueueCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { WorkflowOverview } from '../components/dashboard/WorkflowOverview';

interface DashboardProps {
  role: Role;
  userName: string;
  onNavigate: (view: ViewId) => void;
}

/** Role-specific framing for the dashboard header. */
const ROLE_FRAMING: Record<Role, { focus: string }> = {
  'Super Administrator': {
    focus: 'System-wide throughput and exceptions need your attention today.',
  },
  Administrator: {
    focus: 'Batch class performance and export health are looking steady.',
  },
  Operator: {
    focus: 'You have batches ready for review and validation right now.',
  },
};

export function Dashboard({ role, userName, onNavigate }: DashboardProps) {
  const firstName = userName.split(' ')[0];

  return (
    <div className="space-y-6">
      {/* Header / welcome */}
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Welcome back, {firstName}
          </h2>
          <p className="mt-1 text-sm text-slate-500">{ROLE_FRAMING[role].focus}</p>
        </div>
        <div className="text-right text-xs text-slate-400">
          <div>Thursday, May 28, 2026</div>
          <div className="mt-0.5">Showing data for the last 24 hours</div>
        </div>
      </div>

      {/* KPI cards */}
      <section aria-label="Key performance indicators">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {kpiMetrics.map((metric) => (
            <KpiCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      {/* Work queues */}
      <section aria-label="Work queues">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-900">Work Queues</h3>
          <button
            type="button"
            onClick={() => onNavigate('batch-queue')}
            className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
          >
            View all batches
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workQueues.map((queue) => (
            <WorkQueueCard key={queue.id} queue={queue} onOpen={onNavigate} />
          ))}
        </div>
      </section>

      {/* Workflow overview */}
      <WorkflowOverview />

      {/* Recent activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="lg:col-span-1">
          <RecentActivityNote />
        </div>
      </div>
    </div>
  );
}

/** Small supporting panel beside the activity feed — quick operational tips. */
function RecentActivityNote() {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-white p-5">
      <div>
        <h3 className="text-sm font-semibold text-slate-900">Needs Attention</h3>
        <p className="mt-1 text-xs text-slate-500">
          Prioritized by SLA risk and downstream impact.
        </p>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
            <span className="text-slate-700">
              <span className="font-medium">6 export failures</span> blocking handoff to downstream systems.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
            <span className="text-slate-700">
              <span className="font-medium">4 review batches</span> within 30 minutes of SLA breach.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
            <span className="text-slate-700">
              <span className="font-medium">3 validation batches</span> with flagged required fields.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
