import { ChevronRight } from 'lucide-react';
import { Fragment } from 'react';
import { Card, CardHeader } from '../ui/Card';
import { workflowStageStats } from '../../data/mockDashboard';
import { cn } from '../../utils/cn';

/**
 * Horizontal Import → Export workflow overview. Each stage shows how many
 * batches are currently in it, with blocked counts surfaced in red so
 * bottlenecks (e.g. export failures) are immediately visible.
 */
export function WorkflowOverview() {
  return (
    <Card>
      <CardHeader
        title="Workflow Status Overview"
        description="Live batch distribution across the processing pipeline"
      />
      <div className="flex items-stretch gap-1 overflow-x-auto px-5 py-5">
        {workflowStageStats.map((stat, index) => (
          <Fragment key={stat.stage}>
            <div className="flex min-w-[112px] flex-1 flex-col items-center rounded-lg border border-slate-200 bg-slate-50/60 px-2 py-3 text-center">
              <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                {stat.stage}
              </span>
              <span className="mt-1.5 text-2xl font-semibold text-slate-900">{stat.inProgress}</span>
              <span className="text-[11px] text-slate-400">in stage</span>
              <span
                className={cn(
                  'mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium',
                  stat.blocked > 0
                    ? 'bg-red-50 text-red-600'
                    : 'bg-emerald-50 text-emerald-600',
                )}
              >
                {stat.blocked > 0 ? `${stat.blocked} blocked` : 'clear'}
              </span>
            </div>
            {index < workflowStageStats.length - 1 && (
              <div className="flex items-center justify-center text-slate-300">
                <ChevronRight className="h-4 w-4" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </Card>
  );
}
