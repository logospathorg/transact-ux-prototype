import { ArrowRight } from 'lucide-react';
import type { ViewId, WorkQueueSummary } from '../../types/transact';
import { Card } from '../ui/Card';
import { StatusChip } from '../ui/StatusChip';

interface WorkQueueCardProps {
  queue: WorkQueueSummary;
  onOpen: (view: ViewId) => void;
}

/** Operator work queue card: count, SLA risk, and a quick path into the queue. */
export function WorkQueueCard({ queue, onOpen }: WorkQueueCardProps) {
  return (
    <Card className="group flex flex-col p-4 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <StatusChip status={queue.status} />
        {queue.slaRisk > 0 && (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[11px] font-medium text-red-600">
            {queue.slaRisk} at SLA risk
          </span>
        )}
      </div>
      <div className="mt-3">
        <div className="text-3xl font-semibold tracking-tight text-slate-900">{queue.count}</div>
        <div className="mt-0.5 text-sm font-medium text-slate-800">{queue.label}</div>
        <p className="mt-0.5 text-xs text-slate-500">{queue.description}</p>
      </div>
      <button
        type="button"
        onClick={() => onOpen(queue.targetView)}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700"
      >
        Open queue
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </Card>
  );
}
